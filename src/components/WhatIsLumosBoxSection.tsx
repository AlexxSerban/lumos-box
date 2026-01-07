import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { ArrowRight } from "lucide-react"

const stats = [
  {
    number: "500+",
    label: "Evenimente realizate",
  },
  {
    number: "5+",
    label: "Ani de experiență",
  },
  {
    number: "2000+",
    label: "Invitați mulțumiți",
  },
]

const services = [
  "Fotobooth Premium",
  "Experiențe Interactive",
  "Calitate Cinematică",
  "Design Minimalist",
  "Tehnologie Avansată",
]

const WhatIsLumosBoxSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Title and First Paragraph Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 items-start">
            {/* Left: Title */}
            <div className="md:col-span-5">
              <motion.h2 
                variants={itemVariants}
                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold tracking-tight flex items-center gap-2"
              >
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-foreground block"></span>
                Ce este Lumos Box?
              </motion.h2>
            </div>

            {/* Right: First Paragraph */}
            <div className="md:col-span-7">
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-foreground/70 leading-relaxed"
              >
                O soluție premium de fotobooth și experiențe interactive pentru evenimente moderne. 
                Design minimalist, tehnologie avansată și calitate cinematică într-un singur pachet elegant.
              </motion.p>
            </div>
          </div>

          {/* Statistics and Second Paragraph Row - Aligned horizontally */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 items-end">
            {/* Left: Statistics */}
            <div className="md:col-span-5">
              <motion.div 
                variants={itemVariants}
                className="flex flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 flex-wrap md:flex-nowrap"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-1 sm:mb-1.5 md:mb-2">
                      <span className="text-foreground">{stat.number.slice(0, -1)}</span>
                      <span className="text-accent-neon-purple">+</span>
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-foreground/60 whitespace-nowrap">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Second Paragraph */}
            <div className="md:col-span-7">
              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-foreground/70 leading-relaxed"
              >
                Echipa noastră lucrează strâns cu clienții pentru a înțelege profund viziunea, obiectivele și provocările lor, 
                asigurându-ne că fiecare soluție pe care o livrăm este aliniată cu nevoile lor unice. Fie că ai nevoie de un 
                fotobooth premium, o experiență interactivă sau o soluție completă pentru evenimentul tău.
              </motion.p>
            </div>
          </div>

          {/* Services Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-foreground/10 pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 md:items-start">
              {/* Left: Title and Button */}
              <div className="md:col-span-5 flex flex-col h-full">
                <motion.h3 
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold tracking-tight mb-6 sm:mb-7 md:mb-8 flex items-center gap-2 pt-3 sm:pt-4"
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-accent-neon-purple block"></span>
                  Servicii
                </motion.h3>
                <motion.div variants={itemVariants} className="mt-auto">
                  <Button
                    variant="ghost"
                    className="border border-accent-neon-purple rounded-2xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-base text-accent-neon-purple hover:bg-accent-neon-purple/10 transition-colors"
                    onClick={() => {
                      const element = document.getElementById("booking")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Hai să vorbim
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-accent-neon-purple" />
                  </Button>
                </motion.div>
              </div>

              {/* Right: Services List */}
              <div className="md:col-span-7">
                <motion.ul 
                  variants={containerVariants}
                  className="space-y-0"
                >
                  {services.map((service, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                    >
                      <div 
                        className="flex items-center justify-between py-3 sm:py-4 cursor-pointer group"
                        onClick={() => {
                          const element = document.getElementById("packages")
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                      >
                        <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-foreground group-hover:text-accent-neon-purple transition-colors">
                          {service}
                        </span>
                        <ArrowRight className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-foreground/60 group-hover:text-accent-neon-purple transition-colors flex-shrink-0" />
                      </div>
                      {index < services.length - 1 && (
                        <Separator className="bg-white" />
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsLumosBoxSection

