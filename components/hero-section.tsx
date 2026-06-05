"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Compass } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax - Dense Forest */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/journey-forest.png"
          alt="Dense forest trail in Western Ghats"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/90 font-medium">Curated Adventure Experiences</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-white drop-shadow-lg">Plan Your</span>
            <br />
            <span className="text-primary drop-shadow-lg">Perfect</span>
            <span className="text-white drop-shadow-lg"> Escape!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Authentic treks, hidden trails, and unforgettable journeys through the most breathtaking landscapes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#destinations"
              className="group px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore Destinations
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </span>
            </Link>
            <Link
              href="#groups"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Find Your Group
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mt-20"
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white">200+</p>
              <p className="text-sm text-white/60 mt-1">Curated Trails</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white">15K+</p>
              <p className="text-sm text-white/60 mt-1">Adventurers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white">4.9</p>
              <p className="text-sm text-white/60 mt-1">Average Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-white/50 uppercase tracking-[0.2em] font-medium">Begin the Journey</span>
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
