import React from "react";


import vector from "../assets/vector.png"
import rectangle from "../assets/rectangle 1.png"
import image from "../assets/image 2.png"
import Rectangle from "../assets/Rectangle8.png"



function Header() {

  return (

    <><nav className="navbar">
      <div className="navbar-logo">
        <img src={vector} alt="logo" />
        <span>localli</span>
      </div>
      <div className="nav-links">


        <a href="How it Works">How it works</a>
        <a href="pricing">Pricing</a>
        <button className="request">Request-Beta</button>
      </div>
    </nav>
      <div className="container">
        <p className="intro-text">Introducing Localli</p>
        <h1 className="main-heading">Same-day Delivery for Shopify Brands</h1>
        <p className="description">Localli is a fulfillment & delivery service that allows you to offer a same-day delivery experiencesfor <br />your customers conveniently from their checkout page.</p>
      </div>
      <div className="button-group">
        <button className="button primary">Request Beta</button>
        <button className="button secondary">How it works</button>
      </div>
      <footer className="benefit">
        <div className="benefit">
          <span className="checkmark">✔</span> Increase your store conversions
        </div>
        <div className="benefit">
          <span className="checkmark">✔</span> Offer an Amazon-like delivery experience
        </div>
        <div className="benefit">
          <span className="checkmark">✔</span> Reduce your abandoned carts
        </div>
      </footer>
      <div className="rectangle">
        <img src={rectangle} alt="rec" />
      </div>
      <div className="intro-container">
        <h4 className="intro-title">Introducing Localli</h4>
        <p className="intro-description">Localli operates a network of micro <br /> fulfillment spaces across the country <br />in major cities, down to your nearest <br /> neighborhood</p>

      </div>
      <div className="image">
        <img src={image} alt="rec" />
      </div>
      <div className="how-it-works-container">
        <p className="how-it-works-subtitle">How it works</p>
        <h1 className="how-it-works-title">Same-day delivery<br />
          in 3-simple steps.</h1>
      </div>
      <div className="Rectangle(8)">
        <img src={Rectangle} alt="Rec" />

      </div>














    </>

  );
}


export default Header;

