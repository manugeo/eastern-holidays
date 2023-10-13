"use client"

import ImageSplider from "../image-splider";
import Usps from "../usps";
import { TextH3, TextH4, TextLarge, TextMuted, TextP, TextSmall } from "../ui/texts";
import Separator from "../ui/separator";
import Itinary from "../itinary";

const Home = () => {

  return (
    <div className="flex flex-col">
      <ImageSplider />

      <div className="mt-8 mx-6">
        <TextH3 className=''>Discover Eastern Holidays</TextH3>
        <TextLarge className="mt-3">Your Gateway to Houseboat Escapes in Alappuzha, Kerala</TextLarge>
        <TextP className="mt-1 text-sm">8 guests &#x2022; 3 bedrooms &#x2022; 2 bathrooms</TextP>
      </div>
      <Separator className="mt-6 mx-6" />
      <Usps />
      <Separator className="mt-6 mx-6" />
      <Itinary className="mt-6 mx-6" />
    </div>
  );
};

export default Home;