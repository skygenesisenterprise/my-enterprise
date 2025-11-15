# AGENTS.md

## Commands
- **Development**: `pnpm dev` (runs Next.js with Turbopack)
- **Build**: `pnpm build` (production build with Turbopack)
- **Lint**: `pnpm lint` (ESLint with Next.js config)
- **Start**: `pnpm start` (production server)

## Code Style Guidelines

### Imports & Formatting
- Use absolute imports with `@/*` path alias (configured in tsconfig.json)
- Follow Next.js App Router structure
- Use Tailwind CSS v4 for styling
- ESLint config extends `next/core-web-vitals` and `next/typescript`

### TypeScript
- Strict mode enabled
- Use proper typing for all components and functions
- Import types with `import type` when possible

### Naming Conventions
- Components: PascalCase
- Files: kebab-case for utilities, PascalCase for components
- Use descriptive variable names

### Error Handling
- Use proper TypeScript error boundaries
- Handle async operations with try-catch blocks
- Return proper error responses from API routes

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `api/` - Backend API endpoints
- `public/` - Static assets
- Use Tailwind CSS classes for all styling