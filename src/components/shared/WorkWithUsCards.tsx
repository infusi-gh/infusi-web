"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function WorkWithUsCards() {
  return (
    <section className="relative text-white overflow-hidden pt-16 md:pt-20">
      {/* Blue background positioned to start at middle of cards */}
      <div className="absolute inset-0 top-80 md:top-[400px] bg-[#0F4BFF] pointer-events-none"></div>

      {/* Decorative background with curves */}
      <div className="absolute inset-0 top-80 md:top-[400px] pointer-events-none overflow-hidden">
        <svg
          className="absolute left-0 w-full"
          style={{ height: "auto" }}
          viewBox="0 0 1728 713"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <rect y="0.5" width="1728" height="435" fill="#0F4BFF" />
          <path
            d="M-99.6483 610.637C-284.733 540.568 65.875 157.117 254.548 0.5H1401.98C1978.19 312.249 1586.88 577.656 1307.99 712.5H224.119L-99.6483 610.637Z"
            fill="#1843C3"
            fillOpacity="0.2"
            stroke="#0F4BFF"
          />
          <path
            d="M59.8588 610.637C-88.1287 540.568 192.206 157.117 343.063 0.5H1260.51C1721.23 312.249 1408.35 577.656 1185.36 712.5H318.733L59.8588 610.637Z"
            fill="#1843C3"
            fillOpacity="0.3"
            stroke="#0F4BFF"
          />
          <path
            d="M248.998 477.812C139.407 422.997 347.006 123.022 458.722 0.5H1138.13C1479.31 244.382 1247.61 452.011 1082.48 557.5H440.705L248.998 477.812Z"
            fill="#1843C3"
            fillOpacity="0.5"
          />
          <path
            d="M383.853 441.821C303.059 391.139 456.107 113.783 538.467 0.5H1039.34C1290.87 225.992 1120.06 417.966 998.317 515.5H525.184L383.853 441.821Z"
            fill="#133DBD"
            fillOpacity="0.55"
          />
          <path
            d="M478.781 371.552C414.916 328.94 535.896 95.7458 601 0.5H996.932C1195.76 190.089 1060.73 351.495 964.5 433.5H590.5L478.781 371.552Z"
            fill="#133DBD"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Join as a Client Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="flex flex-col"
          >
            <div className="relative w-full h-64 md:h-80 rounded-t-3xl overflow-hidden bg-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/hero/client.png"
                  alt="Join as a Client"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="bg-white rounded-b-3xl p-6 md:p-8 flex flex-col grow shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#27408E]">
                Join as a Client
              </h3>
              <p className="text-base md:text-lg mb-6 grow text-[#27408E]">
                Lorem ipsum dolor sit amet consectetur. Volutpat.
              </p>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-[#0F4BFF] text-white hover:bg-[#0F4BFF]/90 px-8 py-6 text-lg font-semibold transition-colors"
                  >
                    <Link href="/contact">Join us</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Join team Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="flex flex-col"
          >
            <div className="relative w-full h-64 md:h-80 rounded-t-3xl overflow-hidden bg-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/hero/team.png"
                  alt="Join team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="bg-white rounded-b-3xl p-6 md:p-8 flex flex-col grow shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#27408E]">
                Join team
              </h3>
              <p className="text-base md:text-lg mb-6 grow text-[#27408E]">
                Lorem ipsum dolor sit amet consectetur. Volutpat.
              </p>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-[#0F4BFF] text-white hover:bg-[#0F4BFF]/90 px-8 py-6 text-lg font-semibold transition-colors"
                  >
                    <Link href="/contact">Join the team</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
