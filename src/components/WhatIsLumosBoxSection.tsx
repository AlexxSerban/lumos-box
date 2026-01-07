import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel"
import { Button } from "./ui/button"

const slides = [
  {
    src: `${import.meta.env.BASE_URL}images/LumosBusiness.png`,
    alt: "Lumos Box - Business events",
  },
  {
    src: `${import.meta.env.BASE_URL}images/LumosNunta.png`,
    alt: "Lumos Box - Wedding events",
  },
  {
    src: `${import.meta.env.BASE_URL}images/LumosParty.png`,
    alt: "Lumos Box - Party events",
  },
  {
    src: `${import.meta.env.BASE_URL}images/LumosPetrecere.png`,
    alt: "Lumos Box - Celebration events",
  },
]

const WhatIsLumosBoxSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Auto-play: schimbă slide-ul la fiecare 5 secunde
  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        // Dacă este ultimul slide, revine la primul
        api.scrollTo(0)
      }
    }, 5000) // 5 secunde = 5000 ms

    return () => clearInterval(interval)
  }, [api])

  const carouselVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const textItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Carousel */}
          <motion.div
            className="lg:col-span-6 order-2 lg:order-1"
            variants={carouselVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/5] rounded-2xl border border-black/10 overflow-hidden shadow-none">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex -left-12 hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4" />
                <CarouselNext className="hidden lg:flex -right-12 hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-4" />
              </Carousel>
              
              {/* Slide counter overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-sm text-black/60">
                  {String(current).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <span className="w-1 h-1 rounded-full bg-accent"></span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Optional micro-label */}
            <motion.div 
              variants={textItemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm text-black/60"
            >
              <span className="w-1 h-1 rounded-full bg-accent"></span>
              <span>Designed for modern events</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              variants={textItemVariants}
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-6 text-center lg:text-left"
            >
              Ce este{" "}
              <span className="relative">
                Lumos
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"></span>
              </span>{" "}
              Box?
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              variants={textItemVariants}
              className="text-base md:text-lg text-black/70 leading-relaxed mb-8 text-center lg:text-left"
            >
              O soluție premium de fotobooth și experiențe interactive pentru evenimente moderne. 
              Design minimalist, tehnologie avansată și calitate cinematică într-un singur pachet elegant.
            </motion.p>

            {/* Optional CTA */}
            <motion.div 
              variants={textItemVariants}
              className="text-center lg:text-left"
            >
              <Button
                variant="ghost"
                className="neon-pulse text-base md:text-lg relative px-6 py-3 min-w-[200px] hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-8"
                onClick={() => {
                  const element = document.getElementById("how-it-works")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <span>Vezi cum funcționează</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsLumosBoxSection

