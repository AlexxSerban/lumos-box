import { Button } from "./ui/button"

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 sm:mb-12">
          Ready to elevate your event?
        </h2>
        <Button
          variant="ghost"
          onClick={scrollToContact}
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12"
        >
          Get in touch
        </Button>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 text-xs sm:text-sm text-foreground/60">
          <a
            href="mailto:hello@lumos.com"
            className="hover:text-foreground hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-colors"
          >
            hello@lumos.com
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="tel:+1234567890"
            className="hover:text-foreground hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-colors"
          >
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA

