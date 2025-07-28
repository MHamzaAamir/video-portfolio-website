import Package from "@/models/Package"
import dbConnect from "@/lib/mongodb"; 

// const packages = [
//   {
//     name: "Short Form Package",
//     price: "$2000",
//     billing: "per month",
//     features: [
//       "25 reels",
//       "Motion Graphics, sfx, transitions",
//       "color grading & typography",
//       "Unlimited Revision",
//       "Triming clips"
//     ],
//   },
  // {
  //   name: "Long Form Package",
  //   price: "$1600",
  //   billing: "per month",
  //   features: [
  //     "4 Long Form Videos (10 mins)",
  //     "4 Thumbnails",
  //     "Unlimited Revisions",
  //     "Motion Graphics, sfx, transitions",
  //     "color grading & typography",
  //     "triming clips"
  //   ]
  // },
  // {
  //   name: "Low Budget Short form Pack",
  //   price: "$1000",
  //   billing: "per month",
  //   features: [
  //     "25 reels",
  //     "Minimal animations, sfx, transitions",
  //     "color grading & typography",
  //     "3 revisions per reel"
  //   ]
  // }
// ]



import PricingCard from "../components/PricingCard"

const Pricing = async () => {
  await dbConnect()
  const packages = await Package.find({})

  return (
    <div id = "pricing" className="flex flex-col py-20 justify-center items-center gap-10">
      <div className='text-3xl md:text-4xl lg:text-6xl font-bold max-w-[700px] text-center px-4 mt-7'>Have a <span className='text-blue-600 italic'>look</span> at our packages</div>
      <div className='text-gray-300 text-sm sm:text-base md:text-base lg:text-xl max-w-[700px] text-center px-4'>Pricing that makes your life easier to build assets and create content</div>
      <div className="flex flex-col lg:flex-row gap-10">
        {
          packages.map((p, i) => (
            <PricingCard p={p} key={i} />
          ))
        }
      </div>
    </div>
  )
}

export default Pricing
