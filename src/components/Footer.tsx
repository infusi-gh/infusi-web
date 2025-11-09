import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#0D193E] text-white section-padding py-16">
      <div className="max-w-7xl mx-auto gap-12 ">
        {/* --- Company Info --- */}
        <div className="space-y-6 col-span-2 mb-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-light.svg"
              alt="Infusi LLC"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-gray-300 max-w-3xl">
            Empowering businesses with cutting-edge custom software solutions.
            From MVPs to ERP systems, we design tools that streamline operations
            and drive innovation.
          </p>
          <p className="text-sm font-medium">info@infusi.co</p>
        </div>

        {/* --- Links Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Home</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/lab">The Lab</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Website Development</li>
              <li>Software Development</li>
              <li>UI/UX Design</li>
              <li>IT Consultancy</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Infusi</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Support</li>
              <li>Book an appointment</li>
              <li>About Us</li>
              <li>Links</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </div>
      {/* --- Newsletter --- */}
      <div className="max-w-7xl mx-auto mt-16 pb-10  border-b-[0.1px] border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-md">
          <h2 className="text-xl font-semibold mb-2">Stay connected</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            A postcard from us a few times a year. No spam — just good vibes and
            updates you’ll love.
          </p>
        </div>
        <form className="relative w-full max-w-sm">
          <Input
            placeholder="Enter your email"
            className="bg-white/10 border-[0.2px] border-white/20 text-white placeholder:text-gray-300 pr-12" // add padding-right so text doesn't overlap button
          />
          <Button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white/30 text-white  py-2 h-full"
          >
            <ArrowUpRight className="h-4 w-4 text-[#0D193E]" />
          </Button>
        </form>
      </div>

      {/* --- Copyright --- */}
    </footer>
  )
}

export default Footer
