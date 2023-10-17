import PriceTable from "./price-table";
import { TextH4, TextSmall } from "./ui/texts";

const PriceSummary = ({ className }) => {
  return (
    <div className={className}>
      <TextH4>Summary</TextH4>
      <TextSmall>Your Booking Summary for 7 Guests on Wednesday, 25 October, 2023</TextSmall>
      <PriceTable />
    </div>
  );
};

export default PriceSummary;