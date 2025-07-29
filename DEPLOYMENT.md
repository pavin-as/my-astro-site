# Sampada VR - Astro Site Deployment Guide

## 🚀 Quick Start

This is a clean deployment package for the Sampada VR Specialty Eye Care website, converted from WordPress to Astro.

## 📁 Package Contents

```
sampada-vr-deployment/
├── src/                    # ✅ Source code (Astro pages & components)
├── public/                 # ✅ Public assets
├── dist/                   # ✅ Built site (ready for deployment)
├── package.json            # ✅ Dependencies
├── package-lock.json       # ✅ Lock file
├── astro.config.mjs        # ✅ Astro configuration
├── tailwind.config.mjs     # ✅ Tailwind CSS configuration
├── tsconfig.json           # ✅ TypeScript configuration
├── .gitignore              # ✅ Git ignore rules
├── README.md               # ✅ Project documentation
└── DEPLOYMENT.md           # ✅ This file
```

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)
**For: Netlify, Vercel, GitHub Pages, AWS S3, etc.**

Simply upload the contents of the `dist/` folder to your web server.

```bash
# The dist/ folder contains:
dist/
├── index.html              # Homepage
├── about/                  # About page
├── about-dr-sameera-v-v/   # Doctor profile
├── treatments/             # Treatments page
├── contact-us/             # Contact page
├── why-sampada-vr/         # Why choose us
├── blog/                   # Blog page
├── assets/                 # CSS, JS, images
└── favicon.svg             # Site icon
```

### Option 2: Full Project Deployment
**For: GitHub, GitLab, etc.**

Upload the entire package and run build commands.

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview locally (optional)
npm run preview
```

## 📋 Available Pages

1. **Homepage** - `/`
2. **About Us** - `/about/`
3. **About Dr. Sameera V V** - `/about-dr-sameera-v-v/`
4. **Treatments** - `/treatments/`
5. **Contact Us** - `/contact-us/`
6. **Why Sampada VR** - `/why-sampada-vr/`
7. **Blog** - `/blog/`

## 🛠️ Development Commands

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

## 🎨 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI/UX** - Clean, professional design
- ✅ **Fast Performance** - Static site generation
- ✅ **SEO Optimized** - Proper meta tags and structure
- ✅ **Accessible** - WCAG compliant
- ✅ **Cross-browser Compatible** - Works on all modern browsers

## 🔧 Customization

### Colors
Edit `tailwind.config.mjs` to change the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
- **Pages**: Edit files in `src/pages/`
- **Components**: Edit files in `src/components/`
- **Layout**: Edit `src/layouts/Layout.astro`
- **Images**: Replace files in `public/`

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary to Sampada VR Specialty Eye Care.

---

**Built with ❤️ using Astro & Tailwind CSS** 