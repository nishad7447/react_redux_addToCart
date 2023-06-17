import React from 'react'
import './CartButton.css'
export default function BeforeCart({addToCart})  {
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={addToCart}>Add to cart</button>
    </div>
  )
}
