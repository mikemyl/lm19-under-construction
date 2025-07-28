# LM19 Interior Design Studio Website

## Project Overview
Building a modern, minimalist website for LM19 Interior Design Studio based on provided design mockups. This is a portfolio-style website showcasing interior design projects with clean aesthetics and professional presentation.

## Design Analysis
- **Style**: Minimalist, clean, modern aesthetic
- **Color Palette**: Neutral tones (whites, beiges, natural wood)
- **Typography**: Clean, sans-serif fonts with strong contrast
- **Layout**: Grid-based layout with generous white space
- **Key Sections**: Home, About, Projects (portfolio), Contact
- **Special Features**: Project galleries, contact information, social links

## Technical Decisions Made

### Framework & Technology Stack
- **Frontend**: Next.js (latest) with TypeScript
- **Styling**: Tailwind CSS 
- **CMS**: Contentful (to be integrated later)
- **Approach**: Static-first development, then CMS integration

### Why Next.js?
- Static site generation perfect for CMS content
- Built-in image optimization (crucial for design portfolios)
- Excellent Contentful integration
- Strong SEO optimization
- Large ecosystem and TypeScript support

### Development Approach
**Phase 1**: Static Website
1. Build all pages with sample/hardcoded content
2. Perfect design and responsive layout
3. Test user experience and performance

**Phase 2**: CMS Integration
1. Set up Contentful space and content models
2. Replace static content with dynamic CMS content
3. Add content management capabilities

## Project Structure
Based on design mockups, the site will have:

1. **Homepage**: Hero section, project previews, about snippet, contact info
2. **About Page**: Team info, company description, approach
3. **Projects Page**: Portfolio gallery with project details
4. **Individual Project Pages**: Detailed project showcases
5. **Contact Page**: Contact form and information

## Current Status
- ✅ Design analysis complete
- ✅ Technical architecture planned
- 🔄 Ready to start development (Phase 1: Static site)

## Next Steps
1. Set up Next.js project with Tailwind CSS
2. Build homepage layout matching design
3. Create about, projects, and contact pages
4. Implement responsive design
5. Test and refine
6. Later: Integrate Contentful CMS

## Key Design Elements to Implement
- Minimalist navigation with hamburger menu
- Large hero images
- Grid-based project galleries
- Clean typography hierarchy
- Responsive image galleries
- Contact form with Greek phone number (+30 697 2695447)
- Social media integration (Instagram)
- Professional illustration/branding elements

## Development Commands
```bash
# Setup (using latest Next.js with Tailwind)
npx create-next-app@latest lm19-website --typescript --eslint --tailwind --app

# Development
npm run dev

# Build
npm run build

# Lint/Type check (to be confirmed after setup)
npm run lint
npm run type-check
```