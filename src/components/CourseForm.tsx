
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { departments, faculty } from '../data/mockData';
import { Course } from '../types/database';

interface CourseFormProps {
  onSubmit: (course: Omit<Course, 'id'>) => void;
  onCancel: () => void;
}

const CourseForm = ({ onSubmit, onCancel }: CourseFormProps) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    credits: 0,
    departmentId: '',
    instructorId: '',
    semester: '',
    maxStudents: 0,
    enrolledStudents: 0,
    schedule: '',
    prerequisites: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'credits' || name === 'maxStudents' || name === 'enrolledStudents' ? Number(value) : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="code">Course Code</Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="credits">Credits</Label>
              <Input
                id="credits"
                name="credits"
                type="number"
                min="1"
                max="6"
                value={formData.credits}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="name">Course Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
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
              <Label htmlFor="departmentId">Department</Label>
              <select
                id="departmentId"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              >
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <Label htmlFor="instructorId">Instructor</Label>
              <select
                id="instructorId"
                name="instructorId"
                value={formData.instructorId}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              >
                <option value="">Select Instructor</option>
                {faculty.map(member => (
                  <option key={member.id} value={member.id}>
                    {member.firstName} {member.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="semester">Semester</Label>
              <Input
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                placeholder="e.g., Fall 2024"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="maxStudents">Max Students</Label>
              <Input
                id="maxStudents"
                name="maxStudents"
                type="number"
                min="1"
                value={formData.maxStudents}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="schedule">Schedule</Label>
            <Input
              id="schedule"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              placeholder="e.g., MWF 9:00-10:00 AM"
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              Add Course
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
