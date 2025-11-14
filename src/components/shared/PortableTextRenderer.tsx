import { PortableText, type PortableTextComponents } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import type { PortableTextBlock } from "next-sanity"
import type { ReactNode } from "react"

/**
 * Props type for block components
 */
interface BlockProps {
  children?: ReactNode
}

/**
 * Props type for link mark components
 */
interface LinkValue {
  href?: string
  blank?: boolean
}

interface LinkProps {
  children?: ReactNode
  value?: LinkValue
}

/**
 * Props type for inline image components
 */
interface ImageValue {
  asset?: {
    _ref?: string
    _type?: string
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

/**
 * Props type for code block components
 */
interface CodeValue {
  code?: string
  language?: string
  filename?: string
}

/**
 * Custom components for rendering Portable Text blocks
 */
const components: PortableTextComponents = {
  types: {
    // Render inline images
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset) return null

      const imageUrl = urlFor(value)?.url()
      if (!imageUrl) return null

      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    // Render code blocks
    code: ({ value }: { value: CodeValue }) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg">
              {value.filename}
            </div>
          )}
          <pre
            className={`${value.filename ? "rounded-t-none" : "rounded-lg"} bg-gray-900 p-4 overflow-x-auto`}
          >
            <code className={`language-${value.language || "text"}`}>
              {value.code}
            </code>
          </pre>
        </div>
      )
    },
  },
  block: {
    // Render headings
    h1: ({ children }: BlockProps) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: BlockProps) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: BlockProps) => (
      <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }: BlockProps) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    // Render blockquotes
    blockquote: ({ children }: BlockProps) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    // Render normal paragraphs
    normal: ({ children }: BlockProps) => (
      <p className="mb-4 leading-7">{children}</p>
    ),
  },
  list: {
    // Render bullet lists
    bullet: ({ children }: BlockProps) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    // Render numbered lists
    number: ({ children }: BlockProps) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    // Render links
    link: ({ children, value }: LinkProps) => {
      const rel = value?.blank ? "noopener noreferrer" : undefined
      const target = value?.blank ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          rel={rel}
          target={target}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
    // Render strong text
    strong: ({ children }: BlockProps) => (
      <strong className="font-bold">{children}</strong>
    ),
    // Render emphasized text
    em: ({ children }: BlockProps) => <em className="italic">{children}</em>,
    // Render code
    code: ({ children }: BlockProps) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Render underline
    underline: ({ children }: BlockProps) => <u>{children}</u>,
    // Render strike-through
    "strike-through": ({ children }: BlockProps) => <s>{children}</s>,
  },
}

/**
 * Props for PortableTextRenderer component
 */
interface PortableTextRendererProps {
  content: PortableTextBlock[]
  className?: string
}

/**
 * Component to render Portable Text content with custom styling
 * @param {PortableTextRendererProps} props - Component props
 */
export function PortableTextRenderer({
  content,
  className = "",
}: PortableTextRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}
