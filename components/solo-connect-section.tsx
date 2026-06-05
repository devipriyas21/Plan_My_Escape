"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, UserPlus, Users, Star, BadgeCheck, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

const connectOptions = [
  {
    icon: User,
    title: "Travel Solo",
    description: "Plan and explore at your own pace with verified safety features.",
  },
  {
    icon: Users,
    title: "Join a Group",
    description: "Connect with organized travel groups heading to your destination.",
  },
  {
    icon: UserPlus,
    title: "Find Companions",
    description: "Match with like-minded travelers for your adventure.",
  },
]

const travelers = [
  {
    name: "Sarah Mitchell",
    avatar: "SM",
    verified: true,
    rating: 4.9,
    trips: 28,
    interests: ["Trekking", "Photography", "Mountains"],
    location: "New York, USA",
  },
  {
    name: "Raj Patel",
    avatar: "RP",
    verified: true,
    rating: 4.8,
    trips: 45,
    interests: ["Adventure", "Camping", "Rivers"],
    location: "Mumbai, India",
  },
  {
    name: "Emma Chen",
    avatar: "EC",
    verified: true,
    rating: 5.0,
    trips: 32,
    interests: ["Nature", "Wildlife", "Solo"],
    location: "Sydney, Australia",
  },
  {
    name: "Marco Silva",
    avatar: "MS",
    verified: true,
    rating: 4.7,
    trips: 19,
    interests: ["Beaches", "Islands", "Diving"],
    location: "Lisbon, Portugal",
  },
]

export function SoloConnectSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  return (
    <section id="connect" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 text-sm font-medium text-primary mb-4">
            Community
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Solo Traveler <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Travel your way — solo adventures, group trips, or find your perfect travel companion.
          </p>
        </motion.div>

        {/* Connect Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {connectOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedOption(selectedOption === index ? null : index)}
                className={`w-full p-8 rounded-2xl text-left transition-all duration-500 ${
                  selectedOption === index
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/25 scale-105"
                    : "bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    selectedOption === index ? "bg-primary-foreground/20" : "bg-primary/20"
                  }`}
                >
                  <option.icon
                    className={`w-7 h-7 ${
                      selectedOption === index ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    selectedOption === index ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {option.title}
                </h3>
                <p
                  className={`text-sm ${
                    selectedOption === index ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {option.description}
                </p>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Traveler Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Featured Verified Travelers
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelers.map((traveler, index) => (
              <motion.div
                key={traveler.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500"
              >
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {traveler.avatar}
                  </div>
                  {traveler.verified && (
                    <div className="absolute bottom-0 right-1/2 translate-x-8 translate-y-1 p-1 rounded-full bg-background">
                      <BadgeCheck className="w-5 h-5 text-primary fill-primary/20" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{traveler.name}</h4>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {traveler.location}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold text-foreground">{traveler.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <span className="font-semibold text-foreground">{traveler.trips}</span>
                    <span className="text-xs text-muted-foreground block">Trips</span>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {traveler.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Connect Button */}
                <button className="w-full py-2.5 rounded-xl bg-muted/50 text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                  <MessageCircle className="w-4 h-4" />
                  Connect
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
