# Klipper ut figurer, hänvisade tabeller och bedömningsstöd ur TDOK 2021:0311/0334 till img/tdok/.
# Rader som bryts över en sidbrytning sys ihop till en cell. (2026-10-22)
# Användning: python3 tools/tdok_bilder.py TDOK_2021-0311.pdf TDOK_2021-0334.pdf img/tdok tabeller.json
import pymupdf,sys,json,os
from PIL import Image, ImageChops
d=pymupdf.open(sys.argv[1]); d334=pymupdf.open(sys.argv[2]); ut=sys.argv[3]; tab=json.load(open(sys.argv[4]))
def find(doc,pn,txt,nth=0):
    hits=[]
    for b in doc[pn-1].get_text('dict')['blocks']:
        if b['type']!=0: continue
        for l in b['lines']:
            t=''.join(s['text'] for s in l['spans']).strip()
            if t.startswith(txt): hits.append(l['bbox'])
    hits.sort(key=lambda b:b[1]); return hits[nth]
TOP,BOT=112,585
def linjer(doc,pn):
    ys=set()
    for dr in doc[pn-1].get_drawings():
        for it in dr['items']:
            if it[0]=='re' and it[1].height<2 and it[1].width>30: ys.add(round(it[1].y0,1))
            elif it[0]=='l' and abs(it[1].y-it[2].y)<0.5 and abs(it[1].x-it[2].x)>30: ys.add(round(it[1].y,1))
    return sorted(ys)
def forstaKolumnTom(doc,pn,y0,y1):
    for b in doc[pn-1].get_text('dict')['blocks']:
        if b['type']!=0: continue
        for l in b['lines']:
            t=''.join(s['text'] for s in l['spans']).strip()
            if t and l['bbox'][0]<150 and l['bbox'][0]>60 and y0<l['bbox'][1]<y1: return False
    return True
SOM=[]
def sy(doc,segs):
    # Rad som fortsätter på nästa sida (tom första kolumn): ta bort sidbrytningens linjer så att cellen hänger ihop.
    segs=[list(s) for s in segs]; sydd=set()
    for i in range(len(segs)-1):
        a,b=segs[i],segs[i+1]
        la=[y for y in linjer(doc,a[0]) if a[1]<y<=a[2]+1]; lb=[y for y in linjer(doc,b[0]) if b[1]-1<=y<b[2]]
        if len(la)<1 or len(lb)<2: continue
        if forstaKolumnTom(doc,b[0],lb[0],lb[1]):
            a[2]=la[-1]-0.4; b[1]=lb[0]+0.9; SOM.append((b[0],round(lb[0]),round(lb[1]))); sydd.add(i)
    return segs,sydd
def bild(doc,segs,namn,dpi=150,syihop=False):
    sydd=set()
    if syihop: segs,sydd=sy(doc,segs)
    ims=[]
    for i,(pn,y0,y1) in enumerate(segs):
        r=doc[pn-1].rect
        pm=doc[pn-1].get_pixmap(dpi=dpi,clip=pymupdf.Rect(55,y0,r.width-15,min(y1,BOT)))
        im=Image.frombytes('RGB',(pm.width,pm.height),pm.samples)
        bb=ImageChops.difference(im,Image.new('RGB',im.size,'white')).convert('L').point(lambda v:255 if v>20 else 0).getbbox()
        if bb:
            # Kanten mot en ihopsydd rad behålls som den är; annars lite luft som förut.
            top=0 if (i-1) in sydd else max(0,bb[1]-8)
            bot=im.height if i in sydd else min(im.height,bb[3]+8)
            im=im.crop((0,top,im.width,bot))
        ims.append(im)
    w=max(i.width for i in ims); c=Image.new('RGB',(w,sum(i.height for i in ims)),'white'); y=0
    for i in ims: c.paste(i,(0,y)); y+=i.height
    bb=ImageChops.difference(c,Image.new('RGB',c.size,'white')).convert('L').point(lambda v:255 if v>20 else 0).getbbox()
    c=c.crop((max(0,bb[0]-8),0,min(c.width,bb[2]+8),c.height))
    c=c.convert('L').quantize(colors=64)
    c.save(f'{ut}/{namn}.png',optimize=True); print(namn,c.size,os.path.getsize(f'{ut}/{namn}.png')//1024,'kB')
# Referenserna i texten
bild(d,[(15,165,find(d,15,'Figur 1')[3]+2)],'0311-figur1-gatural')
bild(d,[(31,TOP,find(d,31,'Tabell 11')[3]+2)],'0311-tabell11-skarvoppning')
bild(d,[(116,find(d,116,'Plattformstyp')[1]-4,find(d,116,'Tabell 49')[3]+2)],'0311-tabell49-plattform')
bild(d,[(117,find(d,117,'Plattformstyp')[1]-4,find(d,117,'Tabell 50')[3]+2)],'0311-tabell50-plattform')
bild(d,[(124,find(d,124,'Lastkajstyp')[1]-4,find(d,124,'Tabell 52')[3]+2)],'0311-tabell52-lastkaj')
bild(d,[(124,find(d,124,'Kurvradie')[1]-4,find(d,124,'7')[1]-30 if False else find(d,124,'Utökas')[1]-12),(125,TOP,find(d,125,'Tabell 53')[3]+2)],'0311-tabell53-lastkaj')
# Bedömningsstöd
VILL=[3,4,5,6,7,8,9,10,12,13,14,16,17,18,19,20,21,51,54,64,65,66,67,68]
for t in tab:
    if t['nr'] not in VILL: continue
    (p0,y0),(p1,y1)=t['fran'],t['till']
    segs=[(p+1, y0-3 if p==p0 else TOP, y1+2 if p==p1 else BOT) for p in range(p0,p1+1)]
    bild(d,segs,f"0311-tabell{t['nr']}-bedomning",syihop=True)
bild(d,[(37,68,BOT),(38,TOP,find(d,38,'Tabell 15')[3]+2)],'0311-tabell15-bedomning',syihop=True)
# TDOK 2021:0334 version 9.0: kap 4.1.23 på sidan 36, bedömningsstödet på 37–39. Tabellens rubrikrader
# upprepas överst på varje sida och hoppas över (de slutar vid linjen y 163,1).
pm=d334[35].get_pixmap(dpi=200, clip=pymupdf.Rect(55,398,450,550)); pm.save(f'{ut}/0334-fritt-utrymme.png'); print('0334-fritt-utrymme')
y=find(d334,37,'Bedömningsstöd')[1]-3
bild(d334,[(37,y,453),(38,163.1,443),(39,163.1,408)],'0334-bedomning-vag',syihop=True)
print('SYDDA',SOM)
