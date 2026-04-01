import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/goToTop";
import CursorEffect from "./Components/CursorEffect";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 10,
            duration: 800,
            once: false,
            mirror: true,
            easing: "ease-in-out",
        });
        AOS.refresh();
    }, [location.pathname]);

    return (
        <Router>
            <ScrollToTop/>
            <CursorEffect/>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="about" element={<About />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;