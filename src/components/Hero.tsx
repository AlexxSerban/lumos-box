import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section 
      className="relative min-h-screen bg-background pt-24 md:pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Hero Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Left Column - Main Title */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[1.1] mb-4"
              >
                WE DESIGN
                <br />
                MEMORABLE
                <br />
                EVENTS
              </motion.h1>
            </motion.div>
          </div>

          {/* Right Column - Empty for alignment */}
          <div className="lg:col-span-6"></div>
        </div>

        {/* Neon Separator Line */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-[1px] bg-foreground/20 mb-8 lg:mb-12"
        />

        {/* Bottom Content - Label and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Left Column - Label */}
          <div className="lg:col-span-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base text-foreground/60"
            >
              • Event Experience
            </motion.div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-6 flex items-end">
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-xl"
            >
              Transformă prezența digitală a brandului tău cu designuri de ultimă generație care nu doar că arată impresionant, ci creează și impresii durabile și generează angajament semnificativ.
            </motion.p>
          </div>
        </div>

        {/* Hero Image - Full Width */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Mobile/Tablet Image */}
          <div className="lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg-mobile.png`}
              alt="Lumos Box Event Experience"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Desktop Image */}
          <div className="hidden lg:block w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/heroSection2.png`}
              alt="Lumos Box Event Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

