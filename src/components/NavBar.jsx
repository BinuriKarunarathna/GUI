import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
    <div class="navbar">
        <ul>
            <li><a href="/" class="navItem">Home</a></li>
            <li><a href="Shop.html" class="navItem">Shop</a>
                <ul class="dropdown-content">
                    <li><a href="#file:///E:/University%20of%20Ruhuna/3rd%20Sem/GUI%20Programming/guiProject/Home.html" class="subItem">Web Development</a></li>
                    <li><a href="#file:///E:/University%20of%20Ruhuna/3rd%20Sem/GUI%20Programming/guiProject/Home.html" class="subItem">App Development</a></li>
                    <li><a href="#file:///E:/University%20of%20Ruhuna/3rd%20Sem/GUI%20Programming/guiProject/Home.html" class="subItem">Graphic Design</a></li>
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
