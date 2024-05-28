import { Cards } from "@/components/Cards";
import Heading from "@/components/Heading/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SliderLogo } from "@/components/SliderLogo";
import Subtitle from "@/components/subtitle/Subtitle";
import { buttonVariants } from "@/components/ui/button";
import { Calendar, CalendarIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>

    
<div className="absolute top-0 -z-10 h-full w-full bg-white">
  <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
    </div>
    </div>


<MaxWidthWrapper classname="mb-32 mt-20 sm:mt-20 flex flex-col items-center justify-center text-center sm:flex-row sm:items-start sm:text-left sm:space-x-10">
  {/* Left Column */}
  <div className="sm:w-1/2">
    <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
      <p className="text-sm font-semibold text-gray-700">
        RazoMiner is now Public!
      </p>
    </div>
    <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
      <span className="text-blue-600"><Heading/> </span>your leads scrapping powerhouse from web
    </h1>

    <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg text-left">
     <Subtitle/>
    </p>

    <Link
      href="/dashboard"
      target="_blank"
      className={buttonVariants({
        size: "lg",
        className: 'mt-5 flex items-center justify-center',
      })}
    >
      I want to Buy Razominer <ShoppingCart className="ml-2 h-5 w-5" />
    </Link>
  </div>

  {/* Right Column */}
  <div className="mt-10 sm:mt-10 sm:w-1/2 float-right">
    <img
      src="/icon.png"
      alt="Icon"
      width={500}
      height={50}
      className="w-full sm:w-auto sm:items-center sm:ml-auto animate-out"
    />
  </div>
</MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <h1 className="max-w-3xl text-3xl font-bold md:text-3xl lg:text-3xl text-center mx-auto">
            Need more! Let's book a Free Live demo
            <br />
            <Link
              href="/dashboard"
              target="_blank"
              className={`${buttonVariants({
                size: "lg",
                className: 'mt-5 flex items-center justify-center hover:bg-purple-500 hover:text-white rounded-full',
              })} bg-green-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 flex items-center space-x-2 transition duration-300 text-center border`}
            >
              <span className="hidden sm:inline-block">Book a Live Demo</span>
              <span className="sm:hidden">Book a Live Demo</span>
              <CalendarIcon className="h-5 w-5" />
            </Link>
          </h1>

          <h2 className="max-w-3xl text-3xl font-bold md:text-3xl lg:text-3xl text-center mx-auto mt-3 text-gray-600">
            Connect with us Right now !!
            <br />

            <a href={`tel:${+917907682565}`} className="max-w-3xl text-3xl font-bold md:text-3xl lg:text-3xl mx-auto mt-2 text-black">
              +917907682565
              <br />
            </a>
          </h2>
          <div className="flex flex-wrap gap-3 items-center justify-center mt-2 cursor-pointer">
            <Image src='/facebook.png' alt="facebook" width={34} height={34} className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" />
            <Image src='/instagram.png' alt="instagram" width={34} height={34} className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" />
            <Image src='/whatsapp.png' alt="whatsapp" width={34} height={34} className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" />
          </div>
          <br />
          <br />
<Cards/>\
<br />
<br />

          

  <h3 className="text-xl font-bold text-center">Videos related to RAZOMINER</h3>
<SliderLogo />

      
      {/* Feature section */}
      <div className='mx-auto mb-3 mt-3 max-w-5xl sm:mt-5'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-1 font-bold text-4xl text-gray-900 sm:text-4xl'>
              Start Scrapping Data in Seconds
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Chatting to your PDF files has never been
              easier than with Quill.
            </p>
          </div>
        </div>



        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Either starting out with a free plan or
                choose our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your file and make it
                ready for you to chat with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that simple. Try out Quill today -
                it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl  p-2 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-xl'>
            <iframe
  className="w-full"
  height="315"
  src="https://www.youtube.com/embed/rIijvYFmuyA?si=vJCPhvYXVWysjCet"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>



              
            </div>
          </div>
        </div>
        <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl p-2 lg-m-4 lg:rounded-2xl lg:p-4">
                  <video autoPlay loop muted className="w-full rounded-md p-2 sm:p-8 md:p-20 ">
                    <source src="/razominer.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 m -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-1 w-full'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
