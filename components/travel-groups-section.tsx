"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { 
  Users, UserPlus, User, Heart, Briefcase, GraduationCap, Backpack, 
  UsersRound, Star, BadgeCheck, MapPin, Calendar, ChevronRight,
  Filter, SlidersHorizontal
} from "lucide-react"

const groupCategories = [
  { id: "women", label: "Women Only", icon: Heart, color: "text-pink-400", bg: "bg-pink-500/20" },
  { id: "men", label: "Men Only", icon: User, color: "text-blue-400", bg: "bg-blue-500/20" },
  { id: "students", label: "Students Only", icon: GraduationCap, color: "text-violet-400", bg: "bg-violet-500/20" },
  { id: "professionals", label: "Working Professionals", icon: Briefcase, color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { id: "family", label: "Family Friendly", icon: UsersRound, color: "text-amber-400", bg: "bg-amber-500/20" },
  { id: "backpackers", label: "Backpackers", icon: Backpack, color: "text-orange-400", bg: "bg-orange-500/20" },
  { id: "mixed", label: "Mixed Groups", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/20" },
]

const ageFilters = ["18-25", "26-35", "36-45", "46-55", "55+"]
const interestFilters = ["Photography", "Solo Travel", "Adventure Sports", "Cultural", "Wildlife", "Camping", "Trekking", "Beach"]

const upcomingTrips = [
  {
    destination: "Hampta Pass",
    image: "/images/dest-hampta-pass.png",
    date: "Dec 15-20, 2024",
    groupType: "Mixed Groups",
    spotsLeft: 4,
    totalSpots: 12,
    price: "₹12,999",
    leader: { name: "Arjun Sharma", rating: 4.9, trips: 85 },
  },
  {
    destination: "Valley of Flowers",
    image: "/images/dest-valley-flowers.png",
    date: "Jan 5-11, 2025",
    groupType: "Women Only",
    spotsLeft: 6,
    totalSpots: 15,
    price: "₹14,999",
    leader: { name: "Priya Menon", rating: 5.0, trips: 62 },
  },
  {
    destination: "Gokarna Beach Trek",
    image: "/images/dest-gokarna.png",
    date: "Dec 22-24, 2024",
    groupType: "Students Only",
    spotsLeft: 8,
    totalSpots: 20,
    price: "₹5,499",
    leader: { name: "Vikram Reddy", rating: 4.8, trips: 45 },
  },
  {
    destination: "Coorg Coffee Trail",
    image: "/images/dest-coorg.png",
    date: "Dec 28-30, 2024",
    groupType: "Working Professionals",
    spotsLeft: 3,
    totalSpots: 10,
    price: "₹7,999",
    leader: { name: "Sneha Iyer", rating: 4.9, trips: 38 },
  },
]

export function TravelGroupsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("mixed")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedAges, setSelectedAges] = useState<string[]>([])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  return (
    <section id="groups" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Mountain Trek Scene */}
      <div className="absolute inset-0">
        <Image
          src="/images/journey-mountain.png"
          alt="Mountain trek"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-primary mb-4 border border-white/10">
            Find Your Tribe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Travel <span className="text-primary">Groups</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join curated groups based on your preferences. Safe, verified, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Group Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {groupCategories.map((category) => {
              const Icon = category.icon
              const isSelected = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : `bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 hover:bg-white/20`
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "" : category.color}`} />
                  {category.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Advanced Filters Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mx-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Advanced Filters
            <ChevronRight className={`w-4 h-4 transition-transform ${showFilters ? "rotate-90" : ""}`} />
          </button>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-white/10 max-w-3xl mx-auto"
            >
              {/* Age Filters */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Age Group
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ageFilters.map((age) => (
                    <button
                      key={age}
                      onClick={() => setSelectedAges(
                        selectedAges.includes(age)
                          ? selectedAges.filter(a => a !== age)
                          : [...selectedAges, age]
                      )}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        selectedAges.includes(age)
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Filters */}
              <div>
                <h4 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interestFilters.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => setSelectedInterests(
                        selectedInterests.includes(interest)
                          ? selectedInterests.filter(i => i !== interest)
                          : [...selectedInterests, interest]
                      )}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        selectedInterests.includes(interest)
                          ? "bg-primary text-primary-foreground"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Upcoming Group Trips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Upcoming Group Trips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={trip.destination}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden bg-card/60 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.destination}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Group Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white">
                        {trip.groupType}
                      </span>
                    </div>

                    {/* Spots */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between text-xs text-white/90 mb-1">
                        <span>{trip.spotsLeft} spots left</span>
                        <span>{trip.totalSpots} total</span>
                      </div>
                      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${((trip.totalSpots - trip.spotsLeft) / trip.totalSpots) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{trip.destination}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {trip.date}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-primary">{trip.price}</p>
                    </div>

                    {/* Trip Leader */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {trip.leader.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-medium text-foreground truncate">{trip.leader.name}</p>
                          <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-primary text-primary" />
                            {trip.leader.rating}
                          </span>
                          <span>|</span>
                          <span>{trip.leader.trips} trips</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
