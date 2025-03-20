import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import "../styles/Home.css";
import "../styles/Styles.css";

class Home extends React.Component {
    render() {
        return (
            <main>
                <div className="newsGraphic">
                    <img className="newsImage" src="Bilder/newsGraphic.jpg" alt="Latest news 1" />
                    <div className="newstext-on-graphic">
                        <Link to="/underConstruction">
                            <div className="newsText1 news">FOUNDATIONS</div>
                            <div className="newsText2 news">UTE NU!</div>
                            <div className="newsText3 news">Återvänd till rötterna av</div>
                            <div className="newsText4 news">Magic The Gathering med nya FOUNDATIONS</div>
                            <div className="newsText5 news">Tryck för att se nya släppet!</div>
                        </Link>
                    </div>
                    <img className="changeNewsButton" src="Bilder/Next_page.png" alt="Likes" />
                </div>

                <div className="newArticleSlider">
                    <h2>NYA GREJER!</h2>
                    <div className="slider">
                        {[
                            { src: "Bilder/foundations-play-booster-1.png", title: "Foundations play booster", price: "65kr", desc: "Innehåller 15 kort!" },
                            { src: "Bilder/foundations-play-booster-display-36-1.png", title: "Foundations play booster box", price: "1200kr", desc: "Innehåller 24 booster packs!" },
                            { src: "Bilder/innistrad-booster.png", title: "Innistrad remastered play booster", price: "69kr", desc: "Innehåller 15 kort!" },
                            { src: "Bilder/foundations-starter-collection-1.png", title: "Foundations Starter Collection", price: "620kr", desc: "Innehåller 325 kort!" },
                            { src: "Bilder/innistrad-rem-box.png", title: "Innistrad play booster box", price: "1200kr", desc: "Innehåller 24 booster packs!" },
                            { src: "Bilder/sampl-image.png", title: "Innistrad play booster box", price: "1200kr", desc: "Innehåller 24 booster packs!" },
                        ].map((item, index) => (
                            <div className="slide" key={index}>
                                <Link to="/underConstruction">
                                    <img src={item.src} alt={`Article ${index + 1} Image`} />
                                    <h3>{item.title}</h3>
                                </Link>
                                <p>{item.desc}</p>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="populareArticles">
                    <div className="randomArticles">
                        <h2>REKOMMENDERADE ARTIKLAR!</h2>
                        <div className="random-grid">
                            {[
                                "pika-plush.png",
                                "Char-plush.jpg",
                                "pip-plush.png",
                                "binder.png",
                                "bloom-booster.png",
                                "pokemon-booster-pack.jpeg",
                                "foundations-play-booster-1.png",
                                "foundations-play-booster-1.png",
                            ].map((img, index) => (
                                <div className="random-item" key={index}>
                                    <Link to="/underConstruction">
                                        <img src={`Bilder/${img}`} alt={`Article ${index + 1} Image`} />
                                        <h3>Item {index + 1}</h3>
                                        <p>Popular product description</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2>POPULÄRA ARTIKLAR</h2>
                    <div className="popular-grid">
                        {Array(8).fill("foundations-play-booster-1.png").map((img, index) => (
                            <div className="popular-item" key={index}>
                                <Link to="/underConstruction">
                                    <img src={`Bilder/${img}`} alt={`Article ${index + 1} Image`} />
                                    <h3>Item {index + 1}</h3>
                                    <p>Popular product description</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
