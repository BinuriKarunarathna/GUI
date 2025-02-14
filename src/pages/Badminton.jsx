// App.js
import React, { useState,useEffect } from 'react';
import '../styles/Badminton.css';
import racketImage from '../assets/racket1.jpeg';
import shuttlecockImage from '../assets/shuttlecock.jpg';
import shoesImage from '../assets/shoes.jpeg';
import gripImage from '../assets/grip.jpeg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from "axios";

function Badminton() {
  const [cart, setCart] = useState([]);
  let items = [
    { id: 1, name: 'Badminton Racket', price: 50, image: racketImage },
    { id: 2, name: 'Shuttlecock Pack', price: 15, image: shuttlecockImage },
    { id: 3, name: 'Sports Shoes', price: 75, image: shoesImage },
    { id: 4, name: 'Grip Tape', price: 10, image: gripImage },
  ];
  const setData = (data) => {
    items = data;
    console.log(data);
  }
  useEffect(() => {
    const endpoint = "http://localhost:5000/items?type_of_sport=badminton";
    console.log("Fetching data from: ", endpoint);
    axios
      .get(endpoint)
      .then((response) => {
        console.log("network response", response);
        setData(response.data); // Update state with fetched data
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
    <NavBar/>
    <div className="App">
      <header className="hero1">
        <h1>Badminton Equipment Store</h1>
        <p>Gear Up for Victory!</p>
        <button className="cta-button">Shop Now</button>
      </header>

      <main>
        <section className="items">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </section>
      </main>

      
    </div>
    <Footer/>
    </>
  );
}

export default Badminton;
