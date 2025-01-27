"use client"

import * as React from "react"
import {
  IceCream,
  Settings2,
  ShoppingBag,
  ShoppingBasket,
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  name: {
      name: "slawyy's market",
      icon: ShoppingBasket,
      plan: "Enterprise",
    },

  navMain: [
    {
      title: "Shop",
      url: "/",
      icon: ShoppingBag,
      isActive: true,
    },
    {
      title: "Products",
      url: "/products",
      icon: IceCream,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
      {data.navMain.map((item) => (
        <Link key={item.title} href={item.url}>
            <SidebarMenuButton asChild>
              <div className="p-6">
                <item.icon />
                <span>{item.title}</span>
              </div>
            </SidebarMenuButton>
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
