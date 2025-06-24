"use client"
import { motion} from "motion/react"


const AboutButtons = () => {
  return (
    <>
    <div className="flex gap-4">
        <motion.button className='bg-blue-600 px-4 py-3 rounded-[8px] cursor-pointer'
            whileHover={{
                boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.6)",
                transition: { 
                duration: 0.2,
                ease: "easeOut" 
                }
            }}
        >
            Hire Me
        </motion.button>
        <motion.button className='px-4 py-3 gap-1 flex rounded-[8px] cursor-pointer'
        whileHover={{
            boxShadow: "0 0 0 4px rgba(50, 50, 50, 0.7)",
            transition: {
                duration:0.2,
                ease: "easeOut"
            }
        }}
        >
            Learn More 
        </motion.button>
    </div>

    </>
  )
}

export default AboutButtons
