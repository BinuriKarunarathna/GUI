import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
    <div class="navbar">
        <ul>
            <li><a href="/" class="navItem">Home</a></li>
            <li><a class="navItem">Shop</a>
                <ul class="dropdown-content">
                    <li><a href="/Badminton" class="subItem">Badminton</a></li>
                    <li><a href="/Cricket" class="subItem">Cricket</a></li>
                    <li><a href="/FootBall" class="subItem">FootBall</a></li>
                </ul>
            </li>
            <li> <a href="/Brands" class="navItem">Brands</a></li>
            <li> <a href="/About" class="navItem">About</a></li>
            <li> <a href="/Cart" class="navItem">Cart</a></li>
            <li> <a href="/Query" class="navItem">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar
