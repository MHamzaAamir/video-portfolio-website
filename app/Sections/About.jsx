import AboutButtons from "../components/AboutButtons"
import Testimonials from "../components/Testimonials"



const About = () => {
  return (
    <>
      <div id="about" className='h-[100vh] w-screen flex items-center justify-center flex-col gap-7'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Ready to <span className='text-blue-600 italic'>scale</span> your brand with editing?</div>
        <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>We Work with personal brands to make them attract their dream customers through our Premium Retention Based Video Editing</div>
        <div>
          <AboutButtons />
        </div>

      </div>
      <div className="w-screen py-20 flex flex-col gap-14 items-center">
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4'>Here is what our clients have to say</div>
        <Testimonials />
      </div>
    </>
  )
}

export default About
