import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/Brands.css'


const Brands = () => {
  return (
    <div>
        <NavBar/>
        <div class="categories">
                <div class="category-card" >
                    <div id="nike"></div>
                    <div class="category-title">Empowering Athletes Everywhere
                    Unleash your potential with Nike, the global leader in innovation and style. From cutting-edge sportswear to iconic footwear, Nike inspires greatness in every step. Just Do It – because the best is yet to come.</div>
                </div>
                <div class="category-card" >
                    <div id="adidas"></div>
                    <div class="category-title">Impossible Is Nothing
                    Step into the world of style with Adidas. From groundbreaking sports gear to fashion-forward designs, Adidas combines innovation with comfort to help you conquer every challenge. Embrace the stripes and redefine your limits!</div>
                </div>
                <div class="category-card" >
                    <div id="puma"></div>
                    <div class="category-title">Forever Faster
                    Fuel your passion with Puma, where sport meets lifestyle. Designed for speed, style, and performance, Puma empowers you to stay ahead of the game. Dare to be bold—wear the spirit of the cat!</div>
                </div>
                <div class="category-card" >
                    <div id="reebok"></div>
                    <div class="category-title">Life is Not a Spectator Sport
                    Reebok inspires you to move, train, and excel with gear built for action and style. From the gym to the streets, embrace the journey and make every step count. Be more, do more—live fully with Reebok!</div>
                </div>
        </div> 
        <Footer/>
    </div>
  )
}

export default Brands
