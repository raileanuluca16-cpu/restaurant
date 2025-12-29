"use client"

import { useInView } from "@/hooks/use-in-view"

export function Concept() {
  const { ref, isInView } = useInView()

  return (
    <section id="concept" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">Our Philosophy</span>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-foreground mb-8 leading-tight">
            The Art of Culinary Excellence
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-light">
            At Atelier, we believe dining is an immersive experience that engages all senses. Our philosophy centers on
            sourcing the finest seasonal ingredients and transforming them through innovative techniques while honoring
            classical traditions.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            Each dish tells a story, carefully crafted by our acclaimed chef to create moments of pure culinary poetry
            that linger long after the final course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-6xl mx-auto">
          {[
            { title: "Seasonal Excellence", desc: "Ingredients at their peak, sourced from local artisans" },
            { title: "Innovative Technique", desc: "Modern methods honoring classical French traditions" },
            { title: "Curated Experience", desc: "Every detail designed for an unforgettable evening" },
          ].map((item, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-1000 delay-${i * 200} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="w-16 h-px bg-primary mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-foreground mb-4 font-light">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
