// OurStory.tsx
import { Chrono } from "react-chrono";

const items = [
  {
    title: "August 22, 2016",
  },
  {
    title: "June 20, 2017 & May 18, 2018",
  },
  {
    title: "June 2019",
  },
  {
    title: "July 4, 2021",
  },
  {
    title: "January 2023",
  },
  {
    title: "April 9, 2024",
  },
  {
    title: "November 2, 2024",
  },
];
const customDarkTheme = {
  // Base colors
  textColor: "#000",
  primary: "#000",
  titleColor: "#00000",
  titleColorActive: "#00000",
  ardBgColor: "transparent",
  cardMediaBgColor: "transparent",
  shadowColor: "transparent",
  glowColor: "transparent",
  secondary: "#fff",
  cardBgColor: "#fff",
  cardTitleColor: "#000",
  toolbarBgColor: "#1a202c",
  toolbarBtnBgColor: "#4a5568",
};

function OurStory() {
  return (
    <div id="ourStory" className="w-full px-16 lg:px-32 mx-auto">
      <h1 className="text-7xl mt-24 lg:mt-0 w-full text-center main-font mb-24 md:mb-24">
        Our Story
      </h1>
      <div className="flex flex-col gap-24 px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row align-center w-full items-start bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[-1deg] w-full lg:w-1/2 text-center z-10">
            <img
              loading="lazy"
              src="https://i.imgur.com/n6bZ3v6.jpeg"
              className="w-full h-full  object-cover border-b mb-12 border-gray-300"
            />
          </div>
          <div className="text-left w-full lg:w-1/2 mt-12 px-0 lg:px-12 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4">
              <h1 className="text-7xl mono-space-regular">22</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                August
                <br />
                2016
              </h1>
            </div>
            <br />
            We met & fell in love.
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="w-full order-2 lg:order-1 lg:w-1/3 text-left w-1/2 mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4">
              <h1 className="text-7xl mono-space-regular">20</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                June
                <br />
                2017
                <br />- Hanze
              </h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="text-7xl mono-space-regular">18</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                May
                <br />
                2018
                <br />- Sel
              </h1>
            </div>
            <br />
            We graduated, always having each other's back.
          </div>
          <div className="flex justify-center order-1 lg:order-2 items-start gap-0 p-0 lg:p-8 w-full lg:w-2/3">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[-1deg] w-1/2 text-center z-10">
              <img
                loading="lazy"
                src="https://i.imgur.com/I8VJTIh.jpeg"
                alt="Image 1"
                className="w-full h-auto"
              />
              <p className="mt-12 text-sm text-gray-700 font-semibold"></p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[1deg] w-1/2 text-center -ml-8 z-20">
              <img
                loading="lazy"
                src="https://i.imgur.com/xsqfkQh.jpeg"
                alt="Image 2"
                className="w-full h-auto"
              />
              <p className="mt-12 text-sm text-gray-700 font-semibold"></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="bg-white p-4 rounded-lg mx-14 lg:mx-32 shadow-lg transform rotate-[-1deg] w-full lg:w-1/2 text-center z-10">
            <img
              loading="lazy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcGNnuDGnzW9l4JTxDO5_YmbVGRYBEBb6Vw&s"
              className="w-full h-full mb-12 object-cover border-b border-gray-300"
            />
          </div>
          <div className="text-left w-full mt-12 lg:mt-0 lg:w-1/2 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4">
              <h1 className="text-sm text-left text-gray-700">
                June
                <br />
                2019
              </h1>
            </div>
            <br />
            We parted ways.
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="text-left order-2 lg:order-1 w-full lg:w-1/2 mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4">
              <h1 className="text-7xl mono-space-regular">04</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                July
                <br />
                2021
              </h1>
            </div>
            <br />
            We forgive, we heal, and we begin again—together by God’s grace.
          </div>
          <div className="bg-white p-4 order-1 lg:order-2 rounded-lg shadow-lg transform rotate-[1deg] w-full lg:w-1/2 text-center z-10">
            <img
              loading="lazy"
              src="https://i.imgur.com/3gAEKVH.jpeg"
              className="w-full h-full mb-12 object-cover border-b border-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="bg-white p-4 rounded-lg mx-14 lg:mx-32 shadow-lg transform rotate-[-1deg] w-full lg:w-1/2 text-center z-10">
            <img
              loading="lazy"
              src="https://i.imgur.com/OK72GO8.jpeg"
              className="w-full h-full mb-12 object-cover border-b border-gray-300"
            />
          </div>
          <div className="text-left w-full lg:w-1/2 mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4">
              <h1 className="text-sm text-left text-gray-700 mt-2 mb-4">
                January
                <br />
                2023
              </h1>
            </div>
            God met us in His own ways, yet called us to serve together.
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="text-left order-2 lg:order-1 w-full lg:w-1/2 mt-4 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4 mb-4">
              <h1 className="text-7xl mono-space-regular">09</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                April
                <br />
                2024
              </h1>
            </div>
            <b>Baptism</b>
            <br />
            <br />
            We publicly declare our relationship with Christ together.
          </div>
          <div className="bg-white p-4 mx-14 lg:mx-32 order-1 lg:order-2 rounded-lg shadow-lg transform rotate-[1deg] w-full lg:w-1/2 text-center z-10">
            <img
              loading="lazy"
              src="https://i.imgur.com/VSvaiag.jpeg"
              className="w-full h-full mb-12 object-cover border-b border-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col align-center w-full lg:flex-row items-start bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <div className="flex flex-col justify-center items-start gap-0 p-0 lg:p-8 w-full lg:w-2/3">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[-1deg] w-full text-center z-10">
              <img
                loading="lazy"
                src="https://i.imgur.com/YRGVTNo.jpeg"
                alt="Image 1"
                className="w-full h-auto"
              />
              <p className="mt-12 text-sm text-gray-700 font-semibold"></p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[1deg] w-full text-center -ml-8 z-20">
              <img
                loading="lazy"
                src="https://i.imgur.com/BFRQPmS.jpeg"
                alt="Image 2"
                className="w-full h-auto"
              />
              <p className="mt-12 text-sm text-gray-700 font-semibold"></p>
            </div>
          </div>
          <div className="text-left mt-10 lg:mt-24 w-full lg:w-1/3 font-stretch-extra-expanded space-mono-regular mb-4">
            <div className="flex flex-row gap-4 mb-4">
              <h1 className="text-7xl mono-space-regular">02</h1>
              <h1 className="text-sm text-left text-gray-700 mt-2">
                November
                <br />
                2024
              </h1>
            </div>
            <b>Proposal</b>
            <br />
            We’re engaged by God’s grace.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
