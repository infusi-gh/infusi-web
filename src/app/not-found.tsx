"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Image from "next/image"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <Image
          src="/404.svg"
          alt="Page not found"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />

        <h1 className="text-5xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
