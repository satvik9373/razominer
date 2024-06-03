import { Cards } from "@/components/Cards";
import Heading from "@/components/Heading/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SliderLogo } from "@/components/SliderLogo";
import Subtitle from "@/components/subtitle/Subtitle";
import { Button, buttonVariants } from "@/components/ui/button";
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
    <Heading/>
    </h1>

    <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg text-left">
     <Subtitle/>
    </p>

    <Link
      href="/PaymentDetails"
      target="_blank"
      className={buttonVariants({
        size: "lg",
        className: 'mt-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3  duration-300 hover:bg-gradient-to-l hover:from-blue-700 hover:to-purple-700',
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
      width={1000}
      height={600}
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
          
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24 '>
            <div className='-m-2 rounded-xl  p-2 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl bg-white'>
          <h1 className="max-w-3xl text-3xl font-medium md:text-3xl lg:text-3xl text-center mx-auto">
            Need more! Let's book a Free Live demo
            <br />
            <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSfVMUbqZhAhjGjprNkzRv38wLDRjsOtH_gspLO1f7ImHLjONA/viewform"
      target="_blank"
      className={`rounded-full ${buttonVariants({
        size: "lg",
        className: 'mt-5 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-purple-600 hover:text-white',
      })} bg-green-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 flex items-center space-x-2 transition duration-300 text-center border`}
    >
      <span className="hidden sm:inline-block">Book a Live Demo</span>
      <span className="sm:hidden">Book a Live Demo</span>
      <CalendarIcon className="h-5 w-5" />
    </Link>
          </h1>

          <h2 className="max-w-3xl text-3xl font-semibold md:text-3xl lg:text-3xl text-center mx-auto mt-3 text-gray-600">
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
            </div>
            </div>
          </div>
          <br />
          <br />
<Cards/>
<br />
<br />

          

  <h3 className="text-xl font-bold text-center">Videos related to RAZOMINER</h3>
<SliderLogo />

      
      {/* Feature section */}
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-1 font-bold text-4xl text-gray-900 sm:text-4xl'>
              Start Scrapping Data in Seconds
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
            Effortlessly harness data with our instant scraping solutions—start scraping in seconds!
            </p>
          </div>
        </div>



       

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
  <div className='mt-16 flow-root sm:mt-24'>
    <div className='-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl flex flex-col lg:flex-row items-center'>
      {/* Text Section (Left Side) */}
      <div className="lg:w-1/2 lg:pl-4 mb-4 lg:mb-0">
        <h2 className="text-3xl font-medium mb-4">Powerful Settings</h2>
        <p className="text-lg leading-relaxed">
          Insane list of settings for every geek. Check out all of the settings by clicking the button below:
        </p>
        <div className="mt-4">
        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfVMUbqZhAhjGjprNkzRv38wLDRjsOtH_gspLO1f7ImHLjONA/viewform'> <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl">
          See In Action Book a live demo
                    </button>
                    </Link> 
        </div>
      </div>

      {/* Image Section (Right Side) */}
      <div className="lg:w-1/2">
        <img src="image.png" alt="Razo360" className="w-[1000px] rounded-xl" />
      </div>
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

    </>
  );
}
