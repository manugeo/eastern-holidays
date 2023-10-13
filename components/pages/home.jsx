import ImageSplider from "../image-splider";
import Usps from "../usps";
import { TextH3, TextLarge, TextP } from "../ui/texts";
import Separator from "../ui/separator";
import Itinary from "../itinary";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex-grow overflow-auto flex flex-col pb-6">
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
      <div className="border-t-[1px] border-slate-300 py-4 px-6 text-center">
        <Link href="/price" className={buttonVariants()}>See the Prices</Link>
      </div>
    </div>
  );
};

export default Home;