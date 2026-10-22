# Gör om avsnitten ur regelverken som IBT hänvisar till till text, tabeller och figurer som
# appen visar i telefonformat (js/forms/regelverk-text.js). Originalet finns kvar som bild
# (tools/regelverk_bilder.py). Figurer klipps ut som bilder i img/tdok/fig/. (2026-10-22)
# Användning: python3 tools/regelverk_text.py <mapp med Regelverk-PDF:erna> <mapp med TDOK 2021:0311>
import pymupdf, sys, os, re, json, statistics
from PIL import Image, ImageChops

MAPP, MAPP0311 = sys.argv[1], sys.argv[2]
UT_JS = 'js/forms/regelverk-text.js'
UT_FIG = 'img/tdok/fig'
F12 = 'Krav med raadstexter TRVINFRA-00012 v5_0.pdf'
F13 = 'Krav med raadstexter TRVINFRA-00013 Sparlaege v2_0.pdf'
F14 = 'Krav med raadstexter TRVINFRA-00014 Stabilitetspaverkand v5_0.pdf'
F15 = 'Krav med raadstexter TRVINFRA-00015 v2_.pdf'
F17 = 'Krav med raadstexter TRVINFRA-00017 Sparvaexel v5_0.pdf'
F18 = 'Krav med raadstexter TRVINFRA-00018 v7_.pdf'
F398 = 'Krav med raadstexter TRVINFRA-00398 v3_.pdf'
F514 = 'TDOK_2014-0514.pdf'
F360 = 'TDOK_2022-0360.pdf'
F448 = 'TDOK_2014-0448.pdf'
F311 = 'TDOK_2021-0311.pdf'
FSPIRAL = 'Instruktion+spiralbroms.pdf'
# Sidhuvudets nederkant och sidfotens överkant per dokument (pt).
HUVUD = {F12: 132, F13: 114, F14: 132, F15: 132, F17: 132, F18: 132, F398: 132, F514: 115, F360: 115, F448: 115, F311: 112, FSPIRAL: 50}

# Dokument utan sidfot: sidan används ända ned.
UTAN_FOT = {F514, F360, F448}
# Sidfotens överkant som andel av sidhöjden, där den avviker från 0,956.
FOT = {FSPIRAL: 0.94}

# namn: (fil, (sida, y) start, (sida, y) slut). Slutet är nästa rubrik. Samma namn som bilderna
# i img/tdok/ (originalet).
AVSNITT = json.load(open(os.path.join(os.path.dirname(__file__), 'regelverk_avsnitt.json')))

SUP = str.maketrans('0123456789)(*', '⁰¹²³⁴⁵⁶⁷⁸⁹⁾⁽*')
SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
LISTA = re.compile(r'^(\d{1,2}\.|[a-z]\.|[•o\-–]|||)(\s+|$)')
RUBRIK = re.compile(r'^(\d+(\.\d+)*\.?|Bilaga \d+)\s+\S')
ETIKETT = ('Råd', 'Förutsättning', 'Övrig information', 'Not', 'Observera')


def spans_i(page, clip, kropp):
    """Rader i clip: [(y0, y1, x0, text)], spann på samma baslinje slås ihop, upphöjt/nedsänkt märks."""
    d = page.get_text('dict', clip=clip)
    sp = []
    for b in d['blocks']:
        if b['type'] != 0: continue
        for l in b['lines']:
            if abs(l['dir'][0] - 1) > 0.01: continue  # roterad text (sidomarginal)
            for s in l['spans']:
                t = s['text']
                if not t.strip(): continue
                r = pymupdf.Rect(s['bbox'])
                # bara spann som till största delen ligger i clip
                if r.width and (r & clip).width < r.width * 0.5: continue
                if (r & clip).height < r.height * 0.5: continue
                sp.append(dict(t=t, x0=r.x0, x1=r.x1, y0=r.y0, y1=r.y1, size=s['size'], base=s['origin'][1], bold=bool(s['flags'] & 16) or 'Bold' in s['font']))
    if not sp: return []
    # Rader på baslinjen för text i normal storlek; små spann (upphöjt/nedsänkt) läggs i den rad
    # de överlappar i höjd.
    stora = sorted([s for s in sp if s['size'] >= kropp * 0.82], key=lambda s: (s['base'], s['x0']))
    sma = [s for s in sp if s['size'] < kropp * 0.82]
    rader = []
    for s in stora:
        for r in rader:
            if abs(s['base'] - r['base']) < 2.5:
                r['sp'].append(s); break
        else:
            rader.append(dict(base=s['base'], sp=[s], y0=s['y0'], y1=s['y1']))
        r = next(r for r in rader if s in r['sp']); r['y0'] = min(r['y0'], s['y0']); r['y1'] = max(r['y1'], s['y1'])
    for s in sma:
        mid = (s['y0'] + s['y1']) / 2
        kand = [r for r in rader if r['y0'] - 2 <= mid <= r['y1'] + 2 and min(abs(s['x0'] - x['x1']) for x in r['sp']) < 6]
        if kand:
            r = min(kand, key=lambda r: abs(mid - (r['y0'] + r['y1']) / 2))
            s['upp'] = s['base'] < r['base'] - 1.5; s['ner'] = s['base'] > r['base'] + 1
            r['sp'].append(s)
        else:
            for r in rader:
                if abs(s['base'] - r['base']) < 2.5 and r.get('liten'): r['sp'].append(s); break
            else: rader.append(dict(base=s['base'], sp=[s], y0=s['y0'], y1=s['y1'], liten=True))
    # ett ensamt tankstreck som ligger lite för sig (t.ex. "25–70 m") hör till raden det står i
    for r in list(rader):
        if ''.join(s['t'] for s in r['sp']).strip() in ('–', '-', '−'):
            mid = (r['y0'] + r['y1']) / 2; x = r['sp'][0]['x0']
            for o in rader:
                if o is not r and o['y0'] - 2 <= mid <= o['y1'] + 2 and min(s['x0'] for s in o['sp']) < x < max(s['x1'] for s in o['sp']):
                    o['sp'] += r['sp']; rader.remove(r); break
    ut = []
    for r in rader:
        r['sp'].sort(key=lambda s: s['x0'])
        txt = ''; prev = None
        for s in r['sp']:
            t = s['t']
            if s.get('upp'): t = t.strip().translate(SUP)
            elif s.get('ner'): t = t.strip().translate(SUB)
            if prev is not None and s['x0'] - prev['x1'] > 1.2 and not txt.endswith(' ') and not t.startswith(' ') and not s.get('ner') and not s.get('upp'):
                txt += ' '
            if s.get('upp') and txt and not txt.endswith(' ') and re.match(r'^[⁰¹²³⁴⁵⁶⁷⁸⁹]', t) and re.search(r'[\d]$', txt):
                pass
            txt += t; prev = s
        txt = re.sub(r'\s+', ' ', txt.replace('\uf03e', '≥').replace('\uf03c', '≤').replace('\uf0b3', '≥').replace('\uf0a3', '≤').replace('\uf0b1', '±').replace('\uf0b7', '•').replace('\uf0a7', '•').replace('\uf02d', '–').replace('\u00a0', ' ')).strip()
        fet = all(s.get('bold') for s in r['sp'])
        ut.append(dict(y0=min(s['y0'] for s in r['sp']), y1=max(s['y1'] for s in r['sp']), x0=min(s['x0'] for s in r['sp']), x1=max(s['x1'] for s in r['sp']), t=txt, fet=fet))
    ut.sort(key=lambda r: (round(r['y0']), r['x0']))
    return ut


def avstava(a, b):
    """Slår ihop en rad som slutar med bindestreck med nästa: avstavat ord blir helt ord."""
    if re.search(r'[a-zåäö]-$', a) and re.match(r'[a-zåäö]', b) and not re.match(r'(och|eller|samt|resp|respektive|till)\b', b):
        return a[:-1] + b
    return a + b


def cell_text(page, rect, kropp):
    rader = spans_i(page, rect, kropp)
    # rader med nästan samma y slås ihop (t.ex. "-" som ligger något lägre än siffran)
    rader.sort(key=lambda r: (r['y0'] + r['y1']) / 2)
    grupper = []
    for r in rader:
        m = (r['y0'] + r['y1']) / 2
        if grupper and abs(m - grupper[-1][0]) < 3:
            grupper[-1][1].append(r)
        else:
            grupper.append([m, [r]])
    linjer = [' '.join(x['t'] for x in sorted(g, key=lambda x: x['x0'])) for _, g in grupper]
    # ett ensamt tecken (±, -, +) hör ihop med raden under
    t = linjer[0] if linjer else ''
    for l in linjer[1:]:
        t = avstava(t, l) if t.endswith('-') else t + '\n' + l
    return re.sub(r'(^|\n)([±+\-–])\s*\n', r'\1\2', t)


def tabeller(page, clip, kropp):
    ut = []
    try:
        tf = page.find_tables()
    except Exception:
        return ut
    for t in tf.tables:
        bb = pymupdf.Rect(t.bbox)
        if bb.height < 12 or t.row_count < 2 and t.col_count < 2: continue
        if bb.y0 < clip.y0 - 2 or bb.y1 > clip.y1 + 2: continue
        xs = sorted({round(c[i], 0) for row in t.rows for c in row.cells if c for i in (0, 2)})
        ys = sorted({round(c[i], 0) for row in t.rows for c in row.cells if c for i in (1, 3)})
        def idx(v, lst): return min(range(len(lst)), key=lambda i: abs(lst[i] - v))
        rader = []
        for row in t.rows:
            rad = []
            for c in row.cells:
                if not c: continue
                cs = idx(c[2], xs) - idx(c[0], xs); rs = idx(c[3], ys) - idx(c[1], ys)
                txt = cell_text(page, pymupdf.Rect(c), kropp)
                rad.append(dict(t=txt, cs=cs, rs=rs, r=pymupdf.Rect(c)))
            if rad: rader.append(rad)
        # Toleranstabeller (Mätpunkter/Tolerans) är breda: de vänds så att varje grupp av
        # mätpunkter med samma tolerans blir en rad. Grupperna börjar vid varje ifylld tolerans.
        if any(r[0]['t'].startswith(('Mätpunkter', 'Mutpunkter')) for r in rader):
            for i in range(len(rader) - 1):
                h, tol = rader[i], rader[i + 1]
                if not (h[0]['t'].startswith(('Mätpunkter', 'Mutpunkter')) and tol[0]['t'].startswith('Tolerans')): continue
                fyllda = [c for c in tol[1:] if c['t'].strip()]
                grupper = []
                for j, c in enumerate(fyllda):
                    x1 = fyllda[j + 1]['r'].x0 if j + 1 < len(fyllda) else bb.x1 + 1
                    pkt = [x['t'] for x in h[1:] if c['r'].x0 - 2 <= (x['r'].x0 + x['r'].x1) / 2 < x1 and x['t'].strip()]
                    grupper.append([[' '.join(pkt).replace(' ', ', '), 1], [c['t'], 1]])
                pbb = h[0]['r'] | tol[-1]['r']
                for c in h + tol: pbb |= c['r']
                ut.append((pbb, [[['Mätpunkter', 1], ['Tolerans (mm)', 1]]] + grupper))
            continue
        ut.append((bb, [[[c['t'], c['cs']] + ([c['rs']] if c['rs'] > 1 else []) for c in rad] for rad in rader]))
    return ut


def figurer(page, clip, tab_rects):
    """Ytor med bilder eller ritningar som inte är tabeller."""
    ytor = []
    for info in page.get_image_info():
        r = pymupdf.Rect(info['bbox']) & clip
        if r.width > 20 and r.height > 20: ytor.append(r)
    try:
        for r in page.cluster_drawings(clip=clip):
            r = pymupdf.Rect(r) & clip
            if r.width > 25 and r.height > 25: ytor.append(r)
    except Exception:
        pass
    ytor = [r for r in ytor if not any((r & t).get_area() > r.get_area() * 0.5 for t in tab_rects)]
    # slå ihop överlappande
    andrat = True
    while andrat:
        andrat = False
        for i in range(len(ytor)):
            for j in range(i + 1, len(ytor)):
                if (ytor[i] + (-4, -4, 4, 4)).intersects(ytor[j]):
                    ytor[i] = ytor[i] | ytor[j]; del ytor[j]; andrat = True; break
            if andrat: break
    return ytor


def klipp(page, r, namn):
    pm = page.get_pixmap(dpi=160, clip=r + (-4, -4, 4, 4))
    im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples)
    bb = ImageChops.difference(im, Image.new('RGB', im.size, 'white')).convert('L').point(lambda v: 255 if v > 20 else 0).getbbox()
    if bb: im = im.crop((max(0, bb[0] - 6), max(0, bb[1] - 6), min(im.width, bb[2] + 6), min(im.height, bb[3] + 6)))
    farg = len(set(im.resize((40, 40)).getdata())) > 60 and any(abs(p[0] - p[1]) > 25 or abs(p[1] - p[2]) > 25 for p in im.resize((40, 40)).getdata())
    path = os.path.join(UT_FIG, namn + ('.jpg' if farg else '.png'))
    if farg: im.save(path, quality=80, optimize=True)
    else: im.convert('L').quantize(colors=32).save(path, optimize=True)
    return path


def avsnitt(namn, fil, start, slut, kropp_storlek=None, huvud=None):
    doc = pymupdf.open(os.path.join(MAPP0311 if fil == F311 else MAPP, fil))
    h = huvud or HUVUD[fil]
    (p0, y0), (p1, y1) = start, slut
    poster = []  # (sida, y, typ, data)
    nfig = 0
    for p in range(p0, p1 + 1):
        page = doc[p - 1]
        W = page.rect.width
        top = max(h, y0 - 4) if p == p0 else h
        bot = y1 - 4 if p == p1 else page.rect.height * (0.99 if fil in UTAN_FOT else FOT.get(fil, 0.956))
        if bot <= top + 5: continue
        clip = pymupdf.Rect(0, top, W, bot)
        storlekar = [sp['size'] for b in page.get_text('dict')['blocks'] if b['type'] == 0 for l in b['lines'] for sp in l['spans'] for _ in sp['text'].strip()]
        kropp = kropp_storlek or (statistics.median(storlekar) if storlekar else 10)
        tabs = tabeller(page, clip, kropp)
        tab_rects = [bb for bb, _ in tabs]
        figs = figurer(page, clip, tab_rects)
        # inramade varningar (VARNING, OBS) blir text i en ruta i stället för bild
        rutor = []
        for f in figs:
            t = ' '.join(page.get_textbox(f).split())
            m = re.match(r'^(VARNING|OBS)!?\s+(.*)', t)
            if m: rutor.append((f, m.group(1).capitalize(), re.sub(r'(\w)- (?=[a-zåäö])', r'\1', m.group(2))))
        figs = [f for f in figs if not any(f is r[0] for r in rutor)]
        rader = spans_i(page, clip, kropp)
        # text inne i figurer hör till figuren, utom bildtexten
        def i_fig(r):
            rr = pymupdf.Rect(r['x0'], r['y0'], r['x1'], r['y1'])
            return any((rr & f).get_area() > rr.get_area() * 0.6 for f in figs + [r[0] for r in rutor])
        def i_tab(r):
            rr = pymupdf.Rect(r['x0'], r['y0'], r['x1'], r['y1'])
            return any((rr & t).get_area() > rr.get_area() * 0.5 for t in tab_rects)
        for r in rader:
            if i_tab(r): continue
            if i_fig(r) and not re.match(r'^(Figur|Bild|Tabell)\b', r['t']): continue
            poster.append((p, r['y0'], 'rad', r))
        for bb, tr in tabs:
            poster.append((p, bb.y0, 'tabell', tr))
        for f, rub, t in rutor:
            poster.append((p, f.y0, 'ruta', (rub, t)))
        for f in figs:
            nfig += 1
            poster.append((p, f.y0, 'figur', klipp(page, f, f'{namn}-{nfig}')))
    poster.sort(key=lambda x: (x[0], x[1]))
    # bygg block
    block = []; para = None; vanster = None
    def avsluta():
        nonlocal para
        if para: block.append(para)
        para = None
    xs = [x[3]['x0'] for x in poster if x[2] == 'rad']
    vanster = min(xs) if xs else 0
    prev = None; li_x = 0
    for p, y, typ, d in poster:
        if typ != 'rad':
            avsluta()
            if typ == 'tabell': block.append(['tabell', d])
            elif typ == 'ruta': block.append(['ruta', *d])
            else: block.append(['figur', d.replace(os.sep, '/'), ''])
            prev = None; continue
        t = d['t']
        gap = (d['y0'] - prev['y1']) if prev and prev['p'] == p else 0
        ny = prev is None or gap > 3.5
        nivå = round((d['x0'] - vanster) / 18)
        m = LISTA.match(t)
        if re.match(r'^K\d{4,7}$', t):
            avsluta(); block.append(['k', t]); prev = dict(d, p=p); continue
        if t in ETIKETT or t.rstrip(':') in ETIKETT:
            avsluta(); block.append(['etikett', t.rstrip(':')]); prev = dict(d, p=p); continue
        # "se Figur" + radbrytning + "4." är inte en listpunkt
        if m and not t[m.end():].strip() and re.match(r'^[a-z]\.$', m.group(1)) and para:
            para[-1] += ' ' + t; prev = dict(d, p=p); continue
        if m and para and not t[m.end():].strip() and re.search(r'(Figur|figur|Tabell|tabell|kapitel|avsnitt|Bilaga|bilaga|punkt|kap\.?)$', para[-1]):
            m = None; para[-1] += ' ' + t; prev = dict(d, p=p); continue
        if m:
            avsluta()
            para = ['li', nivå, m.group(1), t[m.end():].strip()]; li_x = d['x0']
        elif RUBRIK.match(t) and d['x0'] - vanster < 6 and len(t) < 110 and (d['fet'] or ny) and not re.match(r'^\d+(,\d+)?\s*(mm|m|st|°|%|km)', t):
            avsluta(); block.append(['h', t])
        elif re.match(r'^(Figur|Bild|Tabell)\s', t) or re.match(r'^[¹²³⁴⁵⁶⁷⁸⁹\d]\)\s', t) or re.match(r'^\*', t):
            avsluta(); para = ['p', t]
        elif ny or para is None or (para[0] == 'li' and d['x0'] <= li_x + 2 and para[3]):
            avsluta(); para = ['p', t]
        else:
            # fortsättning av stycket, eller listpunktens text på nästa rad
            if para[0] == 'li' and para[3] == '': para[3] = t
            elif para[-1].endswith('-') and not para[-1].endswith(' -'): para[-1] = avstava(para[-1], t)
            else: para[-1] = (para[-1] + ' ' + t).strip()
        prev = dict(d, p=p)
    avsluta()
    # tabell som fortsätter på nästa sida (utan rubrikrad) slås ihop med den förra; fotnoter
    # från sidan emellan läggs efter tabellen
    i = 0
    while i < len(block):
        if block[i][0] == 'tabell':
            j = i + 1
            while j < len(block) and block[j][0] == 'p' and re.match(r'^([¹²³⁴⁵⁶⁷⁸⁹\d]+\)?\s|\*)', block[j][1]): j += 1
            if j < len(block) and block[j][0] == 'tabell':
                a, b = block[i][1], block[j][1]
                bredd = lambda r: sum(c[1] for c in r)
                if b[0] == a[0] and len(b) > 1:
                    b = b[1:]
                if bredd(a[-1]) == bredd(b[0]) and (b is not block[j][1] or all(re.match(r'^[\d+\-–±≤≥<>]', c[0].strip() or '0') for c in b[0])):
                    block[i][1] = a + b
                    block[i + 1:j + 1] = block[i + 1:j]
                    continue
        i += 1
    # bildtext direkt efter figuren
    ut = []
    for b in block:
        if b[0] == 'p' and re.match(r'^(Figur|Bild)\b', b[1]) and ut and ut[-1][0] == 'figur' and not ut[-1][2]:
            ut[-1][2] = b[1]; continue
        ut.append(b)
    return ut


os.makedirs(UT_FIG, exist_ok=True)
for f in os.listdir(UT_FIG):
    os.remove(os.path.join(UT_FIG, f))
ALLA = {}
VALDA = sys.argv[3:]
for namn, spec in AVSNITT.items():
    if VALDA and not any(namn.startswith(v) for v in VALDA): continue
    fil, start, slut = spec['fil'], spec['start'], spec['slut']
    ALLA[namn] = dict(dok=spec['dok'], rubrik=spec['rubrik'], block=avsnitt(namn, fil, start, slut, spec.get('kropp'), spec.get('huvud')))
    print(namn, len(ALLA[namn]['block']), 'block')
with open(UT_JS, 'w') as f:
    f.write('// Genererad av tools/regelverk_text.py (2026-10-22): avsnitten ur regelverken som text, tabeller och\n')
    f.write('// figurer. namn (samma som originalbilden img/tdok/<namn>.png) → { dok, rubrik, block }.\n')
    f.write('// block: [h, rubrik] [k, kravnummer] [etikett, Råd] [p, text] [li, nivå, markering, text]\n')
    f.write('// [tabell, rader av [text, kolumner, rader?]] [figur, bild, bildtext] [ruta, Varning|Obs, text].\n')
    f.write('export default ' + json.dumps(ALLA, ensure_ascii=False, indent=0) + ';\n')
