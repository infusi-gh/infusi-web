import ContactInfo from "@/components/contact/ContactInfo"
import ContactCTA from "@/components/contact/ContactCTA"
import SectionSeparator from "@/components/shared/SectionSeparator"
import ContactForm from "@/components/contact/ContactForm"
import WorkWithUs from "@/components/shared/WorkWithUs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Infusi LLC",
  description:
    "Get in touch with Infusi. We're here to help transform your business with innovative digital solutions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactCTA />
      <SectionSeparator />
      <ContactForm />
      <WorkWithUs />
    </>
  )
}
