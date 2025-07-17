import SlideUp from "./SlideUp";

function RSVP() {
  return (
    <div id="rsvp" className="flex flex-col py-32 px-4 lg:px-32">
      <SlideUp>
        <h1 className="main-font text-7xl mb-24">RSVP</h1>
        <iframe
          className="w-full h-[1300px]"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfuyfmoPJ_HhQha-u9u8MnyRUTCz1PCMCytEkCN8scNNSQAPA/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </SlideUp>
    </div>
  );
}

export default RSVP;
