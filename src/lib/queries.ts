// lib/queries.ts
export const allBlogsQuery = `*[
  _type == "blog"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  categories,
  image{
    asset->{
      url
    }
  },
}`

export const singleBlogQuery = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    categories,
    image{
      asset->{
        url
      }
    },
    content
  }
`
