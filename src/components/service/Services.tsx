"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion } from "motion/react"

const servicesData = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Driven by curiosity and creativity, we harness emerging technologies to build meaningful and transformative solutions.",
    imageSrc: "/service/service1.png",
    imageAlt: "Innovation",
    href: "/services/innovation",
  },
  {
    id: 2,
    title: "Sustainability",
    description:
      "We are dedicated to shaping a smarter, greener future with responsible practices.",
    imageSrc: "/service/service2.png",
    imageAlt: "Sustainability",
    href: "/services/software-development",
  },
  {
    id: 3,
    title: "Passion & Excellence",
    description:
      "We are fueled by passion and precision. Continuous improvement drives us.",
    imageSrc: "/service/service3.png",
    imageAlt: "Passion & Excellence",
    href: "/services/ui-ux-design",
  },
  {
    id: 4,
    title: "Team & Collaboration",
    description:
      "Our people are the core of our success. Collaboration fuels growth.",
    imageSrc: "/service/service4.png",
    imageAlt: "Team & Collaboration",
    href: "/services/team&collaboration",
  },
]

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveIndex(index)
            }
          })
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px",
        }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Dot Y positions:
  const dotPositions = [40, 180, 320, 460]

  return (
    <section className="w-full py-20 pb-32 relative overflow-visible">
      <div className="relative w-full mx-auto px-6 md:px-12 lg:px-24 overflow-visible">
        <div className="relative flex justify-center overflow-visible">
          {/* LEFT STEPPER */}
          <div className="sticky top-32 h-[450px] md:h-[500px] lg:h-[550px] w-10 z-40">
            {/* Vertical line */}
            <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-[#4169FF]/30" />

            {/* Moving dot */}
            <motion.div
              className="absolute -left-3 "
              animate={{ top: dotPositions[activeIndex] }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className="w-5 h-5 bg-[#4169FF] rounded-full border-4 border-white shadow-lg" />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col w-full max-w-[1200px] items-center overflow-visible">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={el => {
                  cardRefs.current[index] = el
                }}
                className="min-h-[400px] md:min-h-[500px] lg:min-h-[550px] flex flex-col md:flex-row md:gap-6 lg:gap-10 items-center justify-between w-full overflow-visible"
              >
                {/* Content Box */}
                <div
                  className={`bg-white text-[#27408E] h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl p-6 md:p-10 lg:p-12 space-y-4 md:space-y-6 w-full md:w-[500px] lg:w-[580px] flex flex-col justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  style={{ zIndex: 1 }}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#27408E]/80 leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <Button className="bg-[#27408E] hover:bg-[#354b8f] text-white px-6 py-2 rounded-md">
                      Learn more
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <motion.div
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-auto md:min-w-[450px] lg:min-w-[550px] -mt-16 md:mt-0 md:-ml-16 lg:-ml-20 relative isolate"
                  style={{ zIndex: 100 }}
                >
                  <div
                    className="relative h-[300px] md:h-[450px] lg:h-[500px] w-full md:w-[450px] lg:w-[550px]"
                    style={{ zIndex: 100 }}
                  >
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
