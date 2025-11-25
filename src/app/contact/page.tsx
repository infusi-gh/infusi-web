import type { Metadata } from "next"
import { ContactInfo, ContactForm } from "@/components/contact"
import { CTA } from "@/components/shared"

export const metadata: Metadata = {
  title: "Contact Us - Infusi LLC",
  description:
    "Get in touch with Infusi. We're here to help transform your business with innovative digital solutions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <CTA />
    </>
  )
}
