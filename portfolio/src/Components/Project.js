import React from 'react'
import './project.css'
import img3 from './Images/sign.jpg'
import img4 from './Images/register.jpg'
import img5 from './Images/date.jpg'
import img6 from './Images/textform.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Project() {
  return (
    <>
    
    <Swiper 
        slidesPerView={1}
  
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
    <div className='image'>
      <SwiperSlide>
    <div className='sr'>
      <div className='code1'>
        <h3>SIGN UP</h3>
        <a href='https://github.com/Apeksha-L-Naik/Apeksha/tree/main/react-signin-project3'>Source Code</a>
        <div className='image1'>
          <img src={img3} alt=''/>
        </div>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sr'>
      <div className='code2'>
      <h3>REGISTER</h3>
        <a href='https://github.com/Apeksha-L-Naik/Apeksha/tree/main/react-register-project2'>Source Code</a>
        <div className='image1'>
          <img src={img4} alt=''/>
        </div>
      </div>
    </div>
    
      </SwiperSlide>
      <SwiperSlide>
      <div className='sr'>
      <div className='code3'>
      <h3>DATE & TIME</h3>
        <a href='https://github.com/Apeksha-L-Naik/Apeksha/tree/main/date_time'>Source Code</a>
        <div className='image1'>
          <img src={img5} alt=''/>
        </div>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='sr'>
      <div className='code4'>
      <h3>TEXTFORM</h3>
        <a href='https://github.com/Apeksha-L-Naik/Apeksha/tree/main/react-textform-project3'>Source Code</a>
        <div className='image1'>
          <img src={img6} alt=''/>
        </div>
      </div>
    </div>
    
      </SwiperSlide>
    </div>
    </Swiper>
    
    </>
  )
}

export default Project