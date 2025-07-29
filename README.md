# Sampada VR Specialty Eye Care - Astro Website

A modern, responsive website for Sampada VR Specialty Eye Care, built with Astro and Tailwind CSS.

## 🏥 About

This website showcases the services and expertise of Sampada VR Specialty Eye Care, a specialized retinal care facility. The site features information about treatments, the medical team, and patient resources.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Navigation header
│   ├── Footer.astro    # Site footer
│   └── Hero.astro      # Hero section component
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout wrapper
└── pages/              # Astro pages (routes)
    ├── index.astro     # Homepage
    ├── about/          # About us page
    ├── about-dr-sameera-v-v/  # Doctor profile
    ├── treatments/     # Services page
    ├── contact-us/     # Contact page
    ├── why-sampada-vr/ # Why choose us
    └── blog/           # Blog page

public/                 # Static assets
├── favicon.svg         # Site icon
└── wp-content/         # Images and media

dist/                   # Built site (production)
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Static site generation for optimal speed
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design
- **Modern UI**: Clean, professional interface
- **Interactive Elements**: FAQ sections, contact forms, navigation

## 📋 Pages

1. **Homepage** (`/`) - Main landing page with hero section and overview
2. **About Us** (`/about/`) - Information about the clinic and team
3. **About Dr. Sameera V V** (`/about-dr-sameera-v-v/`) - Doctor's profile and expertise
4. **Treatments** (`/treatments/`) - Available services and procedures
5. **Contact Us** (`/contact-us/`) - Contact information and appointment booking
6. **Why Sampada VR** (`/why-sampada-vr/`) - Unique value proposition
7. **Blog** (`/blog/`) - Educational content and updates

## 🛠️ Technology Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 🚀 Deployment

### Static Hosting
Upload the contents of the `dist/` folder to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

### Full Project
Upload the entire project and run build commands on the server.

## 🔧 Customization

### Colors
Edit `tailwind.config.mjs` to modify the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

### Content
- **Pages**: Edit files in `src/pages/`
- **Components**: Edit files in `src/components/`
- **Layout**: Edit `src/layouts/Layout.astro`
- **Images**: Replace files in `public/`

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary to Sampada VR Specialty Eye Care.

---

**Built with ❤️ using Astro & Tailwind CSS**
