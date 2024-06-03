"use client"
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Paymentdetails = () => {
  const imageRef = useRef(null);

  const scrollToImage = () => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-1 flow-root sm:mt-24">
        <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4 relative self">
        <div className="relative">
        <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4 relative self">
  {/* Tab image */}
</div>
</div>
</div>

          <div className="py-10 bg-transparent">
            <section className="flex flex-col items-center">
              <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg mt-14">
                  <h3 className="text-xl font-bold text-center">Indian Payment options</h3>
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    <Image src='/amazonpay.png' width={100} height={100} alt="Amazon Pay" />
                    <Image src='/bharatpay.png' width={100} height={100} alt="Bharat Pay" />
                    <Image src='/gpay.png' width={100} height={100} alt="Google Pay" />
                    <Image src='/paytm.png' width={100} height={100} alt="Paytm" />
                    <Image src='/phonepay.png' width={100} height={100} alt="Phone Pay" />
                    <Image src='/upi.png' width={100} height={100} alt="UPI" />
                  </div>
                  <div className='mt-5 flex flex-col items-center space-y-4'>
                    <Button className='bg-green-400 rounded-3xl gap-3' onClick={scrollToImage}>
                      <ShoppingCartIcon /> One step QR code Payment
                    </Button>
                    <Link href='https://pages.razorpay.com/pl_NpxMhCLpZz2ylH/view'>
                      <Button className='bg-blue-500 rounded-3xl gap-3'>
                        <ShoppingCartIcon /> One step QR code Payment
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-lg backdrop-blur-lg">
                  <h3 className="text-xl font-bold mt-4 text-center">Transfer using bank account</h3>
                  <h3 className="text-xl mt-6 text-gray-600 self-start">Federal Bank</h3>
                  <ul className="self-start mt-2">
                    <li>• Account number: 23760100002023</li>
                  </ul>
                  <ul className="text-center mt-5">
                    <li>• Customer name: AHAMMED ASJID</li>
                    <li>• Branch name: Lulu Mall-Tvm</li>
                    <li>• Branch IFSC: FDRL0002376</li>
                    <li>• MMID: 9049023</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg -mt-9">
                  <h3 className="text-xl font-bold">International Payment options</h3>
                  <Image src='/logo-stripe.png' width={1000} height={1000} alt="Leads" />
                    <Link href='https://buy.stripe.com/14kcQKcTvfMz6eQbJy'>
                      <Button className='bg-green-400 rounded-3xl gap-3 mt-5'>
                        <ShoppingCartIcon /> Pay now with stripe
                      </Button>
                    </Link>
                </div>
                
              </div>
            </section>
          </div>
          <h3 className="text-xl font-bold mb-5 mt-10 text-center">One step Payment Option for Indian Customers</h3>
          <p className="text-gray-500 mt-2 text-center mb-20">
            Pay the above amount with any of your UPI apps into the below Qr code and send a screenshot to +917907682565 at whatsapp and feel free to call us on this number before or after doing the payment
          </p>
        </div>
        <div ref={imageRef}>
          <Image src='/12months.png' width={1000} height={1000} alt="Leads" className='mb-10' />
          <h3 className="text-2xl font-bold mb-2 text-center">UPI ID : <span className='font-bold text-gray-500'>axdone360@okaxis </span> </h3>
          <h3 className="text-2xl font-bold text-center">UPI Number :<span className='font-bold text-gray-500'>7907682565 </span> </h3>
        </div>
      </div>
    </div>
  );
};

export default Paymentdetails;
