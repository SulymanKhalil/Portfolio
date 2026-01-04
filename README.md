# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Frontend Developer. Built with React and Vite for optimal performance and developer experience.

## 🌐 Live Demo

[View Portfolio](https://sulymanlive.netlify.app)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Dynamic Typing Effect**: Typewriter effect for interactive text animations
- **Custom Cursor**: Unique cursor effect for enhanced user experience
- **Multiple Sections**:
  - Hero Section with introduction
  - About section with personal information
  - Skills showcase
  - Projects portfolio
  - Experience timeline
  - Contact information with social links
- **Dark Theme**: Modern dark theme design
- **404 Page**: Custom not found page for better UX
- **Smooth Scrolling**: Enhanced navigation with scroll-to-top functionality

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.9.1
- **Animations**: AOS (Animate On Scroll) 2.3.4
- **Typography Effects**: Typewriter Effect 2.22.0
- **UI Framework**: Bootstrap 5.3.3
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Montserrat, Raleway, Sacramento, Merienda)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Docs/              # Resume and documents
│   └── Images/            # Project images and assets
├── src/
│   ├── Components/
│   │   ├── About.jsx      # About section component
│   │   ├── Contact.jsx    # Contact section component
│   │   ├── CursorEffect.jsx # Custom cursor component
│   │   ├── Experience.jsx # Experience timeline component
│   │   ├── HeroSection.jsx # Hero/intro section
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── NotFound.jsx   # 404 page component
│   │   ├── Projects.jsx   # Projects showcase component
│   │   ├── Skills.jsx     # Skills section component
│   │   ├── goToTop.jsx    # Scroll to top component
│   │   └── *.css          # Component-specific styles
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SulymanKhalil/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎨 Customization

### Updating Personal Information

1. **Contact Information**: Edit `src/Components/Contact.jsx` to update:
   - Phone number
   - Email address
   - Social media links
   - Location

2. **About Section**: Edit `src/Components/About.jsx` for personal bio and details

3. **Projects**: Update `src/Components/Projects.jsx` to showcase your projects

4. **Experience**: Modify `src/Components/Experience.jsx` for work history

5. **Skills**: Edit `src/Components/Skills.jsx` to display your technical skills

### Styling

- Component-specific styles are in their respective `.css` files in `src/Components/`
- Global styles are in `src/index.css`
- Bootstrap classes are available for quick styling
- Custom CSS variables can be added in `index.css` for theme customization

## 🚀 Deployment

This project is deployed on **Netlify**.

### Build Settings
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

The project is automatically deployed from the main branch using Netlify.

## 📝 Features in Detail

### Navigation
- Smooth scrolling between sections
- Active link highlighting
- Mobile-responsive hamburger menu

### Animations
- Scroll-triggered animations using AOS
- Configurable animation duration and easing
- Fade, slide, and zoom effects

### Typewriter Effect
- Dynamic text cycling in hero and contact sections
- Customizable delay and typing speed

### Custom Cursor
- Interactive cursor effect that follows mouse movement
- Enhanced visual feedback

## 🔒 Contribution Policy

This project is a personal portfolio and is not open for external contributions.

## 📄 License

All rights reserved. This project is for portfolio demonstration purposes only.
Unauthorized use, copying, or modification is not permitted.

## 👤 Author

**Sulyman Khalil**
- Frontend Developer | React.js Developer
- Location: Lahore, Pakistan
- Email: sulymankhalil.dev@gmail.com
- LinkedIn: [linkedin.com/in/sulyman-khalil](https://www.linkedin.com/in/sulyman-khalil-6269a6250/)
- GitHub: [github.com/SulymanKhalil](https://github.com/SulymanKhalil)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [AOS](https://michalsnik.github.io/aos/) - Scroll animations
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

---

⭐ If you like this project, please consider giving it a star on GitHub!