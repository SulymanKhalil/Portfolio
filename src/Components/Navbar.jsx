import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false)

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