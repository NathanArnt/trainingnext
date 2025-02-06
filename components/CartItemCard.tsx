import { CartItem, clearCart, increment, decrement, removeItem } from '@/lib/features/counter/cartSlice'
import { useAppDispatch } from '@/lib/store'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import QuantityBtn from './QuantityBtn'

interface Props {
    cartItem: CartItem
}

const CartItemCard = ({cartItem}: Props) => {
    const dispatch = useAppDispatch();
    console.log(cartItem)
  return (
        <div className="flex gap-4">
                        <Image 
                            src="https://images.pexels.com/photos/19377629/pexels-photo-19377629/free-photo-of-fruits-bouquet-vase-nature-morte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Product"
                            width={72}
                            height={96}
                            className="object-cover rounded-md"
                            /> 
                        <div className="flex flex-col justify-between w-full">
                            {/* TOP */}
                            <div className="">
                                {/* TITLE */}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">{cartItem.product.name}</h3>
                                    <p className="p-2 bg-gray-200 rounded-sm">{cartItem.product.price}$</p>
                                </div>
                                {/* DESC  */}
                                <div className="text-sm  text-gray-500">
                                available
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm gap-6">
                                <span className="text-gray-500">
                                    <QuantityBtn
                                        onDecrease={() => dispatch(decrement(cartItem.product))}
                                        onIncrease={() => dispatch(increment(cartItem.product))}
                                        quantity={cartItem.quantity}
                                    />
                                </span>
                                <Button variant="secondary" onClick={() => dispatch(removeItem(cartItem.product.id))}>Remove</Button>
                            </div>
                        </div>
                    </div>
  )
}

export default CartItemCard