import React from 'react';

const SliderItems = ({imgData}) => {
  const {photo,id,next,previous}=imgData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-3/5">
    <div className='image-ovelay'>
      <img src={photo} alt="" className="w-full h-full" />
    </div>
    <div className="absolute flex flex-col gap-10 justify-between transform -translate-y-1/2 top-2/4 left-20 text-white">
      <h1 className='text-6xl'>Affordable <br /> Price For Car <br /> Servicing</h1>
      <p className='w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>
    <div className="absolute flex gap-10 justify-between transform -translate-y-1/2 top-3/4 left-20">
      <button className="bg-[#FF3811] text-white text-xl px-6 py-2 rounded-xl">Discover More</button>
      <button className="border border-[#FF3811] text-white text-xl px-6 py-2 rounded-xl hover:bg-[#FF3811]">Latest Projects</button>
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
      <a href={`#slide${previous}`}  className="btn btn-circle mr-10">❮</a>
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div>
  );
};

export default SliderItems;