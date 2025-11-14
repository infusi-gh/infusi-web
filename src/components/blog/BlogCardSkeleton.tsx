"use client"

import { SectionSeparator } from "@/components/shared"

/**
 * Skeleton loader for blog cards - Grid View
 * Used during loading states to provide better UX
 */
export function BlogCardSkeleton() {
  return (
    <article className="flex flex-col">
      {/* Image skeleton - small square */}
      <div className="relative mb-4 h-32 w-32 animate-pulse rounded-lg bg-gray-300" />

      {/* Content skeleton */}
      <div className="flex flex-1 flex-col">
        {/* Title skeleton */}
        <div className="mb-3 space-y-2">
          <div className="h-6 w-full animate-pulse rounded bg-gray-300" />
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300" />
        </div>

        {/* Excerpt skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </article>
  )
}

/**
 * Skeleton loader for blog cards - List View
 * Horizontal layout with image on right
 */
export function BlogCardListSkeleton() {
  return (
    <article className="flex flex-row gap-4 py-8">
      {/* Content skeleton - left side */}
      <div className="flex flex-1 flex-col justify-center">
        {/* Title skeleton */}
        <div className="mb-3 space-y-2">
          <div className="h-6 w-full animate-pulse rounded bg-gray-300 md:h-7 lg:h-8" />
          <div className="h-6 w-4/5 animate-pulse rounded bg-gray-300 md:h-7 lg:h-8" />
        </div>

        {/* Excerpt skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-300 md:block" />
          <div className="hidden h-4 w-3/4 animate-pulse rounded bg-gray-300 md:block" />
        </div>

        {/* Meta information skeleton */}
        <div className="h-3 w-20 animate-pulse rounded bg-gray-300 md:h-4 md:w-24" />
      </div>

      {/* Image skeleton - right side - Always on Right */}
      <div className="relative h-32 w-32 shrink-0 animate-pulse rounded-lg bg-gray-300 md:h-40 md:w-48 lg:h-40 lg:w-56" />
    </article>
  )
}

/**
 * Grid of skeleton blog cards
 * @param count - Number of skeleton cards to display
 * @param mode - Display mode: grid or list
 */
interface BlogGridSkeletonProps {
  count?: number
  mode?: "grid" | "list"
}

export function BlogGridSkeleton({
  count = 5,
  mode = "grid",
}: BlogGridSkeletonProps) {
  // Grid mode
  if (mode === "grid") {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  // List mode
  return (
    <div className="space-y-0">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          <BlogCardListSkeleton />
          {index < count - 1 && <SectionSeparator />}
        </div>
      ))}
    </div>
  )
}

/**
 * Skeleton loader for blog detail page
 * Used while loading individual blog content
 */
export function BlogDetailSkeleton() {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Excerpt skeleton */}
      <div className="mb-8 space-y-2">
        <div className="h-6 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-6 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300" />
      </div>

      {/* Featured Image Skeleton */}
      <div className="mb-12">
        <div className="relative aspect-video w-full animate-pulse rounded-2xl bg-gray-300" />
      </div>

      {/* Content Skeleton */}
      <div className="mb-12 space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300" />
        <div className="mt-6 h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-gray-300" />
        <div className="mt-6 h-8 w-2/3 animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300" />
      </div>

      {/* Share Section Skeleton */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-300" />
          <div className="flex gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </article>
  )
}
