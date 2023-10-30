'use client'

import { useState } from "react";
import { Calendar, DEFAULT_CLASS_NAMES } from "./ui/calendar";
import { TextH4 } from "./ui/texts";
import useDateFns from "@/hooks/useDateFns";

const PriceCalendar = ({ selectedDate = null, onDateSelect = () => {}, fromDate, toDate, required = false, disabledDates, className }) => {
  const { tomorrow, afterFourWeeks } = useDateFns();
  const [date, setDate] = useState(selectedDate || tomorrow);

  const calendarCellStyle = {
    "head_cell": `${DEFAULT_CLASS_NAMES.head_cell} grow`,
    "cell": `${DEFAULT_CLASS_NAMES.cell} grow`
  };

  const onSelect = (date) => {
    onDateSelect(date);
    setDate(date);
  }

  return (
    <div className={className}>
      <TextH4>Select your travel date</TextH4>
      <Calendar
        mode="single"
        fromDate={fromDate || tomorrow}
        toDate={toDate || afterFourWeeks}
        required={required}
        disabled={disabledDates || { before: tomorrow, after: afterFourWeeks }}
        selected={date}
        onSelect={onSelect}
        className={'p-0 mt-3'}
        classNames={calendarCellStyle}
      />
    </div>
  );
};

export default PriceCalendar;