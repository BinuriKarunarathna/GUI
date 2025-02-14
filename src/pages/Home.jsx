import { React, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import back from "../assets/back.webp";
import back1 from "../assets/Background.jpeg";
import back2 from "../assets/Background2.jpg";
import cricket from "../assets/cricket_card.avif";
import football from "../assets/football_card.avif";
import badminton from "../assets/badminton_card.webp";

import "../styles/Home.css";

const Home = () => {
  const slides = [
    {
      image: back,
      text: [
        "Discover",
        " the High-Quality ",
        "equipments from ",
        "leading brands",
      ],
      buttonLink: "/Brands",
    },
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
        <div>
          <h1
            style={{
              fontSize: "80px",
              backgroundColor: "olive",
              color: "white",
              textAlign: "center",
              marginTop: "0px",
            }}
          >
            Are You Interested in Sporty items?
          </h1>
        </div>
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
