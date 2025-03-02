// App.js
import React, { useState,useEffect } from 'react';
import '../styles/Badminton.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from "axios";

function Badminton() {
  // const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  // const setData = (data) => {
  //   items = data;
  //   console.log(data);
  // }
  useEffect(() => {
    const endpoint = "http://localhost:5000/items?type_of_sport=badminton";
    console.log("Fetching data from: ", endpoint);
    axios
      .get(endpoint)
      .then((response) => {
        console.log("network response", response);
        setItems(response.data); // Update state with fetched data
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // setError(error.message);
        // setLoading(false);
      });
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post("http://localhost:5000/cart", {
        product_name: item.name,
        price: item.price,
        quantity: 1, // Default to 1, update later if needed
        image_url: item.image_url,
      });

      console.log("Item added to cart:", response.data);
      alert(`${item.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
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

export default Badminton;
