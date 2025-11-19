"use client"

import Image from "next/image"
import { SectionSeparator, CTA, PageHero } from "@/components/shared"

export default function AboutPage() {
  return (
    <main className="overflow-hidden text-[#27408E]">
      {/* ================= HERO SECTION ================= */}
      <PageHero
        subtitle="What do we do?"
        title={
          <>
            Infusi Tech turns ideas into precise,
            <span className="text-[#6989EC]"> high-performance </span>
            solutions that drive
            <span className="text-[#6989EC]"> innovation</span>
          </>
        }
      />

      <SectionSeparator />

      {/* ================= SECTION 1 ================= */}
      <section className="relative flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-left justify-between gap-10 md:gap-14 section-padding py-10 md:py-14">
        {/* IMAGE */}
        <div className="relative w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[450px]">
          <Image
            src="/contact/map.svg"
            alt="Africa map"
            fill
            className="object-contain opacity-90"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Our Mission and Vision
          </h2>

          <div className="text-[#27408E]/90 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p>
              At <strong>Infusi Technologies</strong>, our mission is simple yet
              powerful - to <strong>infuse ideas with technology</strong>. We
              believe that every great idea deserves the right technological
              foundation to thrive. By merging creativity with innovation, we
              transform concepts into scalable, impactful digital solutions that
              empower businesses to grow and adapt in a fast-evolving world.
            </p>
            <p>
              Our vision is to be a trusted partner for organisations and
              professionals alike — inspiring innovation, enabling
              transformation, and delivering technology that drives meaningful
              change. Through collaboration, expertise, and passion, we aim to
              shape a future where technology in Africa amplifies human
              potential and turns visionary ideas into lasting success.
            </p>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ================= SECTION 2 ================= */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 section-padding py-10 md:py-14">
        {/* IMAGE (COIN) */}
        <div className="relative w-[220px] md:w-[350px] h-[200px] sm:h-[280px] md:h-[400px] mx-auto">
          <Image
            src="/about/coin.svg"
            alt="Financial Growth"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Bridging Potentials and Performance
          </h2>

          <p className="text-[#27408E]/90 text-sm sm:text-base md:text-lg leading-relaxed">
            We connect high-performing professionals with visionary businesses
            to deliver real results. At Infusi Tech, we bridge the gap between
            talent and innovation—empowering companies to turn ideas into
            reality through cutting-edge technology.
          </p>
        </div>
      </section>

      <SectionSeparator />

      {/* ================= SECTION 3 ================= */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14 section-padding py-10 md:py-14">
        {/* TEXT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Why settle for slow and simple when you can have speed and
            precision?
          </h2>

          <p className="text-[#27408E]/90 text-sm sm:text-base md:text-lg leading-relaxed">
            At <strong>Infusi Technologies</strong>, we don&apos;t believe in
            delays, inefficiencies, or one-size-fits-all solutions. We believe
            in more than just building software—we engineer experiences. We
            strip away inefficiencies and complexity, delivering intelligent,
            high-performance solutions designed to scale, adapt, and drive
            real-world impact with speed and precision. We challenge the norm,
            crafting advanced, customized technology that empowers businesses to
            move faster, smarter, and with greater precision in an ever-evolving
            digital landscape
          </p>
        </div>

        {/* IMAGE (GLOBE) */}
        <div className="relative w-full md:w-[350px] h-[200px] sm:h-[280px] md:h-[400px] mx-auto">
          <Image
            src="/about/globe.svg"
            alt="Globe illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <CTA />
    </main>
  )
}
