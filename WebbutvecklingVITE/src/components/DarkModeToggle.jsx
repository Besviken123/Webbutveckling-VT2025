import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext to manage dark/light mode
import "../styles/DarkModeToggle.css";

function DarkModeToggle() {
    // Retrieve darkMode state (true/false) and toggleDarkMode function from ThemeContext
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {/* Change the image depending on whether darkMode is active or not */}
            <img
                src={darkMode ? "/Bilder/Sun.png" : "/Bilder/Moon.png"} // Show sun if darkMode is true, otherwise show moon
                alt="Dark Mode Toggle" // Description for screen readers
            />
        </button>
    );
}

export default DarkModeToggle; // Export the component to be used in other parts of the application
