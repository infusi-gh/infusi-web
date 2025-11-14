import { defineField, defineType } from "sanity"

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          // Styles let you define what blocks can be marked up as
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          // Lists
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          // Marks let you mark up inline text
          marks: {
            // Decorators are simple inline styles
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            // Annotations can be any object structure
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: Rule =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        // Inline images
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Optional image caption",
            },
          ],
        },
        // Code blocks
        {
          type: "code",
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Python", value: "python" },
              { title: "JSON", value: "json" },
              { title: "Bash", value: "bash" },
            ],
            withFilename: true,
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
          validation: Rule => Rule.required(),
        },
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "image",
    },
  },
})
