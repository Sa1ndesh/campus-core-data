
# Campus Core Data Management System

A comprehensive web application for managing campus data including students, faculty, courses, departments, and study materials.

## 🚀 Features

- **Student Management**: Add, view, and manage student records with enrollment details
- **Faculty Management**: Track faculty information, departments, and contact details  
- **Course Management**: Organize courses with credit hours, descriptions, and department assignments
- **Department Management**: Manage academic departments and their details
- **Study Materials**: Upload and organize study materials by department and type
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui components
- **Real-time Search**: Filter and search across all data types
- **Dashboard Analytics**: Visual overview of campus statistics

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Charts**: Recharts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd campus-core-data
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Main layout component
│   ├── StudentForm.tsx # Student form component
│   └── ...             # Other form components
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Students.tsx    # Student management
│   └── ...             # Other pages
├── data/               # Mock data and utilities
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🎯 Usage Examples

### Adding a New Student

1. Navigate to the Students page
2. Click "Add New Student"
3. Fill in the required information
4. Click "Add Student" to save

### Managing Study Materials

1. Go to Study Materials section
2. Use filters to find specific materials by department or type
3. Add new materials using the "Add Study Material" form
4. Search through materials using the search bar

### Viewing Dashboard Analytics

The dashboard provides visual insights including:
- Total counts for students, faculty, courses, and departments
- Distribution charts
- Recent activity summaries

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_APP_TITLE=Campus Core Data
VITE_API_URL=your_api_url_here
```

### Customizing the Theme

The application uses Tailwind CSS. Modify `tailwind.config.ts` to customize colors, fonts, and spacing.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure build settings (Vite preset)
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy via Lovable

Simply click the "Publish" button in the Lovable editor to deploy instantly.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for existing problems
2. Create a new issue if your problem isn't listed
3. Join our community discussions

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📊 Project Status

![Build Status](https://github.com/yourusername/campus-core-data/workflows/CI/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

---

**Happy coding!** 🎉
