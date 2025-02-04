'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Product } from '@/lib/features/counter/cartSlice';
import AddToCart from "./AddToCart";
interface Props {
  product: Product;
}
const ProductList = (props: Props) => {

    const [products, setProducts] = useState<Product[] | null>(null);
      const [isLoading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch("/api/products")
          .then((res) => res.json())
          .then((data: Product[]) => {
            setProducts(data); // Update state with fetched data
            setLoading(false); // Stop loading
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
            setLoading(false); // Stop loading even if there's an error
          });
      }, []);
    
      if (isLoading) {
        return (
            <div className="flex items-center justify-center">
                <p>Loading....</p>
            </div>
        );
      }

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap lg:flex-nowrap">
        {products?.map((product) => (
          <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]" key={product.id}>
            <Link href={`/products/${product.id}`} >
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
              <div className="flex my-2 justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">{product.price}€</span>
              </div>
              <div className="text-sm text-gray-500">{product.description}</div>
            </Link>
            <AddToCart product={product}/>
          </div>
        ))}
    </div>
  )
}
export default ProductList