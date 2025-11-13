import { PortableTextBlock } from "next-sanity"

/**
 * Sanity Image Asset Reference
 */
export interface SanityImageAsset {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
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
 * Sanity Image Asset with URL (populated)
 */
export interface SanityImageWithUrl {
  _type: "image"
  asset: {
    _id: string
    url: string
  }
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
 * Blog document type (as stored in Sanity)
 */
export interface Blog {
  _id: string
  _type: "blog"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: {
    _type: "slug"
    current: string
  }
  categories: string[]
  publishedAt: string
  excerpt: string
  content: PortableTextBlock[]
  image: SanityImageAsset
}

/**
 * Blog document with populated image URL (query result)
 */
export interface BlogWithImageUrl {
  _id: string
  _type: "blog"
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    _type: "slug"
    current: string
  }
  categories: string[]
  publishedAt: string
  excerpt: string
  content: PortableTextBlock[]
  image: SanityImageWithUrl
}

/**
 * Blog list item (for blog listings)
 */
export interface BlogListItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  categories: string[]
  publishedAt: string
  excerpt: string
  image: {
    asset: {
      url: string
    }
  }
}

/**
 * Single blog with full content (for blog detail page)
 */
export interface BlogDetail extends BlogListItem {
  content: PortableTextBlock[]
}
