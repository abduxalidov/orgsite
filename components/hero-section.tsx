"use client"

import { Code, Palette, Smartphone, Share2 } from "lucide-react"

function Card({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="mb-4 text-cyan-400">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Men <span className="text-cyan-400">Abdulloh Abduxalidov</span>
      </h1>

      <p className="text-slate-400 text-center max-w-xl mb-12">
        Web saytlar, mobil ilovalar va SMM xizmatlari bilan shug'ullanaman.
        Biznesingiz uchun zamonaviy raqamli yechimlar yarataman.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <Card
          icon={<Code />}
          title="Web sayt"
          desc="Biznes uchun zamonaviy saytlar."
        />

        <Card
          icon={<Palette />}
          title="Logo & Branding"
          desc="Professional logo dizayn."
        />

        <Card
          icon={<Smartphone />}
          title="Mobil ilova"
          desc="Android va iOS ilovalar."
        />

        <Card
          icon={<Share2 />}
          title="SMM"
          desc="Telegram va Instagram marketing."
        />
      </div>
    </section>
  )
}
