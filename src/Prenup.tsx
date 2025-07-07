import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full mx-auto p-2 lg:p-32">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/3">
          <h1 className="text-7xl mt-36 w-full text-center lg:text-left main-font">
            Prenup Photos
          </h1>
          <p className="text-md mt-12 text-center px-4 lg:px-0 lg:text-left font-stretch-extra-expanded space-mono-regular">
            <q>
              But seek first his kingdom and his righteousness, and all these
              things will be given to you as well.
            </q>
            <br />
            <br />- <i>Matthew 6:33</i>
          </p>
        </div>
        <Slider {...settings} className="w-full lg:w-2/3">
          <div className="flex align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/i0GSqv9.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/7GV7J8H.jpeg"
              className="aspect-[2/3]  object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/FwMWgdd.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/NAZqG4J.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/OHmSO69.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/IpZk0My.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/cQvnMwi.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/nIKH5TS.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/K3yHvka.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
          <div className="flex flex-col align-center w-full items-center bg-white mt-2 mb-2 rounded-none shadow-none border-black shadow-md p-2 lg:p-24">
            <img
              src="https://i.imgur.com/dMxJWxL.jpeg"
              className="aspect-[2/3] object-cover border-b border-gray-300"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
