"use client"

import { useEffect, useRef } from "react"
import { Code, Palette, Smartphone, Share2 } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <div
      className="animate-on-scroll opacity-0 duration-700 group p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary hover:bg-card/80 hover:scale-105 hover:glow-sm transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 text-primary">{icon}</div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-8"
            )
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")

    elements?.forEach((el) => observer.observe(el as HTMLElement))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="xizmatlar"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll opacity-0 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-primary">Xizmatga tayyor</span>
          </div>
        </div>

        <h1 className="animate-on-scroll opacity-0 duration-700 delay-100 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Men </span>
          <span className="text-primary text-glow">
            Abdulloh Abduxalidov
          </span>
        </h1>

        <p className="animate-on-scroll opacity-0 duration-700 delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Web saytlar, mobil ilovalar va SMM xizmatlari bilan shug&apos;ullanaman.
          Biznesingiz uchun zamonaviy va samarali raqamli yechimlar yarataman.
        </p>

        <div className="animate-on-scroll opacity-0 duration-700 delay-300 flex flex-wrap justify-center gap-3 mb-16">
          <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
            Web Developer
          </span>

          <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
            SMM Specialist
          </span>

          <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
            Grafik Dizayner
          </span>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ServiceCard
            icon={<Code className="w-8 h-8" />}
            title="Web sayt yaratish"
            description="Biznes uchun zamonaviy, tez va responsiv web saytlar yarataman."
            delay={200}
          />

          <ServiceCard
            icon={<Palette className="w-8 h-8" />}
            title="Logo & Branding"
            description="Brend identifikatsiya va professional logo dizayn."
            delay={300}
          />

          <ServiceCard
            icon={<Smartphone className="w-8 h-8" />}
            title="Mobil ilova"
            description="Android va iOS uchun oddiy va foydali mobil ilovalar."
            delay={400}
          />

          <ServiceCard
            icon={<Share2 className="w-8 h-8" />}
            title="SMM xizmatlari"
            description="Telegram va Instagram marketing xizmatlari."
            delay={500}
          />
        </div>
      </div>
    </section>
  )
}
