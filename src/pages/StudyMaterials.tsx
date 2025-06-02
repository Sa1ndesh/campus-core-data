
import { useState } from 'react';
import { Search, Plus, Download, Filter, BookOpen, FileText, Video, Presentation, Headphones, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { studyMaterials as initialMaterials, departments, courses, faculty } from '../data/mockData';
import { StudyMaterial } from '../types/database';
import StudyMaterialForm from '../components/StudyMaterialForm';
import { useToast } from '@/hooks/use-toast';

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [materials, setMaterials] = useState(initialMaterials);
  const [filteredMaterials, setFilteredMaterials] = useState(initialMaterials);
  const [showForm, setShowForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters(term, selectedDepartment, selectedType);
  };

  const handleDepartmentFilter = (deptId: string) => {
    setSelectedDepartment(deptId);
    applyFilters(searchTerm, deptId, selectedType);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    applyFilters(searchTerm, selectedDepartment, type);
  };

  const applyFilters = (term: string, deptId: string, type: string) => {
    let filtered = materials.filter(material =>
      material.title.toLowerCase().includes(term.toLowerCase()) ||
      material.description.toLowerCase().includes(term.toLowerCase()) ||
      material.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
    );

    if (deptId) {
      filtered = filtered.filter(material => material.departmentId === deptId);
    }

    if (type) {
      filtered = filtered.filter(material => material.type === type);
    }

    setFilteredMaterials(filtered);
  };

  const handleAddMaterial = (materialData: Omit<StudyMaterial, 'id'>) => {
    const newMaterial: StudyMaterial = {
      ...materialData,
      id: (materials.length + 1).toString()
    };
    
    const updatedMaterials = [...materials, newMaterial];
    setMaterials(updatedMaterials);
    setFilteredMaterials(updatedMaterials);
    setShowForm(false);
    
    toast({
      title: "Study Material Added",
      description: `${newMaterial.title} has been uploaded successfully.`,
    });
  };

  const getDepartmentName = (deptId: string) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.name : 'Unknown';
  };

  const getCourseName = (courseId?: string) => {
    if (!courseId) return 'General';
    const course = courses.find(c => c.id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  const getUploadedByName = (facultyId: string) => {
    const facultyMember = faculty.find(f => f.id === facultyId);
    return facultyMember ? `${facultyMember.firstName} ${facultyMember.lastName}` : 'Unknown';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
      case 'Document':
        return FileText;
      case 'Video':
        return Video;
      case 'Presentation':
        return Presentation;
      case 'Audio':
        return Headphones;
      default:
        return File;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-800';
      case 'Video':
        return 'bg-purple-100 text-purple-800';
      case 'Document':
        return 'bg-blue-100 text-blue-800';
      case 'Presentation':
        return 'bg-green-100 text-green-800';
      case 'Audio':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Study Materials
          </h1>
          <p className="text-gray-600 mt-1">Access and manage study materials for all departments</p>
        </div>
        <Button className="mt-4 sm:mt-0" onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Upload Material
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search materials by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedDepartment}
              onChange={(e) => handleDepartmentFilter(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => handleTypeFilter(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="">All Types</option>
              <option value="PDF">PDF</option>
              <option value="Video">Video</option>
              <option value="Document">Document</option>
              <option value="Presentation">Presentation</option>
              <option value="Audio">Audio</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => {
          const TypeIcon = getTypeIcon(material.type);
          return (
            <div key={material.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <TypeIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getTypeColor(material.type)}`}>
                        {material.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {material.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {material.description}
                </p>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Department:</span>
                    <span className="font-medium text-gray-700">
                      {getDepartmentName(material.departmentId)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Course:</span>
                    <span className="font-medium text-gray-700">
                      {getCourseName(material.courseId)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Uploaded by:</span>
                    <span className="font-medium text-gray-700">
                      {getUploadedByName(material.uploadedBy)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium text-gray-700">{material.fileSize}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span className="font-medium text-gray-700">{material.downloadCount}</span>
                  </div>
                </div>

                {material.tags.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      {material.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {material.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{material.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No study materials found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or upload new materials</p>
        </div>
      )}

      {/* Study Material Form Modal */}
      {showForm && (
        <StudyMaterialForm
          onSubmit={handleAddMaterial}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default StudyMaterials;
