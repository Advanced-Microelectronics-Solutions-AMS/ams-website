# AMS - Asset Management Revolution Website

A modern, responsive website for Advanced Microelectronic Solutions (AMS), showcasing their innovative IoT solutions and facility management technologies.

## 🚀 Live Demo

Visit the live website: [AMS Asset Management Revolution](https://your-username.github.io/ams-website/)

## 📋 About

This website represents Advanced Microelectronic Solutions (AMS), a Malaysian company specializing in innovative engineering & IT solutions focused on facility management operations. The site showcases their comprehensive asset management ecosystem including EAM, CMMS, and IoT integration platforms.

## ✨ Features

- **Modern Design**: Clean, professional interface with server room imagery
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations and hover effects
- **Success Stories**: Showcasing major client deployments (Northport, KPJ Healthcare, UOA Group, Sunway)
- **Technology Partners**: Highlighting partnerships with industry leaders
- **Contact Form**: Professional contact form for lead generation

## 🛠 Technology Stack

- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with automated CI/CD

## 🏗 Project Structure

```
ams-website/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── public/             # Public assets
├── .github/workflows/  # GitHub Actions for deployment
└── dist/              # Production build output
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ams-website.git
cd ams-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

1. Build the project:
```bash
pnpm run build
```

2. Deploy the `dist/` folder to your hosting provider.

## 🎨 Design Features

### Color Palette
- **Primary**: Deep navy blue (#1a237e)
- **Secondary**: Bright blue (#2196f3)
- **Accent**: Cyan (#00bcd4)
- **Background**: White and light gray

### Key Sections
1. **Hero Section**: Stunning server room background with clear value proposition
2. **Company Overview**: Three-pillar approach to facility management
3. **Core Solutions**: EAM, CMMS, and IoT integration platforms
4. **Success Stories**: Real client case studies with metrics
5. **Technology Partners**: Industry-leading partnerships
6. **Contact Form**: Professional lead generation form

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🔧 Customization

### Updating Content

1. **Company Information**: Edit the content in `src/App.jsx`
2. **Images**: Replace images in `src/assets/`
3. **Styling**: Modify `src/App.css` or Tailwind classes
4. **Components**: Update UI components in `src/components/`

### Adding New Sections

1. Create new components in `src/components/`
2. Import and use them in `src/App.jsx`
3. Add corresponding navigation links if needed

## 📄 License

This project is created for Advanced Microelectronic Solutions (AMS). All rights reserved.

## 🤝 Contributing

This is a client project. For any updates or modifications, please contact the development team.

## 📞 Support

For technical support or questions about this website, please contact:
- Email: info@amsolutions.my
- Website: www.amsolutions.my

---

**Built with ❤️ for Advanced Microelectronic Solutions (AMS)**
