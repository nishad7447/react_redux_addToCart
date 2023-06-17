import React, { useMemo } from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

export const CartButtons = ({product}) => {
    const {cartList}=useSelector((state)=>state.cart)

    const cartCount= useMemo(()=>{
        return cartList.find((item)=>item?.id===product?.id)?.count
    },[cartList])
    console.log(cartList,cartCount);
  return (
    <>
       {cartCount>0 ? <AfterCart product={product?.id} cartCount={cartCount} /> : <BeforeCart product={product}/>}
    </>
    )
}
