import React from "react"
import { Button } from "./ui/button"
import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"

function Hero() {
  return (
    <main className="relative bg-[#0D193E] text-white min-h-[95vh] w-full flex justify-center    overflow-hidden">
      <div className="absolute -top-10 h-full inset-0 z-0 overflow-hidden ">
        <Image src="/hero-assets/vector-1.svg" alt="Background curve" fill />
      </div>
      <div className="absolute top-30 h-full inset-1 z-0 overflow-hidden ">
        <Image src="/hero-assets/vector-2.svg" alt="Background curve" fill />
      </div>
      <div className="section-padding w-full  flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 sm:px-10 md:px-16 lg:px-24 z-10 ">
        {/* --- Text Section --- */}
        <div className="space-y-6 text-center md:text-left max-w-[450px] w-full  ">
          <div className="relative w-full space-y-3 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-nowrap">
              Ideas to <span className="text-[#C3D060]">reality</span>,
              tech-driven
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg mx-auto md:mx-0 leading-relaxed">
              We build mobile apps and web platforms that solve real problems
              for Ghanaians — technology that&apos;s practical, powerful, and
              makes a difference.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-12 sm:mt-16">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm sm:text-base">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-2 text-sm sm:text-base"
              >
                Learn More
              </Button>
            </div>

            {/* Client Avatars */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-center md:justify-start pb-5">
              <div className="flex -space-x-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage src="/hero-assets/client-1.jpg" alt="client 1" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="/hero-assets/client-2.jpg" alt="client 2" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="/hero-assets/client-3.jpg" alt="client 3" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="/hero-assets/client-4.jpg" alt="client 4" />
                </Avatar>
              </div>
              <p className="text-xs sm:text-sm text-nowrap mt-2 sm:mt-0">
                500+ projects delivered across Africa
              </p>
            </div>
          </div>
        </div>

        {/* --- Image Section --- */}
        <div className="flex justify-center md:justify-end w-full md:w-[55%] z-50 lg:w-[80%] pt-12 md:pt-28 relative h-full">
          <div className=" relative lg:-left-40 w-[85%] sm:w-[75%] md:w-[90%] lg:w-[1000px] scale-x-[-1]">
            <Image
              src="/hero-assets/hero-image.png"
              alt="Infusi LLC"
              width={600}
              height={600}
              className=" w-full  h-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
