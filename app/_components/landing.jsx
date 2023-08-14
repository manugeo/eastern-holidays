"use client"
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

import BoatImage1 from '../../public/boat_image_01.jpg'
import BoatImage2 from '../../public/boat_image_02.jpg'
import BoatImage3 from '../../public/boat_image_03.jpg'
import BoatImage4 from '../../public/boat_image_04.jpg'

const Landing = () => {
  const splideOptions = {
    type: 'loop',
    arrows: false
  };
  return (
    <div className='flex flex-col justify-around min-h-screen'>
      <h1 className='mx-5 text-7xl'>
        <span className="block max-w-sm mx-auto text-left">Eastern</span>
        <span className="block max-w-sm mx-auto text-right">Holidays</span>
      </h1>

      <Splide options={splideOptions} aria-label="House boat images.">
        <SplideSlide>
          <Image src={BoatImage1} priority={true} alt="Boat image 01" />
        </SplideSlide>
        <SplideSlide>
          <Image src={BoatImage2} alt="Boat image 02" />
        </SplideSlide>
        <SplideSlide>
          <Image src={BoatImage3} alt="Boat image 03" />
        </SplideSlide>
        <SplideSlide>
          <Image src={BoatImage4} alt="Boat image 04" />
        </SplideSlide>
      </Splide>

      <h4 className='mx-5 text-xl text-center'>
        Cruise through the scenic backwaters of Kerala on our 3-bedroom premium houseboat.
      </h4>
    </div>
  );
};

export default Landing;