import { useState } from 'react';
import { Search, Plus, Edit, Trash2, UserCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { faculty as initialFaculty, departments } from '../data/mockData';
import { Faculty } from '../types/database';
import FacultyForm from '../components/FacultyForm';
import { useToast } from '@/hooks/use-toast';

const FacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [faculty, setFaculty] = useState(initialFaculty);
  const [filteredFaculty, setFilteredFaculty] = useState(initialFaculty);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = faculty.filter(member =>
      member.firstName.toLowerCase().includes(term.toLowerCase()) ||
      member.lastName.toLowerCase().includes(term.toLowerCase()) ||
      member.email.toLowerCase().includes(term.toLowerCase()) ||
      member.specialization.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredFaculty(filtered);
  };

  const handleAddFaculty = (facultyData: Omit<Faculty, 'id'>) => {
    const newFaculty: Faculty = {
      ...facultyData,
      id: (faculty.length + 1).toString()
    };
    
    const updatedFaculty = [...faculty, newFaculty];
    setFaculty(updatedFaculty);
    setFilteredFaculty(updatedFaculty);
    setShowForm(false);
    
    toast({
      title: "Faculty Added",
      description: `${newFaculty.firstName} ${newFaculty.lastName} has been added successfully.`,
    });
  };

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.name : 'Unknown';
  };

  const getPositionBadge = (position: Faculty['position']) => {
    const styles = {
      'Professor': 'bg-purple-100 text-purple-800',
      'Associate Professor': 'bg-blue-100 text-blue-800',
      'Assistant Professor': 'bg-green-100 text-green-800',
      'Lecturer': 'bg-gray-100 text-gray-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[position]}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <UserCheck className="h-6 w-6 mr-2" />
            Faculty
          </h1>
          <p className="text-gray-600 mt-1">Manage faculty members and their information</p>
        </div>
        <Button className="mt-4 sm:mt-0" onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Faculty
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search faculty by name, email, or specialization..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.firstName} {member.lastName}
                    </h3>
                  </div>
                  <span className={getPositionBadge(member.position)}>
                    {member.position}
                  </span>
                  <p className="text-sm text-gray-600 mt-2">
                    {getDepartmentName(member.departmentId)}
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

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {member.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {member.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  Office: {member.officeRoom}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Specialization:</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{member.specialization}</p>
                  
                  <div className="flex justify-between text-sm mt-3">
                    <span className="text-gray-600">Hire Date:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(member.hireDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Salary:</span>
                    <span className="font-medium text-gray-900">
                      ${member.salary.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="text-center py-12">
          <UserCheck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No faculty found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Faculty Form Modal */}
      {showForm && (
        <FacultyForm
          onSubmit={handleAddFaculty}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default FacultyPage;
