import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@mui/material';
import gen1 from './images/gen1.png';
import gen2 from './images/gen2.png';
import gen3 from './images/gen3.png';
import gen4 from './images/gen4.png';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../mystyles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Typography variant='h2' color={'white'}>Real-time AI-generated textures.</Typography>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={gen1} width={'100%'}/>
          <Typography variant='h5' color={'white'}>"a cute elf girl face, with green hair, animation style"</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gen2} width={'100%'}/>
          <Typography variant='h5' color={'white'}>"a cute Japanese samurai cat, cartoon character, big eyes..."</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gen3} width={'100%'}/>
          <Typography variant='h5' color={'white'}>"Arch made of stone, rainforest game scene"</Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gen4} width={'100%'}/>
          <Typography variant='h5' color={'white'}>"Stylized bottle of magic potion, metallic decoration..."</Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
