"use client"

import React from "react"
import {
  Hero,
  DigitalGrowth,
  WorkWithUsCards,
  BlogSection,
} from "@/components/shared"
import { Services, Partners } from "@/components/service"
import { motion } from "motion/react"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="w-full py-16 md:py-20 bg-[#EBF2FF]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[600px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                color: "#27408E",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Powerful solutions for Africa&apos;s digital future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.75",
                color: "#27408E",
              }}
            >
              We combine cutting-edge technology with deep understanding of
              local challenges to create solutions that truly work for
              Ghanaians.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Services />
      <Partners />
      <DigitalGrowth />
      <BlogSection />
      <WorkWithUsCards />
    </>
  )
}
