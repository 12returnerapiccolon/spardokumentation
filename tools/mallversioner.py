"""Skriver js/mallversioner.js med SHA-256 för de senaste blankettmallarna (2026-10-20).

Appen jämför de inlästa mallarna med dessa och varnar för gamla versioner. Kör efter
varje ändring av en mall:  python3 tools/mallversioner.py /mnt/project-files/mallar-pdf
Mallarna själva checkas inte in, bara deras kontrollsummor.
"""
import datetime, hashlib, json, os, sys
import pypdfium2

mapp = sys.argv[1]
ut = os.path.join(os.path.dirname(__file__), '..', 'js', 'mallversioner.js')
gamla = {}
if os.path.exists(ut):
    text = open(ut, encoding='utf-8').read()
    gamla = json.loads(text[text.index('{'):text.rindex('}') + 1])

idag = datetime.date.today().isoformat()
nya = {}
for namn in sorted(os.listdir(mapp)):
    if not namn.endswith('.pdf'):
        continue
    sokvag = os.path.join(mapp, namn)
    amne = pypdfium2.PdfDocument(sokvag).get_metadata_dict().get('Subject', '')
    # TMALL 1481 är originalformuläret och har inget eget ämne.
    nyckel = amne.removeprefix('Spårdokumentation mall ') if amne.startswith('Spårdokumentation mall ') else '1481' if '1481' in namn else None
    if not nyckel:
        sys.exit(f'Okänd mall: {namn}')
    sha = hashlib.sha256(open(sokvag, 'rb').read()).hexdigest()
    forra = gamla.get(nyckel)
    nya[nyckel] = {'sha': sha, 'datum': forra['datum'] if forra and forra['sha'] == sha else idag}

with open(ut, 'w', encoding='utf-8') as f:
    f.write('// Skapad av tools/mallversioner.py. SHA-256 och datum för senaste versionen av varje\n')
    f.write('// blankettmall; en inläst mall med annan summa är en gammal version.\n')
    f.write('export default ' + json.dumps(nya, indent=2, ensure_ascii=False) + ';\n')
print(len(nya), 'mallar')
