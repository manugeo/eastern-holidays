
import Guests from "../guests";
import Navbar from "../navbar";
import PriceCalendar from "../price-calendar";
import PriceSummary from "../price-summary";
import Separator from "../ui/separator";

const Prices = () => {
  return (
    <div className="px-6 flex flex-col">
      <Navbar className={'mt-4'} />
      <PriceCalendar className={'mt-6'} />
      <Guests className={'mt-6'} />
      <Separator className="mt-6" />
      <PriceSummary className={'mt-6'} />
      <Separator className="mt-6" />
    </div>
  );
};

export default Prices;