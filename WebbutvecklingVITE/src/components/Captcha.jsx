import React, { useState } from "react";
import "../styles/Captcha.css";

// Captcha component receives an `onSuccess` function as a prop
function Captcha({ onSuccess }) {

    // State variables
    const [captcha, setCaptcha] = useState(generateCaptcha()); // Generates a random CAPTCHA when the component is initialized
    const [input, setInput] = useState(""); // Stores the user's input
    const [message, setMessage] = useState(""); // Stores the verification message for user feedback

    // Function to generate a random CAPTCHA string
    function generateCaptcha() {
        return Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate random string and convert to uppercase

    }

    // Function to verify if the user's input matches the CAPTCHA
    function verifyCaptcha() {
        if (input.toUpperCase() === captcha) {

            // If the user's input matches the CAPTCHA (ignoring case sensitivity)
            setMessage("✅ Rätt! Välkommen till Collector's Point."); // Display success message

            setTimeout(() => {
                onSuccess(); // Calls the onSuccess function after 1 second to close the CAPTCHA modal
            }, 1000);
        } else {
            // If the user's input is incorrect
            setMessage("❌ Fel! Försök igen."); // Display error message
        }
    }

    return (
        <div className="captcha-modal"> {/* Wrapper div CAPTCHA modal (pop-up effect) */}
            <div className="captcha-content">
                <h2>Verifiera att du är en människa</h2> {/* Title */}
                <p>Skriv denna kod: <strong>{captcha}</strong></p> {/* Displays CAPTCHA code */}

                {/* Input field and button container */}
                <div className="captcha-input-area">
                    <input
                        type="text"
                        value={input} // Binds input value to the state variable `input`
                        onChange={(e) => setInput(e.target.value)} // Updates state when user types
                        placeholder="Skriv kod här"
                    />
                    <button onClick={verifyCaptcha}>Verifiera</button> {/* Button to check CAPTCHA input */}
                </div>

                <p className="captcha-message">{message}</p> {/* Displays success or error message */}
            </div>
        </div>
    );
}

export default Captcha;

