import Image from "next/image"
import { ReactNode } from "react"

interface PageHeroProps {
  subtitle?: string
  title: ReactNode
  className?: string
}

export default function PageHero({
  subtitle,
  title,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex flex-col justify-center items-center text-center pt-24 md:pt-32 px-6 ${className}`}
    >
      {/* background vectors */}
      <div className="absolute -top-10 h-full inset-0 z-0 overflow-hidden">
        <Image src="/hero/vector-1.svg" alt="Background curve" fill />
      </div>
      <div className="absolute top-30 h-full inset-1 z-0 overflow-hidden">
        <Image src="/hero/vector-2.svg" alt="Background curve" fill />
      </div>

      {subtitle && (
        <h3 className="text-base md:text-lg font-medium mb-4 tracking-wide">
          {subtitle}
        </h3>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10 max-w-4xl">
        {title}
      </h1>
    </section>
  )
}
