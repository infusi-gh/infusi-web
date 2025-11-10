"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")
    setTimeout(() => {
      formRef.current?.reset()
      setStatus("success")
    }, 1500)
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto section-padding">
        <div className="space-y-4 md:space-y-5 transition-all duration-500">
          <h2 className="font-semibold text-[#27408E] text-balance tracking-tight leading-[1.05] text-4xl! sm:text-5xl! md:text-6xl!">
            We love to hear from you
          </h2>
          <p className="text-base md:text-lg text-[#0D193E]/85 mb-8 max-w-3xl">
            Let&apos;s get talking about your needs. You can fill the form below
          </p>
        </div>

        {status !== "success" ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-12 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-[#27408E] text-lg md:text-xl mb-3"
              >
                What is your name?
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-transparent border-b-2 border-[#27408E] focus:border-[#0F4BFF] outline-none py-3 text-base md:text-lg text-[#0D193E]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-[#27408E] text-lg md:text-xl mb-3"
              >
                Do you have an email?
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-transparent border-b-2 border-[#27408E] focus:border-[#0F4BFF] outline-none py-3 text-base md:text-lg text-[#0D193E]"
              />
            </div>
            <div>
              <label
                htmlFor="help"
                className="block font-semibold text-[#27408E] text-lg md:text-xl mb-3"
              >
                How may Infusi help you?
              </label>
              <input
                id="help"
                type="text"
                required
                className="w-full bg-transparent border-b-2 border-[#27408E] focus:border-[#0F4BFF] outline-none py-3 text-base md:text-lg text-[#0D193E]"
              />
            </div>

            <div className="pt-2 flex items-center gap-4 justify-end">
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="relative bg-[#0F4BFF] hover:bg-[#0F4BFF]/90 disabled:opacity-60 text-white px-10 py-5 rounded-lg"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white"></span>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 mt-8">
            <div className="flex flex-col items-center text-center space-y-6 py-8">
              <div className="relative w-full max-w-md aspect-565/481 mx-auto">
                <Image
                  src="/about/globe.svg"
                  alt="Message sent successfully"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#27408E] tracking-tight">
                  Message Sent Successfully!
                </h3>
                <p className="text-base md:text-lg text-[#0D193E]/75 max-w-lg mx-auto">
                  Thank you for reaching out. Our team will review your message
                  and get back to you shortly.
                </p>
              </div>
              <Button
                type="button"
                size="lg"
                onClick={() => setStatus("idle")}
                className="mt-2 bg-[#0F4BFF] hover:bg-[#0F4BFF]/90 text-white px-8 py-5 rounded-lg"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
