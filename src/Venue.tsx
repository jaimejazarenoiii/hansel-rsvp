


function Venue() {
  return (

    <div id="venue" className="w-full flex flex-col lg:flex-row lg:px-24 items-start mb-4 flex">
      <div className="w-full mb-0 lg:w-1/2 p-4 space-y-4 pt-14 lg:pt-0 lg:mb-12 lg:mb-0">
        <h2 className="text-7xl w-full text-center main-font mt-5">Venue</h2>
        <div className="flex flex-col text-center">
          <p className="text-md pt-8 px-4 lg:px-0 lg:text-center font-stretch-extra-expanded space-mono-regular">Reception & Ceremony Venue: <b>Blue Gardens Wedding & Events Venue</b></p>
          <p className="text-md px-4 lg:px-0 lg:text-center font-stretch-extra-expanded space-mono-regular">Time 3:00 PM | The venue has designated parking space. </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.653181370308!2d121.07442177593258!3d14.675613085819634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b755c9741e83%3A0x394d8d6a9c811c6e!2sBlue%20Gardens%20Wedding%20and%20Events%20Venue!5e0!3m2!1sen!2sph!4v1751878636492!5m2!1sen!2sph"
          className="w-full h-[400px] p-4 lg:h-[630px]" loading="lazy"></iframe>
      </div>

      <div className="w-full px-4 lg:w-1/2 lg:px-16 space-y-4 pt-0 lg:pt-0 lg:pt-0 lg:mb-0">
        <img className="w-full h-[400px] rounded-ss-[2em] object-cover"
          src="https://www.jenniferweddingandevents.com/suppliers/wp-content/uploads/2021/03/35389728_1711869835529063_627249642521755648_o-1024x683.jpg" />
        <img className="w-full h-[400px] rounded-br-[2em] object-cover"
          src="https://scontent-mnl1-1.xx.fbcdn.net/v/t1.6435-9/118285662_3177019685680730_8502980328430088126_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGk1XhS2dnp3wwrilL72laMO3n8Q9IPAVk7efxD0g8BWdIEaIBUfkAqMrdsPuISXf6ZTZcOY6RPKThUwK8JIvD7&_nc_ohc=2MMoRv9ZROcQ7kNvwGdeNdG&_nc_oc=Adld5SC9YPqwVulUnpWrculRZymSGc8iaPBQRq76cnFfzUpVVwrgU2KZLaVlrWM4Us0&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=D6bFfQUtYvtPSAiFUUmk8w&oh=00_AfTUCRuvED9jO8AUCQTgNHllrRKStDRRdjoCuzoPDRQXXA&oe=68972293" />
      </div >

    </div>
  )
}

export default Venue