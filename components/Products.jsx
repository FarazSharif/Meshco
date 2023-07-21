import React from "react";

export default function ProductPage(props) {
    return (
        <div className="product-page">
            <div
                style={{
                    backgroundImage: `url(images/products-bg.jpg)`,
                    position: "fixed",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '-800px',
                    backgroundPositionX: '175px',
                    width: "100%",
                    height: "150%"
                }}
            ></div>
            <div className="product-page-content">

                <div className="product-page-title">
                    <h1>Products:</h1>
                </div>

                <ul className="product-page-details">
                    <li onClick={props.handleClickProductweld} className="prod-1">
                        <img src="images/product-page-img3.jpg" alt="stainless steel Welded mesh" />
                        <h2 > Welded mesh</h2>
                        <h3>Stainless steel welded mesh is a strong and corrosion-resistant wire mesh created by welding stainless steel wires together. It is used in various applications like fencing, security enclosures, and construction reinforcement due to its durability and versatility.</h3>
                    </li>
                    <li onClick={props.handleClickProductswm} className="prod-2">
                        <img src="images/product-page-img2.jpg" alt="Wooven mesh" />
                        <h2>Wooven mesh</h2>
                        <h3>Woven mesh is a type of wire mesh that is created by interweaving individual wires in a
                            crisscross pattern.
                            Woven mesh offers strength, flexibility, and excellent filtration capabilities. It is used in applications such as sieving,
                            filtering, insect screens, and decorative purposes.

                        </h3>
                    </li>
                    <li onClick={props.handleClickProductemm} className="prod-3">
                        <img src="images/Stainless steel expanded metal mesh.jpg" alt="expanded metal mesh" />
                        <h2>expanded metal mesh</h2>
                        <h3>Expanded metal mesh is a type of wire mesh that is created by cutting and stretching a flat sheet of metal, resulting in a
                            pattern of interconnected diamond-shaped openings. It is lightweight, yet strong and rigid. It's used
                            in walkways, machine guards, grilles, and fencing.

                        </h3>

                    </li>
                    <li onClick={props.handleClickProductpm} className="prod-4">
                        <img src="images/Stainless steel perforated mesh.jpg" alt="fiter mesh" />
                        <h2>perforated mesh</h2>
                        <h3>Perforated mesh, also known as perforated metal, is a sheet of metal that contains regularly spaced holes or perforations.
                            Perforated mesh provides good ventilation, visibility, and sound absorption.
                            It is used in screens, filters, and decorative facades.
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}