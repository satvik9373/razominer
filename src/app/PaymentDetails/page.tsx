import Image from 'next/image'
import React from 'react'

const Paymentdetails = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-1 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4 relative">
            <video autoPlay loop muted className="w-full rounded-md p-2 sm:p-8 md:p-20">
              <source src="/razominer.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="py-10 bg-transparent">
            <section className="flex flex-col items-center">
              <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
                  <Image src='/location.png' width={100} height={50} alt="Leads" />
                  <h3 className="text-xl font-bold mt-4">Multi-Location Extraction</h3>
                  <p className="text-gray-500 mt-2 text-center">
                    Extract leads from multiple <span className='font-bold text-gray-500'>pin codes, plus codes, landmarks,</span> and <span className='font-bold text-gray-500'>locations</span> simultaneously, streamlining the data extraction process and saving time.
                  </p>
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
                <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-bold">International Payment options</h3>
                  <Image src='/logo-stripe.png' width={1000} height={1000} alt="Leads" />
                </div>
              </div>
            </section>
          
          </div>
          <h3 className="text-xl font-bold mb-5 mt-10 text-center">One step Payment Option for Indian Customers</h3>
          <p className="text-gray-500 mt-2 text-center mb-20">
          Pay the above amount with any of your UPI apps into the below Qr code and send a screenshot to +917907682565
          at whatsapp and feel free to call us on this number before or after doing the payment </p>
        </div>
        <Image src='/12months.png' width={1000} height={1000} alt="Leads"  className='mb-10'/>
        <h3 className="text-2xl font-bold mb-2 text-center">UPI ID : <span className='font-bold text-gray-500'>axdone360@okaxis </span> </h3>
        <h3 className="text-2xl font-bold text-center">UPI Number :<span className='font-bold text-gray-500'>7907682565 </span> </h3>

      </div>
    </div>
  )
}

export default Paymentdetails
