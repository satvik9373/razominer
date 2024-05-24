import Image from 'next/image'
import React from 'react'

export const Cards = () => {
  return (
    <div className="py-10 bg-transparent">
      <section className="flex flex-col items-center">
        <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/leads.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">Leads Extraction</h3>
            <p className="text-gray-500 mt-2 text-center">
              Extract data from <span className='font-bold text-gray-500'>Google Maps, Yellow Pages, Bing maps</span> and social media platforms like <span className='font-bold text-gray-500'>Facebook, LinkedIn, Instagram</span> with ease. Customize your search parameters to find the most relevant leads for your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/location.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">Multi-Location Extraction</h3>
            <p className="text-gray-500 mt-2 text-center">
            Extract leads from multiple <span className='font-bold text-gray-500'>pin codes, plus codes, landmarks,</span> and <span className='font-bold text-gray-500'>locations</span> simultaneously, streamlining the data extraction process and saving time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/new-keywords.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">Multi-Keyword Search</h3>
            <p className="text-gray-500 mt-2 text-center">
            Perform searches <span className='font-bold text-gray-500'>using multiple keywords</span> simultaneously, allowing for more comprehensive and <span className='font-bold text-gray-500'>targeted lead</span> extraction across various criteria.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/ai.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">AI-Based Extraction</h3>
            <p className="text-gray-500 mt-2 text-center">
            Utilize advanced artificial intelligence algorithms for data extraction, enabling <span className='font-bold text-gray-500'>Razo Miner</span> to intelligently analyze and extract relevant leads with higher accuracy and efficiency.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/excelsheet.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">Auto Save to Excel Sheet</h3>
            <p className="text-gray-500 mt-2 text-center">
            Automatically save extracted leads to an <span className='font-bold text-gray-500'>Excel sheet,</span> eliminating the need for manual data entry and ensuring seamless organization and accessibility of extracted data.
            
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 rounded-lg p-4 sm:p-5 md:p-6 transition duration-300 hover:shadow-lg">
            <Image src='/captcha.png' width={100} height={50} alt="Leads" />
            <h3 className="text-xl font-bold mt-4">Anti-Captcha Integration</h3>
            <p className="text-gray-500 mt-2 text-center">
            Seamlessly integrate anti-captcha technology to <span className='font-bold text-gray-500'>bypass CAPTCHA challenges during data extraction</span> processes, ensuring uninterrupted and efficient lead extraction.
            
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
