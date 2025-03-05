import React from 'react'
import './NavBar.css'
// import youtube from '../assets/youtube.png';
// // import facebook from 'E:/University of Ruhuna/3rd Sem/GUI Programming/GUI/sports-gear/public/facebook.png';
// import instagram from '../assets/instagram.png';
// import twitter from '../assets/twitter.png';
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
                </div>
                <div class="footer-column">
                    <h3>Social Media</h3>
                    {/* <img src="/facebook.png" alt="Facebook" width="2" height="2" />
                    <img src="/instagram.png" alt="Instagram" width="2" height="2" />
                    <img src="/youtube.png" alt="YouTube" width="2" height="2" />
                    <img src="/twitter.png" alt="Twitter" width="2" height="2" />
                     */}
                    
                    {/* <a href="https://www.facebook.com" >
                  <img src={facebook} alt="Facebook" width={20} height={20}/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="YouTube" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
                 */}
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
