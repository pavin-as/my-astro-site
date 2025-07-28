# My Astro Website

A modern, fast, and secure static website built with [Astro](https://astro.build). This project demonstrates how to create a professional website with excellent performance, security, and user experience.

## 🚀 Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance
- **🔒 Secure**: Static site with no server-side vulnerabilities
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **🌐 SEO Optimized**: Built-in SEO features and meta tags
- **🚀 Easy Deployment**: Automatic deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: CSS with modern features (Grid, Flexbox, Custom Properties)
- **Deployment**: GitHub Pages with GitHub Actions
- **Performance**: Optimized for Core Web Vitals

## 📁 Project Structure

```
my-astro-site/
├── src/
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── about.astro      # About page
│       └── contact.astro    # Contact page
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── astro.config.mjs         # Astro configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-astro-site.git
   cd my-astro-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🏗️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro ...` - Run Astro CLI commands

### Project Configuration

The project is configured for GitHub Pages deployment. Update the following in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io', // Your GitHub username
  base: '/my-astro-site', // Your repository name
  build: {
    assets: 'assets'
  }
});
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/ (root)` folder
   - Click Save

3. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/my-astro-site`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to your hosting provider**
   - Upload the contents of the `dist` folder to your web server
   - Configure your server to serve static files

## 🎨 Customization

### Styling

The project uses modern CSS with:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- Smooth transitions and animations
- Mobile-first responsive design

### Content

Update the content in the `.astro` files:
- `src/pages/index.astro` - Homepage content
- `src/pages/about.astro` - About page content
- `src/pages/contact.astro` - Contact page content

### Colors and Branding

Update the color scheme by modifying CSS custom properties in the style sections:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #2c3e50;
  --light-text: #5a6c7d;
}
```

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with call-to-action buttons
- Feature highlights with icons
- About preview section
- Modern, engaging design

### About Page (`/about`)
- Company story and mission
- Team member profiles
- Company values
- Call-to-action section

### Contact Page (`/contact`)
- Contact form with validation
- Multiple contact methods
- FAQ section
- Social media links

## 🔧 Configuration

### SEO Settings

Each page includes proper meta tags for SEO:
- Title and description
- Open Graph tags
- Viewport settings
- Favicon

### Performance Optimization

- Optimized images and assets
- Minimal JavaScript (Astro's "zero JS by default" approach)
- Efficient CSS with modern features
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help:

- 📧 Email: contact@example.com
- 📱 Phone: +1 (555) 123-4567
- 💬 Create an issue on GitHub

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons from [Emoji](https://emojipedia.org/)

---

**Built with ❤️ using Astro**
