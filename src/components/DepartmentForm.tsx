
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { faculty } from '../data/mockData';
import { Department } from '../types/database';

interface DepartmentFormProps {
  onSubmit: (department: Omit<Department, 'id'>) => void;
  onCancel: () => void;
}

const DepartmentForm = ({ onSubmit, onCancel }: DepartmentFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    headId: '',
    establishedYear: new Date().getFullYear(),
    building: '',
    totalStudents: 0,
    totalFaculty: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'establishedYear' || name === 'totalStudents' || name === 'totalFaculty' 
        ? Number(value) : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Department</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Department Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="code">Department Code</Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="e.g., CS, MATH"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="headId">Department Head</Label>
              <select
                id="headId"
                name="headId"
                value={formData.headId}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="">Select Department Head (Optional)</option>
                {faculty.map(member => (
                  <option key={member.id} value={member.id}>
                    {member.firstName} {member.lastName}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <Label htmlFor="building">Building</Label>
              <Input
                id="building"
                name="building"
                value={formData.building}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="establishedYear">Established Year</Label>
              <Input
                id="establishedYear"
                name="establishedYear"
                type="number"
                min="1800"
                max={new Date().getFullYear()}
                value={formData.establishedYear}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="totalStudents">Total Students</Label>
              <Input
                id="totalStudents"
                name="totalStudents"
                type="number"
                min="0"
                value={formData.totalStudents}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="totalFaculty">Total Faculty</Label>
              <Input
                id="totalFaculty"
                name="totalFaculty"
                type="number"
                min="0"
                value={formData.totalFaculty}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              Add Department
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
