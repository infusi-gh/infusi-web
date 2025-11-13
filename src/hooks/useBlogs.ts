import {
  allBlogsQuery,
  singleBlogQuery,
  type AllBlogsQueryResult,
  type SingleBlogQueryResult,
} from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import type { BlogListItem, BlogDetail } from "@/types/blog.types"
import { useEffect, useState } from "react"

/**
 * Hook return type for useBlogs
 */
interface UseBlogsReturn {
  blogs: BlogListItem[]
  loading: boolean
  error: string | null
}

/**
 * Hook return type for useBlog
 */
interface UseBlogReturn {
  blog: BlogDetail | null
  loading: boolean
  error: string | null
}

/**
 * Fetch all blogs
 * @returns {UseBlogsReturn} Object containing blogs array, loading state, and error state
 */
export const useBlogs = (): UseBlogsReturn => {
  const [blogs, setBlogs] = useState<BlogListItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("Fetching blogs...")
    const fetchBlogs = async (): Promise<void> => {
      try {
        const data = await client.fetch<AllBlogsQueryResult>(allBlogsQuery)
        setBlogs(data)
      } catch (err) {
        console.error("Error fetching blogs:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch blogs")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return { blogs, loading, error }
}

/**
 * Fetch single blog by slug
 * @param {string | undefined} slug - The blog slug to fetch
 * @returns {UseBlogReturn} Object containing blog object, loading state, and error state
 */
export const useBlog = (slug: string | undefined): UseBlogReturn => {
  const [blog, setBlog] = useState<BlogDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    const fetchBlog = async (): Promise<void> => {
      setLoading(true)
      try {
        const data = await client.fetch<SingleBlogQueryResult>(
          singleBlogQuery,
          { slug }
        )
        setBlog(data)
      } catch (err) {
        console.error(`Error fetching blog with slug "${slug}":`, err)
        setError(err instanceof Error ? err.message : "Failed to fetch blog")
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  return { blog, loading, error }
}
