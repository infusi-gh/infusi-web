"use client"

import { motion } from "motion/react"
import type { BlogDetail as BlogDetailType } from "@/types/blog.types"
import { PortableTextRenderer } from "@/components/shared"

/**
 * Props for BlogDetail component
 */
interface BlogDetailProps {
  blog: BlogDetailType
}

/**
 * BlogDetail component for displaying full blog content
 * Used on individual blog detail pages
 *
 * @param {BlogDetailProps} props - Component props
 */
export function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl"
    >
      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <PortableTextRenderer
          content={blog.content}
          className="prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-img:rounded-lg prose-img:border prose-img:border-gray-200"
        />
      </motion.div>

      {/* Share Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-t border-gray-200 pt-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              Share this post:
            </span>
          </div>
          <div className="flex gap-3">
            {/* Twitter/X Share */}
            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href)
                const text = encodeURIComponent(blog.title)
                window.open(
                  `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                  "_blank"
                )
              }}
              className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-600"
              aria-label="Share on Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>

            {/* LinkedIn Share */}
            <button
              onClick={() => {
                const url = encodeURIComponent(window.location.href)
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                  "_blank"
                )
              }}
              className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-600"
              aria-label="Share on LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>

            {/* Copy Link */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                // You can add a toast notification here
              }}
              className="inline-flex items-center justify-center rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-gray-200"
              aria-label="Copy link"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}
