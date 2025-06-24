export interface Student {
  id: number;
  name: string;
  education_level: 'elementary_1' | 'elementary_2' | 'high_school' | string;  // ajuste se tiver mais opções
  gender: 'M' | 'F' | string;
  autism_level: number;
  preferences: string;
  comorbidades: string;  // array de comorbidades
  triggers_sensitivities: string[];  // array de sensibilidades
  birthdate: string;  // data em formato ISO string
  support_level: 'low' | 'moderate' | 'high' | string;  // ajuste se tiver enum fixo
  what_helps_to_calm_down: string[];  // array de ações
  school: number|string;  // id da escola
  parent: number|string;  // id do parent
  school_class: number|String;  // id da turma
}

export interface Parent {
  id: number;
  student: Student | null;  // pode ser null se não houver student relacionado
  name: string;
  birth_date: string;  // data ISO string
  gender: 'M' | 'F' | string;
  contact: string;
  email: string;
  address: string;
  notes: string;
  education_level: 'elementary' | 'high_school' | 'college' | string;  // ajuste conforme os choices
  relationship_degree: 'father' | 'mother' | 'other' | string;  // ajuste conforme os choices
  username: string;
  password: string;  // ⚠️ Cuidado ao exibir isso em tela!
}
