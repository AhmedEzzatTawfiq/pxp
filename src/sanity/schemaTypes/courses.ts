
import { defineField, defineType } from "sanity";


export default defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Keep the title relative to course",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "description",
    //   title: "Description",
    //   type: "string",
    // }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{type: "reference", to: {type: "category"}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hour",
      title: "Hours",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coursesNumber",
      title: "Number of courses",
      type: "number",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      description: "3 levels",
    }),
    defineField({
      name: "youWillLearn",
      title: "You Will Learn",
      type: "array",
      of: [{ type: "string" }],
      description: "List the key features or skills the student will learn.",
      validation: (rule) => rule.min(1).required(),
    }),

  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "position",
    }
  }
})