import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="HeroSection-container">
            <div className="HeroSection m-2 p-3 rounded-3">
                <img src="/Images/Sulyman.jpg" alt="Developer's Pic" className="rounded-circle" />
                <h1 className="HeroSection-h1">Hi, I'm Sulyman Khalil</h1>
                <div className="h2-heading-parent">
                    <h2 className="HeroSection-h2">Front-End Developer</h2>
                </div>
                <p className="HeroSection-p">
                    "I build modern, responsive, and user-friendly websites. Passionate about creating clean code and engaging user experiences"
                </p>
                <Link className="text-decoration-none" to="/contact"><button className="Hire-Button">HIRE ME</button></Link>
                {/* <i className="fa-solid fa-chevron-down" onClick={() => {
                    window.location.href = "#beyondCoding"
                }}></i> */}
            </div>
            <div className="m-2 beyond-coding" id="beyondCoding">
                <h1>Life Outside Work</h1>
                <hr />
                <div className="beyondCoding-content">
                    <div className="image1-Cont">
                        <img src="/Images/cricket.jpg" alt="Cricket Pic" />
                        <div className="hobby-content">
                            <h3>• Cricket</h3>
                            <p>"Cricket helps me stay active and teaches teamwork & patience."</p>
                        </div>
                    </div>
                    <div className="image2-Cont">
                        <img src="/Images/sketching.jpg" alt="Sketching Pic" />
                        <div className="hobby-content">
                            <h3>• Sketching</h3>
                            <p>"Sketching allows me to express creativity and improve observation."</p>
                        </div>
                    </div>
                    <div className="image3-Cont">
                        <img src="/Images/reading.jpg" alt="Reading Pic" />
                        <div className="hobby-content">
                            <h3>• Reading</h3>
                            <p>"Reading broadens knowledge, enhances focus & keeps me inspired."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;