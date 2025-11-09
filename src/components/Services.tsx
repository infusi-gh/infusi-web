import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Build powerful, responsive websites that engage your audience and drive growth. From custom designs to seamless functionality, we create web experiences that work.",
    imageSrc: "/service-assets/service1.png",
    imageAlt: "Website Development",
    href: "/services/website-development",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Transform your business with custom software solutions. From MVPs to enterprise systems, we deliver scalable applications that solve real problems.",
    imageSrc: "/service-assets/service2.png",
    imageAlt: "Software Development",
    href: "/services/software-development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive interfaces that users love. Our design approach combines aesthetics with usability to deliver exceptional digital experiences.",
    imageSrc: "/service-assets/service3.png",
    imageAlt: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    id: 4,
    title: "IT Consultancy",
    description:
      "Get expert guidance to navigate your digital transformation. We help businesses make informed technology decisions that drive success.",
    imageSrc: "/service-assets/service4.png",
    imageAlt: "IT Consultancy",
    href: "/services/it-consultancy",
  },
]

function Services() {
  return (
    <section className="w-full md:py-16 py-8 relative">
      <div className="max-w-[1200px] mx-auto md:px-6 px-4 relative">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none md:block hidden"
          width="1368"
          height="2657"
          viewBox="0 0 1368 2657"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 73C0 32.6832 32.6832 0 73 0H611C651.317 0 684 32.6832 684 73V576C684 616.317 716.683 649 757 649H1295C1335.32 649 1368 681.683 1368 722V1245C1368 1285.32 1335.32 1318 1295 1318H758.455C718.138 1318 685.455 1350.68 685.455 1391V1915C685.455 1955.32 718.138 1988 758.455 1988H1295C1335.32 1988 1368 2020.68 1368 2061V2584C1368 2624.32 1335.32 2657 1295 2657H758.477C718.161 2657 685.478 2624.32 685.478 2584V2081C685.478 2040.68 652.794 2008 612.478 2008H73.0001C32.6833 2008 0 1975.32 0 1935V1411C0 1370.68 32.6832 1338 73 1338H612.297C652.676 1338 685.384 1305.22 685.297 1264.84L684.159 741.841C684.071 701.586 651.413 669 611.159 669H73C32.6832 669 0 636.317 0 596V73Z"
            fill="#0D193E"
          />
        </svg>

        {/* Content Grid */}
        <div className="relative z-10 grid md:gap-0 gap-6">
          {servicesData.map((service, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={service.id}
                className="md:h-[480px] h-auto grid md:grid-cols-2 grid-cols-1 gap-4 items-center md:bg-transparent bg-[#0D193E] md:rounded-none rounded-[25px] md:p-0 p-6"
              >
                {/* Text Content */}
                <div
                  className={`flex items-center order-2 ${
                    isLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div
                    className={`text-white md:px-12 px-0 ${
                      isLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                    }`}
                  >
                    <h1
                      className="mb-4 md:mb-6 max-w-[600px] text-white font-bold leading-tight"
                      style={{
                        fontSize: "48px",
                      }}
                    >
                      <span className="md:hidden" style={{ fontSize: "32px" }}>
                        {service.title}
                      </span>
                      <span className="hidden md:inline">{service.title}</span>
                    </h1>
                    <p className="text-white/90 md:mb-8 mb-6 leading-relaxed max-w-[480px] text-base md:text-xl">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <Button className="bg-[#4169FF] hover:bg-[#3057E8] text-white px-6 py-2.5 rounded-md text-sm font-medium">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Box */}
                <div
                  className={`flex items-end justify-center md:p-4 p-0 order-1 ${
                    isLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="bg-white rounded-[25px] w-full md:h-[400px] h-[280px] flex items-end justify-center overflow-visible relative">
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[110%] w-full ${index === 3 ? "md:h-80 h-[280px]" : "md:h-[460px] h-80"}`}
                    >
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        className="object-cover object-bottom"
                        sizes="45vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
