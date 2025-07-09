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
    <div id="ourStory" className="w-full px-0 lg:px-32 mx-auto">
      <h1 className="text-7xl mt-36 lg:mt-0 w-full text-center main-font mb-48 md:mb-24">
        Our Story
      </h1>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={650}
        theme={{
          textColor: "#000",
          primary: "#000000",
          titleColor: "#00000",
          titleColorActive: "#00000",
          secondary: "#fff",
          cardBgColor: "#fff",
          cardTitleColor: "#000",
          toolbarBgColor: "#1a202c",
          toolbarBtnBgColor: "#4a5568",
          cardMediaBgColor: "#fff",
          shadowColor: "#fff",
          glowColor: "#fff",
        }}
        hideControls
        borderLessCards
        lineWidth={0.5}
        timelinePointDimension={10}
        mediaSettings={{
          align: "center",
          fit: "cover",
        }}
        allowDynamicUpdate
        disableToolbar={true}
        classNames={{
          card: "text-center !justify-center",
        }}
      >
        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/n6bZ3v6.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-12 font-stretch-extra-expanded space-mono-regular mb-4">
            We met & fell in love.
          </div>
        </div>
        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/I8VJTIh.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            We graduated, always having each other's back.
          </div>
        </div>

        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcGNnuDGnzW9l4JTxDO5_YmbVGRYBEBb6Vw&s"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-12 font-stretch-extra-expanded space-mono-regular mb-4">
            We parted ways.
          </div>
        </div>

        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/3gAEKVH.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            We forgive, we heal, and we begin again—together by God’s grace.
          </div>
        </div>

        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/OK72GO8.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-8 font-stretch-extra-expanded space-mono-regular mb-4">
            God met us in His own ways, yet called us to serve together.
          </div>
        </div>

        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/VSvaiag.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-4 font-stretch-extra-expanded space-mono-regular mb-4">
            <b>Baptism</b>
            <br />
            We publicly declare our relationship with Christ together.
          </div>
        </div>

        <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-none">
          <img
            src="https://i.imgur.com/YRGVTNo.jpeg"
            className="w-[500px] h-[400px] lg:h-[500px] object-cover border-b border-gray-300"
          />
          <div className="text-center mt-4 font-stretch-extra-expanded space-mono-regular mb-4">
            <b>Proposal</b>
            <br />
            We’re engaged by God’s grace.
          </div>
        </div>
      </Chrono>
    </div>
  );
}

export default OurStory;
