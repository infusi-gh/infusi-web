import React from "react"
import Image from "next/image"

const partnersData = [
  { name: "MTN", logo: "/partner-assets/mtn.svg" },
  { name: "Telecel", logo: "/partner-assets/telecel.svg" },
  { name: "Paystack", logo: "/partner-assets/paystack.svg" },
  { name: "Brif", logo: "/partner-assets/brif.svg" },
  { name: "Døltech", logo: "/partner-assets/doltech.svg" },
  { name: "Kweku Tech", logo: "/partner-assets/kweku.svg" },
]

function Partners() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#EBF2FF]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[800px] mb-12">
          <h2
            style={{
              fontSize: "3.5rem",
              lineHeight: "1.2",
              color: "#27408E",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            Providing Scalable Solutions to Clients
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75",
              color: "#27408E",
            }}
          >
            Infusi Technologies is a software development partner that empowers
            businesses with scalable, fast, and maintainable solutions. We
            deliver custom projects through contracts and build innovative SaaS
            products that drive growth across industries.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Top row - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center w-full max-w-4xl">
            {partnersData.slice(0, 4).map(partner => (
              <div
                key={partner.name}
                className="relative h-12 md:h-16 w-full flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          {/* Bottom row - 2 logos centered */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
            {partnersData.slice(4, 6).map(partner => (
              <div
                key={partner.name}
                className="relative h-12 md:h-16 w-full max-w-[200px] flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
