# Santa Rosa Landing Page - Astro & TailwindCSS

## Overview

A modern, server-rendered landing page showcasing Santa Rosa, California. Built with Astro framework and TailwindCSS, this project prioritizes performance, SEO, and responsive design. The application uses a component-based architecture with JSON-driven content, making it easy to update page information without modifying code. The site is optimized for fast loading times through static HTML generation with zero JavaScript by default.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Technology**: Astro v4.5.16 with TypeScript
- **Rationale**: Astro provides server-side rendering with zero JavaScript by default, resulting in the fastest possible page loads. This is ideal for content-focused landing pages where interactivity is minimal.
- **Key Benefits**: 
  - Static HTML generation for optimal performance
  - Built-in SEO optimization
  - Component-based architecture similar to React/Vue but without client-side hydration overhead

### Styling System
- **Technology**: TailwindCSS v3.4.18 with Astro integration (@astrojs/tailwind)
- **Rationale**: Utility-first CSS framework enables rapid development with consistent styling and automatic purging of unused styles
- **Approach**: Mobile-first responsive design using Tailwind's breakpoint system

### Content Management
- **Strategy**: JSON-driven content (src/data/content.json)
- **Structure**: Centralized content file containing all page text, CTAs, and configuration
- **Benefit**: Non-developers can update page content without touching component code

### Component Architecture
- **Pattern**: Astro component model with .astro files
- **Key Components**:
  - `Layout.astro`: Base layout wrapper with SEO meta tags, Open Graph, and Twitter Card support
  - `Hero.astro`: Landing page hero section component
  - `Card.astro`: Reusable card component for feature displays
  - `FinalSection.astro`: Call-to-action closing section
- **Data Flow**: Components receive props from index page, which sources from content.json

### Build System
- **Configuration**: TypeScript strict mode enabled via astro/tsconfigs/strict
- **Build Process**: `astro check` for type validation followed by `astro build` for production
- **Development**: Hot module replacement via `astro dev` command

### Project Structure
```
src/
├── components/     # Reusable UI components
├── data/          # JSON content files
├── layouts/       # Base page layouts
└── pages/         # Route pages (index.astro)
```

## External Dependencies

### Core Framework Dependencies
- **astro**: v4.5.16 - Core SSR framework and build system
- **@astrojs/tailwind**: v6.0.2 - Official Tailwind integration for Astro
- **tailwindcss**: v3.4.18 - Utility-first CSS framework

### Development Tools
- **@astrojs/check**: v0.5.10 - Type checking and diagnostics for Astro projects
- **typescript**: v5.4.4 - Type safety and development experience

### External Services
- **Unsplash API**: Used for background images (referenced in content.json)
- **CDN**: Images loaded from images.unsplash.com with query parameters for optimization

### Build & Runtime Requirements
- **Node.js**: Required for build process (version unspecified in package.json)
- **No Database**: This is a static site with no database requirements
- **No Authentication**: Public-facing landing page with no auth mechanisms
- **No Backend API**: Purely static site generated at build time