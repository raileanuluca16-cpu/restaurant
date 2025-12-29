"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"
import { X } from "lucide-react"

const menuData = {
  starters: [
    {
      name: "Hokkaido Scallop",
      desc: "Cauliflower purée, Kaluga caviar, finger lime",
      price: "38",
      image: "/hokkaido-scallop-fine-dining-plating-caviar-elegan.jpg",
      fullDesc:
        "Hand-dived Hokkaido scallops seared to perfection, resting on a silky cauliflower purée infused with brown butter. Topped with Kaluga caviar and bursts of finger lime that add a citrus sparkle to every bite.",
      ingredients: "Hokkaido scallop, cauliflower, Kaluga caviar, finger lime, brown butter, sea salt",
    },
    {
      name: "Foie Gras Torchon",
      desc: "Brioche, apricot compote, aged balsamic",
      price: "42",
      image: "/foie-gras-torchon-fine-dining-elegant-plating.jpg",
      fullDesc:
        "Silky foie gras torchon prepared using traditional French technique, served with toasted brioche, sweet apricot compote, and 25-year aged balsamic reduction.",
      ingredients: "Foie gras, brioche, apricot, aged balsamic, fleur de sel, microgreens",
    },
    {
      name: "Yellowfin Tuna Tartare",
      desc: "Ponzu gel, avocado, crispy rice",
      price: "36",
      image: "/tuna-tartare-ponzu-fine-dining-japanese-fusion.jpg",
      fullDesc:
        "Pristine yellowfin tuna cut into perfect cubes, dressed with ponzu gel and accompanied by creamy avocado mousse. Finished with crispy rice for textural contrast.",
      ingredients: "Yellowfin tuna, ponzu, avocado, sushi rice, nori, sesame, microshiso",
    },
  ],
  mains: [
    {
      name: "A5 Wagyu Ribeye",
      desc: "Truffle pommes purée, seasonal vegetables",
      price: "125",
      image: "/wagyu-ribeye-steak-truffle-fine-dining-elegant.jpg",
      fullDesc:
        "The pinnacle of beef: Japanese A5 Wagyu ribeye, perfectly marbled and cooked to your preference. Accompanied by truffle-infused pommes purée and chef's selection of seasonal vegetables.",
      ingredients: "A5 Wagyu ribeye, black truffle, potato, butter, seasonal vegetables, demi-glace",
    },
    {
      name: "Dover Sole Meunière",
      desc: "Brown butter, capers, lemon, herbs",
      price: "68",
      image: "/dover-sole-meunière-fine-dining-french-classic.jpg",
      fullDesc:
        "Classic French preparation of whole Dover sole, filleted tableside. Finished with nutty brown butter, crispy capers, fresh lemon, and aromatic herbs.",
      ingredients: "Dover sole, butter, capers, lemon, parsley, white wine, shallots",
    },
    {
      name: "Duck Breast & Confit",
      desc: "Cherry gastrique, parsnip, pistachio",
      price: "58",
      image: "/duck-breast-fine-dining-cherry-gastrique-elegant.jpg",
      fullDesc:
        "Succulent duck breast with crispy skin, served alongside tender duck confit. Complemented by cherry gastrique, parsnip purée, and crushed Sicilian pistachios.",
      ingredients: "Duck breast, duck leg, cherry, parsnip, pistachio, thyme, port wine",
    },
  ],
  desserts: [
    {
      name: "Dark Chocolate Sphere",
      desc: "Raspberry coulis, gold leaf, vanilla ice cream",
      price: "24",
      image: "/chocolate-sphere-dessert-fine-dining-gold-leaf.jpg",
      fullDesc:
        "A theatrical dessert experience: a delicate dark chocolate sphere melts at your table to reveal raspberry coulis, fresh berries, and house-made vanilla bean ice cream.",
      ingredients: "70% dark chocolate, raspberry, vanilla bean, heavy cream, gold leaf, berries",
    },
    {
      name: "Tarte Tatin",
      desc: "Caramelized apple, crème fraîche",
      price: "22",
      image: "/tarte-tatin-apple-dessert-fine-dining-french.jpg",
      fullDesc:
        "Our interpretation of the French classic: Honeycrisp apples slowly caramelized and baked in butter puff pastry, served warm with tangy crème fraîche.",
      ingredients: "Honeycrisp apple, butter, sugar, puff pastry, crème fraîche, cinnamon",
    },
    {
      name: "Lemon Soufflé",
      desc: "Elderflower cream, fresh berries",
      price: "26",
      image: "/lemon-souffle-dessert-fine-dining-elegant-berries.jpg",
      fullDesc:
        "Light and airy lemon soufflé that rises to perfection, served with elderflower-infused cream and a selection of seasonal berries. Prepared to order.",
      ingredients: "Lemon, eggs, sugar, flour, elderflower, mixed berries, vanilla",
    },
  ],
}

type MenuItem = (typeof menuData.starters)[0]

export function Menu() {
  const { ref, isInView } = useInView()
  const [activeCategory, setActiveCategory] = useState<"starters" | "mains" | "desserts">("starters")
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCategoryChange = (category: "starters" | "mains" | "desserts") => {
    if (category === activeCategory) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveCategory(category)
      setTimeout(() => setIsAnimating(false), 50)
    }, 300)
  }

  return (
    <>
      <section id="menu" className="py-32 bg-accent/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={ref}
            className={`text-center mb-20 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-light">
              Culinary Journey
            </span>
            <h2 className="font-serif font-light text-5xl md:text-7xl text-foreground mb-6 leading-tight">Menu</h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>

          <div className="flex justify-center gap-8 mb-20 flex-wrap">
            {(["starters", "mains", "desserts"] as const).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 pb-2 relative ${
                  activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-500 origin-left ${
                    activeCategory === category ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory].map((item, i) => (
              <button
                key={i}
                onClick={() => setSelectedDish(item)}
                className={`group text-left border border-border/50 hover:border-primary transition-all duration-700 p-6 bg-background/50 backdrop-blur-sm ${
                  isInView && !isAnimating ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: isAnimating ? "0ms" : `${i * 100}ms` }}
              >
                <div className="relative h-48 mb-6 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-serif text-xl text-foreground font-light group-hover:text-primary transition-colors duration-500">
                    {item.name}
                  </h3>
                  <span className="text-primary text-lg font-light whitespace-nowrap">${item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.desc}</p>
                <p className="text-primary text-xs tracking-widest uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View Details →
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground text-sm italic font-light">
              Our menu changes seasonally • Allergen information available upon request
            </p>
          </div>
        </div>
      </section>

      {selectedDish && (
        <div className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-500">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-accent/50 border border-border/50">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:rotate-90 transition-transform duration-500"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Dish Image */}
              <div className="relative h-80 lg:h-96">
                <Image
                  src={selectedDish.image || "/placeholder.svg"}
                  alt={selectedDish.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Dish Details */}
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-4xl lg:text-5xl text-foreground font-light">{selectedDish.name}</h3>
                  <span className="text-primary text-3xl font-light">${selectedDish.price}</span>
                </div>

                <div className="w-16 h-px bg-primary mb-8" />

                <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">{selectedDish.fullDesc}</p>

                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4 font-light">Ingredients</h4>
                  <p className="text-muted-foreground text-sm font-light italic">{selectedDish.ingredients}</p>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedDish(null)}
                    className="text-muted-foreground text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-500"
                  >
                    ← Back to Menu
                  </button>
                  <a
                    href="#reservations"
                    onClick={() => setSelectedDish(null)}
                    className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 text-xs tracking-[0.2em] uppercase"
                  >
                    Reserve Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
