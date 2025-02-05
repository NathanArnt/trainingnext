"use client"

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SignOut } from "./Sign-out";

const AccountCard = () => {
    return (
    <div className="w-max absolute text-black p-4 rounded-md shadow-xl bg-white top-8 -left-28 flex flex-col gap-6 z-20">
            <>
                <h2 className="text-xl">Hello, </h2>
                <Link href="/customers/account" className="flex items-center justify-between">
                    <div>My account</div>
                    <ArrowUpRight/>
                </Link>
                <Link href="/customers/orders" className="flex items-center justify-between">
                    <div>My orders</div>
                    <ArrowUpRight/>
                </Link>
                <div className="">
                    <div className="flex items-center justify-center font-semibold">
                        <SignOut/>
                    </div>
                </div>
            </>
    </div>
    )
}
export default AccountCard