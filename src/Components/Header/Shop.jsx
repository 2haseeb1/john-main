import React, { useEffect } from 'react'
import './Shop.css'
import { useState } from 'react'
import Product from '../Product/Product'
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
        
    },[])
  return (
      <div className='shop-container'>
          <div className='products-container'>
            
              {products.map(product => <Product key={ product.id} product={product} />)}
          </div>
      
          <div className='cart-container'>
              <h2>Order Summery{ products.length}</h2>
          </div>
      
    </div>
  )
}

export default Shop
