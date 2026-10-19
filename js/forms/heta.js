// Tillstånd, kontrollista heta arbeten på tillfällig arbetsplats (bilaga till DOK-225,
// dokumentnummer 2859). Word-mallen har kryssrutor men prickade linjer i stället för textfält.
// Den skrivs ut till en tom PDF-mall och fälten skrivs på sina platser (heta-layout.js).
// Kryssrutorna har sitt index i Word-mallen.
import LAYOUT from './heta-layout.js';
import { blankettDatum } from '../datum.js';

const METOD = [['svetsning', 'Svetsning', 0], ['rondell', 'Rondell', 1], ['skarning', 'Skärning', 2], ['lodning', 'Lödning', 3], ['hetluft', 'Hetluft', 4], ['annat', 'Annat', 5]];

// Kontrollpunkterna 0–10. sub är en extra ruta under punkten.
const PUNKTER = [
  ['p0', '0. Tillståndsansvarig är utsedd.', 8],
  ['p1', '1. Personen som ska utföra arbetet är behörig att utföra Heta arbeten.', 9],
  ['p2a', '2a. Bevakning under arbetet och efterkontroll är ordnad genom behörig brandvakt.', 10, ['ingenvakt', 'Tillståndsansvarig bedömer att brandvakt uppenbart inte behövs under arbetet', 12]],
  ['p2b', '2b. Efterbevakning (alltid minst en timme) är ordnad genom behörig brandvakt.', 11],
  ['p3', '3. För arbete i utrymme som innehåller eller har innehållit brandfarlig vara har tillstånd inhämtats av den som är utsedd föreståndare för hanteringen.', 13],
  ['p4', '4. Arbetsplatsen är städad och vid behov vattnad.', 14],
  ['p5', '5. Brännbart material på och i närheten av arbetsplatsen är bortflyttat, skyddat genom övertäckning och/eller avskärmat.', 15],
  ['p6', '6. Värmeledande konstruktioner och dolda brännbara byggnadsdelar finns. Dessa är skyddade och åtkomliga för omedelbar släckinsats.', 16, ['p6ej', 'Finns ej', 17]],
  ['p7', '7. Springor, hål genomföringar och andra öppningar på och i närheten av arbetsplatsen är tätade eller kontrollerade och skyddade.', 18, ['p7ej', 'Finns ej', 19]],
  ['p8', '8. Godkänd, fungerande och tillräcklig släckutrustning av rätt typ finns tillgänglig för omedelbar släckinsats.', 20],
  ['p9', '9. Svetsutrustningen är felfri. Acetylenflaska är försedd med bakslagsskydd. Svetsbrännare är försedd med backventil för bränngas och syrgas. Skyddshandske och avstängningsnyckel finns.', 21, ['p9ej', 'Används inte', 22]],
  ['p10', '10. Räddningstjänsten/brandkåren kan larmas omedelbart.', 23],
];

// Hetarbetare och brandvakter: namn, certifikatkontroll, HA, BV.
const ARBETARE = [['arb1', 24], ['arb2', 27], ['arb3', 30]];

const plats = job => [job.driftplats, job.vxnr ? `vx ${job.vxnr}` : job.spar && `spår ${job.spar}`, job.km && `km ${job.km}+${String(job.m || 0).padStart(3, '0')}`, job.bandel && `bandel ${job.bandel}`].filter(Boolean).join(', ');

export default {
  key: 'heta',
  code: 'DOK 2859',
  title: 'Tillstånd heta arbeten',
  format: 'overlay',
  ext: 'pdf',
  layout: LAYOUT,
  templateHint: 'DOK 2859 Tillstånd heta arbeten (PDF-mall)',

  async matches({ pdf }) {
    return !!pdf && pdf.subject === 'Spårdokumentation mall heta';
  },

  sections: [
    {
      title: 'Arbetsplats och arbetsmetod',
      help: 'Grå text hämtas från jobbet.',
      items: [
        { type: 'text', key: 'plats', label: 'Arbetsplats/Larmadress', placeholder: plats },
        { type: 'group', label: 'Arbetsmetod', items: [
          ...METOD.map(([key, label]) => ({ type: 'check', key, label, defaultValue: key === 'svetsning' })),
          { type: 'text', key: 'annatText', label: 'Annat, vad' },
        ] },
        { type: 'radio', key: 'brandfarligt', label: 'Är arbetet brandfarligt? (3M-metoden)', options: ['Ja', 'Nej'] },
      ],
    },
    {
      title: 'Tillståndet gäller',
      help: 'Tillståndet ska gälla så kort tid som möjligt och normalt en dag eller ett skift.',
      items: [
        { type: 'text', key: 'franDatum', label: 'Från och med', inputType: 'date', defaultValue: job => blankettDatum(job), half: true },
        { type: 'text', key: 'franKl', label: 'Klockan', inputType: 'time', half: true },
        { type: 'text', key: 'tillDatum', label: 'Till och med', inputType: 'date', defaultValue: job => blankettDatum(job), half: true },
        { type: 'text', key: 'tillKl', label: 'Klockan', inputType: 'time', half: true },
      ],
    },
    {
      title: 'Kontrollpunkter',
      items: [
        { type: 'allcheck', label: 'Kryssa i alla kontrollpunkter', keys: PUNKTER.map(([key]) => key) },
        ...PUNKTER.flatMap(([key, label, , sub]) => [
          { type: 'check', key, label },
          ...(sub ? [{ type: 'check', key: sub[0], label: sub[1], sub: true }] : []),
          ...(key === 'p2a' ? [{ type: 'text', key: 'brandvakter', label: 'Brandvaktens/vakternas namn' }] : []),
          ...(key === 'p2b' ? [
            { type: 'text', key: 'langreTid', label: 'Annan, längre tid' },
            { type: 'text', key: 'efterNamn', label: 'Brandvakt efterbevakning, namn' },
          ] : []),
        ]),
      ],
    },
    {
      title: 'Brandlarm',
      items: [
        { type: 'text', key: 'sektioner', label: 'Sektioner/adresser i det automatiska brandlarmet som är urkopplade under arbetet (använd blankett SBF 175)' },
      ],
    },
    {
      title: 'Underskrifter',
      help: 'Namnen skrivs som namnförtydligande. Raden för namnteckning lämnas tom.',
      items: [
        { type: 'text', key: 'ansvarig', label: 'Tillståndsansvarig', remember: true },
        { type: 'text', key: 'ansvarigTel', label: 'Tillståndsansvarigs telefonnummer', inputType: 'tel', inputmode: 'tel', remember: true },
        ...ARBETARE.map(([key], i) => ({
          type: 'group', label: `Hetarbetare eller brandvakt ${i + 1}`,
          items: [
            { type: 'text', key, label: 'Namn', defaultValue: i === 0 ? job => job.namn || '' : null },
            { type: 'check', key: `${key}cert`, label: 'Certifikatkontroll utförd (av tillståndsansvarig)' },
            { type: 'check', key: `${key}ha`, label: 'HA (heta arbeten)', defaultValue: i === 0 },
            { type: 'check', key: `${key}bv`, label: 'BV (brandvakt)' },
          ],
        })),
        { type: 'text', key: 'avslut', label: 'Tillståndsansvarig vid avslut (arbetet är avslutat, efterbevakning slutförd och arbetsplatsen kontrollerad)', placeholder: () => 'Samma som ovan' },
      ],
    },
  ],

  toValues(job, data) {
    // Fält med förval: det svetsaren skrivit går före.
    const val = (key, def) => (data[key] !== undefined ? data[key] : def);
    const v = {
      plats: data.plats || plats(job),
      annat: data.annatText || '',
      franDatum: val('franDatum', blankettDatum(job)),
      franKl: data.franKl || '',
      tillDatum: val('tillDatum', blankettDatum(job)),
      tillKl: data.tillKl || '',
      brandvakter: data.brandvakter || '',
      langreTid: data.langreTid || '',
      efterNamn: data.efterNamn || '',
      sektioner: data.sektioner || '',
      ansvarig: data.ansvarig || '',
      ansvarigTel: data.ansvarigTel || '',
      arb1: val('arb1', job.namn || ''),
      arb2: data.arb2 || '',
      arb3: data.arb3 || '',
      avslut: data.avslut || data.ansvarig || '',
    };
    for (const [key, , i] of METOD) v[i] = !!val(key, key === 'svetsning');
    v[6] = data.brandfarligt === 'Ja';
    v[7] = data.brandfarligt === 'Nej';
    for (const [key, , i, sub] of PUNKTER) {
      v[i] = !!data[key];
      if (sub) v[sub[2]] = !!data[sub[0]];
    }
    ARBETARE.forEach(([key, i], n) => {
      v[i] = !!data[`${key}cert`];
      v[i + 1] = !!val(`${key}ha`, n === 0);
      v[i + 2] = !!data[`${key}bv`];
    });
    return v;
  },
};
