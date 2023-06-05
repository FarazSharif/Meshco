import React from "react";

export default function Footer() {
    return(
        <div className="footer-box">
        <div className="footer-address">
                <h1>Our office info:</h1>
                <h2>Address: 2602 Major MacKenzie Dr W, Toronto, ON</h2>
                <h2>Phone number: +1-905-220-1960</h2>
            </div>
            <div className="footer-getintouch">
                <h1>Get in touch with us by:</h1>
                <h2>Meshco.steel@hotmail.com</h2>
                <h2>Instagram.com/Meshco.steel</h2>
            </div>
            <div className="footer-resources">
                <h1>Most used resources:</h1>
                <a href="https://www.twpinc.com/gauge-table">Gauge table chart</a>
                <a href="https://wstyler.com/square-opening-wire-mesh/terminology-measurement-methods/">terminology & measurement</a>
            </div>
           
        </div>
    )
}