import React from "react";

export default function Aboutus(props) {
    return (
        <div className="about-page">
            <div className="page-bg"
                style={{
                    backgroundImage: `url(../src/assets/products-bg.jpg)`,
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
            <div className="about-page-content">
                    <img src="src/assets/meshco.svg"></img>
                    <h3>distribution of steel mesh of many types such as Welded mesh, perforated mesh,woven and many more. Learn more about us: </h3>
            </div>
        </div>
    )
}