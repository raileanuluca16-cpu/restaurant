import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Experience } from "@/components/experience"
import { Story } from "@/components/story"
import { ChefSection } from "@/components/chef-section"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Reservations } from "@/components/reservations"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Story />
      <ChefSection />
      <Menu />
      <Gallery />
      <Reservations />
      <Contact />
    </main>
  )
}
