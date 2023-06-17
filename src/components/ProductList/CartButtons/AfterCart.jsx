import React from 'react'
import { decrement, increment } from '../../../redux/cart'
import { useDispatch, useSelector } from 'react-redux'
import './CartButton.css'

export default function AfterCart() {
  const dispatch=useDispatch()
  const {cartCount} = useSelector((state)=>state.cart)

  return (
    <div className='after-cart'>
        <button className='cart-counter-button' onClick={()=>dispatch(decrement())}>-</button> 
        <div className='cart-count'>{cartCount}</div>
        <button className='cart-counter-button'onClick={()=>dispatch(increment())}>+</button> 
    </div>
  )
}
