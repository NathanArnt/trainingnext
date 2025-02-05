"use client";

import { useState } from "react";
import CartModal from "./CartModal";
import { ShoppingCart, UserCircle } from "lucide-react";
import { useAppSelector } from "@/lib/store";
import { totalCartItemsSelector } from "@/lib/features/counter/cartSlice";
import AccountCard from "./AccountCard";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  
  const totalItems = useAppSelector(totalCartItemsSelector)
  return (
    <div className="md:flex items-center gap-3 xl:gap-4 relative">
        <div className="flex items-center cursor-pointer hover:scale-110 transition ease-linear" 
          onClick={() => {
            setIsAccountOpen(prev => !prev);
            setIsCartOpen(false);
          }}>
            <UserCircle/>
        </div>
        <div className="relative cursor-pointer hover:scale-110 transition ease-linear" 
          onClick={() => {
            setIsCartOpen(prev => !prev);
            setIsAccountOpen(false);
          }}>
            <ShoppingCart/>
        </div>
        <div className="absolute flex justify-center bg-red-600 text-white rounded-full w-6 -top-4 -right-3">
          {!!totalItems && <div>{totalItems}</div>}
        </div>
        {isCartOpen && <CartModal />}
        {isAccountOpen && <AccountCard />}
    </div>
  );
};

export default NavIcons;