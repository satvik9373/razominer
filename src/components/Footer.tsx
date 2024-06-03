import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <Image className="h-8" src="/logo.png" width={100} height={100} alt="Company Logo" />
              </div>

              <p className="mt-4 max-w-xs text-gray-500">
              your leads scrapping powerhouse from web
              </p>

              <div className="mt-8 flex space-x-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.53c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3V22C18.34 21.12 22 16.99 22 12z"/>
                  </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.52 4.48 4.48 0 00-7.86 3.19c0 .35.04.7.11 1.03-3.74-.19-7.05-1.98-9.27-4.7a4.44 4.44 0 00-.61 2.27c0 1.56.79 2.93 2 3.74a4.51 4.51 0 01-2.05-.57v.06c0 2.18 1.55 4 3.61 4.42a4.52 4.52 0 01-2.04.08 4.48 4.48 0 004.19 3.11A9.01 9.01 0 012 19.54a12.7 12.7 0 006.88 2.02c8.27 0 12.79-6.85 12.79-12.79 0-.19 0-.38-.01-.56A9.22 9.22 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 00-6 6v6h-2v-6a4 4 0 10-8 0v6H2v-6a6 6 0 1112 0v6h-2v-6a4 4 0 10-8 0v6H2v-6a6 6 0 0112 0v6h-2v-6a4 4 0 108 0v6h-2v-6a6 6 0 00-6-6z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div>
                <p className="font-medium text-gray-900">Company</p>
                <nav className="mt-4 flex flex-col space-y-2">
                  <a href="/about-US" className="text-gray-700 transition hover:text-gray-700/75"> Our Vision </a>
                  <a href="/PaymentDetails" className="text-gray-700 transition hover:text-gray-700/75"> Payment Gateways </a>
                  <a href="/FAQ" className="text-gray-700 transition hover:text-gray-700/75"> FAQ </a>
                </nav>
              </div>
              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>
                <nav className="mt-4 flex flex-col space-y-2">
                  <a href="/FAQ" className="text-gray-700 transition hover:text-gray-700/75"> FAQs </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVMUbqZhAhjGjprNkzRv38wLDRjsOtH_gspLO1f7ImHLjONA/viewform" className="text-gray-700 transition hover:text-gray-700/75"> Live Demo </a>
                </nav>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
