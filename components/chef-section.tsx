"use client"

import { useInView } from "@/hooks/use-in-view"

export function ChefSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/chef-plating-fine-dining-dish-elegant-restaurant-k.jpg"
                alt="Chef at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">Meet The Chef</span>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Passion Meets Precision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Chef Alexandre Beaumont brings over 20 years of Michelin-starred experience to Atelier. Trained in the
              finest kitchens of Paris and Tokyo, he crafts each dish with meticulous attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              His philosophy is simple: respect the ingredients, honor tradition, and never stop innovating. Every plate
              tells a story of dedication, creativity, and the relentless pursuit of perfection.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-primary" />
              <p className="font-serif text-xl text-foreground italic">
                "Cooking is an expression of love and respect"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
