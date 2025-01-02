import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner'] {
  ...
}|order(_createdAt asc)`;
const productQuery = groq`*[_type == 'course'] {  
  category[] -> {
    title,  
  },
  youWillLearn[],
  slug,
  title,
  image,
  hour,
  coursesNumber,
  level,
}|order(_createdAt asc)`;





export {bannerQuery, productQuery};   