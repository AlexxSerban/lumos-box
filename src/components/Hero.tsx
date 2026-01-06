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
      className="relative h-screen min-h-[600px] flex items-start lg:items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden pt-24 md:pt-32 lg:pt-0"
    >
      {/* Mobile/Tablet Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: "url('/images/hero-bg-mobile.png')",
        }}
      />
      
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: "url('/images/heroSection2.png')",
        }}
      />
      
      <div className="relative z-10 max-w-7xl w-full">
        <motion.div
          className="max-w-2xl mx-auto lg:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 text-center lg:text-left"
          >
            WE DESIGN
            <br />
            <span className="relative">
              MEMORABLE
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] bg-accent"></span>
            </span>
            <br />
            EVENTS
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-xl text-white/90 mb-12 sm:mb-16 tracking-tight text-center lg:text-left"
          >
            Photo. Video. Interactive.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            <Button
              variant="ghost"
              onClick={scrollToServices}
              className="text-base sm:text-lg md:text-xl lg:text-lg text-white hover:text-white"
            >
              Explore <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

