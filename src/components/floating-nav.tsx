"use client"

import { Home, Recycle, Calendar, Search, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Recycle Item", icon: Recycle, href: "/item-identification" },
  { name: "Appointments", icon: Calendar, href: "/appointment" },
  { name: "Recycling Guide", icon: Search, href: "/recycling-guide" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export default function FloatingNav() {
  const pathname = usePathname()

  return (
    <div className="
      fixed left-6 top-1/2 -translate-y-1/2 
      flex flex-col gap-4 p-3
      rounded-full
      bg-white/20 backdrop-blur-xl 
      shadow-xl shadow-black/10
      border border-white/30
      z-50
      transition-all
      ">
      
      {nav.map((item) => {
        const Icon = item.icon
        const active = pathname === item.href

        return (
          <Link
            key={item.name}
            href={item.href}
            className="
              group relative flex items-center
              justify-center 
              w-9 h-12
              rounded-full
              hover:bg-white/30
              transition-all
              cursor-pointer
            "
          >

            {/* ICON */}
            <Icon 
              className={`w-6 h-6 transition-all 
                ${active ? "text-black" : "text-white/90"} 
                group-hover:scale-110`}
            />

            {/* LABEL ON HOVER */}
            <span className="
              absolute left-14 top-1/2 -translate-y-1/2
              whitespace-nowrap
              bg-black/80 text-white 
              px-3 py-1 rounded-md
              text-sm opacity-0
              group-hover:opacity-100 
              pointer-events-none
              transition-all
            ">
              {item.name}
            </span>
          </Link>
        )
      })}

    </div>
  )
}
