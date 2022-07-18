import React from "react";

function Header ({ isDarkmode, onDarkModeClick}) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkmode ? "Dark" : "Light"} Mode
            </button>
        </header>
    );
}

export default Header;