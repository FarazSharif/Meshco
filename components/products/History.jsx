import React from "react";

export default function History(props) {
    return (
        <div className="product-page">
            <div className="product-page-bg"
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
            <div className="product-page-content">
                <div className="product-page-header">
                    <h1>Products:</h1>
                </div>
                <ul className="product-page-details">
                    <li onClick={props.handleClickProductweld}>
                        <img src="src/assets/product-page-img3.jpg" alt="stainless steel Welded mesh" />
                        <h2 > Welded mesh</h2>
                    </li>
                    <li onClick={props.handleClickProductswm}>
                        <img src="src/assets/product-page-img2.jpg" alt="Wooven mesh" />
                        <h2>Wooven mesh
                        </h2>

                    </li>
                    <li onClick={props.handleClickProductemm}>
                        <img src="src/assets/Stainless steel expanded metal mesh.jpg" alt="expanded metal mesh" />
                        <h2>expanded metal mesh
                        </h2>

                    </li>
                    <li onClick={props.handleClickProductpm}>  
                        <img src="src/assets/Stainless steel perforated mesh.jpg" alt="fiter mesh" />
                        <h2>perforated mesh
                        </h2>

                    </li>
                </ul>
            </div>
        </div>
    )
}