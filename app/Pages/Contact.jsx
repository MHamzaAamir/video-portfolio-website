

const Contact = () => {
  return (
    <div className="py-28 px-5 flex flex-col gap-10 justify-center items-center">
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Get in <span className='text-blue-600 italic'>Touch</span></div>
        <form className="flex py-4 w-[80%] max-w-[700px] items-center flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <input className="bg-white px-2 py-3 rounded-[5px] flex-1 text-black" type="text" name="firstname" required placeholder="First Name"/>
                <input className="bg-white px-2 py-3 rounded-[5px] flex-1 text-black" type="text" name="lastname" required placeholder="Last Name"/>
            </div>
            <input className="bg-white w-full px-2 py-3 rounded-[5px] text-black" type="email" required placeholder="Your Email"/>
            <textarea className="bg-white w-full resize-none px-2 py-3 rounded-[5px] text-black" name="message" required placeholder="Your Message" rows={5} />
            <button className="bg-blue-600  py-2 px-3 rounded-xl hover:scale-105 duration-200 cursor-pointer">Submit</button>
        </form>
      
    </div>
  )
}

export default Contact
