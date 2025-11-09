import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition: "left" | "right"
  position?: "top" | "middle" | "bottom" | "standalone"
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  position = "standalone",
}) => {
  const isImageLeft = imagePosition === "left"

  const getTextBoxRadius = () => {
    if (position === "standalone") return "rounded-[25px]"

    if (position === "top") {
      return isImageLeft
        ? "rounded-tl-[25px] rounded-tr-[25px]" // Image on left, text on right
        : "rounded-tl-[25px] rounded-tr-[25px]" // Image on right, text on left
    }

    if (position === "bottom") {
      return isImageLeft
        ? "rounded-bl-[25px] rounded-br-[25px]" // Image on left, text on right
        : "rounded-bl-[25px] rounded-br-[25px]" // Image on right, text on left
    }

    return "rounded-[25px]"
  }

  return (
    <div
      className="relative w-full h-[540px] max-w-[1400px] mx-auto"
      style={{ "--gap": "16px" } as React.CSSProperties}
    >
      <div
        className="grid items-stretch"
        style={{
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "var(--gap)",
        }}
      >
        {isImageLeft && (
          <div className="md:col-span-5 col-span-12">
            <div className="bg-white rounded-[25px] shadow-xl flex items-center justify-center p-6 md:p-10 h-full min-h-[360px]">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>
        )}
        <div
          className={`${getTextBoxRadius()} bg-[#0D193E] text-white md:col-span-7 col-span-12 w-full flex flex-col justify-center px-8 md:px-12 lg:px-16 py-10`}
        >
          <div
            className={`space-y-6 max-w-[480px] ${isImageLeft ? "ml-auto" : "mr-auto"}`}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              {description}
            </p>
            <Button className="bg-[#4169FF] hover:bg-[#3057E8] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors">
              Learn more
            </Button>
          </div>
        </div>
        {!isImageLeft && (
          <div className="md:col-span-5 col-span-12">
            <div className="bg-white rounded-[25px] shadow-xl flex items-center justify-center p-6 md:p-10 h-full min-h-[360px]">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
