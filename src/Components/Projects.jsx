import TypewriterComponent from "typewriter-effect"

const Projects = () => {
    return (
        <div className="projectsContainer">
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
                {/* <div className="project">
                    <img src="/Images/column-wise.png" alt="Column-Project" />
                    <h3>Columns Project</h3>
                    <p className="project-desc">A clean and responsive column-based layout built with pure HTML & CSS, showcasing structured design and adaptability across devices.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://column-wise.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div> */}
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="100">
                    <img src="/Images/nft-insight.png" alt="NFT-Insight-Project" />
                    <h3>NFT Insight Project</h3>
                    <p className="project-desc">Clean and responsive NFT preview card designed with HTML & CSS, focusing on simplicity and visual balance.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://nft-insight.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                {/* <div className="project">
                    <img src="/Images/qr-prompt.png" alt="QR-Prompt-Code" />
                    <h3>QR Code Prompt</h3>
                    <p className="project-desc">Responsive QR code card built with HTML & CSS, featuring clean layout, modern typography, and structured design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://qr-prompt.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project">
                    <img src="/Images/nike-ui.png" alt="Nike-UI-Clone" />
                    <h3>Nike UI Clone</h3>
                    <p className="project-desc">Clean and responsive Nike landing page designed with HTML & CSS, focusing on product display and visual clarity.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://nikeui-clone.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div> */}
                {/* <div className="project">
                    <img src="/Images/eid-project.png" alt="Eid-Project" />
                    <h3>Eid Wish Project</h3>
                    <p className="project-desc">Responsive Eid Mubarak greeting page built with HTML & CSS, featuring festive design and clean layout.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://eid-joy.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div> */}
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="200">
                    <img src="/Images/testimonials-wall.png" alt="Testimonials-Wall" />
                    <h3>Testimonials Wall</h3>
                    <p className="project-desc">Responsive testimonials section built with HTML & CSS, leveraging CSS Grid for structured and clean layout.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                    </div>
                    <a href="https://testimonials-wall.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="300">
                    <img src="/Images/techno-web.png" alt="Techno-Web" />
                    <h3>Techno Web House</h3>
                    <p className="project-desc">Responsive software company website built with HTML, CSS, and Bootstrap, featuring clean layout and modern design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div className="third-Language"><p>BootsStrap</p></div>
                    </div>
                    <a href="https://techno-web-house.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="400">
                    <img src="/Images/digital-agency.png" alt="Digital-Agency-Project" />
                    <h3>Digital Agency Project</h3>
                    <p className="project-desc">Modern and responsive digital agency website developed with HTML, CSS, and Bootstrap, emphasizing sleek visuals and user-friendly layout.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div className="third-Language"><p>BootStrap</p></div>
                    </div>
                    <a href="https://digital-agencyweb.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="500">
                    <img src="/Images/foodie-hamburger.png" alt="Foodie-Hamburger-Project" />
                    <h3>Foodie Hamburger</h3>
                    <p className="project-desc">Interactive hamburger menu project built with HTML, CSS, and JavaScript, showcasing responsive design and smooth animations.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div className="third-Language"><p>JavaScript</p></div>
                    </div>
                    <a href="https://foodi-hamburger.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="600">
                    <img src="/Images/focus-on-today.png" alt="Focus-On-Today-Project" />
                    <h3>Focus On Today</h3>
                    <p className="project-desc">Responsive To-Do web app built with HTML, CSS, and JavaScript, featuring task management and clean, structured design.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div className="third-Language"><p>JavaScript</p></div>
                    </div>
                    <a href="https://focussly.netlify.app/" target="_blank" rel="noopener noreferrer">Visit <i className="fas fa-external-link-alt"></i></a>
                </div>
                <div className="project" data-aos="fade-up" data-aos-offset="150" data-aos-delay="700">
                    <img src="/Images/spotify-like-app.png" alt="Spotify-Like-App" />
                    <h3>Spotify Like App</h3>
                    <p className="project-desc">Responsive music player app built with HTML, CSS, and JavaScript, featuring clean UI and interactive controls.</p>
                    <div className="languages">
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div className="third-Language"><p>JavaScript</p></div>
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
                        <div className="third-Language"><p>JavaScript</p></div>
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