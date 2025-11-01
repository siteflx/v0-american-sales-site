import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex-1 flex justify-center lg:justify-start">
            <h1 className="text-2xl font-serif tracking-wider font-bold">NOIR APPAREL</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#" className="text-sm tracking-widest hover:text-muted-foreground transition-colors">
              NEW ARRIVALS
            </a>
            <a href="#" className="text-sm tracking-widest hover:text-muted-foreground transition-colors">
              COLLECTIONS
            </a>
            <a href="#" className="text-sm tracking-widest hover:text-muted-foreground transition-colors">
              ABOUT
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
