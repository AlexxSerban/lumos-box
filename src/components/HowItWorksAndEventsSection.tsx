import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Alegi pachetul",
    description: null,
  },
  {
    number: "02",
    title: "Ne ocupăm de transport, montaj și asistență",
    description: null,
  },
  {
    number: "03",
    title: "Invitații se bucură de experiență",
    description: null,
  },
]

const eventTypes = [
  "Petreceri/evenimente private",
  "Aniversări",
  "Lansări & activări de brand",
  "Evenimente creative",
]

const HowItWorksAndEventsSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm text-foreground/60">
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Simple. Rapid. Elegant.</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            Cum{" "}
            <span className="relative">
              funcționează
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"></span>
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0">
            Un proces simplu, fără complicații, care pune experiența în centru.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: How It Works */}
          <div className="lg:col-span-6">
            <ol className="space-y-8 md:space-y-10">
              {steps.map((step, index) => (
                <li key={index} className="relative">
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-sm md:text-base text-foreground/50 tabular-nums font-medium">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mb-1">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="text-sm md:text-base text-foreground/70">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-8 md:mt-10">
                      <Separator className="bg-foreground/10" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Right Column: Event Types */}
          <div className="lg:col-span-6">
            <div className="max-w-prose">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-foreground">
                Pentru ce tip de evenimente este potrivită Lumos Box?
              </h3>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
                Lumos Box este potrivită pentru evenimente în care vrei un element vizual care atrage oamenii, 
                creează cadre diferite de pozele obișnuite și devine un punct de interes pe tot parcursul serii.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {eventTypes.map((event, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span className="text-base text-foreground/80 leading-relaxed">
                      {event}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-16 md:mt-20 text-left">
          <Button
            variant="ghost"
            className="text-base md:text-lg hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-8"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Programează o discuție
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksAndEventsSection

