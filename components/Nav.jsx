import React from "react";

export default function Nav(props) {
    return (
        <div id="navbar">
            <div className="nav-content">
                <div className="left-side">
                    <div className="languages">
                        <img src="../src/assets/eng.png" alt="English" className="english-icon" />
                        <img src="../src/assets/iran.png" alt="Farsi" className="farsi-icon" />
                    </div>
                    <div className="socials">
                        <img src="../src/assets/whatsapp.png" alt="whatsapp" />
                        <img src="../src/assets/instagram.png" alt="instagram" />
                        <img src="../src/assets/linkedin.png" alt="linkedin" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="email">
                        <h3>JohnDoe@email.com</h3>
                        <img src="../src/assets/mail.png" alt="mail" />
                    </div>
                    <div className="phone">
                        <h3>905 123 123 123</h3>
                        <img src="../src/assets/phone.png" alt="phone" />
                    </div>
                </div>
            </div>
            <div className={`content-top ${props.scrollDirection === "down" ? "move-down" : ""}`}>
                <div className="content-top-left">
                    <h1 className="link">Home page</h1>
                    <div className="dropdown">
                        <h1 className="link">About us</h1>
                        <div className="dropdown-menu">
                            <h2>Lorem ipsum dolor</h2>
                            <h2>adipiscing elit</h2>
                            <h2>Sed quis nunc</h2>
                        </div>
                    </div>
                    <div className="dropdown">
                        <h1 className="link">Custom orders</h1>
                        <div className="dropdown-menu">
                            <h2>Nunc ut iaculis</h2>
                            <h2>elementum pretium </h2>
                        </div>
                    </div>
                    <h3 className="link">Contact us</h3>
                </div>
                <div className="content-top-right">
                    <img src="../src/assets/meshco.svg" className="toori-logo"></img>
                </div>
            </div>
        </div>
    )
}   