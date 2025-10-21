import TypewriterComponent from "typewriter-effect"

const Projects = () => {
    return (
        <div className="projectsContainer container mx-auto">
            <div className="projectsHeadings" data-aos="fade-down">
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
                <p className="projects-p">Here’s a curated selection of my work — projects where code meets creativity, blending clean development with real-world problem solving</p>
                <p className="projects-tagline">Curious? Let’s jump into the work.</p>
            </div>
            <div className="projectsContent">
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="700">
                    <img src="/Images/spotify-like-app.png" alt="Spotify Like App" />
                    <h3>Spotify Like App</h3>
                    <p className="project-desc">Responsive music player app built with HTML, CSS, and JavaScript, featuring clean UI and interactive controls.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <a href="https://spotify-like-app.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="800">
                    <img src="/Images/terraview.png" alt="Global info Hub" />
                    <h3>Global Info App</h3>
                    <p className="project-desc">World countries info app crafted with HTML, CSS, and JS, featuring API-powered dynamic data and responsive design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <a href="https://terraview.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="900">
                    <img src="/Images/todoApp.png" alt="Todo App" />
                    <h3>Todo App</h3>
                    <p className="project-desc">Todo App built with HTML, CSS, and JavaScript, featuring Local Storage-based task persistence and fully responsive design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <a href="https://todoapp-by-sulyman.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="1000">
                    <img src="/Images/expensetracker.png" alt="Expense Tracker" />
                    <h3>Expense Tracker</h3>
                    <p className="project-desc">Expense Tracker App built with HTML, Tailwind CSS, & JavaScript, using Local Storage to track expense, income, & balance.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>Tailwind CSS</p></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <a href="https://web-expensetracker.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="1100">
                    <img src="/Images/calculator.png" alt="Calclator" />
                    <h3>Calculator</h3>
                    <p className="project-desc">Calculator App built with React & CSS, featuring dynamic calculations, state management, and a user-friendly interface.</p>
                    <div className="languages">
                        <div><p>React JS</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://calculator-by-sulyman.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="1200">
                    <img src="/Images/recipefinder.png" alt="Recipe Finder" />
                    <h3>Recipe Finder</h3>
                    <p className="project-desc">Recipe Finder App built with React, styled with Bootstrap, featuring API-powered recipe search and detailed recipe display.</p>
                    <div className="languages">
                        <div><p>React JS</p></div>
                        <div><p>BootStrap</p></div>
                    </div>
                    <a href="https://web-find-recipes.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="1300">
                    <img src="/Images/notesApp.png" alt="Notes App" />
                    <h3>Notes App</h3>
                    <p className="project-desc">Responsive Notes App built with React, Reduxm and Tailwind CSS — featuring state management, Local Storage, sleek UI, and smooth performance.</p>
                    <div className="languages">
                        <div><p>React JS</p></div>
                        <div><p>Redux</p></div>
                        <div><p>Tailwind CSS</p></div>
                    </div>
                    <a href="https://notes-app-by-sulyman.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="viewAllProjects" data-aos="fade-down">
                <p>Looking for more than just highlights? Discover all my projects on GitHub.</p>
                <div>
                    <a href="https://github.com/SulymanKhalil?tab=repositories" target="_blank" rel="noopener noreferrer">See all on GitHub <i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;