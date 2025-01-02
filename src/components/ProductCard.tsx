"use client";
import React, { useEffect, useState } from 'react'
import { ProductData } from '../../type'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Clock } from 'lucide-react';



const ProductCard = ({ item }: { item: ProductData }) => {
  // console.log(item?.category);
  // console.log(item?.youWillLearn);
  const categories = item.category.map((cat: { title: string }) => cat.title);
  return (
    <div className='border border-px border-lightText/40 rounded-md relative group overflow-hidden gap-2 flex flex-col justify-between'>
      <div>
        <div className='overflow-hidden'>
          <Link href={`/product/${item?.slug.current}`}>
            <Image
              src={urlFor(item?.image).url()}
              alt={item.title}
              width={500}
              height={500}
              loading='lazy'
              className='w-full h-60 object-cover group-hover:scale-105 hoverEffect'
            />
          </Link>
        </div> 
        <div className='px-4 flex flex-col justify-between mt-3 h-[136px]'>

          <div className='flex flex-col gap-1'>
            <p className='text-md font-bold'>{item?.title}</p>
            <p className='text-sm text-lightText font-semibold mb-4'>({item?.coursesNumber} courses)</p>
          </div>
          <div className=' mb-5 flex flex-col gap-1'>
            <p className='border-[1px] border-black rounded-full'></p>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold'>
                {categories.length > 0 ? categories.join(", ") : "Uncategorized"}
              </p>
              <p className='text-sm font-semibold"'>{item?.level}</p>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <p className='text-sm font-semibold"'>{item?.hour} hrs</p>
              </div>
            </div>

          </div>
        </div>
        {/* <AddBttton item={item} className='text-accentWhite'/> */}
      </div>
    </div>
  )
}

export default ProductCard
