"""Skär ut Tabell 1 och Tabell 2 ur TDOK 2014:0664 till img/tdok/0664-tabell*.png.

Kör: python3 tools/tdok0664_bilder.py /mnt/project-files/regelverk/TDOK_2014-0664.pdf img/tdok
"""
import io, sys
import pymupdf
from PIL import Image

# namn, sida, (x0, y0, x1, y1) i pt
TABELLER = [
    ('tabell1-portion', 10, (55, 356, 460, 605)),
    ('tabell2-l25', 11, (55, 320, 460, 627)),
]


def main(pdf, ut):
    d = pymupdf.open(pdf)
    for namn, sida, rect in TABELLER:
        pix = d[sida - 1].get_pixmap(matrix=pymupdf.Matrix(3, 3), clip=pymupdf.Rect(*rect))
        bild = Image.open(io.BytesIO(pix.tobytes('png'))).convert('L').quantize(64)
        bild.save(f'{ut}/0664-{namn}.png', optimize=True)


if __name__ == '__main__':
    main(*sys.argv[1:])
