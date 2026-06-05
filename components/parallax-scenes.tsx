"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const scenes = [
  { image: "/images/hero-forest.png", alt: "Dense forest trekking trail" },
  { image: "/images/hero-mountain-trail.png", alt: "Misty mountain path" },
  { image: "/images/hero-campsite.png", alt: "Mountain campsite" },
  { image: "/images/hero-summit.png", alt: "Mountain summit sunrise" },
]

export function ParallaxScenes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="relative">
      {scenes.map((scene, index) => {
        const SceneImage = ({ src, alt }: { src: string; alt: string }) => {
          const opacity = useTransform(
            scrollYProgress,
            [
              index / scenes.length,
              (index + 0.5) / scenes.length,
              (index + 1) / scenes.length,
            ],
            [0, 1, 0]
          )

          return (
            <motion.div
              style={{ opacity }}
              className="fixed inset-0 -z-10"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                quality={80}
              />
              <div className="absolute inset-0 bg-background/70" />
            </motion.div>
          )
        }

        return <SceneImage key={scene.image} src={scene.image} alt={scene.alt} />
      })}
    </div>
  )
}
