// MainBanner.tsx

import ring from "./ring.png";
import bg from "./main_banner_bg.webp";
import bgMusic from "./bgMusic.mp3";

function MainBanner() {
  return (
    <>
      <audio id="bgMusic" hidden loop>
        <source src={bgMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex flex-col p-0 lg:p-24 lg:flex-row main-font">
        <div className="w-full lg:w-1/3 flex flex-col text-center lg:text-left p-12">
          <img src={ring} className="w-16 h-16 self-center lg:self-start" />
          <h1 className="text-xl lg:text-3xl space-mono-regular font-stretch-extra-expanded text-gray-400">
            WEDDING INVITATION
          </h1>
          <h1 className="text-7xl lg:text-9xl text-center lg:text-left py-16">
            Hanze <br /> and Krisel
          </h1>
          <a
            href=""
            className="space-mono-regular px-8 py-2 m-auto lg:m-0 w-1/1 lg:w-1/2 text-center border-1 rounded"
          >
            RSVP
          </a>
        </div>

        <div className="w-full lg:w-2/3 pl-0 lg:pl-12 relative">
          <img
            src={bg}
            className="w-full h-[470px] lg:h-full object-cover rounded-0 lg:rounded-ss-[20em] z-10 pr-16"
          />
          <div className="absolute top-0 right-0 text-gray-400 z-20 text-right">
            <h1 className="text-8xl">
              08
              <br />
              22
              <br />
              25
            </h1>
            <h1 className="text-2xl space-mono-regular">
              SAVE
              <br />
              THE
              <br />
              DATE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
