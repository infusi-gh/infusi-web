"use client"

import SectionSeparator from "@/components/shared/SectionSeparator"
import WorkWithUs from "@/components/shared/WorkWithUs"
import PageHero from "@/components/shared/PageHero"
import Image from "next/image"

export default function AboutPage() {
  // const { blogs, error, loading } = useBlogs()
  // console.log("Blogs in AboutPage:", blogs)
  return (
    <main className="overflow-hidden text-[#27408E]">
      {/* ================= HERO SECTION ================= */}
      <PageHero
        subtitle="What do we do?"
        title={
          <>
            Lorem ipsum <span className="text-[#6989EC]">secteturser</span>{" "}
            <br />
            amet <span className="text-[#6989EC]">consectetur</span>
          </>
        }
      />

      <SectionSeparator />

      {/* ================= SECTION 1 ================= */}
      <section className="relative flex flex-col items-center text-center md:text-left md:flex-row justify-between gap-12 section-padding py-24">
        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Lorem ipsum dolor sit amet consecte Sit diam dui aliquam
          </h2>
          <p className="text-[#27408E]/90 text-base md:text-lg leading-relaxed">
            Access to payments and banking is crucial for the success of any
            business. In Africa, where the majority of employment comes from
            MSMEs, the stakes are even higher.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px]">
          <Image
            src="/contact/map.svg"
            alt="Africa map"
            fill
            className="object-contain opacity-90"
          />
        </div>

        {/* Divider Line */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full flex justify-center">
          <Image
            src="/line.svg"
            alt="line divider"
            width={600}
            height={200}
            className="object-contain opacity-60"
          />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}

      <section className="relative flex flex-col md:flex-row items-center justify-between gap-12 section-padding py-28">
        {/* IMAGE (COIN) */}
        <div className="relative w-full md:w-[350px] h-[300px] md:h-[400px] mx-auto">
          <Image
            src="/about/coin.svg"
            alt="Financial Growth"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Lorem ipsum dolor sit amet consecte Sit diam dui aliquam
          </h2>
          <p className="text-[#27408E]/90 text-base md:text-lg leading-relaxed">
            Our technology empowers small businesses to manage payments, scale
            growth, and achieve more financial independence.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}

      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 section-padding pt-28 pb-56">
        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Lorem ipsum dolor sit amet consecte Sit diam dui aliquam
          </h2>
          <p className="text-[#27408E]/90 text-base md:text-lg leading-relaxed">
            We deliver scalable and future-ready platforms that connect
            businesses and people through innovation and simplicity.
          </p>
        </div>
        {/* IMAGE (GLOBE) */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[450px]">
          <Image
            src="/about/globe.svg"
            alt="Globe illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <WorkWithUs />
    </main>
  )
}
