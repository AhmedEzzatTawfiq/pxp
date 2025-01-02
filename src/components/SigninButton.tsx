"use server";
import { auth } from '@/auth'
import Link from 'next/link';
import React from 'react'

export const SigninButton = async () => {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
            <div></div>
          ) : (
            <Link
              href={"/signin"}
              className="hover:bg-blue-600 hover:text-white text-blue-600 border-blue-600 border-[1px] hoverEffect lg:ml-12 bg-blue-50  px-6 pt-1 pb-2 rounded-full w-32 text-center text-xl"
            >
              Sign in
            </Link>
          )}
    </div>
  )
}

export default SigninButton
