import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/goToTop";
import CursorEffect from "./Components/CursorEffect";

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000,
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
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="about" element={<About />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;