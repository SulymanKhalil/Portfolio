import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark")
        } else {
            setDarkMode(false);
            document.body.classList.add("light")
        }
    }, [])

    const toggleTheme = () => {
        const newMode = !darkMode
        setDarkMode(newMode)

        if (newMode) {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen])

    const handleClsoeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 400)
    }

    return (
        <div className="header">
            <Link className="text-decoration-none" to="/"><h1 className="heading1 ms-3">Sulyman<span>.dev</span></h1></Link>
            <nav className="navbar navbar-expand">
                <div>
                    <ul className="nav-item-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="resume-and-btn-cont" >
                <button className="resume-btn">
                    <a href="/Docs/Sulyman-Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
                </button>
                <i onClick={toggleTheme} className={`day-night-icon fa-solid ${darkMode ? "fa-sun" : "fa-moon"} me-4 ps-2`}></i>
                <i onClick={() => setIsMenuOpen(!isMenuOpen)} className="fa-solid fa-bars"></i>
            </div>
            {(isMenuOpen || isClosing) && (
                <div className={`menu-container ${isClosing ? "menuOut" : "menuIn"}`}>
                    <i onClick={handleClsoeMenu} className="fa-solid fa-x"></i>
                    <div className="menu-lists">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;