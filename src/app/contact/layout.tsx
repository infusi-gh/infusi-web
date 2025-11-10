import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Infusi LLC",
  description:
    "Get in touch with Infusi. We're here to help transform your business with innovative digital solutions.",
  openGraph: {
    title: "Contact Us - Infusi LLC",
    description:
      "Get in touch with Infusi. We're here to help transform your business with innovative digital solutions.",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
