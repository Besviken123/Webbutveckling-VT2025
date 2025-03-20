import React from "react";

import "../styles/Contact.css";
import "../styles/Styles.css";

class Contact extends React.Component {
    render() {
        return (
            <main>
                <div className="contact-subtext">
                    <h1>VI FINNS HÄR OM DU VILL KONTAKTA OSS!</h1>
                    <p>Fyll i formuläret nedan för att komma i kontakt med oss.</p>
                    <p>Vi kommer svara så fort vi kan.</p>
                </div>

                {/* Kontaktformulär med en tabell */}
                <form
                    action="mailto:CollectorsPoint@interitkigtmail.com"
                    method="post"
                    encType="text/plain"
                >
                    <table className="contact-table">
                        <tbody>
                            <tr>
                                <td><label htmlFor="name">Namn:</label></td>
                                <td><input type="text" id="name" name="name" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">E-post:</label></td>
                                <td><input type="email" id="email" name="email" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="subject">Ämne:</label></td>
                                <td><input type="text" id="subject" name="subject" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="message">Meddelande:</label></td>
                                <td><textarea id="message" name="message" rows="5" required></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: "center" }}>
                                    <button type="submit">Skicka</button>
                                    <button type="reset">Rensa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </main>
        );
    }
}

export default Contact;
