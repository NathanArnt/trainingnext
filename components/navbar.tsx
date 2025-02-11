"use client"

import Link from "next/link"
import { ThemeToggle } from "./ui/theme-toggle"
import Menu from "./Menu"
import NavIcons from "./NavIcons"
import CartModal from "./CartModal"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import TransitionLink from "./TransitionLink"

const NavbarApp = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        {/* Mobile  */}
        <div className="h-full flex items-center justify-between w-full md:hidden">
            <Link href="/">
                <div className="text-2xl tracking-widest">SLAWYY</div>
            </Link>
            <div className="flex items-center gap-2">
            <div className="relative cursor-pointer hover:scale-110 transition ease-linear" 
                onClick={() => {
                    setIsCartOpen(prev => !prev);
                    setIsAccountOpen(false);
                }}>
                    <ShoppingCart/>
            </div>
                <Menu/>
                <ThemeToggle/>
            </div>
        </div>
        <div className="hidden md:flex items-center justify-between gap-8 h-full ">
            <Link href="/" className="hover:scale-110 transition ease-linear cursor-pointer">Slawyy&apos;s market</Link>
            <div className="Links flex items-center gap-4">
                <TransitionLink href="/" label="Home"/>
                <TransitionLink href="/list" label="Shop"/>
                <TransitionLink href="/deals" label="Deals" />
                <TransitionLink href="" label="About" />
                <TransitionLink href="" label="Contact" />
            </div>
            <div className="flex items-center gap-4">
                <NavIcons/>
                <div className="hover:scale-110 transition ease-linear"><ThemeToggle /></div>
            </div>
        </div>
        {isCartOpen && <CartModal />}
    </div>
  )
}
export default NavbarApp