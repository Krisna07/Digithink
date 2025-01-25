import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
    }),
    defineField({
      name: "creator",
      title: "Creator",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "blogBody",
      title: "Blog Body",
      type: "object",
      fields: [
        {
          name: "introduction",
          title: "Introduction",
          type: "text",
        },
        {
          name: "sections",
          title: "Sections",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "content",
                  title: "Content",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          name: "conclusion",
          title: "Conclusion",
          type: "text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
