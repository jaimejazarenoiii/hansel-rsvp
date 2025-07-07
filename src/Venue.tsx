


function Venue() {
  return (

    <div className="w-full flex flex-row mb-4">
      <div className="w-1/2">
        <h2 className="text-5xl mt-36 w-full text-center main-font font-bold">VENUE</h2>

        <div className="flex flex-col text-center">
          <p className="text-md mt-12  px-4 lg:px-0 lg:text-left font-stretch-extra-expanded space-mono-regular ml-25">Reception & Ceremony Venue: <b>Blue Gardens Wedding & Events Venue</b></p>
          <p className="text-md px-4 lg:px-0 lg:text-left font-stretch-extra-expanded space-mono-regular ml-25">Time 3:00 PM | Parking there is parking space in the venue. </p>
        </div>

        <img className="mx-auto w-3/4 h-[400px] mt-4 rounded-ss-[2em]"
          src="https://www.jenniferweddingandevents.com/suppliers/wp-content/uploads/2021/03/35389728_1711869835529063_627249642521755648_o-1024x683.jpg" />
        <img className="mx-auto w-3/4 h-[400px] mt-4 rounded-br-[2em]"
          src="https://www.bluegardensvenue.com/images/07/new/2.jpg" />
      </div>

      <div className="w-1/2">
        <h2 className="text-5xl mb-12 mt-36 w-full text-center main-font font-bold">LOCATION</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.653181370308!2d121.07442177593258!3d14.675613085819634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b755c9741e83%3A0x394d8d6a9c811c6e!2sBlue%20Gardens%20Wedding%20and%20Events%20Venue!5e0!3m2!1sen!2sph!4v1751878636492!5m2!1sen!2sph" 
        className="w-full h-[500px] overflow-hidden" loading="lazy"></iframe>
      </div >

    </div>
  )
}

export default Venue