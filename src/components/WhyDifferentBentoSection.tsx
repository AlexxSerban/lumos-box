import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Film, Users } from "lucide-react"

interface FeatureItem {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Design minimal, impact maxim",
    description: "Estetică curată, fără kitsch. Fiecare element este gândit pentru a crea o experiență premium care reflectă calitatea evenimentului tău.",
    icon: Sparkles,
    color: "text-accent-neon-red",
  },
  {
    id: 2,
    title: "Livrare rapidă, fără fricțiune",
    description: "Setup rapid, flux fluid pentru oaspeți. Tehnologie care funcționează perfect, fără întârzieri sau complicații.",
    icon: Zap,
    color: "text-accent-neon-purple",
  },
  {
    id: 3,
    title: "Output cinematic",
    description: "Calitate foto și video de nivel profesional. Iluminare consistentă, culori precise, gata pentru editare și arhivare.",
    icon: Film,
    color: "text-accent-neon-blue",
  },
  {
    id: 4,
    title: "Interactiv, dar elegant",
    description: "Experiență captivantă fără să fie zgomotoasă. Tehnologie interactivă care se integrează natural în atmosfera evenimentului.",
    icon: Users,
    color: "text-accent-neon-cyan",
  },
]

const WhyDifferentBentoSection = () => {
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mx-auto mb-12 md:mb-16 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 font-medium border-accent-neon-blue/30 text-accent-neon-blue">
            Built for modern events
          </Badge>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
            De ce e diferit.
          </h2>
          <p className="text-base md:text-lg text-foreground/70 text-pretty">
            O abordare minimalistă care pune calitatea și experiența în centru. Descoperă de ce mii de evenimente aleg Lumos Box pentru experiențe memorabile.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.id} className="group">
              <Card className="relative h-full overflow-hidden transition-all duration-300 hover:border-accent-neon-blue/30 hover:-translate-y-0.5">
                <CardContent className="p-6">
                  <Badge 
                    variant="secondary" 
                    className={`mb-4 inline-flex size-12 items-center justify-center ${
                      feature.id === 1 ? 'border-accent-neon-red/20 bg-accent-neon-red/10' :
                      feature.id === 2 ? 'border-accent-neon-purple/20 bg-accent-neon-purple/10' :
                      feature.id === 3 ? 'border-accent-neon-blue/20 bg-accent-neon-blue/10' :
                      'border-accent-neon-cyan/20 bg-accent-neon-cyan/10'
                    }`}
                  >
                    <feature.icon className={`size-5 ${feature.color}`} aria-hidden="true" />
                  </Badge>
                  <h3 
                    className="mb-2 text-lg md:text-xl font-semibold tracking-tight"
                    style={{
                      color: feature.id === 1 ? 'var(--accent-neon-red)' :
                              feature.id === 2 ? 'var(--accent-neon-purple)' :
                              feature.id === 3 ? 'var(--accent-neon-blue)' :
                              'var(--accent-neon-cyan)'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Button
            variant="ghost"
            size="lg"
            className="cursor-pointer rounded-lg px-8 text-base md:text-lg hover:underline hover:decoration-accent-neon-blue hover:decoration-1 hover:underline-offset-8"
            onClick={() => {
              const element = document.getElementById("packages")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Vezi pachetele
            <ArrowRight className="ms-2 size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhyDifferentBentoSection

