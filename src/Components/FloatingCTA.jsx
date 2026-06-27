import { useEffect, useState } from "react";
import "./floatingCTA.css";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set visible on mount to trigger CSS drop-down and trail animations
        setIsVisible(true);
    }, []);

    return (
        <div className={`cta-wrapper ${isVisible ? "active" : ""}`}>
            {/* The CTA button redirecting to the OS project */}
            <a 
                href="https://my-os.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button"
            >
                {/* The vertical glowing trail behind the button */}
                <div className="cta-trail"></div>
                <span className="cta-glow-bg"></span>
                <span className="cta-shine"></span>
                <i className="fa-solid fa-desktop cta-icon"></i>
                <span className="cta-text">Launch OS</span>
            </a>
        </div>
    );
};

export default FloatingCTA;
