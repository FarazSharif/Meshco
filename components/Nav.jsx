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
                    <a className={`link ${props.homePage ? "link-active" : ""}`} onClick={props.handleClickHome}>Home page</a>
                    <div className="dropdown">
                        <a className={`link ${props.productweld || props.productsPage || props.productemm
                            || props.productpm || props.productwm ? "link-active1" : ""}`} onClick={props.handleClickProducts}>Products</a>
                        <div className="dropdown-menu">
                            <h2 className={`sublink ${props.productweld ? "link-active" : ""}`} onClick={props.handleClickProductweld} >Welded mesh</h2>
                            <h2 className={`sublink ${props.productwm ? "link-active" : ""}`} onClick={props.handleClickProductswm}>Wooven mesh</h2>
                            <h2 className={`sublink ${props.productemm ? "link-active" : ""}`} onClick={props.handleClickProductemm}>expanded metal mesh</h2>
                            <h2 className={`sublink ${props.productpm ? "link-active" : ""}`} onClick={props.handleClickProductpm}>perforated mesh</h2>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a className={`link ${props.aboutUsPage ? "link-active1" : ""}`} onClick={props.handleClickAbout} >About us</a>
                        <div className="dropdown-menu">
                            <a href="#about-page-about" onClick={props.handleClickAbout}>About Meshco</a>
                            <a href="#about-page-history" onClick={props.handleClickAbout}>History of Meshco</a>
                            <a href="#about-page-catalog" onClick={props.handleClickAbout}>Recieve our catalogs</a>
                        </div>
                    </div>

                    <a className="link" onClick={props.handleClickContact}>Contact us</a>
                </div>
                <div className="content-top-right">
                    <img src="../src/assets/meshco.svg" className="toori-logo" onClick={props.handleClickHome}></img>
                </div>
            </div>

            <div className="sidebar">
                <div className="meshco-logo" onClick={props.handleClickHome}>
                    <img src="../src/assets/meshco.svg" ></img>
                    <h6>Stainless steel and Mesh distributer.</h6>
                </div>
                <div className="know-text">
                    <h1>Ask us today!</h1>
                    <h4>Meshco is dedicated to provide you the best counciling and service,</h4>
                    <h1>so</h1>
                    <h2>EMAIL US AT :</h2>
                    <h3>Meshco.steel@hotmail.com</h3>
                    <h2>What defines us?</h2>
                    <h5>We excel at production and distribution of all kinds of welded netting, mesh,
                        serandi, galvanized, fence, steel, gabion, barbed wire, fence base,
                        metal mesh and many more according to your request.<br /> Contact numbers: <br />✆ (+98-935-8178250) <br />✆ (+98-666-92825) <br />✆ (+98-666-70451)</h5>
                </div>
            </div>
        </div>
    )
}   