'use client'

import { SERVICES } from "@/lib/eastern-holidays";
import { useState } from "react";
import InputSelect from "../inputs/input-select";
import InputDate from "../inputs/input-date";
import { add, format } from "date-fns";
import InputText from "../inputs/input-text";

const CustomerDetails = () => {
  const [serviceType, setServiceType] = useState(SERVICES[1].id);
  const [bookingDate, setBookingDate] = useState();
  const [numberOfAdults, setNumberOfAdults] = useState(4);
  const [numberOfChildrens, setNumberOfChildrens] = useState(0);

  const serviceTypeOptions = SERVICES.map(({ name, id }) => ({ name, value: id }));
  const onServiceTypeChange = (newServiceType) => {
    setServiceType(newServiceType);
    console.log(typeof newServiceType, newServiceType);
  };
  const onBookingDateChange = (newBookingDate) => {
    setBookingDate(newBookingDate);
    console.log(typeof newBookingDate, newBookingDate);
  };
  const onAdultsChange = (e) => {
    const newAdults = e?.target.value;
    setNumberOfAdults(newAdults);
    console.log(typeof newAdults, newAdults);
  };
  const onChildrensChange = (e) => {
    const newChildrens = e?.target.value;
    setNumberOfChildrens(newChildrens);
    console.log(typeof newChildrens, newChildrens);
  };

  const tomorrowFns = add(new Date(), { days: 1 });
  const dateAfterTwoWeeks = add(new Date(), { weeks: 2 })
  const disabledDates = {
    before: tomorrowFns,
    after: dateAfterTwoWeeks
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto flex flex-col justify-around min-h-screen">
      <div className="mx-4 flex-[4_4_0%]">
        <InputSelect label="Type of service." value={serviceType} onValueChange={onServiceTypeChange}
          placeholder="Select the type of service that you need." options={serviceTypeOptions} />

        <InputDate value={bookingDate} fromDate={tomorrowFns} toDate={dateAfterTwoWeeks} disabled={disabledDates}
          onValueChange={onBookingDateChange} className="mt-4" label="Date of booking." />

        <div className="mt-4 flex">
          <InputText label="Adults" type="number" min="2" max="100" className="flex-1"
            value={numberOfAdults} onChange={onAdultsChange} />

          <InputText label="Childrens" type="number" min="0" max="100" className="ml-4 flex-1"
            value={numberOfChildrens} onChange={onChildrensChange} />
        </div>
      </div>

      <div className="mx-4 mt-6 flex-[3_3_0%]">
        <h4 className="text-4xl">Summary</h4>

        {serviceType && bookingDate && <p className="mt-4">
          <span className="font-semibold">{`${SERVICES.find(service => (service.id === serviceType)).name}`}</span>
          <span className="text-muted-foreground"> on </span>
          <span className="font-semibold">{`${format(bookingDate, 'PPPP')}.`}</span>
        </p>}

        <div className="mt-3 flex justify-between">
          <p>Total</p>
          <p>₹12,000</p>
        </div>
        <div className="mt-3 flex justify-between">
          <p>Payable Now</p>
          <p>₹2,400</p>
        </div>
      </div>
    </div>
  )
};

export default CustomerDetails;