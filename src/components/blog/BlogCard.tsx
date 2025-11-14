"use client"

import Image from "next/image"
import Link from "next/link"
import { useNextSanityImage } from "next-sanity-image"
import { motion } from "motion/react"
import type { BlogListItem } from "@/types/blog.types"
import { client } from "@/sanity/lib/client"
import { truncateText } from "@/lib/blog-utils"

/**
 * Props for BlogCard component
 */
interface BlogCardProps {
  blog: BlogListItem
  priority?: boolean
  className?: string
}

/**
 * BlogCard component for displaying blog preview
 * Used in blog listings, homepage, and recommendations
 *
 * @param {BlogCardProps} props - Component props
 */
export function BlogCard({
  blog,
  priority = false,
  className = "",
}: BlogCardProps) {
  const imageProps = useNextSanityImage(client, blog.image)

  // Validate image props and extract only needed props (exclude width/height for fill mode)
  const hasValidImage = imageProps?.src && imageProps.src !== ""
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width, height, ...imagePropsSafe } = imageProps || {}

  // Calculate object position from hotspot if available
  const getObjectPosition = () => {
    if (blog.image?.hotspot) {
      const { x, y } = blog.image.hotspot
      return `${x * 100}% ${y * 100}%`
    }
    return "center"
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col ${className}`}
    >
      {/* Image Container */}
      <Link
        href={`/blog/${blog.slug.current}`}
        className="relative mb-4 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#EBF2FF]"
      >
        {hasValidImage ? (
          <Image
            src={imagePropsSafe.src}
            alt={blog.title}
            fill
            priority={priority}
            style={{ objectPosition: getObjectPosition() }}
            className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-90"
            sizes="128px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <svg
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Title */}
        <Link href={`/blog/${blog.slug.current}`}>
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-[#27408E] transition-colors group-hover:text-blue-600">
            {blog.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
          {truncateText(blog.excerpt, 150)}
        </p>
      </div>
    </motion.article>
  )
}
