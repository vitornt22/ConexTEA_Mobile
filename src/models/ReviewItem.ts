export type ReviewItemModel = {
  Type: 'Review' | 'CheckIn' | 'Action' | 'Activitie';
  studentName:string,
  TeacherName: string;
  subjectName:string,
  date: string;
  othersInformations:any
};