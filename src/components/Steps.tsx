const steps = [
  {
    number: "01",
    title: "We design the experience.",
  },
  {
    number: "02",
    title: "We build the setup.",
  },
  {
    number: "03",
    title: "We deliver the moment.",
  },
]

const Steps = () => {
  return (
    <section className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-16">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground/20 tracking-tight">
                {step.number}
              </div>
              <div className="flex-1">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps

