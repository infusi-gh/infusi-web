"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion, useScroll, useTransform } from "motion/react"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  // Map scroll progress to an index (0 → 3)
  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, servicesData.length - 1]
  )

  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position → convert to integer index
  useEffect(() => {
    return currentIndex.on("change", v => {
      const rounded = Math.round(v)
      setActiveIndex(rounded)
    })
  }, [])

  return (
    <section className="w-full py-16 relative">
      <div className="section-padding w-full mx-auto  relative">
        {/* Scroll container — only one service per page */}
        <div className="h-fit relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-2.5 top-5 bottom-5 w-[2px] bg-[#4169FF]/30" />

          {/* Moving Dot */}
          <motion.div
            className="absolute left-0 z-50"
            animate={{
              top: activeIndex * 110 + 50, // moves to each step
            }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <div className="w-5 h-5 bg-[#4169FF] rounded-full border-4 border-white shadow-lg" />
          </motion.div>
          <div
            ref={containerRef}
            className="relative z-10 h-[520px] overflow-y-scroll overflow-x-nos snap-y snap-mandatory "
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                className="snap-start h-[410px] flex flex-col md:flex-row md:gap-10 justify-start items-center  relative"
                style={{
                  opacity: activeIndex === index ? 1 : 0.2,
                  scale: activeIndex === index ? 1 : 0.95,
                  transition: "all 0.4s ease",
                }}
              >
                {/* Content Box */}
                <div className="bg-white text-[#27408E] h-[400px] rounded-2xl p-14 shadow-lg space-y-8 md:w-[600px] flex flex-col justify-center relative z-10">
                  <h3 className="text-5xl font-bold">{service.title}</h3>
                  <p className="text-[#27408E]/80 leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <Button className="bg-[#27408E] hover:bg-[#354b8f] text-white px-6 py-2 rounded-md">
                      Learn more
                    </Button>
                  </Link>
                </div>

                {/* Image Box overlapping the card */}
                <motion.div
                  animate={{ opacity: activeIndex === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="md:min-w-[350px] -mt-20 md:-mt-0 md:-ml-20 z-20"
                >
                  <div className="relative h-[300px] md:min-h-[400px]  flex min-w-[550px]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
