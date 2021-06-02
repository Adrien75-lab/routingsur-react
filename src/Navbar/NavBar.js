import React, {useState, useEffect} from 'react';
import "./Navbar.css";

export default function NavBar() {
    return (
        <nav>
            <ul className="liste">
            <li className="items">Accueil</li>
            <li className="items">About</li>
            <li className="items">Contact</li>
            </ul>
            <button className="btn">BTN</button>
            
        </nav>
    )
}
