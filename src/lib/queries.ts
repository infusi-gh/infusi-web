import { groq } from "next-sanity"
import type { BlogListItem, BlogDetail } from "@/types/blog.types"

/**
 * Query all blogs with basic information (for listing pages)
 * Returns an array of BlogListItem
 */
export const allBlogsQuery = groq`*[
  _type == "blog"
  && defined(slug.current)
] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  categories,
  image
}`

/**
 * Query a single blog by slug with full content including inline images
 * Returns a single BlogDetail object
 */
export const singleBlogQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  categories,
  image,
  content
}`

// Type-safe query exports with return types
export type AllBlogsQueryResult = BlogListItem[]
export type SingleBlogQueryResult = BlogDetail | null
