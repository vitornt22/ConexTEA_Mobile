
export interface MonthlyValue {
  value: number;
  label: string; // Ex: "Jan", "Feb", etc
}

export interface Evolution {
  student: StudentHeaderInformations
  reviews:{
    interation: MonthlyValue[];
    concentration: MonthlyValue[];
    autonomy: MonthlyValue[];
    comunication: MonthlyValue[];
    problemSolving: MonthlyValue[];
    compreension: MonthlyValue[];
  }
}

export type EmotionReport = {
  id: string;         // Ex: "1"
  title: string;      // Ex: "Alegria"
  image: string;      // Ex: "joy"
  percent: number;    // Ex: 2.5
};

export type SkillReport = {
  id: string;
  title: string;
  image: string;
  percent: number;
};

export type BehaviorReport = {
  id: string;
  title: string;
  image: string;
  percent: number;
};

export type AnnualReport = {
  student:StudentHeaderInformations
  emotions: EmotionReport[];
  skills: SkillReport[];
  behaviors: BehaviorReport[];
};

export interface StudentHeaderInformations{
    id: number;
    name: string;
    class: string;
    year: number;
    currentYear: number;
  
}

export interface StudentActivitiesSummary {
  student: StudentHeaderInformations
  pieData: ParticipationData[];
  typeActivityChart: TypeActivityData[];
}

export interface ParticipationData {
  value: number;
  label: string;
  color: string;
  text: string; // Ex: "35.11%"
}

export interface TypeActivityData {
  value: number;
  label: string;
  frontColor: string;
  text: string; // Ex: "18.79%"
}
