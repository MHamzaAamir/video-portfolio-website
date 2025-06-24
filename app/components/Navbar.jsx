"use client"
import Link from 'next/link'
import { motion } from "motion/react"

import { useState } from 'react'

const links = [
  { title: "About Us", url: "#about" },
  { title: "Work", url: "#works" },
  { title: "Services", url: "#services" },
  { title: "Pricing", url: "#pricing" },
  { title: "FAQs", url: "#faq" },
]

const topVariants = {
  opened: {
    rotate: 43,
    backgroundColor: "rgb(255,255,255)"
  },
  closed: {
    rotate: 0
  }
}
const centerVariants = {
  opened: {
    opacity: 0
  },
  closed: {
    opacity: 1
  }
}
const bottomVariants = {
  opened: {
    rotate: -43,
    backgroundColor: "rgb(255,255,255)"
  },
  closed: {
    rotate: 0
  }
}

const navVariants = {
  opened: {
    y: 0
  },
  closed: {
    y: "-220px"
  }
}



const toggle = () => {
  setOpen(!toggle)
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>

      <motion.div className='hidden md:flex h-16 w-screen z-50 fixed top-10 justify-center items-center'
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <div className='flex justify-between items-center h-full w-[40rem] rounded-xl outline-1 outline-[#1B1B1B] px-8 py-3 backdrop-blur-md backdrop-saturate-150 shadow-md' >
          <div className='flex'>
            {
              links.map((link) => (
                <Link key={link.title} className='transition-colors duration-300 ease-out hover:bg-[#444444] px-3 py-2 rounded-2xl' href={link.url}>{link.title}</Link>
              ))
            }
          </div>
          <motion.div className="bg-blue-600 py-1 px-3 rounded-[7px]"
            initial={{ boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)" }}
            whileHover={{
              boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.6)",
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
          >
            <Link href="/">Hire Me</Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className='h-72 w-full flex md:hidden flex-col justify-between fixed top-0 backdrop-blur-md backdrop-saturate-150 shadow-md'
        initial={{ y: "-220px" }}
        animate={open ? "opened" : "closed"}
        variants={navVariants}
      >
        <div className='flex flex-col items-center justify-center py-4'>
          {links.map((link) => (
            <motion.div className='rounded-xl py-2 px-3' key={link.title}
              whileHover={{
                backgroundColor: "rgb(44, 44, 44)"
              }}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </div>

        <motion.div className='w-full h-20 px-4 flex justify-end items-center'>
          <button className="h-[16px] w-[18px] flex flex-col items-center justify-between" onClick={() => setOpen(!open)}>
            <motion.span animate={open ? "opened" : "closed"} variants={topVariants} className="bg-white h-1 w-full origin-left"></motion.span>
            <motion.span animate={open ? "opened" : "closed"} variants={centerVariants} className="bg-white h-1 w-full origin-left"></motion.span>
            <motion.span animate={open ? "opened" : "closed"} variants={bottomVariants} className="bg-white h-1 w-full origin-left"></motion.span>
          </button>
        </motion.div>
      </motion.div>

    </>

  )
}

export default Navbar
