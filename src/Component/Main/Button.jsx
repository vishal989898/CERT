import React from 'react'
import { LiaGraduationCapSolid } from "react-icons/lia";

const Button = () => {
  return (
    <>
    <div className='h-20 w-50  bg-grey-400 border border-2-black rounded-xl text-white text-center'>
            <div className='flex justify-center items-center gap-3 '>
        <LiaGraduationCapSolid stroke={5}/>
    
    <div>
        <h3 className='text-xl font-bold'>25+</h3>
        <div>
            <p>Years Legacy</p>
        </div></div>
    </div>
    </div>
    </>
  )
}

export default Button;