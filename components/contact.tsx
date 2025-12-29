"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const { ref, isInView } = useInView()

  const contactInfo = [
    { icon: MapPin, title: "Location", detail: "123 Culinary Avenue, New York, NY 10001" },
    { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email", detail: "reservations@atelier-dining.com" },
    { icon: Clock, title: "Hours", detail: "Tue-Sat: 6:00 PM - 11:00 PM" },
  ]

  return (
    <section id="contact" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">Visit Us</span>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-foreground mb-8 leading-tight">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-1000 delay-${i * 100} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-primary mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-serif text-xl mb-3 font-light">{item.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground font-light text-sm mb-4">
            © 2025 Atelier Fine Dining. All rights reserved.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm tracking-wider"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm tracking-wider"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
