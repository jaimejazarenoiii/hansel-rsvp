import InvitationEntourage from "./invi_entourage.png";

function Invitation() {
  return (
    <div id="entourage" className="flex flex-col py-12 px-4 mx-auto">
      <img loading="lazy" src={InvitationEntourage} className="mx-auto"></img>
    </div>
  );
}

export default Invitation;
