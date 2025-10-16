# Santa Rosa Landing Page - Astro & TailwindCSS

A modern, server-rendered landing page showcasing Santa Rosa, California, built with Astro and TailwindCSS. This project demonstrates best practices for SEO, performance, and responsive design.

## 🌟 Features

- **Server-Side Rendering (SSR)**: Built with Astro for optimal performance and SEO
- **Dynamic Content**: Page content driven by JSON data, easily updatable
- **Responsive Design**: Mobile-first approach using TailwindCSS utilities
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Semantic HTML**: Proper HTML5 structure for accessibility and SEO
- **Component Architecture**: Reusable Astro components for maintainability

## 🏗️ Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro          # Reusable card component
│   │   ├── Hero.astro          # Hero section component
│   │   └── FinalSection.astro  # Final CTA section component
│   ├── data/
│   │   └── content.json        # Page content data (Santa Rosa info)
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with SEO tags
│   └── pages/
│       └── index.astro         # Main landing page
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # TailwindCSS configuration
└── package.json                # Project dependencies
```

## 🎨 Design Decisions

### 1. **Astro Framework**
- **Why**: Zero JavaScript by default, excellent for content-focused pages
- **Benefits**: 
  - Fastest possible page loads (static HTML)
  - SEO-friendly out of the box
  - Server-side rendering with no client-side hydration needed
  - Built-in component model similar to other modern frameworks

### 2. **TailwindCSS**
- **Why**: Utility-first CSS framework for rapid, consistent styling
- **Benefits**:
  - Responsive design with mobile-first utilities
  - Small bundle size (only used classes are included)
  - No CSS specificity conflicts
  - Highly customizable design system

### 3. **JSON Data Structure**
- **Why**: Separation of content from presentation
- **Benefits**:
  - Easy content updates without touching code
  - Can be replaced with API calls or CMS integration
  - Type-safe with TypeScript interfaces
  - Centralizes all page content in one place

### 4. **Component Architecture**
Each section is isolated into reusable components:
- **Hero**: Gradient background, prominent CTA
- **Card**: Consistent card design for feature sections
- **FinalSection**: Full-width background image with overlay

### 5. **SEO Implementation**
Comprehensive SEO tags including:
- Primary meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Robots directives
- Semantic HTML5 elements (section, article, nav)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

The site will be available at `http://localhost:4321` (or the port shown in your terminal).

### Available Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run TypeScript and Astro checks |

## 📝 Updating Content

### Option 1: Edit JSON File (Recommended)
Update `src/data/content.json` with your desired content:

```json
{
  "hero": {
    "title": "Your Custom Title",
    "subtitle": "Your Subtitle",
    "description": "Your description text",
    "ctaText": "Button Text",
    "ctaLink": "#section-id"
  },
  "cards": [
    {
      "title": "Feature 1",
      "description": "Description text",
      "buttonText": "Learn More",
      "buttonLink": "#link",
      "icon": "🎨"
    }
  ],
  "finalSection": {
    "heading": "Your CTA Heading",
    "subheading": "Supporting text",
    "backgroundImage": "https://your-image-url.com/image.jpg"
  },
  "seo": {
    "title": "Page Title | Your Brand",
    "description": "Meta description for SEO",
    "keywords": "keyword1, keyword2, keyword3"
  }
}
```

### Option 2: Replace with API Data
Modify `src/pages/index.astro` to fetch from an API:

```astro
---
// Replace static import with API fetch
// import contentData from '../data/content.json';

const response = await fetch('https://your-api.com/content');
const contentData = await response.json();

const { hero, cards, finalSection, seo } = contentData;
---
```

### Option 3: Use Environment Variables
For URLs or dynamic values:

```astro
---
const API_URL = import.meta.env.PUBLIC_API_URL;
const response = await fetch(`${API_URL}/content`);
---
```

## 🎯 Page Sections

### 1. Hero Section
- **Purpose**: Eye-catching introduction with clear value proposition
- **Features**: Gradient background, large typography, prominent CTA button
- **Responsive**: Scales from mobile to desktop seamlessly

### 2. Card Grid Section
- **Layout**: Three-column grid (stacks on mobile)
- **Content**: Each card has icon, title, description, and action button
- **Purpose**: Highlight key features or benefits

### 3. Final Section
- **Purpose**: Strong closing CTA with visual impact
- **Features**: Full-width background image, centered text, overlay for readability
- **Use Case**: Encourages user action before page exit

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the ./dist/ folder to Netlify
```

### Deploy to Any Static Host
```bash
npm run build
```
Upload the contents of the `./dist/` folder to your hosting provider.

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.mjs` to customize the color palette:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import it in `src/pages/index.astro`
3. Add corresponding data to `src/data/content.json`

### Modifying Layout
Edit `src/layouts/Layout.astro` to change global HTML structure or add additional meta tags.

## 📊 Performance

Astro's architecture delivers exceptional performance:
- **Zero JavaScript** by default (only HTML/CSS sent to browser)
- **Instant page loads** with server-side rendering
- **Optimized images** when using Astro's Image component
- **Minimal CSS** with TailwindCSS purging unused styles

## ♿ Accessibility

- Semantic HTML5 elements for screen readers
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where appropriate
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available for use and modification.

## 🆘 Troubleshooting

### Port Already in Use
If port 4321 is busy, Astro will automatically use the next available port.

### Styles Not Updating
1. Stop the dev server
2. Delete `node_modules/.vite` cache
3. Restart with `npm run dev`

### Build Errors
Run `npm run astro check` to identify TypeScript or Astro-specific errors.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Built with ❤️ using Astro and TailwindCSS**
