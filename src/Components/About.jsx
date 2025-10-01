import TypewriterComponent from "typewriter-effect"

const About = () => {
    return (
        <div className="about-container">
            <div className="heading-container">
                <h2 data-aos="fade-down">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "<span class='bar'>|</span> About Sulyman",
                                "<span class='bar'>|</span> Who is Sulyman?",
                                "<span class='bar'>|</span> Inside Sulyman's World"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>
                <h5 data-aos="fade-up">A glimpse into who I am beyond the code</h5>
            </div>
            <div className="about-content">
                <div className="image-border" data-aos="zoom-in">
                    <img src="/Images/About-Pic.webp" alt="About-Pic" />
                </div>
                <div className="about-texts" data-aos="fade-left" >
                    <h2 data-aos="fade-up">Meet Sulyman</h2>
                    <p data-aos="fade-up">
                        Hello World, <span className="highlight-text">Sulyman Khalil</span> is a fresher <span className="highlight-text">Frontend Developer</span>, turning ideas into sleek, responsive,
                        and impactful web experiences.
                    </p>
                    <br />
                    <h2 data-aos="fade-up">Fuel Behind My Work</h2>
                    <p data-aos="fade-up">
                        What drives me is a mix of <span className="highlight-text">creativity</span> and <span className="highlight-text">logic</span> — blending design
                        with code to make <span className="highlight-text">interfaces</span> that don’t just work, but feel <span className="highlight-text">alive</span>.
                    </p>
                    <br />
                    <h2 data-aos="fade-up">Education</h2>
                    <p data-aos="fade-up">
                        From <span class="highlight-text">Matric in Computer Science</span> at <span class="highlight-text">Asaas National School</span>,
                        to <span class="highlight-text">ICS (Physics)</span> at <span class="highlight-text">Punjab College</span>,
                        and now pursuing <span class="highlight-text">BS Software Engineering</span> at <span class="highlight-text">Virtual University</span> — my academic path reflects a steady growth in technology and problem-solving.
                    </p>
                    <br />
                    <h3 data-aos="zoom-in" ><span className="quotes">❝ </span>Turning concepts into code, and code into experiences<span className="quotes"> ❞</span></h3>
                </div>
            </div>
        </div>

    )
}

export default About