import TypewriterComponent from "typewriter-effect";

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
                "<span class='bar'>|</span> Inside Sulyman's World",
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
          <img src="/Images/AboutPic.jpeg" alt="About me Pic" />
        </div>
        <div className="about-texts" data-aos="fade-left">
          <h2 data-aos="fade-up">Meet Sulyman</h2>
          <p data-aos="fade-up">
            Sulyman Khalil is a{" "}
            <span className="highlight-text">Software Engineer </span>
            with 2+ years of experience •{" "}
            <span className="highlight-text">
              Frontend Lead at{" "}
              <a
                href="https://streamlyweb.netlify.app/"
                className="brand-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Streamly
              </a>
            </span>
            , crafting scalable web apps and{" "}
            <span className="highlight-text">real-time</span> streaming systems
            with a focus on <span className="highlight-text">performance</span>{" "}
            and clean <span className="highlight-text">architecture</span>.
          </p>
          <br />
          <h2 data-aos="fade-up">Fuel Behind My Work</h2>
          <p data-aos="fade-up">
            What drives me is a mix of{" "}
            <span className="highlight-text">creativity</span> and{" "}
            <span className="highlight-text">logic</span>, blending design with
            code to make <span className="highlight-text">interfaces</span> that
            don’t just work but feel{" "}
            <span className="highlight-text">alive</span>.
          </p>
          <br />
          <h2 data-aos="fade-up">Education</h2>
          <p data-aos="fade-up">
            From <span class="highlight-text">Matric in Computer Science </span>
            to
            <span class="highlight-text"> ICS (Physics)</span> and currently
            pursuing
            <span class="highlight-text">
              {" "}
              Bachelor's in Software Engineering
            </span>
            , my academic journey reflects consistent growth in technology and
            problem-solving, with a strong focus on
            <span class="highlight-text"> building real-world systems</span>.
          </p>
          <br />
          <h3 data-aos="zoom-in">
            <span className="quotes">❝ </span>Turning concepts into code, and
            code into experiences<span className="quotes"> ❞</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
