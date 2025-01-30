'use client'


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SignOut } from "./Sign-out"

const Menu = () => {

    const [open, setOpen] = useState(false)
  return (
    <div className="">
        <Image 
            src="./svg/align-justify.svg"
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
        />
        {
            open && (
                <div className="absolute text-white left-0 top-20 flex items-center justify-center gap-8 bg-zinc-800 flex-col w-full h-[calc(100vh-80px)] text-xl z-10">
                    <Link href="/" className="hover:scale-110 transition ease-linear">Home</Link>
                    <Link href="/products" className="hover:scale-110 transition ease-linear">Shop</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">Deals</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">About</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">Contact</Link>
                    <SignOut/>
                </div>
            )
        }
    </div>
  )
}
export default Menu