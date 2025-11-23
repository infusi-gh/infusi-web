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
        { threshold: 1 }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Dot Y positions (top / middle / lower / bottom)
  const dotPositions = [40, 180, 320, 460]

  return (
    <section className="w-full py-20 relative">
      <div className="section-padding w-full mx-auto relative">
        <div className="relative flex">
          {/* LEFT STEPPER */}
          <div className="sticky top-32 h-[500px] w-[40px] z-40">
            <div className="absolute left-8.5 top-0 bottom-0 w-[2px] bg-[#4169FF]/30" />

            <motion.div
              className="absolute left-6"
              animate={{ top: dotPositions[activeIndex] }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className="w-5 h-5 bg-[#4169FF] rounded-full border-4 border-white shadow-lg" />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col w-full">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={el => {
                  cardRefs.current[index] = el
                }}
                className="min-h-[450px] flex flex-col md:flex-row md:gap-10 items-center"
              >
                <div
                  className={`bg-white text-[#27408E] h-[450px] rounded-2xl p-14 shadow-lg space-y-8 md:w-[650px] flex flex-col justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <h3 className="text-6xl font-bold">{service.title}</h3>
                  <p className="text-[#27408E]/80 leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <Button className="bg-[#27408E] hover:bg-[#354b8f] text-white px-6 py-2 rounded-md">
                      Learn more
                    </Button>
                  </Link>
                </div>

                <motion.div
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:min-w-[350px] -mt-20 md:-mt-0 md:-ml-20"
                >
                  <div className="relative h-[300px] md:min-h-[400px] min-w-[550px]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover rounded-xl"
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
