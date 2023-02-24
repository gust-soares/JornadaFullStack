import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <img src="https://oceanbrasil.com/assets/logo.svg" />
            <div className="Header__links">
                <a href="#">Home</a>
                <a href="#">Criar</a>
            </div>
        </div>
    );
}

export default Header;
