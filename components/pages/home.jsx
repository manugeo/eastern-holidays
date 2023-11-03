import ImageSplider from "../image-splider";
import Usps from "../usps";
import { TextH3, TextLarge, TextP } from "../ui/texts";
import Separator from "../ui/separator";
import Itinary from "../itinary";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

const Home = () => {
  return (
    <div className="pb-6 flex flex-col relative">
      <ImageSplider />
      <div className="mt-6 mx-6">
        <TextH3 className=''>Discover Eastern Holidays</TextH3>
        <TextLarge className="mt-3">Your Gateway to Houseboat Escapes in Alappuzha, Kerala</TextLarge>
        <TextP className="mt-1 text-sm">8 guests &#x2022; 3 bedrooms &#x2022; 2 bathrooms</TextP>
      </div>
      <Separator className="mt-6 mx-6" />
      <Usps />
      <Separator className="mt-6 mx-6" />
      <Itinary className="mt-6 mx-6" />
      <div className="mt-6 mx-6 border-t-[1px] border-slate-300 pt-6">
        <Link href="/prices" className={`${buttonVariants()} w-full`}>See the Prices</Link>
      </div>
      <ModeToggle className={'absolute right-6 top-6'} />
    </div>
  );
};

export default Home;