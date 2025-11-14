# Next.js Template

A Next.js project with feature-based architecture, Valtio state management, and comprehensive developer tooling. This template promotes maintainability by separating logic and UI into modular features, inspired by Angular's module pattern while leveraging React and Next.js capabilities.

## Prerequisites

- **Node.js** >= 24.0.0
- **pnpm** >= 10.17.1

Install pnpm if needed:
```bash
npm install -g pnpm
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development

### Code Quality

```bash
# Type checking
pnpm type:check

# Lint and format (Biome + ESLint)
pnpm lint:fix

# Run CI lint checks
pnpm ci:lint
```

The project uses:
- **Biome** for formatting and fast linting
- **ESLint** for additional code quality rules
- **TypeScript** strict mode for type safety

### Testing

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Generate coverage report
pnpm test:coverage
```

Uses [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/). Coverage reports are generated in `coverage/index.html`.

### Build

```bash
# Production build
pnpm build

# Analyze build output
pnpm start
```

Next.js optimizes the build with automatic code splitting, tree shaking, and minification.

## Architecture

Feature-based structure where each module encapsulates related logic and UI components. This approach reduces complexity and enables independent modification of features. See [Valtio State Management](./docs/Valtio.md) for state management patterns.

## Tech Stack

### Core
- [Next.js](https://nextjs.org/) - React framework with SSR and static generation
- [React 19](https://react.dev/) - UI library
- [Valtio](https://valtio.dev/) - Proxy-based state management
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### UI
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Radix UI](https://radix-ui.com/) - Headless component primitives
- [Lucide React](https://lucide.dev/) - Icon library

### Data & Forms
- [TanStack Query](https://tanstack.com/query) - Server state management
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

### Developer Tools
- [Biome](https://biomejs.dev/) - Fast formatter and linter
- [Vitest](https://vitest.dev/) - Unit testing
- [ESLint](https://eslint.org/) - Code quality
