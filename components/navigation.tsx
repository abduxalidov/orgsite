"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "SMM", href: "#smm" },
  { label: "Aloqa", href: "#aloqa" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#xizmatlar" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              A
            </div>

            <span className="font-bold text-foreground hidden sm:block">
              Abdulloh
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://t.me/abduxalidov"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform glow-sm"
          >
            Bog&apos;lanish
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-card border border-border animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-2">

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://t.me/abduxalidov"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-primary text-primary-foreground text-center font-medium"
              >
                Bog&apos;lanish
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  )
                }
