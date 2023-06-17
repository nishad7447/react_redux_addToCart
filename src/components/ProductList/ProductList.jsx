import React, { useState } from 'react'
import products from '../../api/products.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import "./ProductList.css";

export default function ProductList() {
    const [count, setCount] = useState(0)
    const addToCart=()=>{
        setCount(1)
    }
    console.log(count,'cccccccc');
  return (
    <section className='container'>
        {
            products?.map((product,key)=>(
                <div className='product-container' key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    {
                        count>0 ? <AfterCart /> : <BeforeCart addToCart={addToCart} />
                    }                    
                </div>
            ))
        }
    </section>

    )
}
