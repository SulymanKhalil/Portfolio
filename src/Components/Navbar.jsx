import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
            <Link className="text-decoration-none" to="/"><h1 className="heading1 ms-3" data-aos="fade-down">Sulyman<span>.com</span></h1></Link>
            <nav className="navbar navbar-expand">
                <div>
                    <ul className="nav-item-list" data-aos="fade-up">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link activeTab" : "nav-link inActiveTab"} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link activeTab" : "nav-link inActiveTab"} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link activeTab" : "nav-link inActiveTab"} to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link activeTab" : "nav-link inActiveTab"} to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link activeTab" : "nav-link inActiveTab"} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="resume-and-hireBtn-cont" >
                <button className="resume-btn">
                    <a href="/Docs/Sulyman-Resume.pdf" rel="noopener noreferrer" download data-aos="zoom-in-up">RESUME</a>
                </button>
                <i onClick={toggleTheme} className={`day-night-icon fa-solid ${darkMode ? "fa-sun" : "fa-moon"} me-4 ps-2`}></i>
                <i onClick={() => setIsMenuOpen(!isMenuOpen)} className="fa-solid fa-bars"></i>
            </div>
            {(isMenuOpen || isClosing) && (
                <div className={`menu-container ${isClosing ? "menuOut" : "menuIn"}`}>
                    <i onClick={handleClsoeMenu} className="fa-solid fa-xmark"></i>
                    <div className="menu-lists">
                        <li><NavLink className={({ isActive }) => isActive ? "activeTab" : "inActiveTab"} onClick={handleClsoeMenu} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "activeTab" : "inActiveTab"} onClick={handleClsoeMenu} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "activeTab" : "inActiveTab"} onClick={handleClsoeMenu} to="/skills">Skills</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "activeTab" : "inActiveTab"} onClick={handleClsoeMenu} to="/projects">Projects</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "activeTab" : "inActiveTab"} onClick={handleClsoeMenu} to="/contact">Contact</NavLink></li>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;