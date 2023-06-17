import React from 'react'
import { decrement, increment } from '../../../redux/cart'
import { useDispatch} from 'react-redux'
import './CartButton.css'

export default function AfterCart({cartCount,product}) {
  const dispatch=useDispatch()

  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=>dispatch(decrement(product))}>-</button> 
        <div className='cart-count'>{cartCount}</div>
        <button className='cart-counter-button'onClick={()=>dispatch(increment(product))}>+</button> 
    </div>
  )
}
