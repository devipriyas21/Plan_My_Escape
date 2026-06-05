"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ananya Krishnan",
    location: "Bangalore, India",
    avatar: "AK",
    rating: 5,
    text: "The Hampta Pass trek was life-changing. The women-only group made me feel safe, and the trail leaders were incredibly experienced. Already planning my next adventure!",
    trip: "Hampta Pass Trek",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai, India",
    avatar: "RM",
    rating: 5,
    text: "As a working professional, the weekend escapes to Coorg were perfect. Great coffee, better trails, and amazing people. This platform gets what travelers need.",
    trip: "Coorg Coffee Trail",
  },
  {
    name: "Sophie Chen",
    location: "Singapore",
    avatar: "SC",
    rating: 5,
    text: "Explored Valley of Flowers with a fantastic mixed group. The verification system gave me confidence, and the itinerary was perfectly paced. Worth every rupee!",
    trip: "Valley of Flowers",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
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
            Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Traveler <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our community of adventurers who found their perfect escape.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-6" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/90 leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Trip Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
                  {testimonial.trip}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
