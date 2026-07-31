# Zeeshan Haider - Portfolio Website

A professional portfolio website built with [Astro](https://astro.build/) showcasing the expertise and experience of Zeeshan Haider, an IT & Cyber Security Engineer based in Dubai, UAE.

![Node Version](https://img.shields.io/badge/node-%3E%3D22.12.0-brightgreen)
![Astro](https://img.shields.io/badge/Astro-5.1.4-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-38bdf8)

## 🚀 Features

- **Multi-language Support**: Available in English, Arabic, French, Urdu, Pashto, and Chinese
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Interactive Components**: 
  - Dynamic navigation with theme switcher (dark/light mode)
  - Skills visualization with interactive charts
  - Terminal-style command playground
  - QR code generation for contact sharing
  - Konami code easter egg
- **Professional Sections**:
  - Hero section with contact information
  - About Me
  - Technical Skills categorized by domain
  - Work Experience with achievements
  - Education background
  - Certifications
  - Projects showcase
  - Blog section
- **SEO Optimized**: Sitemap generation included
- **Admin Dashboard**: Protected admin area for content management

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript
- **Additional Libraries**:
  - Cytoscape.js - Network/graph visualization
  - jsPDF - PDF generation for CV download
  - QR Code Styling - Custom QR code generation
  - @astrojs/sitemap - Automatic sitemap generation

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and SVGs
│   ├── components/        # Reusable Astro components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Welcome.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   ├── ThemeSwitcher.astro
│   │   ├── SystemStatus.astro
│   │   └── KonamiEgg.astro
│   ├── content/           # Content collections
│   ├── data/              # JSON data files (multi-language)
│   │   ├── en/            # English content
│   │   ├── ar/            # Arabic content
│   │   ├── fr/            # French content
│   │   ├── ur/            # Urdu content
│   │   ├── ps/            # Pashto content
│   │   └── zh/            # Chinese content
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Home page
│   │   ├── blog/          # Blog section
│   │   ├── projects/      # Projects showcase
│   │   ├── certifications/
│   │   ├── playground/    # Interactive terminal
│   │   └── admin/         # Admin dashboard
│   └── styles/            # Global CSS
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install all dependencies                         |
| `npm run dev`             | Start development server at `localhost:4321`     |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help with Astro CLI                          |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.12.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd zxsprd-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The production files will be in the `./dist/` directory.

## 🌐 Multi-language Support

The portfolio supports multiple languages. Language-specific content is stored in `/src/data/[lang]/` directories:

- `en` - English (default)
- `ar` - Arabic
- `fr` - French
- `ur` - Urdu
- `ps` - Pashto
- `zh` - Chinese

Access language versions via routes: `/en`, `/ar`, `/fr`, `/ur`, `/ps`, `/zh`

## 📄 Content Configuration

Update personal information by editing the JSON files in `/src/data/[lang]/`:

- `profile.json` - Personal details, hero section
- `skills.json` - Technical skills
- `experience.json` - Work history
- `education.json` - Educational background
- `certifications.json` - Professional certifications
- `links.json` - Social media and contact links

## 🔒 Admin Access

The admin dashboard is available at `/admin`. Configure authentication credentials in your environment variables or deployment settings.

## 📱 Special Features

### Terminal Playground
Visit `/playground` to interact with a simulated Linux terminal featuring common commands.

### QR Code Generator
Generate custom QR codes for easy contact sharing.

### Downloadable CV
Visitors can download a PDF version of the CV using jsPDF integration.

## 📞 Contact

**Zeeshan Haider**  
📍 Dubai, UAE  
📧 zeeshan.haider28@gmail.com  
📱 +971 58 203 5980  
🔗 [LinkedIn](https://linkedin.com/in/zeeshan2022)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and assets from various open-source libraries
