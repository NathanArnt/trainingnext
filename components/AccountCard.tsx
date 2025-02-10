"use client"

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SignOut } from "./Sign-out";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Importer useSession

const AccountCard = () => {
    const { data: session, status } = useSession(); // Récupérer la session
    const isLoading = status === "loading"; // Vérifier si la session est en cours de chargement

    if (isLoading) {
      return (
          <div className="flex items-center justify-center">
              <p>Loading....</p>
          </div>
      );
    }

    return (
    <div className="w-[170px] absolute text-black p-4 rounded-md shadow-xl bg-white top-8 -left-36 flex flex-col z-20">
        {session?.user ? ( // Vérifier si l'utilisateur est connecté
            <div className="">
                <h2 className="text-xl pb-2">Hello, {session.user.name}</h2>
                <Link href="/customers/account" className="flex items-center justify-between">
                    <div>My account</div>
                    <ArrowUpRight/>
                </Link>
                <Link href="/customers/orders" className="flex items-center justify-between py-2">
                    <div>My orders</div>
                    <ArrowUpRight/>
                </Link>
                <div className="flex items-center justify-center font-semibold pt-2">
                    <SignOut/>
                </div>
            </div>
        ) : (
            <div>
                <p>You are not connected</p>
                <p className="pt-8">
                    Go <Link href="/sign-in" className="cursor-alias underline">Sign-in</Link> or <Link href="/sign-up" className="cursor-alias underline">Sign-up</Link>
                </p>
            </div>
        )}
    </div>
    )
}
export default AccountCard