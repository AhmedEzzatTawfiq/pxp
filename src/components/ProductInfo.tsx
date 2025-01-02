"use client";

import { MdStar } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import { ProductData } from "@/type";
import AddBttton from "./AddBttton";
import { Clock } from "lucide-react";


interface Props {
  product: ProductData;

}
const ProductInfo = ({ product}: Props) => { 
  
  const categories = product.category.map((cat: { title: string }) => cat.title);
  return (
    <div className="flex flex-col gap-5">
      <div className='flex flex-col gap-3'>
            <p className='text-3xl font-bold'>{product?.title}</p>
            <p className='text-sm text-lightText font-semibold mb-4'>({product?.coursesNumber} courses)</p>
          </div>
          <div className=' mb-5 flex flex-col gap-1'>
            <p className=' rounded-full'></p>
            <div className='flex items-center gap-7'>
              <p className='text-sm font-semibold'>
                {categories.length > 0 ? categories.join(", ") : "Uncategorized"}
              </p>
              <p className='text-sm font-semibold"'>{product?.level}</p>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <p className='text-sm font-semibold"'>{product?.hour} hrs</p>
              </div>
            </div>

          </div>
      
     
      
      <button className="rounded-lg py-3 w-full sm:w-60 bg-white text-blue-700 border-[1px] border-blue-600 hoverEffect hover:bg-blue-600 hover:text-white">Apply now</button>
      
    </div>
  );
};

export default ProductInfo;
