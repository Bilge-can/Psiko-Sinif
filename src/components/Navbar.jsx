import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">🧠 PsikoSınıf</div>
            <ul className="nav-links">
                <li><NavLink to="/" end> Ana Sayfa </NavLink></li>
                <li><NavLink to="/disorders"> Sınıflandırma </NavLink></li>
                <li><NavLink to="/about"> Hakkında </NavLink></li>
                <li><NavLink to="/contact"> İletişim </NavLink></li>
            </ul>
        </nav>
    );
}
