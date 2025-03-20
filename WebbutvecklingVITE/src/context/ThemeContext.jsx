import React, { createContext, useState } from "react";

// Create a context for theme management with a default value
export const ThemeContext = createContext({
    darkMode: false, // Default theme set to light mode
    toggleDarkMode: () => { }, // Placeholder function (will be overridden in provider)
});

export const ThemeProvider = ({ children }) => {
    // Define state for dark mode, initialized as false (light mode)
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode on and off
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode); // Inverts the current state (true / false)
    };

    return (
        // Provide the dark mode state and the toggle function to all children components
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children} {/* Render all child components inside the provider */}
        </ThemeContext.Provider>
    );
};
