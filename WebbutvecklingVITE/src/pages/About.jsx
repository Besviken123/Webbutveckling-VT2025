import React from "react";

import "../styles/About.css";
import "../styles/Styles.css";

class About extends React.Component {
    render() {
        return (
            <main>
                <div className="about-container">
                    <div>
                        <img src="Bilder/omOssBild.png" alt="Om oss" className="about-image" />
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <h2>Om oss på Collector's Point</h2>
                            <p>
                                Välkommen till Collector's Point, Sveriges äldsta kvarvarande Magic the Gathering butik. Den
                                17:e Maj 1995 öppnade vi butiken, då var vårt mål att bli bäst i Sverige på hockeykort.
                                Vi är fortfarande en av de bästa på hockeykort, men vi är också sedan många år en av de bästa
                                butikerna i Norden på kortspel, rollspel, brädspel och figurspel (ej GW).
                            </p>
                            <h3>Kortspel</h3>
                            <p>
                                Kortspel blev vår huvudinriktning när intresset för hockeykorten minskade efter den stora
                                "masshysterin" som rådde 1994-1995. Magic the Gathering var det första och är fortfarande det
                                största kortspelet, men det har dykt upp en massa olika genom åren. Vi har massor av dem i lager
                                (över 50 olika).
                            </p>
                            <h3>Rollspel</h3>
                            <p>
                                Med vårt sortiment på över 3700 olika rollspelsböcker, så är vi troligast den butik i
                                Norden som har flest rollspel i lager.
                            </p>
                            <h3>Brädspel</h3>
                            <p>
                                Vi har över 1600 olika sällskapsspel (bräd- och kortspel) i lager. Vi har framförallt
                                inriktat oss på spel som du inte hittar på din lokala leksaksaffär eller stormarknad.
                            </p>
                            <h3>Figurspel</h3>
                            <p>
                                Vi har i första hand inriktat oss på spel med "färdigmålade" figurer som tex Star
                                Wars X-Wing, Heroclix, D&D, Pathfinder och Axis & Allies. OBS! inga GW-figurer.
                            </p>
                            <h3>Artiklar och produkter!</h3>
                            <p>
                                För närvarande finns ca 155000 artiklar/produkter utlagda på hemsidan.
                            </p>
                        </div>

                        {/* Videosektion */}
                        <div className="about-video">
                            <iframe
                                width="630"
                                height="512"
                                src="https://www.youtube.com/embed/syPfanrhMRE"
                                title="Video av Collectors Point"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;
