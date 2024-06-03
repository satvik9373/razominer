import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'

export const NavBar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
    <MaxWidthWrapper>
      <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
      <Link href='/' className='flex z-40 font-semibold items-center'>
        <img src='/logo.png' alt='RazoMiner Logo' className=' mr-2' width={150} height={150} />
      </Link>
        <div className='hidden items-center space-x-4 sm:flex'>
          <>
          <Link href='/PaymentDetails' className={buttonVariants({
            variant: "ghost",
              size: "sm"
          })}>Pricing
          </Link>
          <Link href='/about-US' className={buttonVariants({
            variant: "ghost",
              size: "sm"
          })}>Our Vision
          </Link>
          <Link href='/FAQ' className={buttonVariants({
            variant: "ghost",
              size: "sm"
          })}>FAQ
          </Link>
          <LoginLink
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Sign in
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  Sign Up{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </RegisterLink>

          </>
        </div>
        </div>
        </MaxWidthWrapper>
    </nav>
  )
}

