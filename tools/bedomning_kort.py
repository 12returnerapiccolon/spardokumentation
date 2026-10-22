# Skriver js/forms/bedomning-kort.js från avskrivna bedömningsstöd (en JSON-fil per tabell,
# t3.json … t68.json och t0334-vag.json) (2026-10-22).
# Användning: python3 tools/bedomning_kort.py <mapp> > js/forms/bedomning-kort.js
import json, sys, pathlib
kort = {}
for f in sorted(pathlib.Path(sys.argv[1]).glob('t*.json')):
    d = json.load(open(f))
    rader = [{k: v for k, v in r.items() if v not in ('', None, False)} for r in d['rader']]
    kort[str(d['nr'])] = {k: v for k, v in {'namn': d['namn'], 'intro': d.get('intro', ''), 'rader': rader}.items() if v}
print('// Bedömningsstöden som text, avskrivna från tabellerna i TDOK 2021:0311 och 0334.')
print('// Genereras med tools/bedomning_kort.py. Nyckel: tabellnummer, eller 0334-vag.')
print('export default ' + json.dumps(kort, ensure_ascii=False, indent=1) + ';')
