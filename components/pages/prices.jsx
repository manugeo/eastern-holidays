import Navbar from "../navbar";
import PriceCalendar from "../price-calendar";

const Prices = () => {
  return (
    <div className="flex flex-col">
      <Navbar className={'mt-4 mx-6'} />
      <PriceCalendar className={"mt-6 mx-6"} />
    </div>
  );
};

export default Prices;