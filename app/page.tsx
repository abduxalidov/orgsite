import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SmmSection } from "@/components/smm-section"
import { ContactSection } from "@/components/contact-section"
import { AiChat } from "@/components/ai-chat"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <SmmSection />
      <ContactSection />
      <AiChat />
    </main>
  )
}
