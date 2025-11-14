"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { BlogCard } from "./BlogCard"
import { BlogCardList } from "./BlogCardList"
import { BlogPagination } from "./BlogPagination"
import { SectionSeparator } from "@/components/shared"
import type { BlogListItem } from "@/types/blog.types"

/**
 * Props for BlogGrid component
 */
interface BlogGridProps {
  blogs: BlogListItem[]
  title?: string
  showTitle?: boolean
  columns?: 2 | 3 | 4
  className?: string
  mode?: "grid" | "list"
  itemsPerPage?: number
  showPagination?: boolean
}

/**
 * BlogGrid component for displaying multiple blogs in grid or list layout
 * Used on blog listing pages and homepage sections
 *
 * @param {BlogGridProps} props - Component props
 */
export function BlogGrid({
  blogs,
  title = "Latest Posts",
  showTitle = true,
  columns = 3, // eslint-disable-line @typescript-eslint/no-unused-vars
  className = "",
  mode = "grid",
  itemsPerPage = mode === "grid" ? 5 : 4,
  showPagination = true,
}: BlogGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [responsiveItemsPerPage, setResponsiveItemsPerPage] =
    useState(itemsPerPage)

  // Adjust items per page based on screen size for grid mode
  useEffect(() => {
    if (mode !== "grid") {
      setResponsiveItemsPerPage(itemsPerPage)
      return
    }

    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        // Large screens: 5 items
        setResponsiveItemsPerPage(5)
      } else if (window.innerWidth >= 768) {
        // Medium screens: 3 items
        setResponsiveItemsPerPage(3)
      } else {
        // Small screens: 1 item
        setResponsiveItemsPerPage(1)
      }
      // Reset to first page when items per page changes
      setCurrentPage(1)
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [mode, itemsPerPage])

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / responsiveItemsPerPage)
  const startIndex = (currentPage - 1) * responsiveItemsPerPage
  const endIndex = startIndex + responsiveItemsPerPage
  const currentBlogs = blogs.slice(startIndex, endIndex)

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

  if (blogs.length === 0) {
    return (
      <div className="bg-[#EBF2FF] p-16 text-center">
        <svg
          className="mx-auto h-16 w-16 text-[#27408E]/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-6 text-2xl font-bold text-[#27408E]">No posts yet</h3>
        <p className="mt-3 text-base text-[#27408E]/70">
          Check back soon for new content!
        </p>
      </div>
    )
  }

  return (
    <section className={className}>
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </motion.div>
      )}

      {/* Grid View */}
      {mode === "grid" && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {currentBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <BlogCard blog={blog} priority={index < 5} />
            </motion.div>
          ))}
        </div>
      )}

      {/* List View */}
      {mode === "list" && (
        <div className="space-y-0">
          {currentBlogs.map((blog, index) => (
            <div key={blog._id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="py-8"
              >
                <BlogCardList blog={blog} priority={index < 3} />
              </motion.div>
              {index < currentBlogs.length - 1 && <SectionSeparator />}
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {showPagination && blogs.length > 0 && (
        <BlogPagination
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          onPrevious={handlePrevious}
          onNext={handleNext}
          align={mode === "grid" ? "right" : "center"}
        />
      )}
    </section>
  )
}
