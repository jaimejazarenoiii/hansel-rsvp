import { useEffect, useRef } from "react";
import SlideUp from "./SlideUp";

function Overlay() {
  useEffect(() => {
    const button = document.getElementById(
      "openInvitationButton"
    ) as HTMLButtonElement | null;
    const audio = document.getElementById("bgMusic") as HTMLAudioElement | null;
    const overlay = document.getElementById("overlay") as HTMLElement | null;

    if (button) {
      button.addEventListener("click", () => {
        if (audio) {
          audio
            .play()
            .then(() => console.log("🎵 Playing"))
            .catch((err) => console.warn("❌ Could not play audio", err));
        }
        if (overlay) {
          overlay.style.display = "none";
        }
      });
    }
  }, []);
  return (
    <div
      id="overlay"
      className="w-full h-full fixed bg-black z-[999] flex flex-col lg:flex-row justify-center"
    >
      <div className="w-1/2 main-font self-center">
        <SlideUp>
          <h1 className="text-7xl lg:text-9xl text-white">You are invited.</h1>
          <button
            id="openInvitationButton"
            className="space-mono-regular text-l mt-12 bg-white text-black px-12 lg:px-24 py-4 rounded"
          >
            Open Invitation
          </button>
        </SlideUp>
      </div>
      <div className="w-full lg:w-1/2 self-center mt-12 lg:mt-0">
        <SlideUp>
          <div className="flex justify-center items-start gap-0 p-0 lg:p-8">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[-1deg] w-64 text-center z-10">
              <img
                loading="lazy"
                src="https://i.imgur.com/IpZk0My.jpeg"
                alt="Image 1"
                className="w-full h-auto"
              />
              <p className="mt-4 text-sm text-gray-700 font-semibold"></p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-[1deg] w-64 text-center -ml-8 z-20">
              <img
                loading="lazy"
                src="https://i.imgur.com/dMxJWxL.jpeg"
                alt="Image 2"
                className="w-full h-auto"
              />
              <p className="mt-4 text-sm text-gray-700 font-semibold"></p>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}

export default Overlay;
