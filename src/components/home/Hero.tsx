"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import { Avatar, AvatarImage } from "../ui/avatar"
import { motion } from "motion/react"

function Hero() {
  return (
    <main className="relative bg-[#0D193E] text-white min-h-[95vh] w-full flex justify-center    overflow-hidden ">
      {/* Animated SVG Vector 1 - Draws Left to Right */}
      <motion.div
        className="absolute -top-10 h-full inset-0 z-0 overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Image src="/hero/vector-1.svg" alt="Background curve" fill />
      </motion.div>

      <motion.div
        className="absolute top-30 h-full inset-1 z-0 overflow-hidden"
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Image src="/hero/vector-2.svg" alt="Background curve" fill />
      </motion.div>
      <div className="section-padding w-full flex items-center justify-center gap-10 px-6 sm:px-10 md:px-16 lg:px-24 z-10">
        {/* --- Text Section --- */}
        <div className="space-y-6 text-left w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[726px]">
          <div className="relative w-full space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium leading-tight lg:leading-[73px]"
            >
              Powerful solutions for Africa&apos;s digital future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-light leading-relaxed lg:leading-[25px] text-gray-300"
            >
              We build mobile apps and web platforms that solve real problems
              for Ghanaians. Technology that&apos;s practical, powerful, and
              makes a difference.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6 mt-12 sm:mt-16"
          >
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base h-auto transition-colors"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-3 text-base h-auto transition-colors"
                >
                  <Link href="/solutions">See Our Work</Link>
                </Button>
              </motion.div>
            </div>

            {/* Client Avatars */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-start pb-5">
              <motion.div
                className="flex -space-x-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.6,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[1, 2, 3, 4].map(num => (
                  <motion.div
                    key={num}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <Avatar>
                      <AvatarImage
                        src={`/hero/client-${num}.jpg`}
                        alt={`client ${num}`}
                      />
                    </Avatar>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="text-xs sm:text-sm text-nowrap mt-2 sm:mt-0"
              >
                500+ projects delivered across Africa
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Hero
