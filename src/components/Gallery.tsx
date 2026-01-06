import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog"
import { motion } from "framer-motion"

const galleryItems = [
  {
    id: 1,
    title: "Event One",
    image: "/images/gallery-1.jpg",
  },
  {
    id: 2,
    title: "Event Two",
    image: "/images/gallery-2.jpg",
  },
  {
    id: 3,
    title: "Event Three",
    image: "/images/gallery-3.jpg",
  },
  {
    id: 4,
    title: "Event Four",
    image: "/images/gallery-4.jpg",
  },
]

const Gallery = () => {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {galleryItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <button className="relative aspect-[4/3] overflow-hidden cursor-pointer group w-full text-left p-0 border-0 bg-transparent">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium underline decoration-accent decoration-1 underline-offset-4">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

