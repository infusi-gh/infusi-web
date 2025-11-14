"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import {
  BlogDetail,
  BlogRecommendations,
  BlogDetailSkeleton,
} from "@/components/blog"
import { useBlog, useBlogs } from "@/hooks/useBlogs"
import { client } from "@/sanity/lib/client"

/**
 * Blog detail page
 * Displays full blog content with recommendations
 */
export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const { blog, loading, error } = useBlog(slug)
  const { blogs: allBlogs } = useBlogs()

  // Get image props for background (must call hook unconditionally)
  const imageProps = useNextSanityImage(client, blog?.image || null)
  const hasValidImage = blog && imageProps?.src && imageProps.src !== ""

  return (
    <main className="min-h-screen bg-[#EBF2FF]">
      {/* Hero Section - Always visible */}
      <section className="relative overflow-hidden bg-background pb-16 text-[#27408E] md:pb-20">
        {/* Featured Image Background - only when blog exists */}
        {!loading && !error && hasValidImage && imageProps && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={imageProps.src}
                alt={blog?.title || "Blog post"}
                fill
                priority
                className="object-contain opacity-25"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 z-1 bg-background/75" />
          </>
        )}

        {/* Background vectors */}
        <div className="absolute -top-10 inset-0 z-2 h-full overflow-hidden">
          <Image src="/hero/vector-1.svg" alt="Background curve" fill />
        </div>
        <div className="absolute top-30 inset-1 z-2 h-full overflow-hidden">
          <Image src="/hero/vector-2.svg" alt="Background curve" fill />
        </div>

        {/* Title and Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 text-center md:pt-32">
          <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            {!loading && blog ? blog.title : "Blog Post"}
          </h1>
        </div>

        {/* Metadata and Categories - only when blog exists */}
        {!loading && !error && blog && (
          <div className="relative z-10 mx-auto mb-10 flex max-w-4xl flex-col items-center gap-4 px-6">
            {/* Date and Read Time */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#27408E]">
              <div className="flex items-center gap-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime={blog.publishedAt} className="font-medium">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </time>
              </div>

              <span className="text-[#27408E]/40">•</span>

              <div className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">
                  {Math.ceil(
                    blog.content.reduce((acc, block) => {
                      if (block._type === "block" && block.children) {
                        return (
                          acc +
                          block.children.reduce(
                            (a, child) =>
                              a + (child.text?.split(" ").length || 0),
                            0
                          )
                        )
                      }
                      return acc
                    }, 0) / 200
                  )}{" "}
                  min read
                </span>
              </div>
            </div>

            {/* Categories */}
            {blog.categories && blog.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {blog.categories.slice(0, 5).map(category => (
                  <span
                    key={category}
                    className="text-sm font-medium text-[#6989EC]"
                  >
                    #{category}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <svg
          className="absolute -bottom-px left-0 h-28 w-full md:h-40"
          viewBox="0 0 1729 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M1729 0.768C817.5 403.864 530.5 259.901 -2 197.081V400H1729V0.768Z"
            fill="#EBF2FF"
          />
        </svg>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {loading && <BlogDetailSkeleton />}

        {error && (
          <div className="mx-auto max-w-md bg-[#EBF2FF] p-12 text-center">
            <svg
              className="mx-auto mb-6 h-16 w-16 text-red-500/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mb-3 text-2xl font-bold text-[#27408E]">
              Error Loading Post
            </h2>
            <p className="mb-8 text-base text-[#27408E]/70">{error}</p>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-[#0F4BFF] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0F4BFF]/90"
            >
              Back to Blog
            </Link>
          </div>
        )}

        {!loading && !error && !blog && (
          <div className="mx-auto max-w-md bg-[#EBF2FF] p-12 text-center">
            <svg
              className="mx-auto mb-6 h-16 w-16 text-[#27408E]/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mb-3 text-2xl font-bold text-[#27408E]">
              Post Not Found
            </h2>
            <p className="mb-8 text-base text-[#27408E]/70">
              The post you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-[#0F4BFF] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0F4BFF]/90"
            >
              Back to Blog
            </Link>
          </div>
        )}

        {!loading && !error && blog && (
          <>
            <BlogDetail blog={blog} />

            {allBlogs.length > 1 && (
              <div className="mt-16">
                <BlogRecommendations
                  blogs={allBlogs}
                  currentBlogId={blog._id}
                  title="You Might Also Like"
                  limit={5}
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
