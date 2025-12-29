"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Reservations() {
  const { ref, isInView } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="reservations" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-in fade-in duration-1000">
              <div className="mb-8">
                <svg className="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="font-serif font-light text-5xl md:text-7xl text-foreground mb-8 leading-tight">
                Thank You
              </h2>

              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
                <p>
                  Your reservation has been confirmed, <span className="text-primary">{formData.name}</span>.
                </p>
                <p>
                  We look forward to welcoming you on{" "}
                  <span className="text-foreground">
                    {new Date(formData.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  at <span className="text-foreground">{formData.time}</span> for{" "}
                  <span className="text-foreground">
                    {formData.guests} {formData.guests === "1" ? "guest" : "guests"}
                  </span>
                  .
                </p>
                <p className="pt-6 border-t border-border/30">
                  A confirmation email has been sent to <span className="text-foreground">{formData.email}</span>.
                </p>
                <p className="italic text-base pt-8">"We are honored to be part of your culinary journey."</p>
                <p className="text-primary text-sm tracking-widest uppercase">Chef Alexandre Laurent</p>
              </div>

              <Button
                onClick={() => setSubmitted(false)}
                className="mt-12 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-sm tracking-widest uppercase transition-all duration-500"
              >
                Make Another Reservation
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservations" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">
              Book Your Experience
            </span>
            <h2 className="font-serif font-light text-4xl md:text-6xl text-foreground mb-8 leading-tight">
              Reservations
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Secure your table for an evening of exceptional cuisine and refined hospitality
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 bg-secondary border border-border text-foreground rounded-sm"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Date
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground tracking-wider uppercase mb-2 block font-light">
                  Time
                </label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-secondary border-border text-foreground"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase transition-all duration-500"
            >
              Confirm Reservation
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-8 font-light italic">
            For parties larger than 8 guests, please contact us directly
          </p>
        </div>
      </div>
    </section>
  )
}
