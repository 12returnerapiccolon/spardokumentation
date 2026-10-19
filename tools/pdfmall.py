# Gör en tom PDF-mall av en Word-blankett och tar fram var varje formulärfält hamnar på sidan.
# Kräver LibreOffice (soffice), lxml och pdfplumber. Körs på en dator, inte i appen:
#   python3 tools/pdfmall.py mall.dotx ev utkatalog
# Ger utkatalog/ev.json (fältens platser, läggs in i js/forms/vaxel-layout.js) och
# utkatalog/ev-blank.pdf (den tomma mallen, checkas inte in).
import sys, os, re, json, zipfile, subprocess, copy
from lxml import etree
import pdfplumber

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'; w = '{%s}' % W
src, key, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)
work = os.path.join(out, 'work-' + key); os.makedirs(work, exist_ok=True)
z = zipfile.ZipFile(src)
ENTRIES = [(it, z.read(it.filename)) for it in z.infolist()]
DOCXML = dict((it.filename, d) for it, d in ENTRIES)['word/document.xml']

# Pilarna ovanför växelbilden ligger i några mallar en bit ovanför sin rad och hamnar då
# i rubrikraden (Inläggningsår, Växelmodell). Flytta ner dem i raden, lika högt.
WP = '{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}'
# EKV: vänster pil mellan ordet Driftplats och strecklinjen, höger pil ovanför sin Driftplats.
ARROW_PT = {('ekv', 'Line 36'): 13, ('ekv', 'Line 37'): 3}
def fix_arrows(xml):
    doc = etree.fromstring(xml)
    for tr in doc.iter(w + 'tr'):
        arrows = [a for a in tr.iter(WP + 'anchor') if int(a.find(WP + 'extent').get('cy')) < 200000
                  and a.find(WP + 'positionV').get('relativeFrom') == 'paragraph']
        offs = [int(a.find(WP + 'positionV')[0].text) for a in arrows]
        if not arrows or min(offs) >= 0: continue
        target = max(offs) if 0 <= max(offs) <= 8 * 12700 else 3 * 12700
        for a in arrows:
            name = a.find(WP + 'docPr').get('name')
            a.find(WP + 'positionV')[0].text = str(int(ARROW_PT.get((key, name), target / 12700) * 12700))
    return etree.tostring(doc, xml_declaration=True, encoding='UTF-8', standalone=True)
DOCXML = fix_arrows(DOCXML)

def load():
    return etree.fromstring(DOCXML)

def fields(doc):
    allr = list(doc.iter(w + 'r'))
    res = []
    for k, r in enumerate(allr):
        fc = r.find(w + 'fldChar')
        if fc is None or fc.get(w + 'fldCharType') != 'begin' or fc.find(w + 'ffData') is None: continue
        ff = fc.find(w + 'ffData')
        cb = ff.find(w + 'checkBox')
        if cb is not None:
            res.append({'type': 'check', 'cb': cb, 'run': r}); continue
        state, result = 0, []
        for x in allr[k + 1:]:
            f = x.find(w + 'fldChar')
            if f is not None and f.get(w + 'fldCharType') == 'separate': state = 1; continue
            if f is not None and f.get(w + 'fldCharType') == 'end': break
            if state: result.append(x)
        p = r.getparent()
        while p is not None and p.tag != w + 'p': p = p.getparent()
        jc = p.find(f'{w}pPr/{w}jc') if p is not None else None
        sz = None
        for x in [r] + result:
            e = x.find(f'{w}rPr/{w}sz')
            if e is not None: sz = int(e.get(w + 'val')) / 2; break
        res.append({'type': 'text', 'result': result, 'align': jc.get(w + 'val') if jc is not None else 'left', 'size': sz})
    return res

def save(doc, name):
    path = os.path.join(work, name + '.docx')
    o = zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED)
    for it, d in ENTRIES:
        if it.filename == 'word/document.xml': d = etree.tostring(doc, xml_declaration=True, encoding='UTF-8', standalone=True)
        if it.filename == '[Content_Types].xml': d = d.replace(b'template.main+xml', b'document.main+xml')
        o.writestr(it, d)
    o.close()
    return path

def marker_doc(bits=None):
    doc = load()
    fs = fields(doc)
    ci = 0
    for i, f in enumerate(fs):
        if f['type'] == 'check':
            ci += 1
            old = f['cb'].find(w + 'checked')
            if old is not None: f['cb'].remove(old)
            if bits is not None and (ci >> bits) & 1: etree.SubElement(f['cb'], w + 'checked')
            continue
        runs = f['result']
        ts = [t for r in runs for t in r.iter(w + 't')]
        orig = ''.join(t.text or '' for t in ts)
        if not ts: continue
        txt = str(i)
        if f['align'] == 'left': txt += ' ' * max(0, len(orig) - len(txt))
        for t in ts: t.text = ''
        ts[0].text = txt
        ts[0].set('{http://www.w3.org/XML/1998/namespace}space', 'preserve')
        r = ts[0].getparent()
        rpr = r.find(w + 'rPr')
        if rpr is None: rpr = etree.SubElement(r, w + 'rPr'); r.remove(rpr); r.insert(0, rpr)
        for c in rpr.findall(w + 'color'): rpr.remove(c)
        col = etree.SubElement(rpr, w + 'color'); col.set(w + 'val', 'FF0000')
        for tag in ('sz', 'szCs'):
            for e in rpr.findall(w + tag): rpr.remove(e)
            e = etree.SubElement(rpr, w + tag); e.set(w + 'val', '4')
    return doc, fs

doc0, fs = marker_doc()
nchecks = sum(1 for f in fs if f['type'] == 'check')
nbits = max(1, (nchecks + 1).bit_length())
paths = [save(load(), 'blank'), save(doc0, 'm')] + [save(marker_doc(b)[0], f'b{b}') for b in range(nbits)]
subprocess.run(['soffice', '--headless', '--convert-to', 'pdf', '--outdir', work] + paths, check=True, capture_output=True)

def pdf(name): return pdfplumber.open(os.path.join(work, name + '.pdf'))

M = pdf('m')
assert len(M.pages) == len(pdf('blank').pages), 'olika sidantal'
layout = {'pages': [[p.width, p.height] for p in M.pages], 'text': {}, 'check': {}}

for pn, page in enumerate(M.pages):
    H = page.height
    red = [c for c in page.chars if c.get('non_stroking_color') in ((1, 0, 0), [1, 0, 0], (1.0, 0.0, 0.0))]
    groups, cur = [], []
    for c in red:
        if cur and (abs(c['top'] - cur[-1]['top']) > 1 or c['x0'] - cur[-1]['x1'] > 2):
            groups.append(cur); cur = []
        cur.append(c)
    if cur: groups.append(cur)
    for g in groups:
        s = ''.join(c['text'] for c in g).strip()
        if not s.isdigit(): print('konstig markör', s, file=sys.stderr); continue
        digits = [c for c in g if c['text'].strip()]
        i = int(s); f = fs[i]
        x0, x1 = digits[0]['x0'], digits[-1]['x1']
        base = digits[0]['matrix'][5]
        size = f['size'] or 8
        al = f['align']
        x = (x0 + x1) / 2 if al == 'center' else x1 if al == 'right' else x0
        layout['text'][i] = [pn, round(x, 2), round(base, 2), size, 'center' if al == 'center' else 'right' if al == 'right' else 'left']

# Markörerna kan flytta raden något. Justera mot närmaste vanliga tecken på samma rad,
# som har samma plats i den tomma PDF:en.
Bpre = pdf('blank')
textdrift = 0
for i, (pn, x, base, size, al) in list(layout['text'].items()):
    mp, bp = M.pages[pn], Bpre.pages[pn]
    plain = [c for c in mp.chars if c['text'].strip() and c.get('non_stroking_color') not in ((1, 0, 0), [1, 0, 0])]
    same = [c for c in plain if abs(c['matrix'][5] - base) < 1]
    # Helst ett tecken till vänster på samma rad: det flyttas lika mycket i sidled som fältet.
    left = [c for c in same if c['matrix'][4] < x and x - c['matrix'][4] < 80]
    cand = left or same or plain
    if not cand: continue
    n = min(cand, key=lambda c: abs(c['matrix'][4] - x) + 3 * abs(c['matrix'][5] - base))
    if not same and abs(n['matrix'][5] - base) > 30: continue
    m = [c for c in bp.chars if c['text'] == n['text'] and abs(c['matrix'][4] - n['matrix'][4]) < 15 and abs(c['matrix'][5] - n['matrix'][5]) < 8]
    if not m: continue
    b = min(m, key=lambda c: abs(c['matrix'][4] - n['matrix'][4]) + abs(c['matrix'][5] - n['matrix'][5]))
    dy = b['matrix'][5] - n['matrix'][5]
    dx = b['matrix'][4] - n['matrix'][4] if left and al == 'left' else 0
    textdrift = max(textdrift, abs(dy), abs(dx))
    layout['text'][i][1] = round(x + dx, 2)
    layout['text'][i][2] = round(base + dy, 2)

# Största bredd: fram till nästa fält på samma rad (tabellceller ligger tätt).
T = layout['text']
for i, (pn, x, base, size, al) in list(T.items()):
    same = [v[1] for j, v in T.items() if j != i and v[0] == pn and abs(v[2] - base) < 1]
    maxw = None
    if al == 'center' and same:
        maxw = 2 * min(abs(x - o) for o in same) / 2 - 3
    elif al == 'left':
        right = [o - x for o in same if o > x]
        if right: maxw = min(right) - 3
    T[i] = [pn, x, base, size, al] + ([round(maxw, 1)] if maxw else [])

# Kryssrutor: binärkodat, ruta k är ikryssad i rendering b om bit b i k är satt.
bitpdfs = [pdf(f'b{b}') for b in range(nbits)]
check_idx = [i for i, f in enumerate(fs) if f['type'] == 'check']
for pn, page in enumerate(M.pages):
    H = page.height
    boxes = [r for r in page.rects if 6 < r['width'] < 12 and 6 < r['height'] < 12]
    for r in boxes:
        k = 0
        for b, bp in enumerate(bitpdfs):
            pg = bp.pages[pn]
            inside = [l for l in pg.lines + pg.curves if l['x0'] >= r['x0'] - .5 and l['x1'] <= r['x1'] + .5 and l['top'] >= r['top'] - .5 and l['bottom'] <= r['bottom'] + .5]
            if inside: k |= 1 << b
        if not k: continue
        i = check_idx[k - 1]
        layout['check'][i] = [pn, round(r['x0'], 2), round(H - r['bottom'], 2), round(r['width'], 2), round(r['height'], 2)]

# Stämmer kryssrutornas läge i den tomma PDF:en?
# Flytta till rutan i den tomma PDF:en (markörerna kan ändra radhöjden något).
B = pdf('blank')
drift = 0
for i, (pn, x, y, wd, ht) in list(layout['check'].items()):
    H = B.pages[pn].height
    rs = [r for r in B.pages[pn].rects if 6 < r['width'] < 12 and 6 < r['height'] < 12]
    r = min(rs, key=lambda r: abs(r['x0'] - x) + abs((H - r['bottom']) - y))
    d = abs(r['x0'] - x) + abs((H - r['bottom']) - y)
    drift = max(drift, d)
    layout['check'][i] = [pn, round(r['x0'], 2), round(H - r['bottom'], 2), round(r['width'], 2), round(r['height'], 2)]
nt = sum(1 for f in fs if f['type'] == 'text')
print(key, 'text', len(layout['text']), '/', nt, 'check', len(layout['check']), '/', nchecks, 'max drift', round(drift, 2), 'text', round(textdrift, 2), file=sys.stderr)
missing = [i for i, f in enumerate(fs) if str(i) not in map(str, layout['text']) and i not in layout['check']]
if missing: print('  saknas', missing, file=sys.stderr)
json.dump(layout, open(os.path.join(out, key + '.json'), 'w'))
os.replace(os.path.join(work, 'blank.pdf'), os.path.join(out, key + '-blank.pdf'))
