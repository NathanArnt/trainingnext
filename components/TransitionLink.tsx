"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/app/utils/animations"
import { Button } from "./ui/button"

interface Props {
    href: string
    label: string
}

const TransitionLink = ({href, label}: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname!= href) {
            animatePageOut(href, router)
        }
    }

    return (
        <div className="cursor-pointer hover:scale-110 transition ease-linear" onClick={handleClick}>
            {label}
        </div>
    )
} 

export default TransitionLink;
