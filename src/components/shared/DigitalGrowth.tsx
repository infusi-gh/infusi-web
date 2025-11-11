import React from "react"

interface DigitalGrowthProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  topImageSrc?: string
  bottomImageSrc?: string
}

export default function DigitalGrowth({
  title = "Digital growth for every business, everywhere",
  description = "Infusi Technologies delivers scalable, high-performance software solutions, an all-in-one development and SaaS platform empowering businesses to build, grow, and innovate with ease.",
  buttonText = "Join us",
  buttonHref = "/contact",
  topImageSrc = "/hero/top-image.png",
  bottomImageSrc = "/hero/bottom-image.png",
}: DigitalGrowthProps) {
  return (
    <section className="relative">
      <div className="relative">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1728 1679"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1735.47 59C847.723 595.615 204.076 391.456 0.467529 227.45V1509C0.467529 1509 819.468 1590.5 1199.47 1655.5C1579.47 1720.5 1735.47 1509 1735.47 1509V59Z"
            fill="#0D193E"
          />
        </svg>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1728 1679"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Orange blob - top right */}
              <path
                opacity="0.7"
                d="M1494.17 890.286C1543.11 840.2 1627.37 856.882 1653.53 921.836L1706.91 1054.37C1717.65 1081.04 1716.01 1111.1 1702.42 1136.44L1659.68 1216.18C1629.16 1273.1 1552.59 1284.86 1506.4 1239.73L1394.85 1130.74C1356.53 1093.31 1355.82 1031.89 1393.26 993.575L1494.17 890.286Z"
                fill="#E3800F"
                className="animate-pulse hidden lg:block"
              />

              {/* Blue blob - left side bottom */}
              <path
                opacity="0.21"
                d="M-115.295 908.286C-66.3593 858.2 17.9027 874.882 44.0629 939.836L97.4425 1072.37C108.184 1099.04 106.54 1129.1 92.9555 1154.44L50.2077 1234.18C19.6939 1291.1 -56.8771 1302.86 -103.07 1257.73L-214.619 1148.74C-252.937 1111.31 -253.65 1049.89 -216.212 1011.57L-115.295 908.286Z"
                fill="#4A63AE"
                className="animate-pulse"
              />

              {/* Blue blob - left side top */}
              <path
                opacity="0.21"
                d="M47.1725 412.286C96.1084 362.2 180.371 378.882 206.531 443.836L259.91 576.374C270.651 603.043 269.008 633.104 255.423 658.443L212.675 738.181C182.162 795.098 105.591 806.863 59.3978 761.731L-52.1508 652.744C-90.4692 615.306 -91.1826 553.893 -53.7443 515.575L47.1725 412.286Z"
                fill="#4A63AE"
                className="animate-pulse"
              />

              {/* Wave lines */}
              <g className="opacity-60">
                <path
                  d="M-48.5325 1478.5C-32.1991 1221.33 70.9675 746.096 352.968 902.496C705.468 1098 402.968 1444 802.968 1328.5C1122.97 1236.1 1120.3 924.663 1078.97 780.496C1046.8 604.163 1075.37 284.996 1446.97 418.996C1818.57 552.996 1627.47 1054.5 1485.47 1288.5C1451.8 1363.5 1461.27 1508.6 1768.47 1489"
                  stroke="#1A2955"
                  strokeWidth="5"
                />
                <path
                  d="M-284 1045.53C-194.513 803.885 40.7659 378.287 265.983 609.074C547.504 897.556 158.393 1142.13 574.713 1146.35C907.769 1149.72 982.062 797.336 996.441 700.672C1004.5 646.5 1135.27 225.003 1452.74 460.06C1770.22 695.117 1443.17 1120.63 1239.96 1304C1186.17 1366.18 1182.97 1637.5 1778.97 1500"
                  stroke="#1A2955"
                  strokeWidth="5"
                />
              </g>
            </svg>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-12 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-24 pb-24 sm:pb-32 md:pb-40 lg:pb-32 xl:pb-24 h-full flex items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full">
              {/* Text Content */}
              <div className=" pt-22 flex-1 text-left max-w-2xl">
                <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:mt-28">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-[20ch] text-white leading-tight">
                    {title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                    {description}
                  </p>

                  <div className="pt-3 md:pt-4">
                    <a
                      href={buttonHref}
                      className="inline-block bg-[#0F4BFF] hover:bg-[#0D3FD9] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      {buttonText}
                    </a>
                  </div>
                </div>
              </div>

              {/* Images Container */}
              <div className="flex-1 relative w-full max-w-60 sm:max-w-[280px] md:max-w-[320px] lg:max-w-lg mt-8 sm:mt-12 md:mt-16 lg:mt-0 ml-auto mr-4 sm:mr-8 md:mr-12 lg:mr-0">
                <div className="relative aspect-4/3 w-full">
                  {/* Top Image */}
                  <div className="absolute top-[-50%] left-40 w-[50%] sm:w-[60%] md:w-[60%] lg:w-[65%] aspect-4/3 z-20">
                    <img
                      src={topImageSrc}
                      alt="Digital innovation illustration"
                      className="w-full h-full object-contain opacity-90 drop-shadow-2xl"
                    />
                  </div>

                  {/* Bottom Image */}
                  <div className=" bottom-full lg:bottom-10 sm:left-[5%] md:left-[8%] w-[45%] sm:w-[50%] md:w-[55%] lg:w-[58%] aspect-4/3 z-10 pulse hidden md:block lg:block">
                    <img
                      src={bottomImageSrc}
                      alt="Technology platform visualization"
                      className="w-full h-full object-contain opacity-90 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
