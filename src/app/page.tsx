import Hero from "@/components/shared/Hero"
import Services from "@/components/service/Services"
import Partners from "@/components/service/Partners"
import React from "react"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="w-full py-16 md:py-20 bg-[#EBF2FF]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[600px]">
            <h2
              style={{
                fontSize: "3.5rem",
                lineHeight: "1.1",
                color: "#27408E",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              Powerful solutions for Africa&apos;s digital future
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.75",
                color: "#27408E",
              }}
            >
              We combine cutting-edge technology with deep understanding of
              local challenges to create solutions that truly work for
              Ghanaians.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <Partners />
    </>
  )
}
