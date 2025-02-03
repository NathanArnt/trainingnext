"use client"

import Link from "next/link"
import { ThemeToggle } from "./ui/theme-toggle"
import Menu from "./Menu"
import NavIcons from "./NavIcons"

const NavbarApp = () => {

  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        {/* Mobile  */}
        <div className="h-full flex items-center justify-between w-full md:hidden">
            <Link href="/">
                <div className="text-2xl tracking-widest">SLAWYY</div>
            </Link>
            <div className="flex items-center gap-2">
                <Menu/>
                <ThemeToggle/>
            </div>
            
        </div>
        <div className="hidden md:flex items-center justify-between gap-8 h-full ">
            <h1 className="hover:scale-110 transition ease-linear cursor-pointer">Slawyy&apos;s market</h1>
            <div className="Links flex items-center gap-4">
                <Link href="/" className="flex items-center  hover:scale-110 transition ease-linear">Home</Link>
                <Link href="/list" className="flex items-center hover:scale-110 transition ease-linear">Shop</Link>
                <Link href="" className="flex items-center hover:scale-110 transition ease-linear">Deals</Link>
                <Link href="" className="flex items-center hover:scale-110 transition ease-linear">About</Link>
                <Link href="" className="flex items-center hover:scale-110 transition ease-linear">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
                <NavIcons/>
                <div className="hover:scale-110 transition ease-linear"><ThemeToggle /></div>
            </div>
        </div>
    </div>
  )
}
export default NavbarApp