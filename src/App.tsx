import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhatIsLumosBoxSection from "./components/WhatIsLumosBoxSection"
import WhyDifferentBentoSection from "./components/WhyDifferentBentoSection"
import HowItWorksAndEventsSection from "./components/HowItWorksAndEventsSection"
import PackagesSection from "./components/PackagesSection"
import ExtrasGalleryFaqBookingSections from "./components/ExtrasGalleryFaqBookingSections"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhatIsLumosBoxSection />
        <WhyDifferentBentoSection />
        <HowItWorksAndEventsSection />
        <PackagesSection />
        <ExtrasGalleryFaqBookingSections />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

