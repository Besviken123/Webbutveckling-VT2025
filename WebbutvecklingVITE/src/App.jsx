/* --------------- IMPORTS --------------- */
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Captcha */
import Captcha from "./components/Captcha"; // Import CAPTCHA component
/* Captcha */

/* Darkmode */
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
/* Darkmode */

/* Pages */
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cardgames from "./pages/Cardgames.jsx";
import Contact from "./pages/Contact.jsx";
import Forum from "./pages/Forum.jsx";
import UnderConstruction from "./pages/UnderConstruction.jsx";
/* Pages */

/* Header and Footer */
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
/* Header and Footer */

/* --------------- END OF IMPORTS --------------- */


function App() {
  return (
    // Wraps the entire application with ThemeProvider to provide dark mode functionality
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  // Access dark mode state from ThemeContext
  const { darkMode } = useContext(ThemeContext);

  // State to track CAPTCHA verification status
  const [isVerified, setIsVerified] = useState(false); // State for CAPTCHA verification

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "0.3s ease-in-out",
      }}
    >
      <Router>
        <Header />
        {/* Show CAPTCHA first, then grant access */}
        {!isVerified ? (
          <Captcha onSuccess={() => setIsVerified(true)} /> // CAPTCHA component; sets isVerified to true upon success
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cardgames" element={<Cardgames />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/underconstruction" element={<UnderConstruction />} />
          </Routes>
        )}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
