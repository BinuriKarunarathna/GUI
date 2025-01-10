import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/Brands.css'

const Brands = () => {
  return (
    <div>
        <NavBar/>
        <div class="categories">
                <div class="category-card">
                    <img src="images/football.jpg" alt="Football"></img>
                    <div class="category-title">Football</div>
                </div>
                <div class="category-card">
                    <img src="images/basketball.jpg" alt="Basketball"></img>
                    <div class="category-title">Basketball</div>
                </div>
                <div class="category-card">
                    <img src="images/tennis.jpg" alt="Tennis"></img>
                    <div class="category-title">Tennis</div>
                </div>
                <div class="category-card">
                    <img src="images/gym.jpg" alt="Gym"></img>
                    <div class="category-title">Gym</div>
                </div>
        </div> 
        <Footer/>
    </div>
  )
}

export default Brands
