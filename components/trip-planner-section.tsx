"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Wallet, MapPin, Clock, Star, ChevronRight, Mountain, Tent } from "lucide-react"
import Image from "next/image"

const categories = ["Himalayan Treks", "Western Ghats", "Beach Trails", "International", "Weekend Escapes"]
const budgetRanges = [
  { label: "Budget", value: "5000", range: "Under ₹5,000" },
  { label: "Mid-Range", value: "15000", range: "₹5,000 - ₹15,000" },
  { label: "Premium", value: "30000", range: "₹15,000 - ₹30,000" },
  { label: "Luxury", value: "50000", range: "₹30,000+" },
]

const sampleTrips = [
  {
    name: "Hampta Pass Trek",
    region: "Himachal Pradesh",
    image: "/images/dest-hampta-pass.png",
    budget: "₹12,999",
    duration: "5 Days",
    highlights: ["Glacier Views", "River Crossing", "High Altitude Camping"],
    bestTime: "June - September",
    rating: 4.9,
    nextBatch: "Dec 15, 2024",
  },
  {
    name: "Coorg Coffee Trail",
    region: "Karnataka",
    image: "/images/dest-coorg.png",
    budget: "₹7,999",
    duration: "3 Days",
    highlights: ["Coffee Plantations", "Abbey Falls", "Raja Seat"],
    bestTime: "October - March",
    rating: 4.8,
    nextBatch: "Dec 22, 2024",
  },
  {
    name: "Valley of Flowers",
    region: "Uttarakhand",
    image: "/images/dest-valley-flowers.png",
    budget: "₹14,999",
    duration: "6 Days",
    highlights: ["UNESCO Site", "Alpine Meadows", "Rare Flowers"],
    bestTime: "July - September",
    rating: 4.9,
    nextBatch: "Jul 10, 2025",
  },
]

export function TripPlannerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedBudget, setSelectedBudget] = useState("15000")
  const [days, setDays] = useState(5)
  const [travelers, setTravelers] = useState(2)
  const [selectedCategory, setSelectedCategory] = useState("Himalayan Treks")

  return (
    <section id="planner" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Campsite Scene */}
      <div className="absolute inset-0">
        <Image
          src="/images/journey-campsite.png"
          alt="Mountain campsite"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-primary mb-4 border border-white/10">
            <Tent className="w-4 h-4 inline mr-2" />
            Smart Planning
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Plan Your <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tell us what you seek, and we&apos;ll craft the perfect trail for your soul.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Planner Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10">
              {/* Budget Selection */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-4">
                  <Wallet className="w-4 h-4 text-primary" />
                  Budget Range
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget.value}
                      onClick={() => setSelectedBudget(budget.value)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        selectedBudget === budget.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                      }`}
                    >
                      <p className="font-semibold text-sm">{budget.label}</p>
                      <p className={`text-xs ${selectedBudget === budget.value ? "text-primary-foreground/80" : "text-white/50"}`}>
                        {budget.range}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Days Slider */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  Duration: <span className="text-primary">{days} Days</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-white/50 mt-2">
                  <span>Weekend</span>
                  <span>2 Weeks</span>
                </div>
              </div>

              {/* Travelers */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-4">
                  <Users className="w-4 h-4 text-primary" />
                  Group Size: <span className="text-primary">{travelers}</span>
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(travelers / 10) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => setTravelers(Math.min(10, travelers + 1))}
                    className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm font-medium text-white mb-4">
                  <Mountain className="w-4 h-4 text-primary" />
                  Trail Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm rounded-full transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30">
                Find My Trail
              </button>
            </div>
          </motion.div>

          {/* Sample Trip Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 space-y-5"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Recommended for You</h3>
            {sampleTrips.map((trip, index) => (
              <motion.div
                key={trip.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative flex gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={trip.image}
                    alt={trip.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{trip.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {trip.region}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium text-foreground">{trip.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Wallet className="w-3 h-3" />
                      {trip.budget}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {trip.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {trip.nextBatch}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {trip.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/70"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
