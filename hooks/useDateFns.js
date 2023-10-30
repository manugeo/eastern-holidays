import { add } from "date-fns";

const useDateFns = () => {
  const tomorrow = add(new Date(), { days: 1 });
  const afterFourWeeks = add(new Date(), { weeks: 4 });
  return { tomorrow, afterFourWeeks };
};

export default useDateFns;