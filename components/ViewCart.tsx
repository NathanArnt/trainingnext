'use client'

import { useAppDispatch, useAppSelector } from '@/lib/store'
import React, { use } from 'react'

const ViewCart = () => {
  
  const cartItems = useAppSelector(state => state.cart.cartItems);
  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-white mb-4'>Here is your detailed cart</h2>
        {cartItems.map(item => (
            <div key={item.product.id} className='flex items-center justify-between p-4 mb-4 rounded-lg bg-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                <div className='flex-1'>
                    <p className='font-semibold text-white'>{item.product.name}</p>
                    <p className='text-gray-300'>{item.product.description}</p>
                </div>
                <div className='text-right'>
                    <p className='text-lg font-medium text-green-400'>Prix : {item.product.price}$</p>
                    <p className='text-sm text-gray-400'>Qty : {item.quantity}</p>
                    <p className='text-lg font-bold text-yellow-400'>Total : {item.quantity * item.product.price}$</p>
                </div>
            </div>
        ))}
        {cartItems.length === 0 && <p className='text-gray-400 text-center'>Votre panier est vide.</p>}
    </div>
  )
}

export default ViewCart