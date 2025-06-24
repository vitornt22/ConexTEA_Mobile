import { Emotions } from "./EmoctionModel";

export interface ParentInitialStats {
  student_name: string;
  relationship_degree:string,
  preposition: string,
  current_year: number;
  school_student_class: string;
  total_checkins: number;
  total_activities: number;
  total_assessments: number;
  emotions: Emotions;
}
