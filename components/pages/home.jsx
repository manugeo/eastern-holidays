"use client"

import ImageSplider from "../image-splider";
import Usps from "../usps";
import { TextH3, TextLarge, TextP } from "../ui/texts";

const Home = () => {

  return (
    <div className="flex flex-col">
      <ImageSplider />

      <div className="mt-8 mx-6">
        <TextH3 className=''>Eastern Holidays</TextH3>
        <TextLarge className="mt-3">Premium house boat in Alappuzha, Kerala</TextLarge>
        <TextP className="mt-1 text-sm">8 guests &#x2022; 3 bedrooms &#x2022; 2 bathrooms</TextP>
      </div>

      <Usps />

      <div className="mt-6 mx-6 pt-6 border-t-[1px] border-slate-300">
        <h2 className="text-xl font-semibold">{"What's your day like"}</h2>
        <p className="mt-1 text-sm">
          We offer two types of experiences: day cruises and overnight stays.
        </p>
        {/* <div className="mt-4 border-[1px] border-slate-300 rounded-lg pt-6 px-4">
          <h3 className="text-lg font-semibold">Day Cruise</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Home;