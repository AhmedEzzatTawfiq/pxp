
import React from 'react'
import Link from 'next/link'

import { ProductData } from '../../type';
import { getProductData } from '../lib/getData';
import ProductCard from './ProductCard';

interface ProductsProps {
  limit?: number;
}

const Products = async ({ limit }: ProductsProps = {}) => {
  const Products: ProductData[] = await getProductData();
  const displayProducts = limit ? Products?.slice(0, limit) : Products;
  console.log(Products)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'>
        {displayProducts?.map((item) => (
          <ProductCard key={item?._id} item={item} />
        ))}
      </div>
      {limit && (
        <div className="flex justify-center mb-24">
          <Link
            href="/shop"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View all courses
          </Link>
        </div>
      )}
    </div>
  )
}

export default Products
