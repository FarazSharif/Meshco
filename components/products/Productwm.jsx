import React from 'react'

export default function Productwm(props) {
    return (
        <div className="product">
            <div className="subproduct-content">

                <div className="product-title">
                    <h1 onClick={props.handleClickProducts}>Products {">> "} </h1>
                    <h2> Woven mesh:</h2>
                </div>
                <div className="product-detail1">
                    <img src="../src/images/woven-1.jpg"></img>
                    <div className="product-text">
                        <h2>Window Screens
                        </h2>
                        <h4>Woven mesh is extensively used in window screens, providing a practical and effective solution for insect control while allowing for fresh air circulation.
                            The finely woven mesh serves as a barrier, preventing insects such as mosquitoes, flies, and other pests from entering indoor spaces. The mesh openings are
                            meticulously designed to be small enough to keep out insects while maintaining sufficient visibility and airflow. Window screens not only provide protection
                            against annoying insects but also contribute to a more comfortable and hygienic living or working environment.
                        </h4>
                    </div>
                </div>
                <div className="product-detail2">
                    <img src="../src/images/woven-2.jpg"></img>
                    <div className="product-text">
                        <h2>Filtration Applications</h2>
                        <h4>Woven mesh plays a crucial role in a wide range of filtration applications across various industries. Its intricate weaving pattern creates a mesh structure
                            that enables effective separation and filtration of solids, liquids, and gases. In water treatment processes, woven mesh filters out impurities, sediments,
                            and contaminants, ensuring the delivery of clean and safe water for domestic, industrial, and agricultural purposes. In the oil and gas industry, woven mesh
                            is utilized for precise filtration of fluids, removing particles and ensuring the smooth operation of equipment.
                        </h4>
                    </div>
                </div>
                <div className="product-detail3">
                    <img src="../src/images/woven-3.jpg"></img>
                    <div className="product-text">
                        <h2>Sieving</h2>
                        <h4>Woven mesh is extensively used in sieving applications to separate particles of different sizes. It is commonly utilized in industries such as mining, construction, agriculture, and pharmaceuticals. The mesh's strength, durability, and accurate aperture sizes enable efficient particle separation and classification.
                        </h4>
                    </div>
                </div>
                <div className="product-detail4">
                    <img src="../src/images/woven-4.jpg"></img>
                    <div className="product-text">
                        <h2>Architectural Elements
                        </h2>
                        <h4>Woven mesh is increasingly used in architectural design elements to add aesthetic appeal and functionality. It finds application in facades, decorative panels, balustrades, and cladding. The versatility of woven mesh allows for creative and unique designs, providing a modern and visually striking appearance while offering ventilation, shade, and privacy in architectural structures.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}