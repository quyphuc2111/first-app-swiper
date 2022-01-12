import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import "swiper/css";
import "swiper/css/effect-cards"


import SwiperCore, {
  EffectCards
} from 'swiper';
SwiperCore.use([EffectCards]);

export default function SwiperTest({data}) {
  console.log(data)
  return (
    <Swiper
    effect={'cards'}
      grabCursor={true}
      className="mySwiper"
    >
    {
      data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Image  src={item.card} alt="" />
          </SwiperSlide>
        )
      })
    }
     
    
    </Swiper>
  )
}
