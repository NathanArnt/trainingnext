'use client'

import React from 'react'
import { Button } from './ui/button';

interface Props {
    onIncrease:() => void;
    onDecrease:() => void;
    quantity: number;
}

const QuantityBtn = (props: Props) => {
  return (
    <div className='flex gap-2 items-center'>
        <Button variant="destructive" onClick={props.onDecrease}>-</Button>
        <p>{props.quantity}</p>
        <Button className="bg-green-900 hover:bg-green-800 text-white" onClick={props.onIncrease}>+</Button>
    </div>
  )
}

export default QuantityBtn