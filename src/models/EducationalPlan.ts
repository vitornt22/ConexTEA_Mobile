export interface EducationPlan {
  id: number;
  year: string;
  start_date: string;  // Pode usar Date se for convertido
  end_date: string;    // Pode usar Date se for convertido
  objectives: {
    academic: string;
    social: string;
    motor: string;
  };
  resource: {
    materials: string[];
    support: string;
    adaptations: string;
  };
  report1: string;
  report2: string;
  student: StudentHeaderInformations;
}

export interface StudentHeaderInformations {
  id: number;
  name: string;
  class: string;
  year: number;
  currentYear: number;
}
