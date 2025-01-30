import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64 rounded-lg'>
            <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
                <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on selected products</h1>
                <Button className='text-xl'>Buy Now</Button>
            </div>
            <div className='relative w-1/3'>
                <Image
                    src="/woman.png"
                    alt="img"
                    fill 
                    className='object-contain'
                />
            </div>
        </div>
        <Filter/>
        <h1 className='mt-12 text-xl font-semibold'>Shoes for you</h1>
        <ProductList/>
    </div>
  )
}

export default ListPage