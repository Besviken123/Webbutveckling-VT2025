import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom"; // Import Link for navigation

import "../styles/Header.css";
import "../styles/Styles.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="left-header">
                        <div className="logo">
                            <img src="Bilder/LOGO.png" alt="Collector's Point Logo" />
                        </div>

                        <div className="goblin">
                            <img src="Bilder/GOBLIN.png" alt="Goblin Figure" />
                        </div>
                    </div>

                    <div className="middleheaderburger">
                        <div className="search">
                            <input type="text" placeholder="Sök produkter här.." />
                            <button type="submit">
                                <img src="Bilder/Search.png" alt="Search" />
                            </button>
                        </div>
                        {/* Menu Toggle Checkbox */}
                        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
                        <label htmlFor="menu-toggle" className="hamburger-icon">☰</label>
                    </div>

                    {/* Button container for Likes, Profile, and Shopping Cart */}
                    <div className="icon-buttons">
                        {/* Move Dark Mode Button inside the Header */}
                        <div className="darkmode-container">
                            <DarkModeToggle />
                        </div>
                        <Link to="/underConstruction">
                            <div className="icon-btn">
                                <img src="Bilder/Heart.png" alt="Likes" />
                            </div>
                        </Link>
                        <Link to="/underConstruction">
                            <div className="icon-btn">
                                <img src="Bilder/PROFILICON.png" alt="Profile" />
                            </div>
                        </Link>
                        <Link to="/underConstruction">
                            <div className="icon-btn">
                                <img src="Bilder/Shopping-Cart.png" alt="Shopping Cart" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Navigation bar */}
                <nav className="nav-container">
                    <ul className="menu">
                        <li>
                            <div className="nav-text-container">
                                <Link to="/">HEM</Link>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/underConstruction">REA</Link>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/Cardgames">
                                    KORTSPEL <img src="Bilder/Expand-Arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="/underConstruction"> Magic The Gathering</Link></li>
                                    <li><Link to="/underConstruction">Pokémon</Link></li>
                                    <li><Link to="/underConstruction">Yu-Gi-Oh!</Link></li>
                                    <li><Link to="/underConstruction">Disney Lorcana TCG</Link></li>
                                    <li><Link to="/underConstruction">One Piece TCG</Link></li>
                                    <li><Link to="/underConstruction">Warhammer</Link></li>
                                    <li><Link to="/underConstruction">Annat</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/underConstruction">
                                    FIGURER/MINIATURES <img src="Bilder/Expand-Arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/underConstruction">
                                    BRÄDSPEL <img src="Bilder/Expand-Arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/underConstruction">
                                    TILLBEHÖR <img src="Bilder/Expand-Arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/underConstruction">
                                    BÖCKER/TIDNINGAR <img src="Bilder/Expand-Arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
                                </Link>
                                <ul className="dropdown">
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                    <li><Link to="/underConstruction">Placeholder</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/Forum">FORUM</Link>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/About">OM OSS</Link>
                            </div>
                        </li>
                        <li>
                            <div className="nav-text-container">
                                <Link to="/Contact">KONTAKT</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
