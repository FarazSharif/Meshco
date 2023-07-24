import React from "react";

export default function Productemm(props) {
    return (
        <div className="product">
            <div className="subproduct-content">

                <div className="product-title">
                    <h1 onClick={props.handleClickProducts}>Products {">> "} </h1>
                    <h2> Expanded metal mesh:</h2>
                </div>
                <div className="product-detail1">
                    <img src="emm-1.jpg"></img>
                    <div className="product-text">
                        <h2>Safety Grating
                        </h2>
                        <h4>Expanded metal mesh is widely utilized as safety grating in industrial and commercial environments. Its unique design with raised diamond-shaped openings provides excellent slip resistance, allowing for secure footing even in wet or oily conditions. Safety grating made from expanded metal mesh finds applications in walkways, platforms, stair treads, and catwalks, ensuring worker safety and preventing accidents due to slipping or tripping.


                        </h4>
                    </div>
                </div>
                <div className="product-detail2">
                    <img src="emm-2.jpg"></img>
                    <div className="product-text">
                        <h2>Ventilation and Airflow</h2>
                        <h4>Expanded metal mesh is an ideal choice for applications that require ventilation and airflow control. The interconnected pattern of the expanded metal allows for the passage of air, making it suitable for HVAC (heating, ventilation, and air conditioning) systems, air vents, and equipment enclosures. The mesh openings can be customized to regulate the desired airflow while providing a barrier against larger objects or debris.


                        </h4>
                    </div>
                </div>
                <div className="product-detail3">
                    <img src="emm-3.jpg"></img>
                    <div className="product-text">
                        <h2>Decorative Panels</h2>
                        <h4>Expanded metal mesh is increasingly used as decorative panels in architectural and interior design projects. Its unique patterns and textures offer a modern and visually appealing aesthetic. Expanded metal mesh can be used as cladding, wall panels, room dividers, or decorative facades in commercial spaces, museums, and public buildings. Its versatility allows for creative and striking design elements that combine functionality with artistic expression.


                        </h4>
                    </div>
                </div>
                <div className="product-detail4">
                    <img src="emm-4.jpg"></img>
                    <div className="product-text">
                        <h2>Security Barriers
                        </h2>
                        <h4>Expanded metal mesh is an effective choice for security barriers and perimeter fencing. The robust and rigid structure of expanded metal provides a high level of security against intrusion and unauthorized access. It is commonly used in prisons, government buildings, industrial sites, and residential properties to create secure enclosures, window guards, and fencing systems that offer both visibility and protection.


                        </h4>
                    </div>
                </div>
            </div>
        </div>

    )
}
