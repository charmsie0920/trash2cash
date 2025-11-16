"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog"

const items = [
  { id: 1, name: "Plastic Bottles", img: "/plasticBottles.png" },
  { id: 2, name: "Aluminium Cans", img: "/aluminumCans.png" },
  { id: 3, name: "Cardboards", img: "/cardboards.png" },
  { id: 4, name: "Glass", img: "/glass.png" },
  { id: 5, name: "Electrical Waste", img: "/electricalWaste.png" },
  { id: 6, name: "Organic Waste", img: "/organicWaste.png" },
]

export default function RecyclingGuidePage() {
  return (
    <div className="w-full h-full flex justify-center items-start mt-20">
    <div className="grid grid-cols-3 gap-25">
    {items.map((item) => (
        <Dialog key={item.id}>
        <DialogTrigger asChild>
            <Card className="group relative aspect-[3/4] w-64 max-w-[14rem] rounded-2xl overflow-hidden cursor-pointer 
            transition-all hover:scale-[1.03] hover:shadow-lg">
            <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
            />
            </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md" forceMount>
            <DialogTitle>{item.name}</DialogTitle>
        </DialogContent>
        </Dialog>
    ))}
    </div>
    </div>


  )
}
