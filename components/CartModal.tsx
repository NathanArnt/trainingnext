import Image from "next/image";

const CartModal = () => {

    const cartItems = false;

    return (
    <div className="w-max absolute text-black p-4 rounded-md shadow-xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
        {cartItems ? (
            <div>Cart is empty</div>
        ) : (
            <>
                <h2 className="text-xl">Shopping Cart</h2>
                {/* LIST  */}
                <div className="flex flex-col gap-8">
                    {/* ITEM  */}
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
                                    <h3 className="font-semibold">Product name</h3>
                                    <p className="p-1 bg-gray-50 rounded-sm">49€</p>
                                </div>
                                {/* DESC  */}
                                <div className="text-sm  text-gray-500">
                                available
                                </div>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Qty. 2</span>
                                <span className="text-blue-500">Remove</span>
                            </div>
                        </div>
                    </div>
                    {/* ITEM  */}
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
                                    <h3 className="font-semibold">Product name</h3>
                                    <p className="p-1 bg-gray-50 rounded-sm">49€</p>
                                </div>
                                {/* DESC  */}
                                <div className="text-sm  text-gray-500">
                                    available
                                </div>
                            </div>
                            <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-blue-500">Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM  */}
                <div className="">
                    <div className="flex items-center justify-between font-semibold">
                        <span className="">Subtotal</span>
                        <span className="">49€</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 mb-4">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="flex justify-between text-sm">
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