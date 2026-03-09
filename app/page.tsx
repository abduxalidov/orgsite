import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { SmmSection } from "@/components/smm-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SmmSection />
      <ContactSection />
    </>
  )
}
