"use client"

import Link from "next/link"
import { BlogGrid, BlogGridSkeleton } from "@/components/blog"
import { useBlogs } from "@/hooks/useBlogs"

/**
 * Blog section for homepage
 * Displays latest blog posts with link to full blog page
 */
export default function BlogSection() {
  const { blogs, loading, error } = useBlogs()

  if (loading) {
    return (
      <section className="w-full bg-[#EBF2FF] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-2 text-4xl font-bold text-gray-900">
                Latest from Our Blog
              </h2>
              <p className="text-lg text-gray-600">
                Insights, tutorials, and updates from our team
              </p>
            </div>
          </div>

          {/* Skeleton Grid */}
          <BlogGridSkeleton count={5} mode="grid" />
        </div>
      </section>
    )
  }

  if (error || blogs.length === 0) {
    return null
  }

  return (
    <section className="w-full bg-[#EBF2FF] py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="mb-2 text-4xl font-bold text-gray-900">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600">
              Insights, tutorials, and updates from our team
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg bg-[#0F4BFF] text-white hover:bg-[#0F4BFF]/90 px-4 py-2 text-lg font-semibold"
          >
            View All Posts
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <BlogGrid
          blogs={blogs}
          showTitle={false}
          mode="grid"
          itemsPerPage={5}
        />
      </div>
    </section>
  )
}
