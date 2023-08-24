"use client"
import React from 'react'
import {link} from "@/constants/resume"
import { BsDownload, BsShare } from 'react-icons/bs'
const page = () => {
  return (
    <div className="pt-24 pb-10">
        <div className='text-center text-[3rem] font-serif flex flex-row justify-center items-center gap-x-4'>My Resume
        <a href={link} download>

        <BsDownload className='hover:text-purple-500 text-[1rem] transition-all cursor-pointer' />
        </a>
        <BsShare className='hover:text-purple-500 text-[1rem] transition-all cursor-pointer' onClick={()=>{
          navigator.share({
            title: 'Ananya Tripathy Resume',
            text: 'description',
            url: link,
          })
        }}/>

        </div>
        <div className='w-[90%] flex justify-center items-center mx-auto'>
        <object
        data={link}
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>
          Unable to display PDF file. <a href={link}>Download</a>{" "}
          instead.
        </p>
      </object>
        </div>
    </div>
  )
}

export default page