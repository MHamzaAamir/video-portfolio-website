import Video from "@/models/Work"
import VideoBox from '../components/VideoBox'
import dbConnect from "@/lib/mongodb"; 

let links1 = [], links2 = [], links3 = [];


const Work = async () => {
  await dbConnect()

  const videos = await Video.find({})
  videos.forEach(({ type, videos }) => {
    const embedLinks = videos.map(id => `https://www.youtube.com/embed/${id}?si=3xLqgHqqM2A8FdDT`);
    
    if (type === "short") links1 = embedLinks;
    if (type === "long") links2 = embedLinks;
    if (type === "vsl") links3 = embedLinks;
  });

  return (
    <div id = "works">
      <div className='py-20 w-screen flex flex-col gap-10 justify-center items-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Short form <span className='text-blue-600 italic'>editing</span> work</div>
        <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>Having worked with Speakers, Entreprenuers, Ecom Coaches across a number of Industries. Here ARE our best Short form editing works. Have a look</div>
        <VideoBox links={links1}/>
      </div>
      <div className='py-20 w-screen flex flex-col gap-10 justify-center items-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Long form <span className='text-blue-600 italic'>editing</span> work</div>
        <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>We've worked across a number of creators and here's are our best long form editing works. Check it out.</div>
        <VideoBox links={links2}/>
      </div>
      <div className='py-20 w-screen flex flex-col gap-10 justify-center items-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Video Sales <span className='text-blue-600 italic'>Letter</span></div>
        <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>We've worked Worked with Big Companies like Ziglar Inc and others creating them some High Converting Video Sales Letter That is a must for your landing Pages</div>
        <VideoBox links={links3}/>
      </div>
      
    </div>

  )
}

export default Work
