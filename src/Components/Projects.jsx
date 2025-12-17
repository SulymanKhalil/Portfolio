import TypewriterComponent from "typewriter-effect";

const projectsData = [
  {
    title: "Spotify Like App",
    desc: "Responsive music player app built with HTML, CSS, and JavaScript, featuring clean UI and interactive controls.",
    img: "/Images/SpotifyClone.png",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://spotify-like-app.netlify.app/",
    isNew: false,
  },
  {
    title: "Todo App",
    desc: "Todo App built with HTML, CSS, and JavaScript, featuring Local Storage-based task persistence and fully responsive design.",
    img: "/Images/TodoApp.png",
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://todoapp-by-sulyman.netlify.app/",
    isNew: false,
  },
  {
    title: "Expense Tracker",
    desc: "Expense Tracker App built with HTML, Tailwind CSS, & JavaScript, using Local Storage to track expense, income, & balance.",
    img: "/Images/ExpenseTracker.png",
    languages: ["HTML", "Tailwind CSS", "JS"],
    link: "https://web-expensetracker.netlify.app/",
    isNew: false,
  },
  {
    title: "Calculator",
    desc: "Calculator App built with React & CSS, featuring dynamic calculations, state management, and a user-friendly interface.",
    img: "/Images/Calculator.png",
    languages: ["React", "CSS"],
    link: "https://calculator-by-sulyman.netlify.app/",
    isNew: false,
  },
  {
    title: "Recipe Finder",
    desc: "Recipe Finder App built with React, styled with Bootstrap, featuring API-powered recipe search and detailed recipe display.",
    img: "/Images/RecipeFinder.png",
    languages: ["React", "BootStrap"],
    link: "https://web-find-recipes.netlify.app/",
    isNew: false,
  },
  {
    title: "Notes App",
    desc: "Responsive Notes App built with React, Redux and Tailwind CSS — featuring state management, Local Storage, and smooth performance.",
    img: "/Images/NotesApp.png",
    languages: ["React", "Redux", "Tailwind CSS"],
    link: "https://notes-app-by-sulyman.netlify.app/",
    isNew: false,
  },
  {
    title: "Quote Generator",
    desc: "Responsive Quote Generator built with HTML, TypeScript, and CSS — generate, copy, and share quotes on X, Facebook, and WhatsApp.",
    img: "/Images/QuotesApp.png",
    languages: ["HTML", "CSS", "TypeScript"],
    link: "https://quote-generatorsite.netlify.app/",
    isNew: false,
  },
  {
    title: "Currency Converter",
    desc: "Responsive Currency Converter built with React and Tailwind CSS — real-time currency conversion using live exchange rate API.",
    img: "/Images/CurrencyConverter.png",
    languages: ["React", "Tailwind CSS"],
    link: "https://convertcurrencyweb.netlify.app/",
    isNew: false,
  },
  {
    title: "Quiz App",
    desc: "Interactive Quiz App built with React & TypeScript — featuring timer-based questions and real-time score tracking.",
    img: "/Images/QuizApp.png",
    languages: ["React (TS)", "BootStrap"],
    link: "https://solvequizz.netlify.app/",
    isNew: false,
  },
  {
    title: "Login Form",
    desc: "Simple Login Form built with React & TypeScript — includes basic input validation, password toggle, and smooth Tailwind-based animations.",
    img: "/Images/loginform.webp",
    languages: ["React (TS)", "Tailwind CSS"],
    link: "https://loginform-bysulyman.netlify.app/",
    isNew: true,
  },
  {
    title: "E-Commerce App",
    desc: "E-commerce app built with React & Redux featuring add-to-cart, quantity control, dynamic pricing, and a responsive Bootstrap UI.",
    img: "/Images/e-commerceapp.webp",
    languages: ["React", "Redux", "CSS", "BootStrap"],
    link: "https://addtocart-by-sulyman.netlify.app/",
    isNew: true,
  }
];

const Projects = () => {
  return (
    <div className="projectsContainer container mx-auto">
      <div className="projectHeadingsContainer" data-aos="fade-down">
        <div className="projectsHeadings">
          <h2>
            <TypewriterComponent
              options={{
                strings: ["Code in Action", "My Creations", "Work Showcase"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <p className="projects-p">
            Here’s a curated selection of my work — projects where code meets
            creativity, blending clean development with real-world problem
            solving.
          </p>
          <p className="projects-tagline">Curious? Let’s jump into the work.</p>
        </div>
      </div>
      <div className="projectSection">
        <p className="arrangeOrder-heading" data-aos="fade-up">
          Arranged Chronologically (Oldest → Newest)
        </p>
        <div className="projects">
          {projectsData.map((project, index) => (
            <div
              className="projectContainer"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="projectImage">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="projectContent">
                <h3>{project.title}</h3>
                {project.isNew && (
                  <div className="newtag-Container">
                    <span className="newtag">New</span>
                  </div>
                )}
                <p>{project.desc}</p>
                <div className="projectLanguages">
                  {project.languages.map((lang, i) => (
                    <span key={i} className="langTag">
                      {lang}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLiveBtn"
                >
                  Live <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="viewAllProjectsContainer" data-aos="fade-down">
        <div className="viewAllProjects">
          <p>
            Looking for more than just highlights? Discover all my projects on
            GitHub.
          </p>
          <div>
            <a
              href="https://github.com/SulymanKhalil?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all on GitHub <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
