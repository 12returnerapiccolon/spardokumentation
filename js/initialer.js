// Initialer räknas ut från namnet, för blanketter där hela namnet inte får plats.
// "John Jonson" blir "JJ", "John Glen Jonson" blir "JGJ".
export function initialer(namn) {
  return (namn || '').trim().split(/[\s-]+/).filter(Boolean).map(w => w[0].toUpperCase()).join('');
}
