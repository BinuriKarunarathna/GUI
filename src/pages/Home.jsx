import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import back1 from "../assets/back1.jpeg";
import back2 from "../assets/back.webp";
import back3 from "../assets/Background2.jpg";
import cricket from "../assets/cricket_card.avif";
import football from "../assets/football_card.avif";
import badminton from "../assets/badminton_card.webp";
import racket from "../assets/racket1.jpeg";
import shuttlecock from "../assets/shuttlecock.jpg";
import shoes from "../assets/shoes.jpeg";


import "../styles/Home.css";

const Home = () => {
  const slides = [
    {
      image: back1,
      text: [
        "Discover",
        " the High-Quality ",
        "equipments from ",
        "leading brands",
      ],
      buttonLink: "/Brands",
    },
    {
      image: back2,
      text: [
        "Discover",
        " the High-Quality ",
        "equipments from ",
        "leading brands",
      ],
      buttonLink: "/Brands",
    },
    {
      image: back3,
      text: [
        "Discover",
        " the High-Quality ",
        "equipments from ",
        "leading brands",
      ],
      buttonLink: "/Brands",
    },
  ];

  const discounts = [
    {
      name: "Yonex Racket",
      oldPrice: "$100",
      newPrice: "$80",
      image: racket,
    },
    {
      name: "Shuttlecock Pack",
      oldPrice: "$20",
      newPrice: "$15",
      image: shuttlecock,
    },
    {
      name: "Badminton Shoes",
      oldPrice: "$120",
      newPrice: "$90",
      image: shoes,
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div>
      <NavBar />
      <div className="body">
        <div className="hero-section">
          <div
            className="slides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="slide" key={i}>
                <img
                  src={slide.image}
                  alt={`Slide ${i}`}
                  className="hero-image"
                />
                <div className="slide-text">
                  {slide.text.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <a href={slide.buttonLink} className="shop-now-button">
                    SHOP NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFF0" }}>
          <h1
            style={{
              fontSize: "80px",
              backgroundImage: "linear-gradient(to right, red, #900C3F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              marginTop: "0px",
              fontWeight: "bold",
            }}
          >
            Are You Interested in Sporty items?
          </h1>
        </div>
        <section className="discount-section">
          <div className="discount-banner">
            <h2> Limited Time Discounts! </h2>
            <p>
              Get up to <span>30% OFF</span> on your favorite badminton gear!
            </p>
          </div>

          <div className="discount-grid">
            {discounts.map((item, index) => (
              <div key={index} className="discount-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="discount-image"
                />
                <h3>{item.name}</h3>
                <p className="old-price">{item.oldPrice}</p>
                <p className="new-price">{item.newPrice}</p>
                <button className="shop-button">Shop Now</button>
              </div>
            ))}
          </div>
        </section>
        <section className="product-categories">
          <h2 className="section-title">PRODUCT CATEGORIES</h2>
          <div className="categories-container">
            <div className="category-card">
              <img src={cricket} alt="Cardio" className="category-image" />
              <div className="category-overlay">
                <h3>CRICKET</h3>
                <a href="#" className="view-range">
                  View our range »
                </a>
              </div>
            </div>
            <div className="category-card">
              <img
                src={football}
                alt="Punching Range"
                className="category-image"
              />
              <div className="category-overlay">
                <h3>FOOTBALL</h3>
                <a href="#" className="view-range">
                  View our range »
                </a>
              </div>
            </div>

            <div className="category-card">
              <img
                src={badminton}
                alt="Sports Medicine"
                className="category-image"
              />
              <div className="category-overlay">
                <h3>BADMINTON</h3>
                <a href="#" className="view-range">
                  View our range »
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
