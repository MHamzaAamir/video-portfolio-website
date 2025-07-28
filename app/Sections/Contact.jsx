import ContactCards from "../components/ContactCards"
import ContactForm from "../components/ContactForm"


const Contact = () => {
  return (
    <>

    <div id="contact" className="py-20 px-5 flex flex-col gap-40 justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4'>Send me a <span className='text-blue-600 italic'>Direct</span> Message</div>
        <ContactCards/>
      </div>
      <div className="flex flex-col justify-center items-center gap-7">
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4'>Or use the <span className='text-blue-600 italic'>Contact Form</span></div>
        <ContactForm/>
      </div>


    </div>
    </>
  )
}

export default Contact
