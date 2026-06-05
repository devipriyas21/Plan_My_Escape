"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Shield, Phone, BadgeCheck, Star, HeartHandshake, Users, AlertTriangle, Lock } from "lucide-react"

const safetyFeatures = [
  {
    icon: BadgeCheck,
    title: "Government ID Verification",
    description: "All travelers verify identity with official government-issued ID before joining any trip.",
  },
  {
    icon: Phone,
    title: "Phone Verification",
    description: "Two-factor authentication ensures every account is tied to a verified phone number.",
  },
  {
    icon: Shield,
    title: "Verified Traveler Badge",
    description: "Earn your verified badge after completing identity and background checks.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Transparent rating system from real travelers helps you choose companions wisely.",
  },
  {
    icon: HeartHandshake,
    title: "Emergency Support",
    description: "24/7 emergency support line and real-time location sharing with trusted contacts.",
  },
  {
    icon: Users,
    title: "Women-Only Groups",
    description: "Dedicated travel groups exclusively for women travelers with verified female companions.",
  },
  {
    icon: AlertTriangle,
    title: "Report & Block",
    description: "Instantly report suspicious behavior and block users with our zero-tolerance policy.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "All transactions are encrypted and protected with industry-leading security standards.",
  },
]

export function SafetySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="safety" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background - Valley Scene */}
      <div className="absolute inset-0">
        <Image
          src="/images/journey-valley.png"
          alt="Valley of Flowers"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/70" />
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
            Your Safety First
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Trust & <span className="text-primary">Security</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We take traveler safety seriously. Our multi-layer verification system ensures you travel with peace of mind.
          </p>
        </motion.div>

        {/* Safety Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              15,000+ Verified Travelers
            </h3>
          </div>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Join our community of verified travelers who prioritize safety and trust in every journey.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30">
            Get Verified Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
