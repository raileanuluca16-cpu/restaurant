"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-restaurant-cinematic-ambiance-dark-elegant-.jpg"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div
        className={`relative z-10 container mx-auto px-6 text-center transition-all duration-[2000ms] ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Tagline Left */}
        <div
          className={`absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground text-xs tracking-[0.3em] uppercase hidden md:block transition-all duration-[2500ms] delay-300 ${
            isLoaded ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          Fine Dining Excellence
        </div>

        {/* Main Heading */}
        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-wider leading-[0.95] mb-4">
          FLAVORS
          <br />
          THAT STAY
        </h1>

        {/* Tagline Right */}
        <div
          className={`absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground text-xs tracking-[0.3em] uppercase hidden md:block transition-all duration-[2500ms] delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          Established 2015
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  )
}
