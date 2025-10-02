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
                <div className="socialMediaLinks" data-aos="fade-right" data-aos-delay="100">
                    <div className="mediaIcon"><i class="fab fa-whatsapp"></i></div>
                    <div className="mediaContent">
                        <h4>Phone</h4>
                        <p>+92 307 6250127</p>
                    </div>
                </div>
                <div className="socialMediaLinks" data-aos="fade-right" data-aos-delay="200">
                    <div className="mediaIcon"><i class="fas fa-envelope"></i></div>
                    <div className="mediaContent">
                        <h4>Email</h4>
                        <p>sulymankhalil.dev@gmail.com</p>
                    </div>
                </div>
                <div className="socialMediaLinks" data-aos="fade-right" data-aos-delay="300">
                    <div className="mediaIcon"><i class="fab fa-linkedin"></i></div>
                    <div className="mediaContent">
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/sulyman-khalil-6269a6250/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sulyman-khalil <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="socialMediaLinks" data-aos="fade-right" data-aos-delay="400">
                    <div className="mediaIcon"><i class="fab fa-github"></i></div>
                    <div className="mediaContent">
                        <h4>GitHub</h4>
                        <a href="https://github.com/SulymanKhalil" target="_blank" rel="noopener noreferrer">github.com/SulymanKhalil <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="socialMediaLinks" data-aos="fade-right" data-aos-delay="500">
                    <div className="mediaIcon"><i class="fas fa-map-marker-alt"></i></div>
                    <div className="mediaContent">
                        <h4>City</h4>
                        <a href="https://www.google.com/maps/place/Johar+Town,+Lahore,+Pakistan/@31.4646503,74.2357621,13z/data=!3m1!4b1!4m6!3m5!1s0x3919015f82b0b86f:0x2fcaf9fdeb3d02e6!8m2!3d31.469693!4d74.2728461!16zL20vMGdnNDlt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Lahore, Pakistan <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer" data-aos="fade-up" data-aos-offset="150">
                <h1>Sulyman Khalil</h1>
                <p>Frontend Developer | React.js Developer</p>
                <hr />
                <p className="copyright-line">Creafted & Developed by Sulyman Khalil</p>
                <p className="last-updated">Last updated: 02 Oct, 2025</p>
            </div>
        </div>
    )
}

export default Contact;