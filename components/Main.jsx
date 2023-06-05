import React from "react";

export default function Main(props) {
return (
<div className="main">
<div className ="did-you-know">
    <div className="meshco-logo">
        <img src="../src/assets/meshco.svg" ></img>
        <h6>Stainless steel and Mesh distributer.</h6>
    </div>    
        <div className="know-text">
        <h1>Ask us today!</h1>
        <h4>Meshco is dedicated to provide you the best counciling and service all around the world.</h4>
        <h2>EMAIL US AT :</h2>
        <h3>Meshco.steel@hotmail.com</h3>
        <h2>What defines us?</h2>
        <h5>We excel at production and distribution of all kinds of welded netting, mesh, 
            serandi, galvanized, fence, steel, gabion, barbed wire, fence base,
             metal mesh and many more according to your request.<br/> Contact numbers: <br/>✆ (+98-935-8178250) <br/>✆ (+98-666-92825) <br/>✆ (+98-666-70451)</h5>
        </div>
    </div>
{ props.mainPage ? <div className="products"> 
    
    <div className="product-detail1">
        <img src="../src/assets/1.jpg"></img>
        <div className="product-text">
        <h2>Product-1</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc turpis. Nunc ut iaculis lacus. Curabitur eu auctor est. Quisque congue euismod leo sed gravida. Duis aliquam commodo ultricies. Pellentesque nulla magna, vulputate id justo sed, elementum pretium dui. Suspendisse aliquam sit amet eros id pretium.

Aenean id nulla consequat, ullamcorper urna nec, pretium nunc. Aliquam suscipit elementum pulvinar. Donec condimentum augue eget semper pretium. Curabitur suscipit, felis id sollicitudin auctor, ante justo iaculis erat, id varius purus lectus ac sem. Vivamus malesuada ultricies magna, sagittis eleifend erat gravida lacinia. Nunc euismod arcu quis lacus fermentum, quis pulvinar nisi scelerisque. Donec feugiat dui non tellus facilisis ullamcorper.

</h4>
        </div>
        </div>
    <div className="product-detail2">
        <img src="../src/assets/2.jpg"></img>
        <div className="product-text">
        <h2>Product-2</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc turpis. Nunc ut iaculis lacus. Curabitur eu auctor est. Quisque congue euismod leo sed gravida. Duis aliquam commodo ultricies. Pellentesque nulla magna, vulputate id justo sed, elementum pretium dui. Suspendisse aliquam sit amet eros id pretium.

Aenean id nulla consequat, ullamcorper urna nec, pretium nunc. Aliquam suscipit elementum pulvinar. Donec condimentum augue eget semper pretium. Curabitur suscipit, felis id sollicitudin auctor, ante justo iaculis erat, id varius purus lectus ac sem. Vivamus malesuada ultricies magna, sagittis eleifend erat gravida lacinia. Nunc euismod arcu quis lacus fermentum, quis pulvinar nisi scelerisque. Donec feugiat dui non tellus facilisis ullamcorper.

</h4>
        </div>
        </div>
    <div className="product-detail3">
        <img src="../src/assets/3.jpg"></img>
        <div className="product-text">
        <h2>Product-3</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc turpis. Nunc ut iaculis lacus. Curabitur eu auctor est. Quisque congue euismod leo sed gravida. Duis aliquam commodo ultricies. Pellentesque nulla magna, vulputate id justo sed, elementum pretium dui. Suspendisse aliquam sit amet eros id pretium.

Aenean id nulla consequat, ullamcorper urna nec, pretium nunc. Aliquam suscipit elementum pulvinar. Donec condimentum augue eget semper pretium. Curabitur suscipit, felis id sollicitudin auctor, ante justo iaculis erat, id varius purus lectus ac sem. Vivamus malesuada ultricies magna, sagittis eleifend erat gravida lacinia. Nunc euismod arcu quis lacus fermentum, quis pulvinar nisi scelerisque. Donec feugiat dui non tellus facilisis ullamcorper.

</h4>
        </div>
        </div>
    <div className="product-detail4">
        <img src="../src/assets/4.jpg"></img>
        <div className="product-text">
        <h2>Product-4</h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nunc turpis. Nunc ut iaculis lacus. Curabitur eu auctor est. Quisque congue euismod leo sed gravida. Duis aliquam commodo ultricies. Pellentesque nulla magna, vulputate id justo sed, elementum pretium dui. Suspendisse aliquam sit amet eros id pretium.

Aenean id nulla consequat, ullamcorper urna nec, pretium nunc. Aliquam suscipit elementum pulvinar. Donec condimentum augue eget semper pretium. Curabitur suscipit, felis id sollicitudin auctor, ante justo iaculis erat, id varius purus lectus ac sem. Vivamus malesuada ultricies magna, sagittis eleifend erat gravida lacinia. Nunc euismod arcu quis lacus fermentum, quis pulvinar nisi scelerisque. Donec feugiat dui non tellus facilisis ullamcorper.

</h4>
        </div>
        </div>
</div> : ""}

</div>
)
}