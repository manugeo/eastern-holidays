'use client'

import { useState } from "react";
import { Calendar, DEFAULT_CLASS_NAMES } from "./ui/calendar";
import { TextH4 } from "./ui/texts";
import { add } from "date-fns";

const tomorrowFns = add(new Date(), { days: 1 });
const dateAfterFourWeeks = add(new Date(), { weeks: 4 })
const disabledDates = {
  before: tomorrowFns,
  after: dateAfterFourWeeks
};

const PriceCalendar = ({ fromDate = tomorrowFns, toDate = dateAfterFourWeeks, required = false, disabled = disabledDates, className }) => {
  const [date, setDate] = useState(tomorrowFns);

  const calendarCellStyle = {
    "head_cell": `${DEFAULT_CLASS_NAMES.head_cell} grow`,
    "cell": `${DEFAULT_CLASS_NAMES.cell} grow`
  };

  return (
    <div className={className}>
      <TextH4>Select your travel date</TextH4>
      <Calendar
        mode="single"
        fromDate={fromDate}
        toDate={toDate}
        required={required}
        disabled={disabled}
        selected={date}
        onSelect={setDate}
        className={'p-0 mt-3'}
        classNames={calendarCellStyle}
      />
    </div>
  );
};

export default PriceCalendar;