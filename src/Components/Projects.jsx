import TypewriterComponent from "typewriter-effect";

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
            solving
          </p>
          <p className="projects-tagline">Curious? Let’s jump into the work.</p>
        </div>
      </div>
      <div className="projectSection">
        <p className="arrangeOrder-heading" data-aos="fade-up">
          Arranged Chronologically (Oldest → Newest)
        </p>
        <div>
            
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
