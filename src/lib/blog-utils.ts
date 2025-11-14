import type { PortableTextBlock } from "next-sanity"

/**
 * Calculate estimated reading time for blog content
 * @param content - Portable Text content blocks
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(content: PortableTextBlock[]): number {
  // Average reading speed is 200-250 words per minute
  const wordsPerMinute = 225

  // Extract text from all blocks
  const text = content
    .map(block => {
      if (block._type === "block" && "children" in block) {
        return (block.children as Array<{ text?: string }>)
          .map(child => child.text || "")
          .join(" ")
      }
      return ""
    })
    .join(" ")

  // Count words
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length

  // Calculate reading time (minimum 1 minute)
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

/**
 * Format date to readable string
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Format date to relative time (e.g., "2 days ago")
 * @param dateString - ISO date string
 * @returns Relative time string
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  }

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds)
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`
    }
  }

  return "Just now"
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

/**
 * Generate slug from title
 * @param title - Blog title
 * @returns URL-friendly slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}
