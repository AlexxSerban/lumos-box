import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isInHero, setIsInHero] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Check if we're still in hero section (first viewport height)
      setIsInHero(scrollPosition < windowHeight * 0.8)
      setScrolled(scrollPosition > 50)
    }
    
    // Check initial position
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-14 md:h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 transition-all duration-300",
        scrolled && "border-b border-border-subtle bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className={cn(
        "text-xs sm:text-sm font-medium tracking-tight transition-colors duration-300",
        isInHero ? "text-white" : "text-foreground"
      )}>
        LUMOS
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("packages")}
          className={cn(
            "text-sm transition-colors duration-300",
            isInHero ? "text-white hover:text-white" : "text-foreground"
          )}
        >
          Pachete
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("faq")}
          className={cn(
            "text-sm transition-colors duration-300",
            isInHero ? "text-white hover:text-white" : "text-foreground"
          )}
        >
          Întrebări
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("contact")}
          className={cn(
            "text-sm transition-colors duration-300",
            isInHero ? "text-white hover:text-white" : "text-foreground"
          )}
        >
          Contact
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={cn(
          "md:hidden p-2 transition-colors duration-300",
          isInHero ? "text-white" : "text-foreground"
        )}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 md:hidden left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border-subtle shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("packages")}
              className="text-sm text-foreground justify-start w-full"
            >
              Pachete
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("faq")}
              className="text-sm text-foreground justify-start w-full"
            >
              Întrebări
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-sm text-foreground justify-start w-full"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

