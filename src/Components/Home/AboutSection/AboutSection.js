import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const AboutSection = () => {
  return (
    <div className='grid lg:grid-cols-2 mt-32 '>
      <div className=' relative h-[550px]'>
        <img src={person} alt=""  className='w-[480px] h-[480px]'/>
        <img src={parts} alt=""  className='w-80 h-[332px] absolute bottom-0 right-[30px] border border-8 border-white rounded-xl'/>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-[#FF3811] font-bold text-xl'>About us</h3>
        <h2 className='font-bold text-4xl'>We are qualified <br /> & of experience <br /> in this field</h2>

        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        <button className="bg-[#FF3811] text-white text-xl px-6 py-2 rounded-xl w-2/5 mt-10">Get More Info</button>
      </div>
      
    </div>
  );
};

export default AboutSection;