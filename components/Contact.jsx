import React from "react";

export default function Contact(props) {
    return (
        <div className="content-page">
            <div className="page-bg"
                style={{
                    backgroundImage: `url(../src/images/products-bg.jpg)`,
                    transition: "background-image 0.2s ease-in",
                    position: "fixed",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '-800px',
                    backgroundPositionX: '175px',
                    width: "100%",
                    height: "100%"
                }}
            ></div>
            <div className="content-page-content">
                <h1>Contact our team:</h1>
                <form>
                    <label>Your name:
                        <input type="text" name="name" />
                    </label>
                    <label>E-mail address:
                        <input type="text" name="email" />
                    </label>
                    <label>Company name:
                        <input type="text" name="company-name" />
                    </label>
                    <label>Country:
                        <input type="text" name="country" />
                    </label>
                    <textarea placeholder="Your message here."/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}