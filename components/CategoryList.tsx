'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

interface Categories {
  id: number;
  name: string;
}

const CategoryList = () => {

  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [isLoading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch("/api/category")
          .then((res) => res.json())
          .then((data: Categories[]) => {
            setCategories(data); // Update state with fetched data
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
    <div className='px-4 overflow-y-scroll'>
        <div className='flex gap-4 md:gap-8'>
          {categories?.map((category) => (
            <Link href="/list" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' key={category.id}>
              <div className='relative w-full h-96'>
                <Image
                  src="https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-fruits-bouquet-vase-nature-morte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt='categorie'
                  fill
                  sizes='20vw'
                  className='object-cover'
                />
              </div>  
              <h1 className='mt-8 font-light text-clip tracking-wide'>{category.name}</h1>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default CategoryList