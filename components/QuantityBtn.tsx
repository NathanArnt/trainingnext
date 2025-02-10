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
    <div className='flex max-w-24 justify-between gap-2 items-center'>
        <Button className="h-8 w-8" variant="destructive" onClick={props.onDecrease}>
          {props.quantity === 1 ? <Trash/> : "-"}
        </Button>
        <p className='text-md'>{props.quantity}</p>
        <Button className="h-8 w-8 bg-green-900 hover:bg-green-800 text-white" onClick={props.onIncrease}>+</Button>
    </div>
  )
}

export default QuantityBtn