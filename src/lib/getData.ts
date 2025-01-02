import { client } from "@/sanity/lib/client";
import { bannerQuery,   productQuery } from "./query";

export const revalidate = 0;  // بيخلى الداتا تتحدث باستمرار وتعرض بشكل فورى

const getBannerData = async () => {
  const bannerData = await client.fetch(bannerQuery);
  return bannerData;
}
const getProductData = async () => {
  const productData = await client.fetch(productQuery);
  return productData;
}



export {getBannerData, getProductData};