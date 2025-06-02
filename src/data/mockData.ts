import { Student, Course, Department, Faculty, StudyMaterial } from '../types/database';

export const departments: Department[] = [
  {
    id: '1',
    name: 'Computer Science',
    code: 'CS',
    description: 'Department of Computer Science and Engineering',
    headId: '1',
    establishedYear: 1985,
    building: 'Tech Building A',
    totalStudents: 450,
    totalFaculty: 25
  },
  {
    id: '2',
    name: 'Mathematics',
    code: 'MATH',
    description: 'Department of Mathematics and Statistics',
    headId: '2',
    establishedYear: 1970,
    building: 'Science Building B',
    totalStudents: 280,
    totalFaculty: 18
  },
  {
    id: '3',
    name: 'Physics',
    code: 'PHYS',
    description: 'Department of Physics and Astronomy',
    headId: '3',
    establishedYear: 1975,
    building: 'Science Building C',
    totalStudents: 190,
    totalFaculty: 15
  }
];

export const faculty: Faculty[] = [
  {
    id: '1',
    firstName: 'Dr. Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@college.edu',
    phone: '555-0101',
    departmentId: '1',
    position: 'Professor',
    specialization: 'Artificial Intelligence',
    hireDate: '2010-08-15',
    salary: 95000,
    officeRoom: 'TA-301'
  },
  {
    id: '2',
    firstName: 'Dr. Michael',
    lastName: 'Chen',
    email: 'michael.chen@college.edu',
    phone: '555-0102',
    departmentId: '2',
    position: 'Associate Professor',
    specialization: 'Applied Mathematics',
    hireDate: '2015-01-20',
    salary: 85000,
    officeRoom: 'SB-201'
  },
  {
    id: '3',
    firstName: 'Dr. Emily',
    lastName: 'Rodriguez',
    email: 'emily.rodriguez@college.edu',
    phone: '555-0103',
    departmentId: '3',
    position: 'Professor',
    specialization: 'Quantum Physics',
    hireDate: '2008-09-01',
    salary: 98000,
    officeRoom: 'SC-401'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    code: 'CS101',
    name: 'Introduction to Programming',
    description: 'Basic programming concepts using Python',
    credits: 3,
    departmentId: '1',
    instructorId: '1',
    semester: 'Fall 2024',
    maxStudents: 30,
    enrolledStudents: 28,
    schedule: 'MWF 9:00-10:00 AM',
    prerequisites: []
  },
  {
    id: '2',
    code: 'CS201',
    name: 'Data Structures',
    description: 'Advanced data structures and algorithms',
    credits: 4,
    departmentId: '1',
    instructorId: '1',
    semester: 'Spring 2024',
    maxStudents: 25,
    enrolledStudents: 23,
    schedule: 'TTh 2:00-4:00 PM',
    prerequisites: ['CS101']
  },
  {
    id: '3',
    code: 'MATH201',
    name: 'Calculus II',
    description: 'Integration and series',
    credits: 4,
    departmentId: '2',
    instructorId: '2',
    semester: 'Fall 2024',
    maxStudents: 35,
    enrolledStudents: 32,
    schedule: 'MWF 11:00-12:00 PM',
    prerequisites: ['MATH101']
  }
];

export const studyMaterials: StudyMaterial[] = [
  {
    id: '1',
    title: 'Introduction to Programming - Lecture Notes',
    description: 'Comprehensive lecture notes covering basic programming concepts in Python',
    type: 'PDF',
    departmentId: '1',
    courseId: '1',
    uploadedBy: '1',
    uploadDate: '2024-01-15',
    fileSize: '2.5 MB',
    downloadCount: 145,
    tags: ['programming', 'python', 'basics']
  },
  {
    id: '2',
    title: 'Data Structures Algorithm Visualization',
    description: 'Interactive video tutorials explaining data structures and algorithms',
    type: 'Video',
    departmentId: '1',
    courseId: '2',
    uploadedBy: '1',
    uploadDate: '2024-02-20',
    fileSize: '150 MB',
    downloadCount: 98,
    tags: ['algorithms', 'data-structures', 'visualization']
  },
  {
    id: '3',
    title: 'Calculus II Formula Reference',
    description: 'Quick reference guide for integration formulas and techniques',
    type: 'Document',
    departmentId: '2',
    courseId: '3',
    uploadedBy: '2',
    uploadDate: '2024-01-10',
    fileSize: '1.2 MB',
    downloadCount: 203,
    tags: ['calculus', 'integration', 'formulas']
  },
  {
    id: '4',
    title: 'Quantum Physics Presentation',
    description: 'Detailed presentation on quantum mechanics principles',
    type: 'Presentation',
    departmentId: '3',
    uploadedBy: '3',
    uploadDate: '2024-03-05',
    fileSize: '8.7 MB',
    downloadCount: 67,
    tags: ['quantum', 'physics', 'mechanics']
  }
];

export const students: Student[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@student.college.edu',
    phone: '555-1001',
    dateOfBirth: '2002-05-15',
    address: '123 College Ave, University Town',
    departmentId: '1',
    enrollmentDate: '2022-08-20',
    gpa: 3.75,
    status: 'active',
    semester: 5
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@student.college.edu',
    phone: '555-1002',
    dateOfBirth: '2001-12-03',
    address: '456 University Blvd, Campus City',
    departmentId: '2',
    enrollmentDate: '2021-08-25',
    gpa: 3.92,
    status: 'active',
    semester: 7
  },
  {
    id: '3',
    firstName: 'Alex',
    lastName: 'Wilson',
    email: 'alex.wilson@student.college.edu',
    phone: '555-1003',
    dateOfBirth: '2003-01-22',
    address: '789 Academic Lane, Study Heights',
    departmentId: '3',
    enrollmentDate: '2023-08-18',
    gpa: 3.68,
    status: 'active',
    semester: 3
  }
];
