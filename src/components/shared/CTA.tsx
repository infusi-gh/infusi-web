import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative bg-[#0F4BFF] text-white overflow-hidden">
      {/* Decorative background with curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-0 w-full"
          style={{ height: "auto" }}
          viewBox="0 0 1728 713"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <rect y="0.5" width="1728" height="435" fill="#0F4BFF" />
          <path
            d="M-99.6483 610.637C-284.733 540.568 65.875 157.117 254.548 0.5H1401.98C1978.19 312.249 1586.88 577.656 1307.99 712.5H224.119L-99.6483 610.637Z"
            fill="#1843C3"
            fillOpacity="0.2"
            stroke="#0F4BFF"
          />
          <path
            d="M59.8588 610.637C-88.1287 540.568 192.206 157.117 343.063 0.5H1260.51C1721.23 312.249 1408.35 577.656 1185.36 712.5H318.733L59.8588 610.637Z"
            fill="#1843C3"
            fillOpacity="0.3"
            stroke="#0F4BFF"
          />
          <path
            d="M248.998 477.812C139.407 422.997 347.006 123.022 458.722 0.5H1138.13C1479.31 244.382 1247.61 452.011 1082.48 557.5H440.705L248.998 477.812Z"
            fill="#1843C3"
            fillOpacity="0.5"
          />
          <path
            d="M383.853 441.821C303.059 391.139 456.107 113.783 538.467 0.5H1039.34C1290.87 225.992 1120.06 417.966 998.317 515.5H525.184L383.853 441.821Z"
            fill="#133DBD"
            fillOpacity="0.55"
          />
          <path
            d="M478.781 371.552C414.916 328.94 535.896 95.7458 601 0.5H996.932C1195.76 190.089 1060.73 351.495 964.5 433.5H590.5L478.781 371.552Z"
            fill="#133DBD"
          />
          <path
            d="M-99.6483 610.637C-284.733 540.568 65.875 157.117 254.548 0.5H1401.98C1978.19 312.249 1586.88 577.656 1307.99 712.5H224.119L-99.6483 610.637Z"
            fill="#1843C3"
            fillOpacity="0.2"
            stroke="#0F4BFF"
          />
          <path
            d="M59.8588 610.637C-88.1287 540.568 192.206 157.117 343.063 0.5H1260.51C1721.23 312.249 1408.35 577.656 1185.36 712.5H318.733L59.8588 610.637Z"
            fill="#1843C3"
            fillOpacity="0.3"
            stroke="#0F4BFF"
          />
          <path
            d="M248.998 477.812C139.407 422.997 347.006 123.022 458.722 0.5H1138.13C1479.31 244.382 1247.61 452.011 1082.48 557.5H440.705L248.998 477.812Z"
            fill="#1843C3"
            fillOpacity="0.5"
          />
          <path
            d="M383.853 441.821C303.059 391.139 456.107 113.783 538.467 0.5H1039.34C1290.87 225.992 1120.06 417.966 998.317 515.5H525.184L383.853 441.821Z"
            fill="#133DBD"
            fillOpacity="0.55"
          />
          <path
            d="M478.781 371.552C414.916 328.94 535.896 95.7458 601 0.5H996.932C1195.76 190.089 1060.73 351.495 964.5 433.5H590.5L478.781 371.552Z"
            fill="#133DBD"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        {/* <p className="text-xs sm:text-sm md:text-base tracking-wide mb-3">
          LET&apos;S GET STARTED
        </p> */}
        <h2 className="font-bold mb-5 md:mb-6 text-balance tracking-tight whitespace-nowrap leading-[1.07] text-xl! sm:text-2xl! md:text-3xl! lg:text-4xl!">
          Interested in working for your business <br /> including SMEs
        </h2>
        {/* <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          Book a meeting, inquire a quote or do anything. We&apos;re here to
          elevate with you! Want to meet the team say hello.
        </p> */}
        <Button
          asChild
          size="default"
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F4BFF] px-8 py-6  font-semibold transition-all"
        >
          <Link href="/contact">Contact our team</Link>
        </Button>
      </div>
    </section>
  )
}
