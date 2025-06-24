const SUBJECT_CHOICES: [string, string][] = [
  ['math', 'Matemática'],
  ['portuguese', 'Português'],
  ['science', 'Ciências'],
  ['history', 'História'],
  ['geography', 'Geografia'],
  ['physics', 'Física'],
  ['chemistry', 'Química'],
  ['biology', 'Biologia'],
  ['literature', 'Literatura'],
  ['philosophy', 'Filosofia'],
  ['sociology', 'Sociologia'],
  ['english', 'Inglês'],
  ['arts', 'Artes'],
  ['music', 'Música'],
  ['physical_ed', 'Educação Física'],
  ['psychomotor', 'Psicomotricidade'],
  ['play', 'Atividades lúdicas'],
  ['technology', 'Tecnologia'],
];

const SUBJECT_MAP = Object.fromEntries(SUBJECT_CHOICES);

export function getSubjectLabel(subjectKey: string): string {
  return SUBJECT_MAP[subjectKey] || 'Desconhecido';
}

const WORK_SHIFT_CHOICES: [string, string][] = [
  ['morning', 'Manhã'],
  ['afternoon', 'Tarde'],
  ['night', 'Noite'],
];

// Transforma em dicionário para busca rápida
const WORK_SHIFT_MAP = Object.fromEntries(WORK_SHIFT_CHOICES);

export function getWorkShiftLabel(workShiftKey: string): string {
  return WORK_SHIFT_MAP[workShiftKey] || 'Desconhecido';
}
