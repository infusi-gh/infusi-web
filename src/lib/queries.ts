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
  image {
    asset-> {
      url
    },
    alt
  }
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
  image {
    asset-> {
      url
    },
    alt
  },
  content[] {
    ...,
    _type == "image" => {
      _type,
      _key,
      asset-> {
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt,
      caption,
      hotspot,
      crop
    },
    _type == "code" => {
      _type,
      _key,
      code,
      language,
      filename
    },
    markDefs[] {
      ...,
      _type == "link" => {
        _key,
        _type,
        href,
        blank
      }
    }
  }
}`

// Type-safe query exports with return types
export type AllBlogsQueryResult = BlogListItem[]
export type SingleBlogQueryResult = BlogDetail | null
