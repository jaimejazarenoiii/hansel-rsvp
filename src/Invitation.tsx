import InvitationEntourage from "./invi_entourage.png";
import SlideUp from "./SlideUp";

function Invitation() {
  return (
    <div id="entourage" className="flex flex-col py-12 px-4 mx-auto">
      <SlideUp>
        <img loading="lazy" src={InvitationEntourage} className="mx-auto"></img>
      </SlideUp>
    </div>
  );
}

export default Invitation;
