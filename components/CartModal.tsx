"use client"

import { useAppSelector } from "@/lib/store";
import Image from "next/image";
import CartItemCard from "./CartItemCard";
import { TotalPriceSelector } from "@/lib/features/counter/cartSlice";

const CartModal = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const totalPrice = useAppSelector(TotalPriceSelector)
    return (
        <div className="w-max absolute text-black p-4 rounded-md shadow-xl bg-white top-8 right-0 flex flex-col gap-6 z-20">
        {cartItems.length === 0 ? (
            <div>Cart is empty</div>
        ) : (
            <>
                <h2 className="text-xl">Shopping Cart</h2>
                {/* LIST  */}
                <div className="flex flex-col gap-8">
                    {/* ITEM  */}
                    {cartItems.map(item => (
                        <CartItemCard key={item.product.id} cartItem={item}/>
                    ))}
                </div>
                {/* BOTTOM  */}
                <div className="">
                    <div className="flex items-center mb-2 justify-between font-semibold">
                        <span className="">Subtotal</span>
                        <span className="">{totalPrice} $</span>
                    </div>
                    <div className="flex justify-between gap-4 text-sm">
                        <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 hover:scale-105 transition-all ease-linear">View Cart</button>
                        <button className="rounded-md py-3 px-4 bg-black text-white hover:scale-105 transition-all ease-linear">Checkout</button>
                    </div>
                </div>
            </>
        )}
        </div>
    )
}
export default CartModal