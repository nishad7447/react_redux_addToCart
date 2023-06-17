import React from 'react'
import products from '../../api/products.json'
import { CartButtons } from './CartButtons'
import "./ProductList.css";

export default function ProductList() {

  return (
    <section className='container'>
        {
            products?.map((product,key)=>(
                <div className='product-container' key={key}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    <CartButtons product={product}/>
                </div>
            ))
        }
    </section>

    )
}
