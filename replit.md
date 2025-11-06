# GutShot - The Digital Kitchen

## Overview

GutShot is a cinematic digital kitchen website showcasing the art of food preservation through Southeast Asian street food culture. Built as a single-page marketing site, it presents a chef's rebellion against traditional restaurant service, focusing on creating video content and trophy dishes rather than running a physical storefront. The site features bold, street-culture inspired design with neon aesthetics, smoke effects, and dramatic visual storytelling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Single-page application using Wouter for client-side routing with GitHub Pages deployment support (custom 404 redirect handling for SPA compatibility).

**Component Strategy**: Modular section-based architecture where each major page section is a standalone component (Hero, BrandStory, ThreePillars, ContentStrategy, RevolutionStatement, Merch, CallToAction, Footer). This enables easy reordering and testing through component examples.

**UI Library**: Extensive use of shadcn/ui components built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling.

**State Management**: React Query (TanStack Query) for server state with simple local state via React hooks. Toast notifications for user feedback.

### Design System

**Typography**: 
- Primary display font: Bebas Neue (bold, condensed, uppercase for headlines)
- Secondary font: Inter (clean, modern for body text)
- Hierarchy emphasizes dramatic, street-culture aesthetic

**Color Scheme**: Dark theme with neon accents (ember orange, teal, yellow) creating cinematic atmosphere. Custom CSS variables for theme consistency.

**Visual Effects**: Custom CSS classes for neon glows, ember effects, lantern lighting, and animated logo pulses create immersive brand experience.

**Layout**: Full-width sections with inner containers (max-w-7xl), asymmetric grids, and extensive use of Tailwind spacing utilities for rhythm.

### Backend Architecture

**Server Framework**: Express.js with TypeScript serving as API backend.

**Development Mode**: Vite middleware integration for hot module replacement during development.

**Production Build**: Static site generation for client, bundled server output using esbuild.

**Storage Interface**: Abstract storage layer (IStorage) currently implemented with in-memory storage (MemStorage) for user data. Ready for database integration.

**Session Management**: Infrastructure for connect-pg-simple sessions present, though authentication not currently implemented.

### Data Layer

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in shared directory.

**Schema**: Basic user table defined (id, username, password) as foundation, though not actively used in current marketing site implementation.

**Database Provider**: Configured for Neon serverless PostgreSQL (via @neondatabase/serverless).

**Migrations**: Drizzle Kit configured with migrations output to ./migrations directory.

### Build & Deployment

**Build Process**: 
- Client: Vite builds to dist/public
- Server: esbuild bundles to dist/index.js
- Two build configurations: standard (vite.config.ts) and GitHub Pages (vite.config.pages.ts)

**Base Path**: Configured for GitHub Pages deployment at `/GutShotKitchenWebsite/` path.

**Static Assets**: Images stored in attached_assets directory with alias @assets for imports.

**Development Plugins**: Replit-specific plugins for error overlay, cartographer, and dev banner in development mode.

### Asset Management

**Images**: Generated images for each section stored in attached_assets/generated_images with descriptive naming.

**Logo**: Custom GutShot deer logo used throughout site.

**Favicon**: Complete favicon set (multiple sizes, manifest) for brand consistency.

**Fonts**: Google Fonts (Bebas Neue, Inter) loaded via link tags in HTML.

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Complete suite of accessible, unstyled component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component system configured via components.json
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **class-variance-authority**: For component variant management
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel functionality
- **lucide-react**: Icon library

### Data & Forms
- **TanStack Query**: Server state management (@tanstack/react-query)
- **React Hook Form**: Form handling (@hookform/resolvers)
- **Zod**: Schema validation (used with drizzle-zod)
- **date-fns**: Date manipulation utilities

### Database & Backend
- **Drizzle ORM**: TypeScript ORM (drizzle-orm, drizzle-zod, drizzle-kit)
- **Neon Serverless**: PostgreSQL provider (@neondatabase/serverless)
- **Express**: Web server framework
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across full stack
- **tsx**: TypeScript execution for server
- **Wouter**: Lightweight routing library
- **Replit Plugins**: Development enhancement tools (@replit/vite-plugin-*)

### Styling
- **PostCSS**: CSS processing with autoprefixer
- **Tailwind Merge**: Utility class merging
- **clsx**: Conditional class names