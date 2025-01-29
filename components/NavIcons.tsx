"use client";

import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";
import { ShoppingCart, UserCircle } from "lucide-react";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
        <div className="">
            <Link href="/customers/account" className="flex items-center hover:scale-110 transition ease-linear"><UserCircle/></Link>
        </div>
        <div className="relative cursor-pointer hover:scale-110 transition ease-linear" onClick={() => setIsCartOpen((prev) => !prev)}>
            <ShoppingCart/>
        </div>
        {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;