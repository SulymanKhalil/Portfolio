const Experience = () => {
  return (
    <div className="ExperienceContainer">
      <div className="ExperienceHeadings" data-aos="fade-up">
        <h1>Professional Journey</h1>
      </div>
      <div className="ExperienceContentCont" data-aos="fade-down">
        <div className="ExperienceContent">
          <div className="ExperienceBottomContent">
            <h1>
              <a
                href="https://www.multiconnect.com.hk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MultiConnect Horizon Ltd.
              </a>{" "}
              | Hong Kong • Remote
            </h1>
            <h2>Software Engineer (Full-Time)</h2>
            <p>April 2024 - Present</p>
            <ul className="ExperienceDesc">
              <li>
                Leveraged AI tools to contribute to production projects while
                building React-based interactive UIs for scalable applications.
              </li>
              <li>
                Built and optimized Next.js UI components for performance,
                responsiveness, SSR and maintainability, with WebRTC streaming
                and <br/> FFmpeg media processing integration.
              </li>
            </ul>
            <br />
            <h2>Software Engineer (Intern)</h2>
            <p>February 2024 - March 2024</p>
            <ul className="ExperienceDesc">
              <li>
                Created reusable frontend components and scalable UI features
                using React, Umi.js, Ant Design, and Day.js with clean,
                maintainable code.
              </li>
              <li>
                Implemented i18n for multi-language support and integrated REST
                APIs for dynamic data handling and smooth user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
