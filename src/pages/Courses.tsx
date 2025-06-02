
import { useState } from 'react';
import { Search, Plus, Edit, Trash2, BookOpen, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { courses, departments, faculty } from '../data/mockData';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(term.toLowerCase()) ||
      course.code.toLowerCase().includes(term.toLowerCase()) ||
      course.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.name : 'Unknown';
  };

  const getInstructorName = (instructorId: string) => {
    const instructor = faculty.find(f => f.id === instructorId);
    return instructor ? `${instructor.firstName} ${instructor.lastName}` : 'TBA';
  };

  const getEnrollmentPercentage = (enrolled: number, max: number) => {
    return Math.round((enrolled / max) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Courses
          </h1>
          <p className="text-gray-600 mt-1">Manage course catalog and schedules</p>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search courses by name, code, or description..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {course.code}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {course.credits} credits
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.description}
                  </p>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-medium text-gray-900">
                    {getDepartmentName(course.departmentId)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium text-gray-900">
                    {getInstructorName(course.instructorId)}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {course.schedule}
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">Semester:</span>
                  <span className="font-medium">{course.semester}</span>
                </div>
              </div>

              {/* Enrollment Progress */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Enrollment
                  </span>
                  <span className="font-medium text-gray-900">
                    {course.enrolledStudents}/{course.maxStudents}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getEnrollmentPercentage(course.enrolledStudents, course.maxStudents)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {getEnrollmentPercentage(course.enrolledStudents, course.maxStudents)}% enrolled
                </p>
              </div>

              {/* Prerequisites */}
              {course.prerequisites.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-gray-600 mb-1">Prerequisites:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.prerequisites.map((prereq, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
