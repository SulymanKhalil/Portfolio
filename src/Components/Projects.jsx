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
                    <img src="/Images/spotify-like-app.png" alt="Spotify-Like-App" />
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
                    <img src="/Images/terraview.png" alt="Global-info-Hub" />
                    <h3>Global Info App</h3>
                    <p className="project-desc">World countries info app crafted with HTML, CSS, and JS, featuring API-powered dynamic data and responsive design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <a href="https://terraview.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
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