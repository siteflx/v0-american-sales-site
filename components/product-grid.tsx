import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Classic Black Blazer",
    price: 299.0,
    image: "/elegant-black-blazer-on-white-background.jpg",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Premium White Shirt",
    price: 149.0,
    image: "/crisp-white-dress-shirt-minimalist.jpg",
    category: "Essentials",
  },
  {
    id: 3,
    name: "Tailored Black Trousers",
    price: 189.0,
    image: "/black-tailored-trousers-elegant.jpg",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Monochrome Turtleneck",
    price: 129.0,
    image: "/black-turtleneck-sweater-minimalist.jpg",
    category: "Knitwear",
  },
]

export function ProductGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Featured Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Carefully selected pieces that embody our commitment to quality and timeless design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
