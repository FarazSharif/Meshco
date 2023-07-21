import React from "react";

export default function ProductSSM(props) {
    return (
        <div className="product">
            <div className="subproduct-content">
                <div className="product-title">
                    <h1 onClick={props.handleClickProducts}>Products {">> "} </h1>
                    <h2> Welded wire mesh:</h2>
                </div>
                <div className="product-detail1">
                    <img src="../src/images/welded-1.png"></img>
                    <div className="product-text">
                        <h2>Fencing and Enclosures
                        </h2>
                        <h4>Stainless steel welded wire mesh is widely utilized in fencing applications for its strength and durability. It is commonly used for creating secure
                            perimeters, whether for residential, commercial, or agricultural purposes. Additionally, it finds application in animal enclosures, providing a safe
                            and sturdy barrier for containing animals and preventing unwanted intrusions.
                        </h4>
                    </div>
                </div>
                <div className="product-detail2">
                    <img src="../src/images/welded-2.jpg"></img>
                    <div className="product-text">
                        <h2>Security Panels</h2>
                        <h4>Stainless steel welded wire mesh is an excellent choice for security panels and partitions. Its welded construction ensures a strong and rigid structure,
                            making it suitable for high-security areas such as prisons, data centers, and sensitive facilities. The mesh allows visibility and airflow while providing
                            a physical barrier against unauthorized access.
                        </h4>
                    </div>
                </div>
                <div className="product-detail3">
                    <img src="../src/images/welded-3.jpg"></img>
                    <div className="product-text">
                        <h2>Machine Guards</h2>
                        <h4>In industrial settings, stainless steel welded wire mesh is employed as machine guards to enhance workplace safety. It effectively prevents contact
                            with moving parts and hazardous machinery, reducing the risk of accidents and injuries. The robustness and corrosion resistance of the welded mesh
                            make it ideal for withstanding harsh operating conditions.
                        </h4>
                    </div>
                </div>
                <div className="product-detail4">
                    <img src="../src/images/welded-4.jpg"></img>
                    <div className="product-text">
                        <h2>Reinforcement in Concrete Structures
                        </h2>
                        <h4>Stainless steel welded wire mesh is used as reinforcement in concrete structures to improve their strength and durability. It is commonly employed
                            in applications such as floor slabs, sidewalks, foundations, and retaining walls. The welded mesh acts as a reinforcement matrix, providing added
                            structural integrity, crack resistance, and load-bearing capacity to the concrete, ensuring long-term performance of the structure.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
