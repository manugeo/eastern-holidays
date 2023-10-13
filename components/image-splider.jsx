'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
// Default theme
import '@splidejs/react-splide/css';
import BoatImage1 from '../public/boat_image_01.jpg'
import BoatImage2 from '../public/boat_image_02.jpg'
import BoatImage3 from '../public/boat_image_03.jpg'
import BoatImage4 from '../public/boat_image_04.jpg'

const ImageSplider = () => {
  const spliderOptions = {
    type: 'loop',
    arrows: false
  };

  return (
    <Splide options={spliderOptions} aria-label="House boat images.">
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
  );
};

export default ImageSplider;