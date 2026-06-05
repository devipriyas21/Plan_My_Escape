import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExploreSection } from "@/components/explore-section"
import { TravelGroupsSection } from "@/components/travel-groups-section"
import { TripPlannerSection } from "@/components/trip-planner-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function PlanMyEscapePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Dense Forest - Hero */}
      <HeroSection />

      {/* Rainy Trail - Destinations */}
      <ExploreSection />

      {/* Mountain Trek - Travel Groups */}
      <TravelGroupsSection />

      {/* Campsite - Trip Planner */}
      <TripPlannerSection />

      {/* Valley - Safety */}
      <SafetySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Summit Sunrise - Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
