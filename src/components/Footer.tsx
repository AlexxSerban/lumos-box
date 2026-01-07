import { Separator } from "@/components/ui/separator"
import { Instagram } from "lucide-react"

const navigationLinks = [
  {
    label: "Ce este Lumos Box?",
    href: "#about",
  },
  {
    label: "De ce e diferit",
    href: "#why",
  },
  {
    label: "Pachete",
    href: "#packages",
  },
  {
    label: "Întrebări",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="footer" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column - Dark Background */}
        <div className="lg:col-span-1 bg-foreground text-white px-6 md:px-12 lg:px-16 py-16 md:py-20">
          {/* Brand */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
              Lumos Box
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              O soluție premium de fotobooth și experiențe interactive pentru evenimente moderne.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="text-sm text-white/80 mb-2">
              București & împrejurimi, România
            </p>
            <a
              href="tel:+407xxxxxxxx"
              className="text-sm text-white/80 hover:text-white hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-all duration-200 block mb-2"
            >
              +40 7xx xxx xxx
            </a>
            <a
              href="mailto:hello@lumosbox.ro"
              className="text-sm text-white/80 hover:text-white hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-all duration-200 block"
            >
              hello@lumosbox.ro
            </a>
          </div>

          {/* Separator */}
          <Separator className="bg-white/20 h-px mb-6" />

          {/* Navigation */}
          <nav className="flex flex-col space-y-2 mb-6">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-white/80 hover:text-white hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Separator */}
          <Separator className="bg-white/20 h-px mb-6" />

          {/* Copyright + Social */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-white/60">
              © {currentYear} Lumos Box. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-4 list-none p-0 m-0">
                <li>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-opacity hover:opacity-70"
                  >
                    <Instagram size={24} stroke="#fff" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="TikTok"
                    className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-opacity hover:opacity-70"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.89 2.89 0 0 1 .88.13V9.4a6.07 6.07 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 rounded-sm transition-opacity hover:opacity-70"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-2 hidden lg:block bg-background relative overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/LumosFooter.png`}
            alt="Lumos Box Footer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
