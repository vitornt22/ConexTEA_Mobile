export type ReviewItemModel = {
  Type: 'Review' | 'CheckIn' | 'Action' | 'Activitie';
  TeacherName: string;
  subjectName:string,
  date: string;
  othersInformations:any
};