export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 tracking-wider">NOIR APPAREL</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Redefining elegance through timeless design and exceptional craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">NEWSLETTER</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-2 bg-foreground text-background text-sm font-bold tracking-wider hover:bg-foreground/90 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NOIR APPAREL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
