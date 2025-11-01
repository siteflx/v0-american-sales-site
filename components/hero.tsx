import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight text-balance">
          Timeless Elegance
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of premium fashion pieces that transcend trends and define sophistication
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="px-8 tracking-wider">
            SHOP COLLECTION
          </Button>
          <Button size="lg" variant="outline" className="px-8 tracking-wider bg-transparent">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  )
}
