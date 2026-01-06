import { Separator } from "./ui/separator"

const services = [
  {
    title: "PHOTOBOOTH",
    description: "Minimal. Elegant. Fast.",
  },
  {
    title: "PHOTO & VIDEO",
    description: "Cinematic quality.",
  },
  {
    title: "INTERACTIVE",
    description: "Designed to engage.",
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-24">
          {services.map((service, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70">
                {service.description}
              </p>
              {index < services.length - 1 && (
                <Separator className="sm:hidden mt-8" />
              )}
              {index === 0 && (
                <Separator className="hidden sm:block lg:hidden mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

