import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import "../styles/Cardgames.css";
import "../styles/Styles.css";

class Cardgames extends React.Component {
    render() {
        return (
            <main>
                <div className="cardgameTitle">
                    <h1>BLÄDDRAR INOM "KORTSPEL"</h1>
                </div>
                <div className="cardgame-container">

                    <div className="category-container">
                        <h2>Kategorier</h2>
                        <ul>
                            <li><a href="#">Magic The Gathering</a></li>
                            <li><a href="#">Pokémon</a></li>
                            <li><a href="#">Yu-Gi-Oh!</a></li>
                            <li><a href="#">Disney Lorcana TCG</a></li>
                            <li><a href="#">One Piece TCG</a></li>
                        </ul>
                    </div>

                    <div className="cardgame-dropdown-AND-grid">
                        {/* Container for Dropdowns */}
                        <div className="card-dropdown-container">
                            <div className="card-dropdown">
                                <span className="card-dropdown-label">KATEGORIER</span>
                                <img src="Bilder/Expand-Arrow-(dark).png" alt="Expand" className="card-dropdown-arrow" />
                                <ul className="card-dropdown-menu">
                                    <li><a href="#">Magic The Gathering</a></li>
                                    <li><a href="#">Pokémon</a></li>
                                    <li><a href="#">Yu-Gi-Oh!</a></li>
                                    <li><a href="#">Disney Lorcana TCG</a></li>
                                    <li><a href="#">One Piece TCG</a></li>
                                </ul>
                            </div>

                            <div className="card-dropdown">
                                <span className="card-dropdown-label">PRIS</span>
                                <img src="Bilder/Expand-Arrow-(dark).png" alt="Expand" className="card-dropdown-arrow" />
                                <ul className="card-dropdown-menu">
                                    <li><a href="#">0-100 kr</a></li>
                                    <li><a href="#">101-300 kr</a></li>
                                    <li><a href="#">301-500 kr</a></li>
                                    <li><a href="#">500+ kr</a></li>
                                </ul>
                            </div>

                            <div className="card-dropdown">
                                <span className="card-dropdown-label">UTGIVARE</span>
                                <img src="Bilder/Expand-Arrow-(dark).png" alt="Expand" className="card-dropdown-arrow" />
                                <ul className="card-dropdown-menu">
                                    <li><a href="#">Wizards of the Coast</a></li>
                                    <li><a href="#">Bandai</a></li>
                                    <li><a href="#">Konami</a></li>
                                    <li><a href="#">Disney</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="product-grid">
                            {[
                                { img: "Bilder/innistrad-rem-box.png", name: "Innistrad Remastered Box", price: "399 KR" },
                                { img: "Bilder/innistrad-booster.png", name: "Innistrad Remastered Booster", price: "49 KR" },
                                { img: "Bilder/foundations-play-booster-1.png", name: "Foundation Play Booster", price: "69 KR" },
                                { img: "Bilder/foundations-play-booster-display-36-1.png", name: "Foundation Booster Box", price: "1299 KR" },
                                { img: "Bilder/foundations-starter-collection-1.png", name: "Foundation Starter Collection", price: "599 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "199 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "299 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" },
                                { img: "Bilder/sampl-image.png", name: "Sample Product", price: "499 KR" }
                            ].map((product, index) => (
                                <div className="product-item" key={index}>
                                    <Link to="/underConstruction">
                                        <img src={product.img} alt={product.name} />
                                    </Link>
                                    <p>{product.name}</p>
                                    <span className="price">PRIS: {product.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        );
    }
}

export default Cardgames;
