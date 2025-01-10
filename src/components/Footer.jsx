import React from 'react'
import './NavBar.css'
const Footer = () => {
  return (
    <div>
     <footer class="footer">
        <div class="footer-container">
             {/* Logo and About Section  */}
            <div class="footer-about">
                <h2 class="footer-logo">Sports Gear</h2>
                <p>
                    Founded in 2024, we focus on delivering the best sports-driven products from 
                    world-renowned brands to accelerate your performance and fitness growth.
                </p>
                <p class="footer-copyright">
                    @SportsGear 2024. All rights reserved
                </p>
            </div>
    
            {/* Links Section  */}
            <div class="footer-links">
                <div class="footer-column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#Careers">Careers</a></li>
                        <li><a href="#Partnerships">Partnerships</a></li>
                        <li><a href="#Terms Conditions">Terms & Conditions</a></li>
                        <li><a href="#Contact Us">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#e">FAQ</a></li>
                        <li><a href="#e">Size Guide</a></li>
                        <li><a href="#e">Delivery & Returns</a></li>
                        <li><a href="#e">Orders & Payments</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#e">Profile</a></li>
                        <li><a href="#ee">Coupons</a></li>
                        <li><a href="#e">Wish List</a></li>
                        <li><a href="#e">Notifications</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="#e">Facebook</a></li>
                        <li><a href="#e">Instagram</a></li>
                        <li><a href="#e">YouTube</a></li>
                        <li><a href="#e">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
         {/* Privacy and Sitemap  */}
        <div class="footer-bottom">
            <a href="#e">Privacy Policy</a> • <a href="#e">Sitemap</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer
