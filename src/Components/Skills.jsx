import TypewriterComponent from "typewriter-effect"

const Skills = () => {
    return (
        <div className="skillsContainer">
            <div className="skillsHeadings">
                <h2>
                    <TypewriterComponent
                        options={{
                            strings: ["Tech Stacks", "Core Expertise", "Developers' Arsenal"],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>
                <hr />
            </div>
            <div className="skillsContent">
                <div className="frontEnd-Skills">
                    <h1>FRONTEND SKILLS</h1>
                    <div className="frontEnd-content">
                        <div className="html">
                            <img src="/Images/htmllogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">HTML5</h5>
                                <p className="skill-text">Building clean and semantic web pages with structured layouts, forms, and modern HTML5 features</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="css">
                            <img src="/Images/csslogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">CSS3</h5>
                                <p className="skill-text">Designing responsive and visually appealing websites using Flexbox, Grid, animations, and modern styling techniques</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="javascript">
                            <img src="/Images/javascriptlogo.jpg" />
                            <div className="skill-body">
                                <h5 className="skill-title">JavaScript (ES6+)</h5>
                                <p className="skill-text">Adding interactivity and functionality to web pages with modern ES6+ features, DOM manipulation, and API integration</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frameworksLibraries">
                    <h1>FRAMEWORKS & LIBRARIES</h1>
                    <div className="frameworksLibraries-content">
                        <div className="React">
                            <img src="/Images/reactlogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">React JS</h5>
                                <p className="skill-text">Building interactive and responsive web apps using React components, hooks, virtual DOM, and modern best practices</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="BootStrap">
                            <img src="/Images/bootstraplogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">BootStrap 5</h5>
                                <p className="skill-text">Designing responsive and mobile-first websites quickly using Bootstrap’s grid system, components, and utility classes</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">95%</span>
                                </div>
                            </div>
                        </div>
                        <div className="tailwind-CSS">
                            <img src="/Images/tailwindcsslogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">Tailwind CSS</h5>
                                <p className="skill-text">Creating modern, fully responsive UI with a utility-first approach, efficiently customizing designs using Tailwind</p>
                                <div className="progress-container">
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="progress-Value">95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="versionControl">
                    <h1>VERSION CONTROL</h1>
                    <div className="versionControl-content">
                        <div className="Git">
                            <img src="/Images/gitlogo.png" />
                            <div className="skill-body">
                                <h5 className="skill-title">Git</h5>
                                <p className="skill-text">Version control tool to efficiently track code changes, manage software projects, and collaborate with teams</p>
                            </div>
                        </div>
                        <div className="Github">
                            <i className="fab fa-github"></i>
                            <div className="skill-body">
                                <h5 className="skill-title">GitHub</h5>
                                <p className="skill-text">Platform to host Git repositories, collaborate seamlessly on code, and manage projects professionally</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Others">
                    <h1>PROFESSIONAL SKILLS</h1>
                    <div className="Others-content">
                        <div className="problemSolving">
                            <i className="fas fa-lightbulb"></i>
                            <div className="skill-body">
                                <h5 className="skill-title">Problem-Solving</h5>
                                <p className="skill-text">Good at analyzing simple challenges and coming up with practical and effective solutions efficiently</p>
                            </div>
                        </div>
                        <div className="communication">
                            <i className="fas fa-comments"></i>
                            <div className="skill-body">
                                <h5 className="skill-title">Communication</h5>
                                <p className="skill-text">Able to explain ideas clearly and maintain friendly, professional, and consistent conversations with team members</p>
                            </div>
                        </div>
                        <div className="teamCollaboration">
                            <i className="fas fa-users"></i>
                            <div className="skill-body">
                                <h5 className="skill-title">Team Collaboration</h5>
                                <p className="skill-text">Comfortable working closely with others to complete tasks and achieve team goals effectively</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills