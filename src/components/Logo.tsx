import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import logo from '@/assets/pxpLogo.png'

const Logo = ({ className }: {className?: string}) => {
  return (
    <div>
      <Link href={"/"} className='flex items-center'>
          <Image 
          src={logo}
          alt='logo'
          width={500}
          height={500}
          className='min-w-20 min-h-20 max-w-20 max-h-20'
          />
          {/* <h2 className={twMerge("text-2xl text-white font-bold hoverEffect relative overflow-hidden group", className)}>
          PXP
          </h2> */}
        </Link>
    </div>
  )
}

export default Logo
