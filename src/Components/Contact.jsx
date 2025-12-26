import TypewriterComponent from "typewriter-effect"

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactHeadings" data-aos="zoom-in">
                <h2>
                    <TypewriterComponent
                        options={{
                            strings: ["Say Hello", "Drop a Message", "Connect with Sulyman"],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>
                <p className="contact-tagline">Your message could be the start of something amazing!</p>
            </div>
            <div className="contactContent">
                <div className="socialMediaLinks">
                    <div className="mediaIcon" data-aos="fade-right" data-aos-delay="100"><i className="fa-solid fa-phone"></i></div>
                    <div className="mediaContent" data-aos="fade-right" data-aos-delay="100">
                        <h4>Phone</h4>
                        <a href="tel:+923707843216">+92 370 7843216</a>
                    </div>
                </div>
                <div className="socialMediaLinks">
                    <div className="mediaIcon" data-aos="fade-right" data-aos-delay="200"><i class="fas fa-envelope"></i></div>
                    <div className="mediaContent" data-aos="fade-right" data-aos-delay="200">
                        <h4>Email</h4>
                        <a href="mailto:sulymankhalil.dev@gmail.com">sulymankhalil.dev@gmail.com</a>
                    </div>
                </div>
                <div className="socialMediaLinks">
                    <div className="mediaIcon" data-aos="fade-right" data-aos-delay="300"><i class="fab fa-linkedin"></i></div>
                    <div className="mediaContent" data-aos="fade-right" data-aos-delay="300">
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/sulyman-khalil-6269a6250/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sulyman-khalil <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="socialMediaLinks">
                    <div className="mediaIcon" data-aos="fade-right" data-aos-delay="400"><i class="fab fa-github"></i></div>
                    <div className="mediaContent" data-aos="fade-right" data-aos-delay="400">
                        <h4>GitHub</h4>
                        <a href="https://github.com/SulymanKhalil" target="_blank" rel="noopener noreferrer">github.com/SulymanKhalil <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="socialMediaLinks">
                    <div className="mediaIcon" data-aos="fade-right" data-aos-delay="500"><i class="fas fa-map-marker-alt"></i></div>
                    <div className="mediaContent" data-aos="fade-right" data-aos-delay="500">
                        <h4>City</h4>
                        <p>Lahore, Pakistan</p>
                    </div>
                </div>
            </div>
            <div className="footer" data-aos="fade-up" data-aos-offset="150">
                <h1>Sulyman Khalil</h1>
                <p>Frontend Developer | React.js Developer</p>
                <hr />
                <p className="copyright-line">Copyright © 2025 | Sulyman Khalil <br /> All rights reserved.</p>
                <p className="last-updated">Last updated: 26 Dec, 2025</p>
            </div>
        </div>
    )
}

export default Contact;