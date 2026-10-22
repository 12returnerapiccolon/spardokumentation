# Klipper ut avsnitt ur TRVINFRA-dokumenten som kraven i IBT hänvisar till, som bilder i img/tdok/.
# Sidhuvud och marginaler tas bort och sidorna läggs under varandra. (2026-10-22)
# Användning: python3 tools/regelverk_bilder.py <mapp med Regelverk-PDF:erna> img/tdok
import pymupdf, sys, os
from PIL import Image, ImageChops

MAPP, UT = sys.argv[1], sys.argv[2]
F13 = 'Krav med raadstexter TRVINFRA-00013 Sparlaege v2_0.pdf'
F15 = 'Krav med raadstexter TRVINFRA-00015 v2_.pdf'
F17 = 'Krav med raadstexter TRVINFRA-00017 Sparvaexel v5_0.pdf'
F18 = 'Krav med raadstexter TRVINFRA-00018 v7_.pdf'
F12 = 'Krav med raadstexter TRVINFRA-00012 v5_0.pdf'
# Sidhuvudets nederkant per dokument (pt).
HUVUD = {F13: 114, F15: 132, F17: 132, F18: 132, F12: 132}
FOT = 805
# namn: (fil, (sida, y) start, (sida, y) slut). Slutet är nästa rubrik.
AVSNITT = {
    '00013-11-1': (F13, (35, 167), (37, 135)),
    '00013-11-2-1': (F13, (37, 135), (38, 470)),
    '00013-11-2-2': (F13, (38, 470), (39, 442)),
    '00013-11-2-3': (F13, (39, 442), (41, 135)),
    '00013-11-2-4': (F13, (41, 135), (42, 135)),
    '00013-11-2-5': (F13, (42, 135), (43, 135)),
    '00013-11-2-6': (F13, (43, 135), (45, 232)),
    '00013-11-2-7': (F13, (45, 232), (47, 135)),
    '00013-11-3': (F13, (47, 135), (51, 191)),
    '00013-11-4': (F13, (51, 191), (52, 135)),
    '00013-13': (F13, (57, 135), (60, 135)),
    '00015-7': (F15, (74, 141), (76, 141)),
    '00017-9-3': (F17, (64, 358), (67, 192)),
    '00017-10-6': (F17, (71, 398), (75, 472)),
    '00017-10-8': (F17, (81, 139), (86, 360)),
    '00018-10': (F18, (43, 141), (47, 141)),
    '00018-11': (F18, (47, 141), (54, 141)),
    '00012-7-1-1-7': (F12, (23, 216), (25, 346)),
    '00012-8-1-1-15': (F12, (80, 327), (81, 373)),
}

def bit(doc, pn, y0, y1, dpi=130):
    p = doc[pn - 1]
    pm = p.get_pixmap(dpi=dpi, clip=pymupdf.Rect(85, y0, p.rect.width - 50, y1))
    im = Image.frombytes('RGB', (pm.width, pm.height), pm.samples)
    bb = ImageChops.difference(im, Image.new('RGB', im.size, 'white')).convert('L').point(lambda v: 255 if v > 20 else 0).getbbox()
    return im.crop((0, max(0, bb[1] - 8), im.width, min(im.height, bb[3] + 8))) if bb else None

for namn, (fil, (p0, y0), (p1, y1)) in AVSNITT.items():
    doc = pymupdf.open(os.path.join(MAPP, fil)); h = HUVUD[fil]
    if y1 <= h + 12: p1, y1 = p1 - 1, FOT  # slutar vid sidans början: ta hela förra sidan
    ims = [b for b in (bit(doc, p, max(h, y0 - 4) if p == p0 else h, y1 - 4 if p == p1 else FOT) for p in range(p0, p1 + 1)) if b]
    w = max(i.width for i in ims); c = Image.new('RGB', (w, sum(i.height for i in ims)), 'white'); y = 0
    for i in ims: c.paste(i, (0, y)); y += i.height
    bb = ImageChops.difference(c, Image.new('RGB', c.size, 'white')).convert('L').point(lambda v: 255 if v > 20 else 0).getbbox()
    c = c.crop((max(0, bb[0] - 8), 0, min(c.width, bb[2] + 8), c.height)).convert('L').quantize(colors=64)
    c.save(os.path.join(UT, f'{namn}.png'), optimize=True)
    print(namn, c.size, os.path.getsize(os.path.join(UT, f'{namn}.png')) // 1024, 'kB')
