import React from "react";

export default function Home(props) {
    const [backgroundpic, Setbackgroundpic] = React.useState("1")
    React.useEffect(() => {
        const interval = setInterval(() => {
            const nextPic = parseInt(backgroundpic) + 1;
            const newBackgroundPic = nextPic <= 3 ? nextPic.toString() : "1";
            Setbackgroundpic(newBackgroundPic);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [backgroundpic]);
    function handleClick(id) {
        Setbackgroundpic(id);
    }
    return (
        <div className="homepage">
            <div
                className={`home-bg-${backgroundpic}`}
                style={{
                    backgroundImage: `url(../src/assets/background${backgroundpic}.jpg)`,
                    transition: "background-image 0.4s ease-in",
                    position: "fixed",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                }}
            ></div>
            <div className="home-content">
                <h1 className="home-title">Custom industrial Steel mesh experts</h1>
                <ul>
                    <li>
                        <img src="./src/assets/white-ring.png" alt="not active" className={` ${backgroundpic === "1" ? "deactive" : "active"}`} onClick={() => handleClick("1")} />
                        <img src="./src/assets/white-circle.svg" alt="not active" className={` ${backgroundpic === "1" ? "active" : "deactive"}`} onClick={() => handleClick("1")} bg-img="1" />
                    </li>
                    <li>
                        <img src="./src/assets/white-ring.png" alt="not active" className={` ${backgroundpic === "2" ? "deactive" : "active"}`} onClick={() => handleClick("2")} />
                        <img src="./src/assets/white-circle.svg" alt="not active" className={` ${backgroundpic === "2" ? "active" : "deactive"}`} onClick={() => handleClick("2")} bg-img="2" />
                    </li>
                    <li>
                        <img src="./src/assets/white-ring.png" alt="not active" className={` ${backgroundpic === "3" ? "deactive" : "active"}`} onClick={() => handleClick("3")} />
                        <img src="./src/assets/white-circle.svg" alt="not active" className={` ${backgroundpic === "3" ? "active" : "deactive"}`} onClick={() => handleClick("3")} bg-img="3" />
                    </li>
                </ul>
                <div className="products-btn">
                    <div className="home-btn-1">
                        <h1 onClick={props.handleClickProducts}>See products</h1>
                    </div>
                    <div className="home-btn-2">
                        <h1>Create order</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
