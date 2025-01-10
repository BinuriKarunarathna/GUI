import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div class="body" >
                
            <div class="hero-section">
                <h1 style={{fontSize:'70px', marginTop:'0px'}}>Discover the World of Sports Gear</h1>
            </div>
            <div>
                <h1 style={{ fontSize: '80px' , backgroundColor: 'olive', color:'white',textAlign:'center' ,marginTop:'500px' }}>Are You Interested in Sporty items?</h1>
            </div> 
        </div>
        <Footer/>
    </div>
  )
}

export default Home
