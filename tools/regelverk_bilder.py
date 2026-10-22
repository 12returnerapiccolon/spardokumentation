# Klipper ut avsnitt ur TRVINFRA-dokumenten som kraven i IBT hänvisar till, som bilder i img/tdok/.
# Sidhuvud och marginaler tas bort och sidorna läggs under varandra. (2026-10-22)
# Användning: python3 tools/regelverk_bilder.py <mapp med Regelverk-PDF:erna> img/tdok
import pymupdf, sys, os
from PIL import Image, ImageChops

MAPP, UT = sys.argv[1], sys.argv[2]
# Avsnitten (fil, start, slut) står i tools/regelverk_avsnitt.json, som även regelverk_text.py använder.
import json
AVSNITT = json.load(open(os.path.join(os.path.dirname(__file__), 'regelverk_avsnitt.json')))
VALDA = sys.argv[3:]
# Sidhuvudets nederkant per dokument (pt).
UTAN_FOT = {'TDOK_2014-0514.pdf', 'TDOK_2022-0360.pdf', 'TDOK_2014-0448.pdf'}
HUVUD = {'Krav med raadstexter TRVINFRA-00013 Sparlaege v2_0.pdf': 114, 'TDOK_2014-0514.pdf': 115, 'TDOK_2022-0360.pdf': 115, 'TDOK_2014-0448.pdf': 115, 'Instruktion+spiralbroms.pdf': 50}
FOT = {'Instruktion+spiralbroms.pdf': 0.94}

def bit(doc, pn, y0, y1, dpi=130):
    p = doc[pn - 1]
    pm = p.get_pixmap(dpi=dpi, clip=pymupdf.Rect(40, y0, p.rect.width - 50, y1))
    im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples)
    bb = ImageChops.difference(im, Image.new('RGB', im.size, 'white')).convert('L').point(lambda v: 255 if v > 20 else 0).getbbox()
    return im.crop((0, max(0, bb[1] - 8), im.width, min(im.height, bb[3] + 8))) if bb else None

for namn, spec in AVSNITT.items():
    if VALDA and not any(namn.startswith(v) for v in VALDA): continue
    fil, (p0, y0), (p1, y1) = spec['fil'], spec['start'], spec['slut']
    doc = pymupdf.open(os.path.join(MAPP, fil)); h = spec.get('huvud') or HUVUD.get(fil, 132)
    if y1 <= h + 12: p1, y1 = p1 - 1, doc[p1 - 2].rect.height * FOT.get(fil, 0.956)  # slutar vid sidans början: ta hela förra sidan
    ims = [b for b in (bit(doc, p, max(h, y0 - 4) if p == p0 else h, y1 - 4 if p == p1 else doc[p - 1].rect.height * (0.99 if fil in UTAN_FOT else FOT.get(fil, 0.956))) for p in range(p0, p1 + 1)) if b]
    w = max(i.width for i in ims); c = Image.new('RGB', (w, sum(i.height for i in ims)), 'white'); y = 0
    for i in ims: c.paste(i, (0, y)); y += i.height
    bb = ImageChops.difference(c, Image.new('RGB', c.size, 'white')).convert('L').point(lambda v: 255 if v > 20 else 0).getbbox()
    c = c.crop((max(0, bb[0] - 8), 0, min(c.width, bb[2] + 8), c.height)).convert('L').quantize(colors=64)
    c.save(os.path.join(UT, f'{namn}.png'), optimize=True)
    print(namn, c.size, os.path.getsize(os.path.join(UT, f'{namn}.png')) // 1024, 'kB')
