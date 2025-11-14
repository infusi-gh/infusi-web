"use client"

/**
 * Props for BlogPagination component
 */
interface BlogPaginationProps {
  canGoPrevious: boolean
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
  align?: "left" | "center" | "right"
}

/**
 * BlogPagination component for navigation between pages
 * Clean design with just text and icons, no background
 *
 * @param {BlogPaginationProps} props - Component props
 */
export function BlogPagination({
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
  align = "right",
}: BlogPaginationProps) {
  const alignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align]

  return (
    <div className={`mt-12 flex gap-8 ${alignmentClass}`}>
      {/* Back Button */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`inline-flex items-center gap-2 text-lg font-semibold transition-colors ${
          canGoPrevious
            ? "text-[#0F4BFF] hover:text-[#0F4BFF]/80"
            : "cursor-not-allowed text-gray-400"
        }`}
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`inline-flex items-center gap-2 text-lg font-semibold transition-colors ${
          canGoNext
            ? "text-[#0F4BFF] hover:text-[#0F4BFF]/80"
            : "cursor-not-allowed text-gray-400"
        }`}
      >
        Next
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
