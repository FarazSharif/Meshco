import React from "react";

export default function Productpm(props) {
    return (
        <div className="product">
            <div className="subproduct-content">

                <div className="product-title">
                    <h1 onClick={props.handleClickProducts}>Products {">> "} </h1>
                    <h2> Perforated mesh:</h2>
                </div>
                <div className="product-detail1">
                    <img src="images/pm-1.jpg"></img>
                    <div className="product-text">
                        <h2>Acoustic Panels
                        </h2>
                        <h4>Perforated mesh is commonly used in the construction of acoustic panels and soundproofing systems. The precise perforations in the mesh allow sound waves to pass through while the panel absorbs and reduces noise levels. This makes it ideal for applications such as recording studios, concert halls, theaters, and noise control barriers in industrial settings. Perforated mesh offers an effective solution for managing and improving sound quality in various environments.


                        </h4>
                    </div>
                </div>
                <div className="product-detail2">
                    <img src="images/pm-2.jpg"></img>
                    <div className="product-text">
                        <h2>HVAC Ventilation</h2>
                        <h4>Perforated mesh is widely utilized in HVAC systems for efficient air distribution and ventilation. The evenly spaced perforations in the mesh allow air to flow through while preventing the entry of debris, insects, and larger particles. It is commonly used in air vents, duct covers, and diffusers, ensuring proper airflow and maintaining indoor air quality. Perforated mesh provides an essential component for effective HVAC systems in commercial and residential buildings.


                        </h4>
                    </div>
                </div>
                <div className="product-detail3">
                    <img src="images/pm-3.jpg"></img>
                    <div className="product-text">
                        <h2>Decorative Screens</h2>
                        <h4>Perforated mesh is increasingly used as decorative screens in architectural and interior design projects. The patterns and designs created by the perforations offer a visually appealing and modern aesthetic. Perforated mesh can be employed as decorative partitions, room dividers, facades, and wall panels, adding a touch of style and creativity to commercial spaces, offices, hotels, and public areas. Its versatility allows for unique designs and customizable patterns that enhance the overall aesthetics of a space.


                        </h4>
                    </div>
                </div>
                <div className="product-detail4">
                    <img src="images/pm-4.jpg"></img>
                    <div className="product-text">
                        <h2>Filtration and Straining
                        </h2>
                        <h4>Perforated mesh is widely used for filtration and straining applications in various industries. The precise and uniform perforations allow for efficient separation and filtration of solids, liquids, and gases. It is commonly used in oil and gas processing, chemical industries, food processing, and water treatment. Perforated mesh provides reliable filtration capabilities, ensuring the removal of impurities and contaminants for improved product quality and process efficiency.


                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
