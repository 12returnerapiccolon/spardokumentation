# Gör PDF-mallarna för Spårsvetsrapport för DKV (dokumentnummer 5868) och för spårkorsning (5869)
# av utdata från pdfmall_excel.py (2026-10-23). Blanketternas kryssrutor är formulärkontroller som
# försvinner i utskriften; rutorna ritas in här och X skrivs mitt i dem. Skriver mallen och
# js/forms/svets-<namn>-layout.js.
# Användning:
#   python3 tools/pdfmall_excel.py mall.xlsx Blad1 svetsdkv ut C2 H2 P2 C4 H4 K4 P4 \
#     'C,E,G,I,K,M,O,Q,S,U,W,Y,AA,AC@6-24/2' G27:G33 K29 R26 R27 O29
#   python3 tools/svetsmall_vaxel.py ut svetsdkv 'Spårsvetsrapport för DKV' mall.pdf js/forms/svets-dkv-layout.js
# (Excel-filens K29 eller I29 ska vara tom, den innehåller annars kryssrutans värde FALSKT.)
import sys, json, pymupdf

ut, key, titel, mall, js = sys.argv[1:6]
layout = json.load(open(f'{ut}/{key}.json'))
doc = pymupdf.open(f'{ut}/{key}-blank.pdf')
page = doc[0]
H = page.rect.height
t = layout['text']

SIDA = 8  # rutans sida i pt

# Svetsraderna: samma storlek och baslinje i alla kolumner (Typ av arbete och Tillsats material
# har mindre text i Excel-mallen), som i DOK 2630.
for r in range(6, 25, 2):
    for c, v in t.items():
        if c[-len(str(r)):] == str(r) and c[:-len(str(r))].isalpha():
            v[2], v[3] = t[f'C{r}'][2], 10


def ruta(x, bas):
    # bas: textens baslinje i PDF-koordinater (nedifrån), som i layouten
    r = pymupdf.Rect(x, H - bas - SIDA + 0.5, x + SIDA, H - bas + 0.5)
    page.draw_rect(r, color=(0, 0, 0), width=0.6)
    return [0, round(x + SIDA / 2, 2), round(bas + 1.4, 2), 8, 'center', SIDA]


x_g = t['G27'][1] + 2.5
for r in range(27, 34):
    t[f'G{r}'] = ruta(x_g, t[f'G{r}'][2])
# Utfört penetrantprov: ruta och text till höger, på raden Städat arbetsplats.
bas = t['G29'][2]
x_p = t['I29'][1] + 2 if 'I29' in t else 258
t['K29'] = ruta(x_p, bas)
page.insert_text((x_p + SIDA + 3, H - bas), 'Utfört penetrantprov', fontsize=7.5, fontname='helv')
t.pop('I29', None)

doc.set_metadata({'title': titel, 'subject': f'Spårdokumentation mall {key}', 'author': '', 'creator': 'Spårdokumentation',
                  'producer': 'Spårdokumentation', 'keywords': '', 'creationDate': '', 'modDate': ''})
doc.del_xml_metadata()
doc.save(mall, garbage=4, deflate=True)

with open(js, 'w') as f:
    f.write(f'// Genererad med tools/pdfmall_excel.py och tools/svetsmall_vaxel.py ur {titel} (2026-10-23).\n')
    f.write('// Kryssrutorna i egenkontrollen och för penetrantprov är inritade i mallen; X skrivs mitt i dem.\n')
    f.write('// text: cell → [sida, x, baslinje, teckenstorlek, justering, största bredd, höjd?]\n')
    f.write('export default ' + json.dumps(layout) + ';\n')
print(key, 'klar', mall)
