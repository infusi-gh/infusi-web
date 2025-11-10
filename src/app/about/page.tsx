import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="overflow-hidden text-[#27408E]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative   flex flex-col justify-center items-center text-center pt-24 md:pt-32 px-6">
        {/* background vectors */}
        <div className="absolute -top-10 h-full inset-0 z-0 overflow-hidden ">
          <Image src="/hero-assets/vector-1.svg" alt="Background curve" fill />
        </div>
        <div className="absolute top-30 h-full inset-1 z-0 overflow-hidden ">
          <Image src="/hero-assets/vector-2.svg" alt="Background curve" fill />
        </div>

        <h3 className="text-lg md:text-2xl font-medium mb-4 tracking-wide">
          What do we do?
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-10 max-w-4xl">
          Lorem ipsum <span className="text-[#6989EC]">secteturser</span> <br />
          amet <span className="text-[#6989EC]">consectetur</span>
        </h1>

        <div className="relative flex justify-center items-end h-[100px] md:h-[100px] ">
          <Image
            src="/line.svg"
            alt="line divider"
            width={700}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

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
            src="/map.svg"
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
            src="/coin.svg"
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
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[450px]">
          <Image
            src="/globe.svg"
            alt="Globe illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section className="relative bg-[#0D193E] text-white  section-padding">
        <div className="relative bottom-36 border border-white/20 bg-[#0D193E] text-center rounded-2xl py-16 px-6 md:px-16 max-w-4xl mx-auto shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Ready to Build a Future for Your Business?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-10">
            Book a meeting, request a quote, or ask us anything. We’re here to
            partner with you on your next big idea.
          </p>
          <Button>Let’s Get Started</Button>
        </div>
      </section>
    </main>
  )
}
