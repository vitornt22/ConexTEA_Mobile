export interface Teacher{
	
    id: number;
    name: string;
    registration_id: string;
    work_start: string;  // formato ISO string da data
    sexo: string;
    username: string;
    nickName: string | null;
    subject: string;
    work_shift: string;
    has_specialization: boolean;
    education_level: string;
    birthdate: string;  // formato ISO string da data
    email: string;
    address: string;
    school: number;
    school_class: number | null;
  
}

export interface TeacherDetail {
  teacher: Teacher
  related_data: {
    checkin_count: number;
    activity_count: number;
    review_count: number;
  };
}