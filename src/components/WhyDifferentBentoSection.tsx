import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const features = [
  {
    microline: "PREMIUM DESIGN",
    title: "Design minimal, impact maxim",
    description: "Estetică curată, fără kitsch. Fiecare element este gândit pentru a crea o experiență premium care reflectă calitatea evenimentului tău.",
    accent: true,
  },
  {
    microline: "FAST SETUP",
    title: "Livrare rapidă, fără fricțiune",
    description: "Setup rapid, flux fluid pentru oaspeți. Tehnologie care funcționează perfect, fără întârzieri sau complicații.",
    accent: false,
  },
  {
    microline: "CINEMATIC OUTPUT",
    title: "Output cinematic",
    description: "Calitate foto și video de nivel profesional. Iluminare consistentă, culori precise, gata pentru editare și arhivare.",
    accent: false,
  },
  {
    microline: "ELEGANT INTERACTION",
    title: "Interactiv, dar elegant",
    description: "Experiență captivantă fără să fie zgomotoasă. Tehnologie interactivă care se integrează natural în atmosfera evenimentului.",
    accent: true,
  },
]

const WhyDifferentBentoSection = () => {
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm text-black/60">
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Built for modern events</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
            De ce e diferit.
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto lg:mx-0">
            O abordare minimalistă care pune calitatea și experiența în centru.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isBig = index === 0 || index === 3

            return (
              <article
                key={index}
                className={cn(
                  isBig ? "lg:col-span-7" : "lg:col-span-5"
                )}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:border-black/20 hover:-translate-y-0.5">
                  <CardContent className="p-6 md:p-8">
                    {feature.microline && (
                      <div className="mb-3 text-xs uppercase tracking-widest text-black/50 text-center lg:text-left">
                        {feature.microline}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 relative text-center lg:text-left">
                      {feature.accent ? (
                        <span className="relative">
                          {feature.title}
                          <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </span>
                      ) : (
                        <span className="relative group-hover:underline group-hover:decoration-accent group-hover:decoration-[1px] group-hover:underline-offset-8 transition-all duration-300">
                          {feature.title}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm md:text-base text-black/70 leading-relaxed text-center lg:text-left">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyDifferentBentoSection

