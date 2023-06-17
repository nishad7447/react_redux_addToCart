import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart'
import './CartButton.css'

export default function BeforeCart()  {
    const dispatch = useDispatch()
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={()=>dispatch(addToCart())}>Add to cart</button>
    </div>
  )
}
 