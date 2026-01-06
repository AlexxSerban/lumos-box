import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const packages = [
  {
    id: "static",
    title: "LUMOS STATIC",
    tagline: "O culoare. Un vibe constant.",
    features: [
      "o culoare statică, aleasă înainte de eveniment (alb / roșu / portocaliu / roz / mov / verde / albastru)",
      "reglaj de intensitate al luminii",
      "baloane argintii incluse (pot fi păstrate sau eliminate); alte culori disponibile opțional",
      "transport în București & împrejurimi",
      "montaj & demontaj",
      "asistent pe toată durata evenimentului",
      "utilizare nelimitată pentru invitați",
    ],
    recommended: false,
  },
  {
    id: "flex",
    title: "LUMOS FLEX",
    tagline: "Libertate totală de culoare, pe parcursul evenimentului.",
    features: [
      "schimbare liberă de culori și intensități pe toată durata evenimentului (alb / roșu / portocaliu / roz / mov / verde / albastru)",
      "experiență interactivă pentru invitați",
      "baloane argintii opționale (incluse; clientul alege cu sau fără)",
      "transport în București & împrejurimi",
      "montaj & demontaj",
      "asistent pe toată durata evenimentului",
      "utilizare nelimitată pentru invitați",
    ],
    recommended: true,
  },
]

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-sm text-black/60">
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            <span>Transparent & simplu</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4">
            Pachete
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto lg:mx-0">
            Alege pachetul potrivit pentru evenimentul tău.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="lg:col-span-6 group cursor-default transition-all duration-300 hover:border-black/20 hover:-translate-y-0.5"
            >
              <CardContent className="p-6 md:p-8">
                {/* Optional highlight for FLEX */}
                {pkg.recommended && (
                  <div className="mb-4 flex items-center gap-2">
                    <div className="w-[1px] h-4 bg-accent"></div>
                    <span className="text-xs text-black/50 uppercase tracking-wider">
                      Recomandat
                    </span>
                  </div>
                )}

                {/* Package Title */}
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 relative group-hover:underline group-hover:decoration-accent group-hover:decoration-[2px] group-hover:underline-offset-8 transition-all duration-300">
                  {pkg.title}
                </h3>
                <p className="text-sm md:text-base text-black/60 mb-8">
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <ul className="space-y-3 md:space-y-4 mb-8 max-w-prose">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span className="text-base text-black/70 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="text-base text-foreground hover:underline hover:decoration-accent hover:decoration-1 hover:underline-offset-8 w-full sm:w-auto"
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Solicită ofertă
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection

