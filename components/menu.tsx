'use client'

import Link from "next/link"
import { useState } from "react"
import { SignOut } from "./Sign-out"
import { MenuIcon } from "lucide-react"

const Menu = () => {

    const [open, setOpen] = useState(false)
  return (
    <div className="hover:cursor-pointer">
        <div onClick={() => setOpen((prev) => !prev)}><MenuIcon className="h-8 w-8"/></div>
        {
            open && (
                <div className="absolute text-white left-0 top-20 flex items-center justify-center gap-8 bg-zinc-800 flex-col w-full h-[calc(100vh-80px)] text-xl z-50">
                    <Link href="/" className="hover:scale-110 transition ease-linear">Home</Link>
                    <Link href="/list" className="hover:scale-110 transition ease-linear">Shop</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">Deals</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">About</Link>
                    <Link href="/customers/account" className="hover:scale-110 transition ease-linear">Account</Link>
                    <Link href="" className="hover:scale-110 transition ease-linear">Contact</Link>
                    <SignOut/>
                </div>
            )
        }
    </div>
  )
}
export default Menu