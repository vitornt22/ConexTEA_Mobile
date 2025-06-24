export interface Student {
  id: number;
  school: string;
  parent: string;
  name: string;
  education_level: string; // Ex: "elementary_2"
  gender: string;          // Ex: "M", "F"
  autism_level: number;    // Ex: 1, 2, 3
  preferences: string;
  comorbidades: string; // No seu JSON eles vêm como stringified arrays,                      // mas no React Native, após parsear, serão string[].
  triggers_sensitivities: string[];
  birthdate: string;       // Formato "YYYY-MM-DD"
  school_class: string;    // Ex: "5ª ano"
  support_level: string;   // Ex: "moderate", "low", "high"
  what_helps_to_calm_down: string[];
}


export interface TeacherDashboardData {
  teacher: {
	'id': number,
    'name': string
  };
  currentYear: number;
  totalCheckins: number;
  totalActivities: number;
  totalStudents: number;
  students: Student[];
}
