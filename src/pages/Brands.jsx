import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Brands.css';

const Brands = () => {
  return (
    <div>
      <NavBar />
      <div className="categories">
        <div className="category-card1">
          <div id="nike" className="category-image1"></div>
          <div className="category-details">
            <div className="category-title">
              Empowering Athletes Everywhere
            </div>
            Unleash your potential with Nike, the global leader in innovation and style. From cutting-edge sportswear to iconic footwear, Nike inspires greatness in every step. Just Do It – because the best is yet to come.
          </div>
        </div>
        <div className="category-card1">
          <div id="adidas" className="category-image1"></div>
          <div className="category-details">
            <div className="category-title">
              Impossible Is Nothing
            </div>
            Step into the world of style with Adidas. From groundbreaking sports gear to fashion-forward designs, Adidas combines innovation with comfort to help you conquer every challenge. Embrace the stripes and redefine your limits!
          </div>
        </div>
        <div className="category-card1">
          <div id="puma" className="category-image1"></div>
          <div className="category-details">
            <div className="category-title">
              Forever Faster
            </div>
            Fuel your passion with Puma, where sport meets lifestyle. Designed for speed, style, and performance, Puma empowers you to stay ahead of the game. Dare to be bold—wear the spirit of the cat!
          </div>
        </div>
        <div className="category-card1">
          <div id="reebok" className="category-image1"></div>
          <div className="category-details">
            <div className="category-title">
              Life is Not a Spectator Sport
            </div>
            Reebok inspires you to move, train, and excel with gear built for action and style. From the gym to the streets, embrace the journey and make every step count. Be more, do more—live fully with Reebok!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
