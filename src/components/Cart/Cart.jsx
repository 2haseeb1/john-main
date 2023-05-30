import React from 'react'
import './Cart.css'
const Cart = ({ cart,product}) => {
    console.log(cart)
    console.log(product)
    /*  const { cart } =props */
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax;
    return (
      <div class="cart">
    <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:{ totalPrice}</p>
            <p>Total Shipping:{totalShipping}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{grandTotal }</p>
    </div>
  )
}

export default Cart
