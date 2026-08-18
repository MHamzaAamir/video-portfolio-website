
const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col py-20 justify-center items-center gap-10">
      <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Pricing that <span className='text-blue-600 italic'>fits</span> your needs</div>
      <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>Custom pricing designed around your content, your goals, and your budget</div>

      <div className="w-[80%] max-w-[1200px] relative overflow-hidden rounded-2xl outline-1 outline-gray-900 px-6 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="absolute top-0 -left-10 rounded-full h-20 w-20 bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-0 -right-10 rounded-full h-20 w-20 bg-blue-600 blur-3xl"></div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="text-3xl md:text-4xl font-bold">Custom Pricing</div>
          <div className="text-gray-300 text-sm sm:text-base">
            Every project is different, so every quote is too. Tell us about your content and we&apos;ll build a package that works for you.
          </div>
          <ul className="list-disc ml-6 flex flex-col gap-2 text-gray-300 text-sm sm:text-base">
            <li>Flexible plans for short form, long form, and everything in between</li>
            <li>Scale up or down as your content needs change</li>
            <li>Transparent, upfront pricing, no hidden costs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <div className="text-5xl md:text-6xl font-bold">Let&apos;s talk</div>
          <div className="text-gray-300 text-sm sm:text-base max-w-[280px]">Get a personalized quote based on your exact requirements</div>
          <a href="#contact" className="bg-blue-600 py-3 px-8 rounded-xl hover:scale-105 duration-200 cursor-pointer font-medium">Request a Quote</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
