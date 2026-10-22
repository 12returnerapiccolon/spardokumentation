"""Skär ut bladen i TDOK 2014:0598 Katalog över rälsfel till JPEG-bilder (img/tdok/0598-*.jpg).

Kör: python3 tools/ralsfel_bilder.py /mnt/project-files/regelverk/TDOK_2014-0598.pdf img/tdok
Sidhuvud och sidfot tas bort och sidorna för varje fel sätts ihop till en bild.
"""
import io, json, sys
import pymupdf
from PIL import Image, ImageChops

# Felnummer -> första sidan. Felet slutar på sidan före nästa fel.
START = [
    ('intro', 3), ('indelning', 7),
    ('100', 10), ('111', 11), ('112', 13), ('113', 15), ('121', 16), ('122', 18), ('123', 20), ('124', 21),
    ('125', 22), ('1321', 24), ('1322', 26), ('133', 28), ('134', 29), ('135', 31), ('139', 32), ('153', 33),
    ('154', 34), ('200', 36), ('211', 38), ('212', 42), ('213', 44), ('2201', 46), ('2202', 48), ('2203', 50),
    ('2204', 52), ('221', 54), ('2221', 56), ('2222', 58), ('2223', 60), ('223', 63), ('224', 65), ('2251', 67),
    ('2252', 70), ('227', 72), ('2321', 74), ('2322', 76), ('233', 78), ('234', 80), ('235', 82), ('236', 84),
    ('239', 85), ('253', 87), ('254', 89), ('301', 91), ('302', 94), ('303', 96), ('411', 98), ('412', 100),
    ('421', 102), ('422', 104), ('431', 107), ('432', 109), ('471', 111), ('472', 113), ('481', 115),
]
SLUT = 115
CROP = (44, 112, 566, 812)  # pt, utan sidhuvud (logga, dokument-id) och mallnr (stående text i vänstermarginalen)
ZOOM = 2


def trim(img):
    """Tar bort vita rader nederst och överst."""
    bg = Image.new('L', img.size, 255)
    box = ImageChops.difference(img.convert('L'), bg).point(lambda v: 255 if v > 24 else 0).getbbox()
    if not box:
        return None
    return img.crop((0, max(0, box[1] - 8), img.width, min(img.height, box[3] + 8)))


def main(pdf, ut):
    d = pymupdf.open(pdf)
    storlek = {}
    for i, (nr, start) in enumerate(START):
        slut = START[i + 1][1] - 1 if i + 1 < len(START) else SLUT
        if nr == 'intro':
            slut = 6
        delar = []
        for p in range(start, slut + 1):
            pix = d[p - 1].get_pixmap(matrix=pymupdf.Matrix(ZOOM, ZOOM), clip=pymupdf.Rect(*CROP))
            bild = trim(Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB'))
            if bild:
                delar.append(bild)
        h = sum(b.height for b in delar) + 16 * (len(delar) - 1)
        hel = Image.new('RGB', (delar[0].width, h), 'white')
        y = 0
        for b in delar:
            hel.paste(b, (0, y))
            y += b.height + 16
        fil = f'{ut}/0598-{nr}.jpg'
        hel.save(fil, quality=62, optimize=True, progressive=True)
        storlek[nr] = hel.size
    print(json.dumps(storlek))


if __name__ == '__main__':
    main(*sys.argv[1:])
