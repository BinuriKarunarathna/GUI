// App.js
import React, { useState,useEffect } from 'react';
import '../styles/Cricket.css';
import bat from '../assets/bat.jpeg';
import ball from '../assets/ball.jpeg';
import Stumps from '../assets/stumps.jpeg';
import gear from '../assets/gear.jpeg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from "axios";

function Cricket() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  useEffect(() => {
    const endpoint = "http://localhost:5000/items?type_of_sport=Cricket";
    console.log("Fetching data from: ", endpoint);
    axios
      .get(endpoint)
      .then((response) => {
        console.log("network response", response);
        setItems(response.data); // Update state with fetched data
        console.log(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  return (
    <>
    <NavBar/>
    <div className="App">
      <header className="hero2">
        <h1>Badminton Equipment Store</h1>
        <p>Gear Up for Victory!</p>
        <button className="cta-button">Shop Now</button>
      </header>

      <main>
        <section className="items">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image_url} alt={item.name} className="item-image" />
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

export default Cricket;
