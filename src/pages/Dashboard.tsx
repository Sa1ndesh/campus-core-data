
import { 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  Building2,
  TrendingUp,
  Calendar,
  Users,
  Award
} from 'lucide-react';
import StatCard from '../components/StatCard';
import { students, courses, faculty, departments } from '../data/mockData';

const Dashboard = () => {
  const totalStudents = students.length;
  const totalCourses = courses.length;
  const totalFaculty = faculty.length;
  const totalDepartments = departments.length;
  
  const activeStudents = students.filter(s => s.status === 'active').length;
  const averageGPA = students.reduce((sum, s) => sum + s.gpa, 0) / students.length;

  const recentActivities = [
    { id: 1, type: 'enrollment', message: 'John Doe enrolled in CS201', time: '2 hours ago' },
    { id: 2, type: 'course', message: 'New course "Machine Learning" added', time: '1 day ago' },
    { id: 3, type: 'faculty', message: 'Dr. Sarah Johnson updated office hours', time: '2 days ago' },
    { id: 4, type: 'department', message: 'Computer Science department statistics updated', time: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to College Database</h1>
        <p className="text-blue-100">
          Manage students, courses, faculty, and departments all in one place
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={GraduationCap}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Courses"
          value={totalCourses}
          icon={BookOpen}
          color="green"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Faculty Members"
          value={totalFaculty}
          icon={UserCheck}
          color="purple"
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="Departments"
          value={totalDepartments}
          icon={Building2}
          color="orange"
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-gray-900">{activeStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Average GPA</p>
              <p className="text-2xl font-bold text-gray-900">{averageGPA.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-600">Enrollment Rate</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Recent Activities
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
