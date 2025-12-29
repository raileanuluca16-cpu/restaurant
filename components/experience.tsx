"use client"

import { useInView } from "@/hooks/use-in-view"

export function Experience() {
  const { ref, isInView } = useInView()

  const features = [
    {
      number: "01",
      title: "Culinary Mastery",
      description: "Every dish is a testament to our chef's dedication, blending innovation with tradition",
    },
    {
      number: "02",
      title: "Premium Ingredients",
      description: "We source only the finest seasonal ingredients from trusted local and international suppliers",
    },
    {
      number: "03",
      title: "Intimate Atmosphere",
      description: "An elegant setting designed for memorable moments, with impeccable service and attention to detail",
    },
  ]

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">The Experience</span>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Where Art Meets Flavor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            At Atelier, we believe dining is more than a meal—it's an experience that engages all the senses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-1000 delay-${i * 200} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="text-6xl md:text-7xl font-serif font-light text-primary/20 mb-6">{feature.number}</div>
              <h3 className="font-serif text-2xl text-foreground mb-4 font-light">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
