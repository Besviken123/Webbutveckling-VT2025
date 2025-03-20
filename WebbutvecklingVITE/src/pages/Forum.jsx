import React from "react";

import "../styles/Forum.css";
import "../styles/Styles.css";
import { Link } from "react-router-dom";

class Forum extends React.Component {
    render() {
        return (
            <main>
                <div className="forum-container">
                    <div className="forum-title-and-graphic">
                        <div className="forum-title">
                            <h1>FORUM</h1>
                        </div>
                        <div className="forum-graphic">
                            <img src="Bilder/forum.png" alt="forum image" />
                        </div>
                    </div>

                    <div className="forum-navbar">
                        <ul>
                            <li><Link to="/underConstruction">ALLA</Link></li>
                            <li>
                                <a href="#">MAGIC</a>
                            </li>
                            <li>
                                <a href="#">Pokémon</a>
                            </li>
                            <li>
                                <a href="#">WARHAMMER</a>
                            </li>
                            <li><Link to="/underConstruction">DND</Link></li>
                            <li><Link to="/underConstruction">TRÄFFAR</Link></li>
                            <li><Link to="/underConstruction">SÖKER KORT</Link></li>
                            <li><Link to="/underConstruction">BLANDAT</Link></li>
                        </ul>
                    </div>

                    <div className="forum-sidebar-search-posts">
                        {/* Sidebar with Recent Posts */}
                        <div className="forum-sidebar">
                            <h2>Senast besökta inlägg</h2>
                            <ul>
                                <li><Link to="/underConstruction">Guide till Magic The Gathering-lekar</Link></li>
                                <li><Link to="/underConstruction">Värdering av Pokémonkort</Link></li>
                                <li><Link to="/underConstruction">Strategitips för Yu-Gi-Oh!</Link></li>
                                <li><Link to="/underConstruction">Rekommendationer för brädspel</Link></li>
                                {[...Array(7)].map((_, index) => (
                                    <li key={index}><Link to="/underConstruction">Exempel inlägg senast besökt</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Posts Section for Example User Posts */}
                        <div className="forum-posts">
                            <h2>Bläddrar från ALLA inlägg</h2>
                            {[
                                {
                                    title: "Bästa MTG-lekarna 2024", author: "User123", time: "för 2 timmar sedan",
                                    content: "Letar du efter de bästa lekarna i den nuvarande metan? Här är mina tankar..."
                                },
                                {
                                    title: "Hur man identifierar sällsynta Pokémon-kort", author: "PokeMaster", time: "för 5 timmar sedan",
                                    content: "Ny inom Pokémon-kort? Här är en guide om vad som gör ett kort värdefullt..."
                                },
                                ...Array(6).fill({
                                    title: "Exempel inlägg", author: "Användare", time: "för x timmar sedan",
                                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                })
                            ].map((post, index) => (
                                <div className="post" key={index}>
                                    <h3>{post.title}</h3>
                                    <p>Publicerad av <strong>{post.author}</strong> | {post.time}</p>
                                    <p>{post.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Forum;
