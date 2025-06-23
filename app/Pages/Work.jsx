import React from 'react'

import VideoBox from '../components/VideoBox'

const links1 = [
  "https://www.youtube.com/embed/XCsV1djBu24?si=JZsvNFC1XqR5V-Ty",
  "https://www.youtube.com/embed/1BluDplle_8?si=JZsvNFC1XqR5V-Ty",
  "https://www.youtube.com/embed/Tq2pZHP-AmA?si=JZsvNFC1XqR5V-Ty",
  "https://www.youtube.com/embed/L5YFtfsYCc8?si=JZsvNFC1XqR5V-Ty",
]

const links2 = [
  "https://www.youtube.com/embed/Q2BuOFrthIE?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/F8Yfc0YecV0?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/rCTg7OIAcTU?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/6lvqoaTBLeQ?si=3xLqgHqqM2A8FdDT",
]

const links3 = [
  "https://www.youtube.com/embed/CP3yQa-pSBw?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/GMlsFk0Augg?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/_wJGrlAhqs4?si=3xLqgHqqM2A8FdDT",
  "https://www.youtube.com/embed/0V3DPS8yLYc?si=3xLqgHqqM2A8FdDT",
]

const Work = () => {
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
