"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog"


const items = [
  { id: 2, name: "Aluminium Cans", img: "/aluminumCans.png", desc: "Metal recycling tips" },
  { id: 3, name: "Cardboards", img: "/cardboards.png", desc: "Clean & flatten properly" },
  { id: 8, name: "Bulky Waste", img: "/bulkyWaste.png", desc: "Special disposal methods" },
  { id: 1, name: "Plastic Bottles", img: "/plasticBottles.png", desc: "How to recycle PET & HDPE" },
  { id: 5, name: "Electrical Waste", img: "/electricalWaste.png", desc: "Dispose safely" },
  { id: 7, name: "Clothing", img: "/clothing.png", desc: "Donate or recycle" },
  { id: 6, name: "Organic Waste", img: "/organicWaste.png", desc: "Compostable materials" },
  { id: 4, name: "Glass", img: "/glass.png", desc: "Clear vs coloured glass" },
  
]

const heights = ["h-48", "h-64", "h-80", "h-96"]


export default function RecyclingGuidePage() {
  return (
    <div className="w-full p-0">
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-0 space-y-0">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="relative overflow-hidden group cursor-pointer mb-0 break-inside-avoid-column"
          >
            <div className={`relative w-full ${heights[i % heights.length]} 
                transition-all duration-300 group-hover:scale-[1.02]`}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes = "300px"
                className="object-cover transition-all duration-300 
                group-hover:brightness-75 group-hover:blur-[1px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0
                    group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                <h2 className="text-white text-base font-semibold opacity-0 translate-y-1 
                  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.name}
                </h2>
                <p className="text-white/80 text-xs mt-1 opacity-0 translate-y-1
                  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}