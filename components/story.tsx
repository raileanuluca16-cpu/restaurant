"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function Story() {
  const { ref, isInView } = useInView()

  return (
    <section id="story" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Story Content */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-light">Est. 2018</span>
            <h2 className="font-serif font-light text-5xl md:text-6xl text-foreground mb-8 leading-tight">Our Story</h2>
            <div className="w-16 h-px bg-primary mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-light">
                Born from a passion for culinary excellence and a vision to redefine fine dining, Atelier opened its
                doors in the heart of the city with a singular purpose: to create unforgettable gastronomic experiences.
              </p>
              <p className="font-light">
                Our founder and head chef, Alessandro Moretti, trained in the most prestigious kitchens of Paris and
                Tokyo, bringing together European technique with Asian precision. Every dish tells a story of his
                20-year journey through the world's culinary capitals.
              </p>
              <p className="font-light">
                At Atelier, we believe that dining is an art form. Each plate is a canvas where seasonal ingredients,
                innovative techniques, and timeless traditions merge into something extraordinary. Our intimate 24-seat
                dining room creates an atmosphere where every guest becomes part of our culinary narrative.
              </p>
              <p className="font-light italic">
                We source exclusively from local farms and sustainable fisheries, ensuring that every ingredient meets
                our exacting standards. Our menu changes with the seasons, celebrating the finest produce at its peak.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif text-primary mb-2">★</div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Michelin Star</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-primary mb-2">7</div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Years Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif text-primary mb-2">24</div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Intimate Seats</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative h-[600px] lg:h-[700px]">
              <Image src="/chef-plating-fine-dining-dish-elegant-restaurant-k.jpg" alt="Chef Alessandro Moretti" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-sm font-light italic tracking-wide">
                "Cooking is not about ingredients, it's about the emotions they evoke."
              </p>
              <p className="text-xs tracking-widest uppercase mt-2 opacity-70">— Alessandro Moretti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
