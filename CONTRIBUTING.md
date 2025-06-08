
# Contributing to Campus Core Data Management System

Thank you for your interest in contributing to our campus management system! We welcome contributions from developers of all skill levels.

## 🎯 Ways to Contribute

- 🐛 **Bug Reports**: Help us identify and fix issues
- 💡 **Feature Requests**: Suggest new functionality
- 📝 **Documentation**: Improve our docs and examples
- 🔧 **Code Contributions**: Submit bug fixes and new features
- 🎨 **UI/UX Improvements**: Enhance the user experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setting Up Your Development Environment

1. **Fork the repository**
   - Click the "Fork" button on the GitHub repository page
   - Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/campus-core-data.git
   cd campus-core-data
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

We use the following conventions:

- **TypeScript**: All new code should be written in TypeScript
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS for styling
- **Naming**: Use PascalCase for components, camelCase for functions and variables
- **File Structure**: Keep components small and focused

### Component Guidelines

```typescript
// Good: Small, focused component
const StudentCard = ({ student }: { student: Student }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{student.name}</h3>
      <p className="text-gray-600">{student.email}</p>
    </div>
  );
};

// Avoid: Large, complex components
// Break them down into smaller, reusable pieces
```

### State Management

- Use React Query for server state
- Use React hooks for local component state
- Keep state as close to where it's used as possible

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design (mobile-first approach)
- Use shadcn/ui components when possible

## 🐛 Reporting Bugs

Before creating a bug report, please:

1. **Search existing issues** to avoid duplicates
2. **Use the latest version** to ensure the bug still exists
3. **Provide detailed information** about the bug

### Bug Report Template

```markdown
## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Screenshots
If applicable, add screenshots.

## Environment
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome, Firefox, Safari]
- Version: [e.g., 1.0.0]
```

## 💡 Suggesting Features

We love feature suggestions! Please:

1. **Check existing feature requests** first
2. **Explain the use case** clearly
3. **Describe the proposed solution**
4. **Consider the scope** - smaller features are easier to implement

### Feature Request Template

```markdown
## Feature Description
A clear description of the feature you'd like to see.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How do you envision this feature working?

## Alternatives Considered
Any alternative solutions you've considered.

## Additional Context
Screenshots, mockups, or examples.
```

## 🔧 Making Code Contributions

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following our guidelines
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Submit a pull request**

### Pull Request Guidelines

- **Keep PRs focused**: One feature or fix per PR
- **Write clear commit messages**: Use conventional commit format
- **Add tests**: Include tests for new functionality
- **Update docs**: Update relevant documentation
- **Follow the template**: Use our PR template

### Commit Message Format

We use [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

feat(students): add bulk import functionality
fix(forms): resolve validation error handling
docs(readme): update installation instructions
style(ui): improve button hover states
refactor(api): simplify data fetching logic
test(utils): add unit tests for helper functions
```

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] I have tested these changes locally
- [ ] I have added tests for new functionality
- [ ] All existing tests pass

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors or warnings
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for utility functions
- Write integration tests for components
- Use React Testing Library for component tests
- Aim for good test coverage but focus on quality over quantity

## 📚 Documentation

### Updating Documentation

- Keep README.md up to date
- Add JSDoc comments for complex functions
- Update type definitions when needed
- Include examples for new features

### Documentation Style

- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Keep it up to date with code changes

## 🏷️ Release Process

We follow semantic versioning (SemVer):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## 🤝 Community

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and considerate
- Use inclusive language
- Focus on constructive feedback
- Help others learn and grow

### Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Discord**: For real-time chat (if available)

## 🎉 Recognition

Contributors are recognized in:

- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to Campus Core Data Management System! 🚀

---

**Questions?** Feel free to open an issue or start a discussion. We're here to help!
