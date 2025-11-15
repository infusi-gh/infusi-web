import Image from "next/image"

export default function ContactCTA() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Hand illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/contact/hand.svg"
                alt="Mobile experience"
                width={1200}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 md:space-y-5 order-1 lg:order-2">
            <h2 className="font-semibold text-[#27408E] text-balance tracking-tight leading-[1.05] text-4xl! sm:text-5xl! md:text-6xl!">
              Transform Your Business
            </h2>
            <p className="text-sm md:text-base text-[#4A63AE] leading-relaxed max-w-xl">
              Finding the perfect fit is as important to us as it is to you,
              whether you’re searching for top talent to drive your company’s
              success or seeking a role that fulfils your career goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
