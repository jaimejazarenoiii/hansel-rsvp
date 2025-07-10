import InvitationFace from "./inv_1.jpeg";
import InvitationDressCode from "./invi_dress.jpeg";
import InvitationEntourage from "./invi_entourage.jpeg";
import InvitationLastPage from "./invi_last.jpeg";

function Invitation() {
  return (
    <div
      id="entourage"
      className="grid grid-cols-1 lg:grid-cols-2 px-4 py-0 lg:px-32 lg:py-18"
    >
      <div className="p4">
        <img src={InvitationFace} className="w-full h-full"></img>
      </div>
      <div className="p4">
        <img src={InvitationDressCode} className="w-full h-full"></img>
      </div>
      <div className="p4">
        <img src={InvitationEntourage} className="w-full h-full"></img>
      </div>
      <div className="p4">
        <img src={InvitationLastPage} className="w-full h-full"></img>
      </div>
    </div>
  );
}

export default Invitation;
