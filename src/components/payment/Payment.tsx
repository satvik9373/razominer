import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { TooltipProvider } from '../ui/tooltip';
import UpgradeButton from '../UpgradeButton';

const pricingItems = [
  {
    plan: '6 months plan',
    tagline: 'For small side projects.',
    price: 99,
    features: [
      {
        text: 'All features Unlocked',
        footnote: 'The maximum amount of pages per PDF-file.',
      },
      {
        text: 'Unlimited leads extraction and auto save',
        footnote: 'The maximum file size of a single PDF file.',
      },
      {
        text: 'Personal support in Installation',
      },
      {
        text: 'Recorded and personal Tutorial for software',
        footnote: 'Better algorithmic responses for enhanced content quality',
        negative: true,
      },
      {
        text: '6 months system format warranty',
        negative: true,
      },
    ],
  },
  {
    plan: '12 months plan',
    tagline: 'For larger projects with higher needs.',
    price: 129,
    features: [
      {
        text: 'All features Unlocked',
        footnote: 'The maximum amount of pages per PDF-file.',
      },
      {
        text: 'Unlimited leads extraction and auto save',
        footnote: 'The maximum file size of a single PDF file.',
      },
      {
        text: 'Personal support in Installation',
      },

      {
        text: 'Recorded and personal Tutorial for software',
        footnote: 'Better algorithmic responses for enhanced content quality',
        negative: true,
      },
      {
        text: '12 months system format warranty',
        negative: true,
      },
      {
        text: 'Personal guidance according to your Business',
        negative: true,
      },
    ],
  },
];

function Payment() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <MaxWidthWrapper classname="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">Pricing</h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Whether you&apos;re just trying out our service or need more, we&apos;ve got you covered.
          </p>
        </div>
        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, price, features }) => (
              <div
                key={plan}
                className={`relative rounded-2xl bg-white shadow-lg ${
                  plan === '12 months plan'
                    ? 'border-2 border-blue-600 shadow-blue-200'
                    : 'border border-gray-200'
                }`}
              >
                
                {plan === '12 months plan' && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                    Upgrade now
                  </div>
                )}
                <div className="p-5">
                  <h3 className="my-3 text-center font-display text-3xl font-bold">{plan}</h3>
                  <p className="text-gray-500">{tagline}</p>
                  <p className="my-5 font-display text-6xl font-semibold">${price}</p>
                  <ul className="mt-6 space-y-4">
                    {features.map(({ text, footnote, negative }, index) => (
                      <li key={index} className={negative ? 'text-gray-500' : ''}>
                        <div className="flex items-center">
                          <span>{text}</span>
                          
                          {footnote && (
                            <span className="ml-2 text-xs text-gray-400" title={footnote}>
                              *
                            </span>
                          )}

                        
                        </div>
                       
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <p className="text-red-600 mr-2">Normal price $120</p>
                    </div>
                    
                    <UpgradeButton />
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Payment;
