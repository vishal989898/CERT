import React from 'react'
import CertImg from '../Images/about3.jpg'
const AboutUs = () => {
  return (
    <div>
      <div className='bg-[#114272] text-4xl font-bold h-15 w-[20%] flex items-center justify-center ml-20 rounded-lg ' >
        <h1 className='text-white text-center p-5'>About Us</h1>
      </div>
    <div className='flex items-center justify-between'>
        <div className='w-[40%] ml-22 mt-5 text-lg text-justify'>
        <p className='mb-5'>The College of Engineering & Rural Technology (CERT), established in 1999 under the Chitragupt Social Welfare & Educational Society, is a premier institution offering quality education in B.Tech, MBA, and Polytechnic programmes.CERT is Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) Lucknow, Board of Techinical Education (BTE) UP and approved by the All India Council for Technical Education (AICTE), CERT ensures industry-recognized education.</p>
        <p>CERT is dedicated to providing students with a robust foundation of knowledge, practical skills, and ethical values, maintaining a steadfast commitment to the highest standards of teaching excellence. We aim to develop not only technically proficient professionals but also well-rounded individuals who can adapt, innovate, and lead in a constantly changing global landscape

</p>
      </div>
      <div className='mr-7 mt-3'>
        <img className='rounded-lg' src={CertImg} alt="" />
      </div>
    </div>
    </div>
  )
}

export default AboutUs
