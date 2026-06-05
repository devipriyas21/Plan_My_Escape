"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mountain } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image - Summit Sunrise */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/journey-summit.png"
          alt="Summit sunrise view"
          fill
          className="object-cover"
          quality={95}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
          >
            <Mountain className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            Every Summit Starts With{" "}
            <span className="text-primary">A Single Step</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty">
            The trails are calling. The mountains await. Your story is yet to be written.
          </p>

          {/* CTA Button */}
          <Link
            href="#destinations"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              200+ Curated Trails
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              15K+ Adventurers
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              24/7 Trail Support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
