import Link from 'next/link'
import React from 'react'
import { MdSwitchAccount } from 'react-icons/md'
import SideBarCart from './SideBarCart'
import { auth } from '@/auth'
import Image from 'next/image'

const SideBar = async () => {
  const session = await auth();
  console.log(session);
  
  return (
    <div className='fixed top-20 right-1 z-20 flex gap-3'>
      {/* Account */}
      <Link href={session?.user ? "/dashboard" : "/signin"} className='bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm group border-black border-[1px] '>
        <div className='flex items-center justify-center overflow-hidden'>
          {session?.user ? (
            <Image 
            src={session?.user?.image as string} 
            alt='userImage'
            width={35}
            height={35}
            className='rounded-full -translate-x-12 group-hover:translate-x-5 transition-transform duration-200'
            />
          ) : (
            
              <MdSwitchAccount className='text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200'/>
              
            
          )}
          {session?.user ? (
            <Image 
            src={session?.user?.image as string} 
            alt='userImage'
            width={35}
            height={35}
            className='rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200'
            />
          ) : (
            <div>
              <MdSwitchAccount className='text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200'/>
            </div>
          )}
        </div>
        <p className='text-xs font-semibold'>Profile</p>
      </Link>

      {/* Cart */}
      <SideBarCart />
    </div>
  )
}

export default SideBar
