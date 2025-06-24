const RELATIONSHIP_DEGREE_MAP: Record<string, string> = {
  father: 'Pai',
  mother: 'Mãe',
  guardian: 'Responsável Legal',
  grandparent: 'Avô/Avó',
  uncle_aunt: 'Tio/Tia',
  sibling: 'Irmão/Irmã',
  other: 'Outro'
};

export function getRelationshipDegreeLabel(value: string): string {
  return RELATIONSHIP_DEGREE_MAP[value] || value;
}


const SEX_MAP: Record<string, string> = {
  M: 'Masculino',
  F: 'Feminino'
};

export function getSexLabel(value: string|''): string {
  return SEX_MAP[value] || value;
}


const SUPPORT_LEVEL_MAP: Record<string, string> = {
  low: 'Baixo',
  medium: 'Médio',
  moderate: 'Moderado',
  high: 'Alto'
};

export function getSupportLevelLabel(value: string|''): string {
  return SUPPORT_LEVEL_MAP[value] || value;
}

const AUTISM_LEVEL_MAP: Record<number, string> = {
  1: 'Nível 1 - Requer suporte',
  2: 'Nível 2 - Requer suporte substancial',
  3: 'Nível 3 - Requer suporte muito substancial'
};

export function getAutismLevelLabel(value: number): string {
  return AUTISM_LEVEL_MAP[value] || value.toString();
}
