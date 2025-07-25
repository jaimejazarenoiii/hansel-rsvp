import React from "react";
import SlideUp from "./SlideUp";

function Reminders() {
  return (
    <div
      id="fAQs"
      className="w-full scroll-mt-32 flex flex-col lg:flex-row px-8 lg:px-24"
    >
      <div className="w-full lg:w-1/2 p-4 space-y-4 pt-12 lg:pt-0 mb-12 lg:mb-0">
        <SlideUp>
          <h2 className="text-5xl font-bold text-center mb-12 main-font">
            Details
          </h2>
          <div className="space-mono-bold font-stretch-extra-expanded">
            <details>
              <summary className="cursor-pointer text-start px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Reception & Ceremony Venue
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600">
                Blue Gardens Wedding & Events Venue
                <br />
                The ceremony will be at Upper Gardens, with the reception to
                follow at Chateau Hall.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Address
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                28 Samonte Street via North Zuzuaregui Road, Commonwealth
                Avenue, Quezon City
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Time <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                The ceremony will start at exactly 3:00 PM. We kindly request
                your presence at the venue 30 minutes prior to the start of the
                ceremony.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Parking <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                There is parking space in the venue.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer text-start px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Attire for Principal Sponsors
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                Ladies: Formal White Long Dress <br />
                Gentlemen: Black Coat, White Long Sleeves, Black Necktie, Black
                Pants
                <p className="text-bold mt-2 text-xs">
                  **Strictly no wearing of Polo Shirt, T-shirt, Denim, Slippers,
                  Jeans
                </p>
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Attire for Guests
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-start text-gray-600 border-t border-gray-300">
                Ladies: Formal White Jumpsuit <br />
                Gentlemen: Formal White Long Sleeves & Black Slacks or Black
                Pants
                <p className="text-bold mt-2 text-xs">
                  **Strictly no wearing of Polo Shirt, T-shirt, Denim, Slippers,
                  Jeans
                </p>
              </div>
            </details>
          </div>
        </SlideUp>
      </div>

      <div className="w-full lg:w-1/2 p-4 space-y-4">
        <SlideUp>
          <h2 className="text-5xl font-bold text-center mb-8 main-font">
            Reminders / FAQs
          </h2>

          <div className="space-mono-bold font-stretch-extra-expanded">
            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Adult Only Celebration
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600">
                As much as we love your children, we have chosen to make our
                wedding an adults-only celebration. We hope this allows you a
                night off to relax and enjoy with us!
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                RSVP
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                Kindly confirm via SMS, Facebook Messenger, or through this
                website. We sincerely appreciate your understanding in not
                bringing additional guests beyond your reserved seat(s). SMS:
                09179451662
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Gentle Request
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                Your presence is the greatest gift we could hope for. As we are
                hosting an intimate gathering, please note that this invitation
                is extended to you personally. We respectfully ask that no
                additional guests be brought.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Gifts <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                As we begin this beautiful journey together, your love, prayers,
                and presence on our special day are the greatest gifts we could
                ever receive. Should you wish to bless us in another way, a
                monetary gift would be deeply appreciated as we start our new
                life as husband and wife.
              </div>
            </details>

            <details>
              <summary className="cursor-pointer text-left px-4 py-3 border-b border-gray-300 text-gray-800 font-medium flex justify-between items-center">
                Help Us Remember This Day
                <span className="text-xl">+</span>
              </summary>
              <div className="px-4 py-3 bg-white text-gray-600 border-t border-gray-300">
                Use our hashtag: #HanzeSelAnsweredPrayer
                #SelIsFinallyInGoodHanze
              </div>
            </details>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}

export default Reminders;
