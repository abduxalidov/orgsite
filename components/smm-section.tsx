"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Instagram, Star, Crown } from "lucide-react"

interface PricingItem {
  name: string
  price: string
}

interface PricingCardProps {
  icon: React.ReactNode
  title: string
  items: PricingItem[]
  color: string
  delay: number
}

function PricingCard({ icon, title, items, color, delay }: PricingCardProps) {
  return (
    <div
      className="animate-on-scroll opacity-0 duration-700 group relative p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl} />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
            >
              <span className="text-sm text-foreground">{item.name}</span>
              <span className="text-sm font-semibold text-primary whitespace-nowrap ml-2">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SmmSection() {
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

  const telegramServices: PricingItem[] = [
    { name: "1000 garantli obunachi", price: "30 000 so'm" },
    { name: "1000 ko'rish", price: "500 so'm" },
    { name: "1000 like", price: "500 so'm" },
    { name: "1000 premium obunachi (1 oylik)", price: "99 000 so'm" },
    { name: "1000 garantiyasiz obunachi", price: "2 000 so'm" },
    { name: "1000 story ko'rish", price: "10 000 so'm" },
  ]

  const instagramServices: PricingItem[] = [
    { name: "1000 garantli obunachi", price: "25 000 so'm" },
    { name: "1000 garantiyasiz obunachi", price: "5 000 so'm" },
    { name: "1000 like", price: "2 000 so'm" },
    { name: "1000 story ko'rish", price: "5 000 so'm" },
    { name: "1000 video ko'rish", price: "1 000 so'm" },
  ]

  const telegramStars: PricingItem[] = [
    { name: "50 Stars", price: "12 000 so'm" },
    { name: "100 Stars", price: "24 000 so'm" },
    { name: "250 Stars", price: "60 000 so'm" },
    { name: "500 Stars", price: "120 000 so'm" },
    { name: "1000 Stars", price: "240 000 so'm" },
  ]

  const telegramPremium: PricingItem[] = [
    { name: "1 oylik Premium", price: "45 000 so'm" },
    { name: "3 oylik Premium", price: "165 000 so'm" },
    { name: "6 oylik Premium", price: "225 000 so'm" },
    { name: "12 oylik Premium", price: "300 000 so'm" },
  ]

  return (
    <section
      ref={containerRef}
      id="smm"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
