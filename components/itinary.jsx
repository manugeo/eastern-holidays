import { OVERNIGHT_ITINARY } from "@/lib/eastern-holidays";
import { TextH4, TextMuted, TextSmall } from "./ui/texts";

const Itinary = ({ className }) => {
  return (
    <div className={className}>
      <TextH4>A Day on the Backwaters</TextH4>
      <ul className="ml-6 list-decimal [&>li]:mt-2">
        {OVERNIGHT_ITINARY.map(({ id, title, description }) => <li key={id}>
          <TextSmall>{title}</TextSmall>
          <TextMuted>{description}</TextMuted>
        </li>)}
      </ul>
    </div>
  );
};

export default Itinary;