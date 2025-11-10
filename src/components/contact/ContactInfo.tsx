import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <>
      <section className="relative bg-background overflow-hidden">
        {/* background vectors */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/hero-assets/vector-1.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-50"
          />
          <Image
            src="/hero-assets/vector-2.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto section-padding pt-28 md:pt-40 pb-40 md:pb-48 text-center">
          <p className="text-xs sm:text-sm md:text-base tracking-wide text-[#27408E]/80 mb-3">
            Contact us
          </p>
          <h1 className="font-semibold text-balance tracking-tight leading-[1.05] text-[#27408E] text-[clamp(1.75rem,3.5vw+0.25rem,3.25rem)]!">
            Lorem ipsum <span className="text-primary">secteturser</span>
            <br className="hidden sm:block" /> amet{" "}
            <span className="text-primary">consectetur</span>
          </h1>
        </div>

        <svg
          className="absolute -bottom-px left-0 w-full h-28 md:h-40"
          viewBox="0 0 1729 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M1729 0.768C817.5 403.864 530.5 259.901 -2 197.081V400H1729V0.768Z"
            fill="#0E1B4D"
          />
        </svg>
      </section>

      {/* Dark section */}
      <section className="relative bg-[#0E1B4D] text-white pt-6 md:pt-10 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="mb-8 md:mb-12">
            <p className="text-xl md:text-2xl/relaxed text-white/85">
              Want to meet the team?
            </p>
            <p className="font-bold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              Say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(240px,320px)_1fr] gap-6 md:gap-8 items-start">
            {/* Info card */}
            <div className="self-start rounded-xl bg-white/5 backdrop-blur-sm shadow-sm ring-1 ring-white/10 p-3 md:p-4 w-full max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-6 w-8 items-center justify-center rounded-sm overflow-hidden">
                  <span className="h-full w-1/3 bg-red-600" />
                  <span className="h-full w-1/3 bg-yellow-400" />
                  <span className="h-full w-1/3 bg-green-600" />
                </span>
                <span className="text-lg font-semibold">Ghana</span>
              </div>

              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="text-white/70 shrink-0" />
                  <p className="text-sm leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Auctor leo
                    pellentesque dis tincidunt
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <Mail size={22} className="text-white/70 shrink-0" />
                  <a
                    href="mailto:info@infusi.co"
                    className="text-sm hover:underline"
                  >
                    info@infusi.co
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={22} className="text-white/70 shrink-0" />
                  <a
                    href="tel:+233541874236"
                    className="text-sm hover:underline"
                  >
                    (233) 541874236
                  </a>
                </div>
              </div>
            </div>

            {/* Map visual - enlarged */}
            <div className="hidden md:block relative md:pl-4 lg:pl-12 overflow-visible">
              <div className="relative w-full ml-auto -mr-8 lg:-mr-16 -mt-10 md:-mt-16 h-[480px] md:h-[560px] lg:h-[640px] max-w-none">
                <Image
                  src="/contact-assets/map.svg"
                  alt="Africa map"
                  fill
                  priority
                  sizes="(min-width: 1280px) 1400px, (min-width: 1024px) 90vw, 0vw"
                  className="object-contain opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
