import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <div>

    <div class="navbar">
    <div className="navbar-left">
        <img src={logo} width={50} style={{ borderRadius: "20px", marginTop:"5px",marginRight:"-40px" }} alt="Sports Logo" className="logo" />
        <p className="BrandName">SPORTS GEAR</p>
      </div>
      <div className="navbar-right">
        <ul>
        {/* <li><img src={logo} width={50} style={{ borderRadius: "20px", marginTop:"5px" }}  alt="Sports Logo" /></li>
        <li><p className='BrandName'> Sports Gear</p></li>
         */}
            <li><a href="/" className="navItem">Home</a></li>
            <li><a className="navItem">Shop</a>
                <ul class="dropdown-content">
                    <li><a href="/Badminton" className="subItem">Badminton</a></li>
                    <li><a href="/Cricket" className="subItem">Cricket</a></li>
                    <li><a href="/FootBall" className="subItem">FootBall</a></li>
                </ul>
            </li>
            <li> <a href="/Brands" className="navItem">Brands</a></li>
            <li> <a href="/Cart" className="navItem">Cart</a></li>
            <li> <a href="/Query" className="navItem">Contact</a></li>
            
        </ul>
        </div>
    </div>
    </div>
  )
}

export default NavBar
