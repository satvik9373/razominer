import React from 'react';

const Page = () => {
  return (
    <div>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Advanced Tips
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Faster Scraping Did you know that you can simply open another copy of the program? Just open the program again and a new copy of the program will popup. This new copy has no links to the original and can control its own browser. Use multiple copies of the program to do their own scrapes, divide the original work in half across two copies and suddely you are 2x as fast! How many copies you can run really depends on the specs of your computer, 2 is usually safe for everyone. But some customers have shown me that they had 8 copies of the program running on one computer! You will need to do a bit of trial and error to figure out what works for your needs. I can't say how many copies you can run in total, but its something to think about if you want to spread the work out more and get faster results. Remember though you will probably need proxies to use multiple copies if you use any scraper other than the google maps quick, full, and places scrapers.
          </p>
        </details>

        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            Maximizing Data Extraction from Location-Based Searches
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Getting More Data The sites we scrape all have some sort of results limit. Like for example Google Maps is 200 per search. The key to getting around these limits is to simply do more searches. As each search can return 200 more results. The best way I know to do this is to break down your target location into a smaller area. Anything that is recognized by the target site will work. For example if you searched for Cafes in New York, NY you would only get 200 results on Google. But if you searched for Cafes in Brooklyn, Cafes in Manhattan etc each of the 5 burros would return 200 results. So you can have 1000 results now. But what if that is not enough? What if you want every single cafe in New York. Time to use a smaller location. For something like this I would recommend finding a list of all of the zip codes that are in New York. Now your going to want to use our lists features and have the scraper search for cafes in every zip code in the City. Each zip code could return 200 results. New York has 176 zip codes so now you will have scrapped 35,200 listings. You can now combine these csv files and remove duplicate listings that may have over lapped. Your final csv should be a very detailed scrape of the target city. This works for everything. If you are targeting a state then try cities in that state. If your at cities try zip codes, districts, neighborhoods, cross streets. Any sort of location should work. The key is to search smaller and smaller until you get the results you want.
          </p>
        </details>

        {/* Duplicate the above details section for additional boxes */}
        
        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            Enhancing Scraping Efficiency with Custom URLs
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Use Custom URLs If you have a custom url from one of the sites that we scrape you can use it. This includes filters or custom settings provided by the website. Just set up your custom url in the site you are using in your browser. Make sure the page has the SAME LAYOUT as a normal search page. E.g. It shows the listings 1-10 and has a "Next Page" button of some sort at the bottom. To use your custom URL use the same method as mentioned above. Use a normal non-list search for your target site. Pause the bot when the page loads (you have 2 seconds to do so). Enter your url into the browser bar and hit enter. Wait for your new custom page to load and then hit Play on the bot again. The bot will now use your custom URL with filters or whatever you changed.
          </p>
        </details>

        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
            Scaling Up Data Scraping with Zip Code Breakdowns
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          Large Scrapes To scrape huge amounts of data you will need to break down the data into smaller scrapes. I tell users with big cities/regions to break the search locations down into zip codes. Once you have your zip codes use the list function mentioned early in the readme to load the zip codes into the scraper. Run the bot and let it complete the list (this will take a long time). Now you will need to combine all of the csv's into one giant file. With the giant file you will need to remove duplicate entries since some searches will overlap into other areas. Your final result should be one giant list of the city/area with each line being a unique business/location. This method is required for anywhere where you need more than 1,000 results.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Page;
