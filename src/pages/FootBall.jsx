// App.js
import React, { useState,useEffect } from 'react';
import '../styles/FootBall.css';
import football from '../assets/football.jpeg';
import boot from '../assets/boot.jpeg';
import guards from '../assets/guards.jpeg';
import gloves from '../assets/gloves.jpeg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from "axios";
function Cricket() {
  const [cart, setCart] = useState([]);

  let items = [
    { id: 1, name: 'FootBall Ball', price: 50, image: football},
    { id: 2, name: 'FootBall Boot', price: 15, image: boot },
    { id: 3, name: 'Shin Guards', price: 75, image: guards },
    { id: 4, name: 'GoalKeeper Gloves', price: 10, image: gloves },
  ];
  const setData = (data) => {
    items = data;
    console.log(data);
  }
  useEffect(() => {
    const endpoint = "http://localhost:5000/items?type_of_sport=Football";
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
      <header className="hero3">
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

export default Cricket;
