import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const addons = [
  {
    title: "Baloane colorate custom",
    description: null,
  },
  {
    title: "Text LED personalizat",
    description: null,
  },
  {
    title: "Alte elemente la cerere",
    description: null,
  },
]

const galleryImages = [
  {
    id: 1,
    src: "/images/LumosBusiness.png",
    alt: "Lumos Box - Evenimente business",
  },
  {
    id: 2,
    src: "/images/LumosNunta.png",
    alt: "Lumos Box - Nunți",
  },
  {
    id: 3,
    src: "/images/LumosParty.png",
    alt: "Lumos Box - Petreceri",
  },
  {
    id: 4,
    src: "/images/LumosPetrecere.png",
    alt: "Lumos Box - Evenimente de sărbătoare",
  },
  {
    id: 5,
    src: "/images/LumosBusiness.png",
    alt: "Lumos Box - Evenimente business",
  },
  {
    id: 6,
    src: "/images/LumosNunta.png",
    alt: "Lumos Box - Nunți",
  },
  {
    id: 7,
    src: "/images/LumosParty.png",
    alt: "Lumos Box - Petreceri",
  },
  {
    id: 8,
    src: "/images/LumosPetrecere.png",
    alt: "Lumos Box - Evenimente de sărbătoare",
  },
]

const faqItems = [
  {
    question: "Pot schimba culorile?",
    answer: "Da. Cu pachetul LUMOS FLEX poți schimba culorile și intensitățile pe toată durata evenimentului. Pachetul LUMOS STATIC folosește o culoare aleasă înainte de eveniment.",
  },
  {
    question: "Cât spațiu ocupă?",
    answer: "Lumos Box este compact și se integrează ușor în orice spațiu de eveniment. Dimensiunile exacte le discutăm la planificare pentru a ne asigura că se potrivește perfect în locația ta.",
  },
  {
    question: "În ce zone este disponibil?",
    answer: "Momentan oferim servicii în București și împrejurimi. Pentru evenimente în alte zone, contactează-ne pentru a discuta posibilitățile.",
  },
]

const ExtrasGalleryFaqBookingSections = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    location: "",
    details: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.eventDate || !formData.location) {
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return
    }

    // Stub submit handler
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        location: "",
        details: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Section 1: Opțiuni suplimentare */}
      <section id="addons" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm text-black/60">
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              <span>Personalizabil</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Opțiuni suplimentare.
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto lg:mx-0">
              Personalizează experiența după nevoile evenimentului tău.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {addons.map((addon, index) => (
              <Card
                key={index}
                className="group cursor-default transition-all duration-300 hover:border-black/20 hover:-translate-y-0.5"
              >
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold tracking-tight mb-2 relative group-hover:underline group-hover:decoration-accent group-hover:decoration-[2px] group-hover:underline-offset-8 transition-all duration-300">
                    {addon.title}
                  </h3>
                  {addon.description && (
                    <p className="text-sm text-black/70">{addon.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Galerie */}
      <section id="gallery" className="relative bg-background overflow-hidden" style={{ height: "100vh" }}>
        <div className="absolute top-6 left-6 md:top-12 md:left-12 lg:left-20 z-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-2">
            Galerie.
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl">
            Cadre reale din evenimente. Ușor de distribuit.
          </p>
        </div>

        <div className="horizontal-scroll-wrapper">
          {galleryImages.map((image, index) => {
            // Assign different parallax classes for variety
            const parallaxClasses = [
              "slower",
              "faster",
              "slower vertical",
              "slower slower-down",
              "default",
              "slower",
              "faster1",
              "slower slower2",
              "default",
              "slower",
              "slower last",
            ]
            const parallaxClass = parallaxClasses[index % parallaxClasses.length] || "default"

            return (
              <div key={image.id} className={`img-wrapper-parallax ${parallaxClass}`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                      />
                    </a>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            )
          })}
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 lg:left-20 z-20">
          <a
            href="#"
            className="text-sm text-black/60 hover:text-foreground hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4 transition-colors"
          >
            Vezi mai multe pe Instagram
          </a>
        </div>
      </section>

      {/* Section 3: Întrebări (FAQ) */}
      <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Întrebări.
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto lg:mx-0">
              Răspunsuri la cele mai frecvente întrebări.
            </p>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-black/70 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 4: Booking / Cere ofertă personalizată */}
      <section id="booking" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Cere ofertă personalizată.
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto lg:mx-0">
              Spune-ne câteva detalii, revenim rapid cu o ofertă.
            </p>
          </div>

          <div className="max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nume</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Numele tău"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@exemplu.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Data evenimentului</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Locație</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="București"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Detalii (opțional)</Label>
                <Textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Alte cerințe sau detalii despre eveniment..."
                  rows={4}
                />
              </div>

              {submitted ? (
                <div className="text-base text-black/70">
                  Mulțumim! Revenim curând.
                </div>
              ) : (
                <>
                  <Button
                    type="submit"
                    variant="ghost"
                    className="draw-outline-button text-base md:text-lg relative hover:no-underline"
                  >
                    <span></span>
                    <span></span>
                    CERE OFERTĂ PERSONALIZATĂ
                  </Button>
                  <p className="text-xs text-black/50 mt-4">
                    Nu trimitem spam. Doar detalii pentru ofertă.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExtrasGalleryFaqBookingSections

