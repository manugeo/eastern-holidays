import { format } from "date-fns";
import PriceTable from "./price-table";
import { TextH4, TextSmall } from "./ui/texts";
import { getTotalPrice } from "@/lib/utils";
import { useMemo } from "react";

const PriceSummary = ({ guests, travelDate, className }) => {
  const getTotalGuests = () => guests ? guests.adults + guests.children + guests.infants : 0;
  const getTravelDateString = () => travelDate ? format(travelDate, 'EEEE, d MMMM, yyyy') : '';
  const totalPrice = useMemo(() => getTotalPrice(guests, travelDate), [guests, travelDate]);
  const payableNow = useMemo(() => totalPrice * 0.2, [totalPrice]);

  return (
    <div className={className}>
      <TextH4>Summary</TextH4>
      <TextSmall>
        {`Your Booking Summary for ${getTotalGuests()} Guests on ${getTravelDateString()}`}
      </TextSmall>
      <PriceTable totalPrice={totalPrice} payableNow={payableNow} />
    </div>
  );
};

export default PriceSummary;