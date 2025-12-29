"use client"

import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#story", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reservations", label: "Reservations" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToReservations = () => {
    const reservationsSection = document.getElementById("reservations")
    if (reservationsSection) {
      reservationsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-serif font-light tracking-wider text-primary">
            ATELIER
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/90 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToMenu}
              className="px-6 py-3 bg-primary/90 text-background hover:bg-primary transition-all duration-300 text-sm tracking-wide"
            >
              Menu
            </button>
            <button
              onClick={scrollToReservations}
              className="hidden sm:block px-6 py-3 bg-secondary text-foreground hover:bg-secondary/80 transition-all duration-300 text-sm tracking-wide"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 h-full flex flex-col">
          <div className="py-6 flex items-center justify-between border-b border-border/20">
            <span className="text-2xl font-serif font-light tracking-wider text-primary">ATELIER</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl text-foreground hover:text-primary transition-colors duration-300"
            >
              ×
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-serif text-4xl font-light text-foreground hover:text-primary transition-all duration-500 ${
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
