'use client'

import { SERVICES } from "@/lib/eastern-holidays";
import { useState } from "react";
import InputSelect from "../inputs/input-select";
import InputDate from "../inputs/input-date";
import { add } from "date-fns";

const CustomerDetails = () => {
  const [serviceType, setServiceType] = useState(SERVICES[1].id);
  const [bookingDate, setBookingDate] = useState();

  const serviceTypeOptions = SERVICES.map(({ name, id }) => ({ name, value: id }));
  const onServiceTypeChange = (newServiceType) => {
    setServiceType(newServiceType);
    console.log(typeof newServiceType, newServiceType);
  };
  const onBookingDateChange = (newBookingDate) => {
    setBookingDate(newBookingDate);
    console.log(typeof newBookingDate, newBookingDate);
  };

  const tomorrowFns = add(new Date(), { days: 1 });
  const dateAfterTwoWeeks = add(new Date(), { weeks: 2 })
  const disabledDates = {
    before: tomorrowFns,
    after: dateAfterTwoWeeks
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto flex flex-col justify-around min-h-screen">
      <div className="p-4">
        <InputSelect label="Type of service." value={serviceType} onValueChange={onServiceTypeChange}
          placeholder="Select the type of service that you need." options={serviceTypeOptions} />

        <InputDate value={bookingDate} fromDate={tomorrowFns} toDate={dateAfterTwoWeeks} disabled={disabledDates}
          onValueChange={onBookingDateChange} className="mt-4" label="Date of booking." />
      </div>
    </div>
  )
};

export default CustomerDetails;