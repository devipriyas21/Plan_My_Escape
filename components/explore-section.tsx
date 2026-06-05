"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { MapPin, Clock, Star, Mountain, TreePalm } from "lucide-react"

const destinations = [
  {
    name: "Hampta Pass",
    region: "Himachal Pradesh",
    image: "/images/dest-hampta-pass.png",
    difficulty: "Moderate",
    duration: "5 Days",
    altitude: "14,100 ft",
    rating: 4.9,
    price: "₹12,999",
    tag: "Best Seller",
  },
  {
    name: "Valley of Flowers",
    region: "Uttarakhand",
    image: "/images/dest-valley-flowers.png",
    difficulty: "Easy",
    duration: "6 Days",
    altitude: "14,400 ft",
    rating: 4.8,
    price: "₹14,999",
    tag: "UNESCO Site",
  },
  {
    name: "Munnar",
    region: "Kerala",
    image: "/images/dest-munnar.png",
    difficulty: "Easy",
    duration: "4 Days",
    altitude: "5,200 ft",
    rating: 4.7,
    price: "₹9,999",
    tag: "Tea Trails",
  },
  {
    name: "Coorg",
    region: "Karnataka",
    image: "/images/dest-coorg.png",
    difficulty: "Easy",
    duration: "3 Days",
    altitude: "3,500 ft",
    rating: 4.8,
    price: "₹7,999",
    tag: "Coffee Country",
  },
  {
    name: "Tadiandamol",
    region: "Karnataka",
    image: "/images/dest-tadiandamol.png",
    difficulty: "Moderate",
    duration: "2 Days",
    altitude: "5,735 ft",
    rating: 4.6,
    price: "₹5,499",
    tag: "Weekend Trek",
  },
  {
    name: "Gokarna",
    region: "Karnataka",
    image: "/images/dest-gokarna.png",
    difficulty: "Easy",
    duration: "3 Days",
    altitude: "Sea Level",
    rating: 4.7,
    price: "₹6,999",
    tag: "Beach Trek",
  },
  {
    name: "Coastal Kerala",
    region: "Kerala",
    image: "/images/dest-kerala-coast.png",
    difficulty: "Easy",
    duration: "5 Days",
    altitude: "Sea Level",
    rating: 4.9,
    price: "₹11,999",
    tag: "Backwaters",
  },
  {
    name: "Andaman Islands",
    region: "Andaman & Nicobar",
    image: "/images/dest-andaman.png",
    difficulty: "Easy",
    duration: "6 Days",
    altitude: "Sea Level",
    rating: 4.9,
    price: "₹24,999",
    tag: "Island Paradise",
  },
  {
    name: "Bali",
    region: "Indonesia",
    image: "/images/dest-bali.png",
    difficulty: "Easy",
    duration: "7 Days",
    altitude: "Varies",
    rating: 4.8,
    price: "₹45,999",
    tag: "International",
  },
  {
    name: "Vietnam",
    region: "Southeast Asia",
    image: "/images/dest-vietnam.png",
    difficulty: "Easy",
    duration: "8 Days",
    altitude: "Varies",
    rating: 4.7,
    price: "₹55,999",
    tag: "International",
  },
]

export function ExploreSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="destinations" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Rainy Trail Scene */}
      <div className="absolute inset-0">
        <Image
          src="/images/journey-rain.png"
          alt="Monsoon trail"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
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
            Real Destinations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Handpicked <span className="text-primary">Trails</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From the misty Western Ghats to Himalayan passes, discover trails that tell a story.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["All", "Himalayas", "Western Ghats", "Beaches", "International"].map((filter, i) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      {dest.tag}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs font-medium text-white">{dest.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{dest.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {dest.region}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-primary">{dest.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain className="w-3 h-3" />
                      {dest.altitude}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      dest.difficulty === "Easy" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {dest.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
