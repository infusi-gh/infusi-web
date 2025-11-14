"use client"

import { useBlogs } from "@/hooks/useBlogs"
import { BlogGrid, BlogGridSkeleton } from "@/components/blog"
import { PageHero } from "@/components/shared"

/**
 * Blog listing page
 * Displays all blog posts in a grid layout
 */
export default function BlogPage() {
  const { blogs, loading, error } = useBlogs()

  return (
    <main className="min-h-screen bg-[#EBF2FF]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-16 text-[#27408E] md:pb-20">
        <PageHero
          subtitle="Our Blog"
          title={
            <>
              Insights and <span className="text-[#6989EC]">Updates</span>
              <br />
              from Our <span className="text-[#6989EC]">Team</span>
            </>
          }
        />
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

      {/* Blog Grid Section */}
      <section className="container mx-auto px-4 py-8">
        {loading && <BlogGridSkeleton count={9} mode="list" />}

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
            <h3 className="mb-3 text-2xl font-bold text-[#27408E]">
              Error Loading Posts
            </h3>
            <p className="text-base text-[#27408E]/70">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <BlogGrid
            blogs={blogs}
            showTitle={false}
            mode="list"
            itemsPerPage={4}
          />
        )}
      </section>
    </main>
  )
}
