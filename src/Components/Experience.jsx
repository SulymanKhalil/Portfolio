const Experience = () => {
  return (
    <div className="ExperienceContainer">
      <div className="ExperienceHeadings" data-aos="fade-up">
        <h1>Professional Journey</h1>
      </div>
      <div className="ExperienceContentCont" data-aos="fade-down">
        <img src="/Images/multiconnect_horizon_logo.jpeg" />
        <div className="ExperienceContent">
          <div className="ExperienceH2-Link">
            <h2>Frontend Developer Intern</h2>
            <a
              href="http://multiconnect.com.hk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="ExperienceBottomContent">
            <h1>MultiConnect Horizon Technologies</h1>
            <p>December 2025 - Present</p>
            <p>Hong Kong • Remote</p>
              <ul className="ExperienceDesc">
                <li>Built responsive UI using React, Tailwind / Bootstrap</li>
                <li>Converted Figma → React components</li>
                <li>Managed state with Redux / useContext</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
