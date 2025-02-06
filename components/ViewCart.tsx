'use client'

import { totalCartItemsSelector } from '@/lib/features/counter/cartSlice';
import { useAppSelector } from '@/lib/store'
import React from 'react'

const ViewCart = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems); 
  return (
    <div className=''>
        {cartItems.map(item => (
            <div key={item.product.id} className='flex items-center justify-between'>
                <p>Name : {item.product.name}</p>
                <p>Description : {item.product.description}</p>
                <p>Price : {item.product.price}</p>
                <p>Qty : {item.quantity}</p>
                <p>Total : {item.quantity * item.product.price}$</p>
            </div>
        ))}
    </div>
  )
}

export default ViewCart