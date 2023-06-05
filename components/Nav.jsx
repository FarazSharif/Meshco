import React from "react";

export default function Nav(props) {
return(
<div id="navbar">
    <div className="nav-content">
    <div className="left-side">
        <div className="languages">
            <img src="../src/assets/eng.png" alt="English" className="english-icon"/>
            <img src="../src/assets/iran.png" alt="Farsi" className="farsi-icon"/>
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
                <h3>Home page</h3>
                <h3>About us</h3>
                <h3>Custom orders</h3>
                <h3>Contact us</h3>
                </div>
        <div className="content-top-right">
                <img src="../src/assets/meshco.svg" className="toori-logo"></img>
        </div>
    </div>
    </div>
)
}   