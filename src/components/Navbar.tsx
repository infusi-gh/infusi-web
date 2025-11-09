"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="absolute section-padding top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className=" flex items-center justify-between  py-3">
        {/* --- Logo Section --- */}
        <div className="flex-[0.3]">
          <Link href="/" className="flex items-center gap-2  ">
            {/* Standard logo size: 32–40px tall */}
            <Image
              src="/logo.svg"
              alt="Infusi LLC"
              width={85}
              height={85}
              className="object-contain"
            />
          </Link>
        </div>

        {/* --- Desktop Nav --- */}
        <div className="hidden md:flex items-center w-full gap-8 flex-[0.7] justify-between">
          <ul className="flex gap-10 text">
            {navItems.map(item => {
              const isActive = pathname === item.href // ✅ check if active

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "font-semibold text-blue-800" // active link
                        : "font-normal text-[#27408E] hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Button>Get Started</Button>
        </div>

        {/* --- Mobile Menu Trigger --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                <Menu className="h-6 w-6 text-blue-900" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80%] sm:w-[60%] bg-white h-full flex flex-col justify-between p-6"
            >
              {/* Header / Logo */}
              <SheetHeader className="w-fit h-fit">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link href="/" className="flex items-center gap-2 ">
                  <Image
                    src="/logo.svg"
                    alt="Infusi LLC"
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                </Link>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto mt-8">
                <ul className="flex flex-col items-start gap-6">
                  {navItems.map(item => {
                    const isActive = pathname === item.href

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`transition-colors ${
                            isActive
                              ? "font-semibold text-blue-800"
                              : "font-normal text-[#27408E] hover:text-blue-700"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
