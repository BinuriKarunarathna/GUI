import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
      <NavBar/>
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-6">
      {/* Shopping Bag Section */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">Shopping Bag</h1>
        <p className="text-gray-600 mb-6">2 items in your bag.</p>

        {/* Cart Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-medium">Floral Print Wrap Dress</h2>
                <p className="text-gray-600">Color: Blue</p>
                <p className="text-gray-600">Size: 42</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">$20.50</p>
              <div className="flex items-center mt-2">
                <button className="px-3 py-1 border rounded">-</button>
                <span className="px-4">2</span>
                <button className="px-3 py-1 border rounded">+</button>
              </div>
            </div>
            <p className="text-orange-500 text-lg font-semibold">$41.00</p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-medium">Floral Print Wrap Dress</h2>
                <p className="text-gray-600">Color: Blue</p>
                <p className="text-gray-600">Size: 42</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">$30.50</p>
              <div className="flex items-center mt-2">
                <button className="px-3 py-1 border rounded">-</button>
                <span className="px-4">1</span>
                <button className="px-3 py-1 border rounded">+</button>
              </div>
            </div>
            <p className="text-orange-500 text-lg font-semibold">$30.50</p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
        <div className="bg-white rounded-lg shadow-md p-6">

          {/* Cart Total */}
          <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
            <p className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>$71.50</span>
            </p>
            <p className="flex justify-between">
              <span>Design by Fluttertop</span>
              <span>Free</span>
            </p>
            <p className="flex justify-between">
              <span>Discount</span>
              <span>-$4.00</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between font-bold">
              <span>Cart Total</span>
              <span>$67.50</span>
            </p>
            <button className="w-full bg-orange-500 text-white py-2 rounded mt-4">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
 
      <Footer/>
    </div>
  )
}

export default Cart
