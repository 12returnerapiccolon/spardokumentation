# Hittar bedömningsstödstabellerna i TDOK 2021:0311 (sida och läge) och skriver dem som JSON.
# Användning: python3 tools/tdok_tabeller.py TDOK_2021-0311.pdf > tabeller.json (2026-10-22)
import pymupdf,sys,re,json
d=pymupdf.open(sys.argv[1])
L=[]
for pn in range(9,len(d)):
    for b in d[pn].get_text('dict')['blocks']:
        if b['type']!=0: continue
        for l in b['lines']:
            t=''.join(s['text'] for s in l['spans']).strip()
            if t: L.append((pn,l['bbox'][1],l['bbox'][3],l['bbox'][0],t))
L.sort()
sek=None; start=None; out=[]
for pn,y0,y1,x0,t in L:
    m=re.match(r'^(4(\.\d+)+)\.?$',t)
    if m and x0<120: sek=m.group(1); continue
    if re.match(r'^(Råd: )?Bedömningsstöd',t) and x0<120: start=(pn,y0,t); 
    m=re.match(r'^Tabell (\d+) (Bedömningsstöd.*|Spetsväxeldriv.*)',t)
    if m and start: out.append(dict(sek=sek,nr=int(m.group(1)),namn=m.group(2),fran=[start[0],start[1]],till=[pn,y1])); start=None
print(json.dumps(out,ensure_ascii=False,indent=0))
