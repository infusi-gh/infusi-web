import Image from "next/image"
import { PageHero } from "@/components/shared"

export default function ContactInfo() {
  return (
    <>
      <section className="relative bg-background overflow-hidden text-[#27408E] pb-32 md:pb-48">
        <PageHero
          subtitle="Contact us"
          title={
            <>
              Let’s grow business
              <span className="text-[#6989EC]"> together! </span>
            </>
          }
        />
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
                <span className="inline-flex h-6 w-8 items-center justify-center rounded-sm overflow-hidden relative">
                  <Image
                    src="/about/ghana.svg"
                    alt="Ghana flag"
                    width={32}
                    height={24}
                    className="object-cover"
                  />
                </span>
                <span className="text-lg font-semibold">Ghana</span>
              </div>

              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <Image
                    src="/about/location.svg"
                    alt="Location"
                    width={22}
                    height={22}
                    className="text-white/70 shrink-0"
                  />
                  <p className="text-sm leading-snug">
                    Post Office Box TB86 <br />
                    Taifa, Accra - Ghana
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <Image
                    src="/about/message.svg"
                    alt="Email"
                    width={22}
                    height={22}
                    className="text-white/70 shrink-0"
                  />
                  <a
                    href="mailto:info@infusi.co"
                    className="text-sm hover:underline"
                  >
                    info@infusi.co
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src="/about/phone.svg"
                    alt="Phone"
                    width={22}
                    height={22}
                    className="text-white/70 shrink-0"
                  />
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
                  src="/contact/map.svg"
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
