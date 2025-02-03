import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image"

const ProductList = async ({params}: {params?: {id: string}}) => {

    const { id } = await params; // Now we can safely destructure id
    const products = await prisma.products.findUnique({
        where: { id: Number(id) } // Convert to number
    });

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap lg:flex-nowrap">
            <div className="w-full flex mx-auto flex-col gap-4 sm:w-[45%] lg:[22%]">
                <div className="flex">
                    <div className="relative w-full h-[500px]">
                        <Image
                            src="https://images.pexels.com/photos/19377629/pexels-photo-19377629/free-photo-of-fruits-bouquet-vase-nature-morte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Product"
                            fill 
                            sizes="25vw"
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
                        />
                        <Image
                            src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-fruits-bouquet-vase-nature-morte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Product"
                            fill 
                            sizes="25vw"
                            className="absolute object-cover rounded-md" 
                        />
                    </div>
                    <div className="w-full px-4 flex flex-col justify-between h-2/3">
                      <div className="flex justify-between">
                        <span className="font-medium text-2xl">{products?.name}</span>
                        <span className="font-semibold text-lg">{Number(products?.price)}€</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <p>qty : </p>
                        <Counter/>  
                      </div> 
                      <div className="text-sm text-gray-500">{products?.description}</div>
                        <Button>Add to Card</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductList