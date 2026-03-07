"use client"

import { useEffect, useRef } from "react"
import { Send, Users, Phone, Instagram, MapPin } from "lucide-react"

interface ContactButtonProps {
  icon: React.ReactNode
  label: string
  sublabel?: string
  href: string
  delay: number
}

function ContactButton({ icon, label, sublabel, href, delay }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-on-scroll opacity-0 duration-700 group flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary hover:bg-card/80 hover:scale-105 hover:glow-sm transition-all"
      style={{ animationDelay: `${delay}ms `}}
    >
      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <span className="block text-foreground font-medium group-hover:text-primary transition-colors">
          {label}
        </span>
        {sublabel && (
          <span className="text-sm text-muted-foreground">{sublabel}</span>
        )}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Send className="w-5 h-5 text-primary" />
      </div>
    </a>
  )
}

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="aloqa"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll opacity-0 duration-700 text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Aloqa</span>
          </h2>
          <p className="animate-on-scroll opacity-0 duration-700 delay-100 text-muted-foreground">
            Men bilan bog&apos;lanish uchun quyidagi platformalardan foydalaning
          </p>
        </div>

        <div className="space-y-4">
          <ContactButton
            icon={<Send className="w-6 h-6" />}
            label="Telegram (Shaxsiy)"
            sublabel="@abduxalidov"
            href="https://t.me/abduxalidov"
            delay={200}
          />
          <ContactButton
            icon={<Users className="w-6 h-6" />}
            label="Telegram Kanal"
            sublabel="@web_xizmatlarim"
            href="https://t.me/web_xizmatlarim"
            delay={300}
          />
          <ContactButton
            icon={<Phone className="w-6 h-6" />}
            label="Telefon"
            sublabel="+998 70 129 20 10"
            href="tel:+998701292010"
            delay={400}
          />
          <ContactButton
            icon={<Instagram className="w-6 h-6" />}
            label="Instagram"
            sublabel="@abduxalidov"
            href="https://instagram.com/abduxalidov"
            delay={500}
          />
        </div>

        <div className="animate-on-scroll opacity-0 duration-700 mt-12 flex items-center justify-center gap-2 text-muted-foreground" style={{ animationDelay: "600ms" }}>
          <MapPin className="w-4 h-4" />
          <span className="text-sm">O&apos;zbekiston</span>
        </div>
{/* Footer */}
        <div className="animate-on-scroll opacity-0 duration-700 mt-16 pt-8 border-t border-border text-center" style={{ animationDelay: "700ms" }}>
          <p className="text-sm text-muted-foreground">
            © 2026 Abduxalidov Abdulloh. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </section>
  )
}
