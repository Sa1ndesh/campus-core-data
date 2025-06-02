import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Building2, Users, GraduationCap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { departments as initialDepartments, faculty } from '../data/mockData';
import { Department } from '../types/database';
import DepartmentForm from '../components/DepartmentForm';
import { useToast } from '@/hooks/use-toast';

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departments, setDepartments] = useState(initialDepartments);
  const [filteredDepartments, setFilteredDepartments] = useState(initialDepartments);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = departments.filter(dept =>
      dept.name.toLowerCase().includes(term.toLowerCase()) ||
      dept.code.toLowerCase().includes(term.toLowerCase()) ||
      dept.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDepartments(filtered);
  };

  const handleAddDepartment = (departmentData: Omit<Department, 'id'>) => {
    const newDepartment: Department = {
      ...departmentData,
      id: (departments.length + 1).toString()
    };
    
    const updatedDepartments = [...departments, newDepartment];
    setDepartments(updatedDepartments);
    setFilteredDepartments(updatedDepartments);
    setShowForm(false);
    
    toast({
      title: "Department Added",
      description: `${newDepartment.name} has been added successfully.`,
    });
  };

  const getDepartmentHead = (headId?: string) => {
    if (!headId) return 'TBA';
    const head = faculty.find(f => f.id === headId);
    return head ? `${head.firstName} ${head.lastName}` : 'TBA';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Building2 className="h-6 w-6 mr-2" />
            Departments
          </h1>
          <p className="text-gray-600 mt-1">Manage academic departments and their information</p>
        </div>
        <Button className="mt-4 sm:mt-0" onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search departments by name, code, or description..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDepartments.map((department) => (
          <div key={department.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {department.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {department.code}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {department.description}
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

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Students</p>
                      <p className="text-lg font-bold text-blue-600">{department.totalStudents}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Faculty</p>
                      <p className="text-lg font-bold text-green-600">{department.totalFaculty}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Department Head:</span>
                  <span className="font-medium text-gray-900">
                    {getDepartmentHead(department.headId)}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Building:</span>
                  <span className="font-medium text-gray-900">{department.building}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Established:
                  </span>
                  <span className="font-medium text-gray-900">{department.establishedYear}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Student-Faculty Ratio:</span>
                  <span className="font-medium">
                    {Math.round(department.totalStudents / department.totalFaculty)}:1
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No departments found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Department Form Modal */}
      {showForm && (
        <DepartmentForm
          onSubmit={handleAddDepartment}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Departments;
