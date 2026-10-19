// Vid nattarbete görs svetsar och besiktningar efter midnatt, så blanketterna får
// nästa dags datum. Jobbets datum är den dag skiftet börjar.
export function blankettDatum(job) {
  if (!job.datum || !job.natt) return job.datum || '';
  const [y, m, d] = job.datum.split('-').map(Number);
  const next = new Date(Date.UTC(y, m - 1, d + 1));
  return next.toISOString().slice(0, 10);
}
