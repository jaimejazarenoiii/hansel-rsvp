import InvitationFace from "./inv_1.jpeg";
import InvitationDressCode from "./invi_dress.jpeg";
import InvitationEntourage from "./invi_entourage.jpeg";
import InvitationLastPage from "./invi_last.jpeg";

function Invitation() {
  return (
    <div
      id="entourage" className="flex flex-col py-12 px-4 mx-auto">
     
        <img src={InvitationEntourage} className="mx-auto"></img>
      
    </div>
  );
}

export default Invitation;
