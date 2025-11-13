import { allBlogsQuery, singleBlogQuery } from "@/lib/queries"
import { client } from "@/sanity/lib/client"
import { SanityDocument } from "next-sanity"
import { useEffect, useState } from "react"

// export interface BlogPost {
//   _id: string
//   title: string
//   slug: { current: string }
//   mainImage?: { asset: { url: string } }
//   publishedAt: string
//   excerpt?: string
//   body?: any
// }

/** Fetch all blogs */
export const useBlogs = () => {
  const [blogs, setBlogs] = useState<SanityDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("Fetching blogs...")
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(allBlogsQuery as string)
        setBlogs(data)
      } catch (err) {
        console.error(err)
        setError("Failed to fetch blogs")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return { blogs, loading, error }
}

/* Fetch single blog by slug */
export const useBlog = (slug: string | undefined) => {
  const [blog, setBlog] = useState<SanityDocument | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    const fetchBlog = async () => {
      setLoading(true)
      try {
        const data = await client.fetch(singleBlogQuery as string, { slug })
        setBlog(data)
      } catch (err) {
        console.error(err)
        setError("Failed to fetch blog")
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  return { blog, loading, error }
}
