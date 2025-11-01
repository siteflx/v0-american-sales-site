"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="tracking-wider">
              <ShoppingCart className="mr-2 h-4 w-4" />
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs tracking-widest text-muted-foreground mb-2">{product.category.toUpperCase()}</p>
        <h3 className="text-lg font-medium mb-2 text-card-foreground">{product.name}</h3>
        <p className="text-xl font-bold text-card-foreground">${product.price.toFixed(2)}</p>
      </div>
    </Card>
  )
}
