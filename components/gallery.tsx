"use client"

import { useInView } from "@/hooks/use-in-view"

export function Gallery() {
  const { ref, isInView } = useInView()

  const images = [
    { src: "/hokkaido-scallop-fine-dining-plating-caviar-elegan.jpg", aspect: "aspect-square" },
    { src: "/luxury-restaurant-cinematic-ambiance-dark-elegant-.jpg", aspect: "aspect-[4/5]" },
    { src: "/foie-gras-torchon-fine-dining-elegant-plating.jpg", aspect: "aspect-square" },
    { src: "/tuna-tartare-ponzu-fine-dining-japanese-fusion.jpg", aspect: "aspect-[4/5]" },
    { src: "/chef-plating-fine-dining-dish-elegant-restaurant-k.jpg", aspect: "aspect-square" },
    { src: "/wagyu-ribeye-steak-truffle-fine-dining-elegant.jpg", aspect: "aspect-[4/5]" },
  ]

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-6 block font-light">Visual Journey</span>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-foreground mb-8 leading-tight">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into our culinary artistry and elegant ambiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.aspect} overflow-hidden group transition-all duration-1000 delay-${i * 100} ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt="Gallery image"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
