
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  departmentId: string;
  enrollmentDate: string;
  gpa: number;
  status: 'active' | 'inactive' | 'graduated';
  semester: number;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  credits: number;
  departmentId: string;
  instructorId: string;
  semester: string;
  maxStudents: number;
  enrolledStudents: number;
  schedule: string;
  prerequisites: string[];
}

export interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  headId?: string;
  establishedYear: number;
  building: string;
  totalStudents: number;
  totalFaculty: number;
}

export interface Faculty {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  position: 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Lecturer';
  specialization: string;
  hireDate: string;
  salary: number;
  officeRoom: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'Video' | 'Document' | 'Presentation' | 'Audio' | 'Other';
  departmentId: string;
  courseId?: string;
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  downloadCount: number;
  tags: string[];
}
