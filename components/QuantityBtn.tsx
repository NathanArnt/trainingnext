'use client'

import React from 'react'
import { Button } from './ui/button';
import { Trash } from 'lucide-react';

interface Props {
    onIncrease:() => void;
    onDecrease:() => void;
    quantity: number;
}

const QuantityBtn = (props: Props) => {
  return (
    <div className='flex gap-2 items-center'>
        <Button variant="destructive" onClick={props.onDecrease}>
          {props.quantity === 1 ? <Trash/> : "-"}
        </Button>
        <p>{props.quantity}</p>
        <Button className="bg-green-900 hover:bg-green-800 text-white" onClick={props.onIncrease}>+</Button>
    </div>
  )
}

export default QuantityBtn