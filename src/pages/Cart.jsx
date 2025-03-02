import {React,useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Cart.css';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const endpoint = "http://localhost:5000/cart";
    axios
      .get(endpoint)
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error("Error fetching cart data:", error));
  }, []);
  
  const updateCart = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );

    // Update in database
    axios
      .put(`http://localhost:5000/cart/${itemId}`, { quantity: newQuantity })
      .catch((error) => console.error("Error updating quantity:", error));
  };
  const removeFromCart = (itemId) => {
    axios
      .delete(`http://localhost:5000/cart/${itemId}`)
      .then(() => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch((error) => console.error("Error removing item:", error));
  };

  return (
    <div>
      <NavBar />
      <div className="cart-container">
        {/* Shopping Bag Section */}
        <div className="shopping-bag">
          <h1 className="cart-title">Shopping Bag</h1>
          <p className="cart-items">{cartItems.length} items in your bag.</p>

          {/* Cart Items */}
          <div className="cart-items-list">
          {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-details">
                  <img src={item.image_url} alt={item.product_name} class="item-image" />
                  <div className="item-info">
                    <h2 className="item-name">{item.product_name}</h2>
                    {/* <p className="item-description">Color: {item.color}</p>
                    <p className="item-description">Size: {item.size}</p> */}
                  </div>
                </div>
                <div className="item-price">
                  <p className="price">{item.price}</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => item.quantity > 1 && updateCart(item.id, item.quantity - 1)}
                  >-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <p className="total-price">{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>❌ Remove</button>
              
              </div>
            ))}
            {/* Item 1 */}
            {/* <div className="cart-item">
              <div className="item-details">
                <img src="https://via.placeholder.com/80" alt="Product" className="item-image" />
                <div className="item-info">
                  <h2 className="item-name">{cartItems.product_name}</h2>
                  <p className="item-description">Color: Blue</p>
                  <p className="item-description">Size: 42</p>
                </div>
              </div>
              <div className="item-price">
                <p className="price">$20.50</p>
                <div className="quantity-controls">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">2</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              <p className="total-price">$41.00</p>
            </div> */}

            {/* Item 2 */}
            {/* <div className="cart-item">
              <div className="item-details">
                <img src="https://via.placeholder.com/80" alt="Product" className="item-image" />
                <div className="item-info">
                  <h2 className="item-name">Floral Print Wrap Dress</h2>
                  <p className="item-description">Color: Blue</p>
                  <p className="item-description">Size: 42</p>
                </div>
              </div>
              <div className="item-price">
                <p className="price">$30.50</p>
                <div className="quantity-controls">
                  <button className="quantity-btn">-</button>
                  <span className="quantity">1</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              <p className="total-price">$30.50</p>
            </div> */}
           
          </div>
        </div>

        {/* Summary Section */}
        <div className="summary-section">
          <div className="summary-box">
            <div className="summary-details">
              <p className="summary-item"><span>Cart Subtotal</span> <span>
    ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
  </span></p>
              <p className="summary-item"><span>Discount</span> <span>-${cartItems.reduce((total, item) => total + item.price * item.quantity*0.3, 0).toFixed(2)}</span></p>
              <hr />
              <p className="summary-total"><span>Cart Total</span> <span>${cartItems.reduce((total, item) => total + item.price * item.quantity*0.7, 0).toFixed(2)}</span></p>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
