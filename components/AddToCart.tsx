'use client'

import { decrement, increment, Product, productQtyInCartSelector } from '@/lib/features/counter/cartSlice';
import React from 'react'
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import QuantityBtn from './QuantityBtn';

interface Props {
    product: Product;
}

const AddToCart = (props: Props) => {
    const dispatch = useAppDispatch();

    const quantity = useAppSelector(state => 
        productQtyInCartSelector(state, props.product.id
    ))
    if (!quantity) return (
        <div onClick={() => dispatch(increment(props.product))}>
            <Button className="hover:scale-105 transition ease-linear"> Add To Cart</Button>
        </div>
    )
  return (
    <div>
        <QuantityBtn
            onDecrease={() => dispatch(decrement(props.product))}
            onIncrease={() => dispatch(increment(props.product))}
            quantity={quantity}
        />
    </div>
  )
}

export default AddToCart