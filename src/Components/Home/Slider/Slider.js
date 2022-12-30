import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './slider.css'
import SliderItems from './SliderItems';

const Slider = () => {

  const imgDatas = [
    { photo: img1, id: 1, next: 2, previous: 6 },
    { photo: img2, id: 2, next: 3, previous: 1 },
    { photo: img3, id: 3, next: 4, previous: 2 },
    { photo: img4, id: 4, next: 5, previous: 3 },
    { photo: img5, id: 5, next: 6, previous: 4 },
    { photo: img6, id: 6, next: 1, previous: 5 },
  ]

  return (
    <div className="carousel w-full">
     {
      imgDatas.map(imgSlide=><SliderItems
      key={imgSlide.id}
      imgData={imgSlide}></SliderItems>)
     }
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> */}

    </div>
  );
};

export default Slider;