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
            <p>June 2025 - Present</p>
            <ul className="ExperienceDesc">
              <li>Leveraged AI tools to gain 2x development speed and contributed to real-world, client-facing production projects.</li>
              <li>Optimized reusable UI components for performance, responsiveness and cross-browser compatibility using React.js.</li>
              <li>Delivered impactful, user-centric frontend features that measurably improved overall user experience.</li>
              <li>Translated Figma designs into pixel-perfect, responsive interfaces with cross-team collaboration, cutting handoff friction.</li>
              <li>Consumed dynamic admin dashboard APIs to render real-time, config-driven UI, ensuring live data changes reflected instantly across the interface.</li>
            </ul>
            <br />
            <h2>Software Engineer (Intern)</h2>
            <p>April 2025 - May 2025</p>
            <ul className="ExperienceDesc">
              <li>Implemented i18n (Internationalization) to support multi-language functionality, expanding app accessibility for global users.</li>
              <li>Engineered role-based access control (RBAC) to manage user permissions across multiple dashboard modules.</li>
              <li>Leveraged Day.js for precise date/time handling across time-sensitive frontend features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
