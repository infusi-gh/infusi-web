"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { BlogCard } from "./BlogCard"
import { BlogPagination } from "./BlogPagination"
import type { BlogListItem } from "@/types/blog.types"

/**
 * Props for BlogRecommendations component
 */
interface BlogRecommendationsProps {
  blogs: BlogListItem[]
  currentBlogId: string
  title?: string
  limit?: number
}

/**
 * BlogRecommendations component for displaying related/recommended blogs
 * Used at the end of blog detail pages
 *
 * @param {BlogRecommendationsProps} props - Component props
 */
export function BlogRecommendations({
  blogs,
  currentBlogId,
  title = "Related Posts",
  limit = 5,
}: BlogRecommendationsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [responsiveLimit, setResponsiveLimit] = useState(limit)

  // Filter out the current blog
  const allRecommendations = blogs.filter(blog => blog._id !== currentBlogId)

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth >= 1024) {
        // Large screens: 5 items
        setResponsiveLimit(5)
      } else if (window.innerWidth >= 768) {
        // Medium screens: 3 items
        setResponsiveLimit(3)
      } else {
        // Small screens: 1 item
        setResponsiveLimit(1)
      }
      // Reset to first page when items per page changes
      setCurrentPage(1)
    }

    updateLimit()
    window.addEventListener("resize", updateLimit)
    return () => window.removeEventListener("resize", updateLimit)
  }, [])

  if (allRecommendations.length === 0) {
    return null
  }

  // Calculate pagination
  const totalPages = Math.ceil(allRecommendations.length / responsiveLimit)
  const startIndex = (currentPage - 1) * responsiveLimit
  const endIndex = startIndex + responsiveLimit
  const currentBlogs = allRecommendations.slice(startIndex, endIndex)

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNext = () => {
    if (canGoNext) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section className="border-t border-gray-200 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">
            Continue reading with these related posts
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {currentBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {allRecommendations.length > 0 && (
          <BlogPagination
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            onPrevious={handlePrevious}
            onNext={handleNext}
            align="right"
          />
        )}
      </motion.div>
    </section>
  )
}
