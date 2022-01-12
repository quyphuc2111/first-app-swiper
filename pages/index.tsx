
import React from 'react'
import SwiperTest from '../components/swiper'
import image1 from "../public/images/image1.jpg"
import image2 from "../public/images/image2.jpg"
import image3 from "../public/images/image3.jpg"
interface Data{
  id: number;
  card: StaticImageData;
}
export default function Home() {
const data: Data[] = [
  {
    id: 1,
    card: image1,
  },
  {
    id: 2,
    card: image2,
  },
  {
    id: 3,
    card: image3,
  },
  {
    id: 4,
    card: image1,
  },
  {
    id: 5,
    card: image2,
  }
]
 
  return (
    <div>
      <h1>Swiper TEST</h1>
      <SwiperTest data={data}  />
    </div>
  )
}
