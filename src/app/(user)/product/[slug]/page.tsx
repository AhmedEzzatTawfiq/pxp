import Container from "@/components/Container";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductInfo from "@/components/ProductInfo";
import ProductCard from "@/components/ProductCard";

import { ProductData } from "@/type";
import { FiCheck } from "react-icons/fi";
import { TfiCheck } from "react-icons/tfi";

// Type definition for PageProps
interface PageProps {
  params: Promise<{ slug: string }>;  // params is now a Promise
}

const SingleProductPage = async ({ params }: PageProps) => {
  // Await the resolution of params
  const resolvedParams = await params; // Resolves to { slug: string }

  const { slug } = resolvedParams; // Extract the slug from the resolved params

  const query = groq`*[_type == 'course' && slug.current == $slug][0]{
    ...,
    category[] -> { title }
  }`;

  const product: ProductData = await client.fetch(query, { slug });


  const categories = product.category.map((cat: { title: string }) => cat.title);
  // const learns = product.youWillLearn.map((learn: {title: string}) => learn.title)

  // console.log(learns);


  return (
    <div className="sm:my-10">
      <div className="bg-blue-50 gap-10 md:gap-16 h-full p-6 sm:p-8 mb-8 max-w-screen-xl mx-auto sm:px-16 xl:px-16 flex flex-col md:flex-row">

        <div className="">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            className="w-80 sm:w-96 h-60 object-fill rounded-md"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex-col order-1 flex gap-3">
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="bg-blue-50 md:px-14 px-2 py-8">
        <div className="bg-white rounded-xl pt-7 pb-32 flex flex-col gap-4 max-w-screen-xl mx-auto md:px-8 px-4">
          <h3 className="font-bold text-xl">You will learn:</h3>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl">
              {product?.youWillLearn?.map((item, index) => (
                <div className="flex gap-1" key={index}>
                  <FiCheck className="text-blue-600 md:w-10 md:h-7 sm:max-w-5 sm:max-h-7 min-w-4 min-h-7"/>{item}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
