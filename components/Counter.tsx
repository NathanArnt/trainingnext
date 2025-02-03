'use client'

import { decrement, increment } from '@/lib/features/counter/counterSlice';
import { RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './ui/button';

const Counter = () => {

    const count = useSelector((state : RootState) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div className='flex items-center justify-center gap-4'>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <h2 className='text-xl'>{count}</h2>
            <Button onClick={() => count >0 && dispatch(decrement())}>-</Button>
        </div>
    )
}

export default Counter