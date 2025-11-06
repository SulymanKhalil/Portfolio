import TypewriterComponent from "typewriter-effect"

const Skills = () => {
    return (
        <div className="skillsContainer">
            <div className="skillsHeadings" data-aos="fade-down">
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
                <hr data-aos="fade-right" />
            </div>
            <div className="skillsContent">
                {/************************* Front-End Skills **********************/}
                <div className="frontEnd-Skills">
                    <h1>FRONTEND SKILLS</h1>
                    <div className="frontEnd-content">
                        <div className="language-container html">
                            <img className="html-img" src="/Images/htmllogo.png" />
                            <div className="language-body">
                                <h5 className="language-title">HTML5</h5>
                                <p className="language-desc">Semantic Markup and Accessibility</p>
                                <div className="language-progress-container">
                                    <div className="progress language-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="language-progress-value">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="language-container css">
                            <img src="/Images/csslogo.png" />
                            <div className="language-body">
                                <h5 className="language-title">CSS3</h5>
                                <p className="language-desc">Responsive Design and Animations</p>
                                <div className="language-progress-container">
                                    <div className="progress language-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="language-progress-value">90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="language-container javascript">
                            <img className="js-img" src="/Images/javascriptlogo.jpg" />
                            <div className="language-body">
                                <h5 className="language-title">JavaScript (ES6+)</h5>
                                <p className="language-desc">DOM Manipulation and Async Code</p>
                                <div className="language-progress-container">
                                    <div className="progress language-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="language-progress-value">80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="language-container typescript">
                            <img className="ts-img" src="/Images/typescript.svg" />
                            <div className="language-body">
                                <h5 className="language-title">TypeScript</h5>
                                <p className="language-desc">Typed and Maintainable</p>
                                <div className="language-progress-container">
                                    <div className="progress language-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="language-progress-value">80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/********************* Frameworks & Libraries *******************/}
                <div className="frameworksLibraries">
                    <h1>FRAMEWORKS & LIBRARIES</h1>
                    <div className="frameworksLibraries-content">
                        <div className="framework-container React">
                            <img className="React-img" src="/Images/reactlogo.png" />
                            <div className="framework-body">
                                <h5 className="framework-title">React JS</h5>
                                <p className="framework-desc">Component-based and dynamic UIs</p>
                                <div className="framework-progress-container">
                                    <div className="progress framework-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="framework-progress-value">80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="framework-container Redux">
                            <img className="Redux-img" src="/Images/reduxlogo.png" />
                            <div className="framework-body">
                                <h5 className="framework-title">Redux</h5>
                                <p className="framework-desc">Centralized and predictable state</p>
                                <div className="framework-progress-container">
                                    <div className="progress framework-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="framework-progress-value">80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="framework-container BootStrap">
                            <img className="BootStrap-img" src="/Images/bootstraplogo.png" />
                            <div className="framework-body">
                                <h5 className="framework-title">BootStrap 5</h5>
                                <p className="framework-desc">Utility-first and responsive styling</p>
                                <div className="framework-progress-container">
                                    <div className="progress framework-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="framework-progress-value">95%</span>
                                </div>
                            </div>
                        </div>
                        <div className="framework-container tailwind-CSS">
                            <img className="tailwind-CSS-img" src="/Images/tailwindcsslogo.png" />
                            <div className="framework-body">
                                <h5 className="framework-title">Tailwind CSS</h5>
                                <p className="framework-desc">Grid-based and quick UI design</p>
                                <div className="framework-progress-container">
                                    <div className="progress framework-progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar"></div>
                                    </div>
                                    <span className="framework-progress-value">95%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/********************** Version Control **************************/}
                <div className="versionControl">
                    <h1>VERSION CONTROL</h1>
                    <div className="versionControl-content">
                        <div className="versionControl-container">
                            <img src="/Images/gitlogo.png" className="versionControl-icon" />
                            <div className="versionControl-body">
                                <h5 className="versionControl-title">Git</h5>
                                <p className="versionControl-desc">Version control and efficient branching</p>
                            </div>
                        </div>
                        <div className="versionControl-container">
                            <i className="fab fa-github versionControl-icon Github-icon"></i>
                            <div className="versionControl-body">
                                <h5 className="versionControl-title">GitHub</h5>
                                <p className="versionControl-desc">Collaboration and code hosting</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************** Others *************************/}
                <div className="Others">
                    <h1>PROFESSIONAL SKILLS</h1>
                    <div className="Others-content">
                        <div className="othersContent-container problemSolving">
                            <i className="fas fa-lightbulb"></i>
                            <div className="othersContent-container-body">
                                <h5 className="othersContent-container-title">Problem-Solving</h5>
                                <p className="othersContent-container-desc">Analytical and solution-oriented thinking</p>
                            </div>
                        </div>
                        <div className="othersContent-container communication">
                            <i className="fas fa-comments"></i>
                            <div className="othersContent-container-body">
                                <h5 className="skill-title">Communication</h5>
                                <p className="othersContent-container-desc">Cooperative and goal-focused teamwork</p>
                            </div>
                        </div>
                        <div className="othersContent-container teamCollaboration">
                            <i className="fas fa-users"></i>
                            <div className="othersContent-container-body">
                                <h5 className="othersContent-container-title">Team Collaboration</h5>
                                <p className="othersContent-container-desc">Clear and professional interaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills