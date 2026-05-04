# Portfolio Website

Personal portfolio of **Sulyman Khalil**, focused on frontend engineering, modern UI, and real-world project showcases.

## Live Demo

[sulymanlive.netlify.app](https://sulymanlive.netlify.app)

## Features

- Responsive dark-themed UI
- Route-based sections with a custom 404 page
- Animated scroll effects using AOS
- Typewriter text effects in key sections
- Interactive custom cursor experience
- Project showcase with external live links
- Contact section with direct phone/email/social actions

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7 (`HashRouter`)
- AOS (Animate On Scroll)
- Typewriter Effect
- CSS + Bootstrap (via CDN)
- Font Awesome + Google Fonts (via CDN)

## Project Structure

```txt
Portfolio/
|-- public/
|   `-- Images/
|-- src/
|   |-- Components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- CursorEffect.jsx
|   |   |-- Experience.jsx
|   |   |-- Footer.jsx
|   |   |-- HeroSection.jsx
|   |   |-- Navbar.jsx
|   |   |-- NotFound.jsx
|   |   |-- Projects.jsx
|   |   |-- Skills.jsx
|   |   `-- *.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
git clone https://github.com/SulymanKhalil/Portfolio.git
cd Portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

App runs on `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production files into `dist`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization Guide

- Update intro/hero content: `src/Components/HeroSection.jsx`
- Update bio/details: `src/Components/About.jsx`
- Update skills list: `src/Components/Skills.jsx`
- Update projects data/cards: `src/Components/Projects.jsx`
- Update contact links/info: `src/Components/Contact.jsx`
- Adjust global styling: `src/index.css`
- Adjust section styling: related files in `src/Components/*.css`

## Deployment

Current live deployment is on **Netlify**.

Recommended Netlify settings:
- Build command: `npm run build`
- Publish directory: `dist`

## License

This repository is intended for personal portfolio presentation.

## Author

**Sulyman Khalil**

- Email: [sulymankhalil.dev@gmail.com](mailto:sulymankhalil.dev@gmail.com)
- LinkedIn: [linkedin.com/in/sulyman-khalil-6269a6250](https://www.linkedin.com/in/sulyman-khalil-6269a6250/)
- GitHub: [github.com/SulymanKhalil](https://github.com/SulymanKhalil)