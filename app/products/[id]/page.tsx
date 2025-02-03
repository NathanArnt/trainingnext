import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image"
import Link from "next/link"

const ProductList = async ({params}: {params? : string}) => {
    
    const products = await prisma.products.findUnique(params)

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap lg:flex-nowrap">
          <Link href={`/products/${product.id}`} className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]" key={product.id}>
            <div className="relative w-full h-80">
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
            <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">{product.price}€</span>
            </div>
            <div className="text-sm text-gray-500">{product.description}</div>
            <Button>Add to Card</Button>
          </Link>
        ))}
    </div>
  )
}
export default ProductList