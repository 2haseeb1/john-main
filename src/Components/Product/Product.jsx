import React from 'react'
import './Product.css'
const Product = ({ product }) => {
    console.log(product)
    const { name, img, price, quantity, ratings, seller, shipping } = product
    const handleAddToCart = () => {
        console.log('add to cart')
    }
  return (
      <div className='product '>
          <img src={img} alt="" width="100%" />
          <div style={{marginLeft:'10px'}} className=' product-info'>
          <h6 className='product-name'>{product.name}</h6>
          <p className='product-price'>Price:${product.price}</p>
          <p className='manufacturer'>Manufacturer:{product.seller}</p>
              <p className='ratings'>Ratings:{product.ratings} stars</p>
              </div>
     <button className='btn-cart' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
