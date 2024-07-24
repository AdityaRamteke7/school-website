import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h2>Springdale Public School</h2>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>

                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/academics">Academics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admissions">Admissions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/students">Students</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faculty">Faculty</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Gallery">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

