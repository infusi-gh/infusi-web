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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()

  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const navItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const resourceItems = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Industries", href: "/resources/industries" },
    { name: "The Lab", href: "/the-lab" },
    { name: "FAQ", href: "/resources/faq" },
    { name: "Careers", href: "/resources/careers" },
  ]

  return (
    <nav className="absolute section-padding top-0 w-full bg-[#EBF2FF]/95 backdrop-blur-sm border-b border-[#27408E]/10 z-50">
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
          <ul className="flex gap-10 text items-center">
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
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 font-normal text-[#27408E] hover:text-blue-700 transition-colors outline-none">
                    Resources
                    <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={16}
                  className="w-56 bg-[#EBF2FF]/95 backdrop-blur-sm border-none shadow-none rounded-none p-0 border-t border-[#27408E]/10"
                >
                  {resourceItems.map(item => (
                    <DropdownMenuItem
                      key={item.name}
                      asChild
                      className="focus:bg-white/40 focus:text-[#27408E] cursor-pointer rounded-none border-none outline-none"
                    >
                      <Link
                        href={item.href}
                        className="px-4 py-3 text-[#27408E] hover:bg-white/40 transition-all duration-150 block"
                      >
                        <span className="text-sm font-normal">{item.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
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
                  <li>
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className="flex items-center gap-2 font-normal text-[#27408E] hover:text-blue-700 transition-colors outline-none"
                    >
                      Resources
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isResourcesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isResourcesOpen && (
                      <ul className="ml-4 flex flex-col gap-3 mt-3 animate-in slide-in-from-top-2 duration-300">
                        {resourceItems.map(item => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-sm font-normal text-[#27408E] hover:text-blue-700 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
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

export default Navbar
