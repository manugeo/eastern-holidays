'use client'

import { SERVICES } from "@/lib/eastern-holidays";
import { useState } from "react";
import InputSelect from "../inputs/input-select";
import InputDate from "../inputs/input-date";
import { add, format } from "date-fns";
import InputText from "../inputs/input-text";
import { Button } from "../ui/button";
import { numberWithCommas } from "@/lib/utils";

const tomorrowFns = add(new Date(), { days: 1 });
const dateAfterTwoWeeks = add(new Date(), { weeks: 2 })
const disabledDates = {
  before: tomorrowFns,
  after: dateAfterTwoWeeks
};

const CustomerDetails = () => {
  const [serviceType, setServiceType] = useState(SERVICES[1].id);
  const [bookingDate, setBookingDate] = useState(tomorrowFns);
  const [numberOfAdults, setNumberOfAdults] = useState(4);
  const [numberOfChildrens, setNumberOfChildrens] = useState(0);

  // Note: "Night Stay" not included in the options.
  const serviceTypeOptions = SERVICES.filter(service => (service.id !== 'night-stay')).map(({ name, id }) => ({ name, value: id }));
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
    setNumberOfAdults(parseInt(newAdults) || '');
    console.log(typeof newAdults, newAdults);
  };
  const onChildrensChange = (e) => {
    const newChildrens = e?.target.value;
    setNumberOfChildrens(parseInt(newChildrens) || '');
    console.log(typeof newChildrens, newChildrens);
  };

  const getTotal = () => {
    if (!serviceType || !bookingDate || !numberOfAdults) return null;

    const baseRate = 4000 * 3;
    // Note: Base rate accounts variable for '6' adults.
    const adultsVariableRate = (numberOfAdults - 6) * 500;
    const childrensVariableRate = numberOfChildrens * 300;
    const totalRate = (baseRate + adultsVariableRate + childrensVariableRate);
    return totalRate;

    // Todo: Calculate based on Service Type.
    // if (serviceType === 'standard') { }
    // else {}
  };
  const getPayableNow = () => {
    if (!getTotal()) return null;
    return Math.ceil(getTotal() * 0.2);
  }

  return (
    <div className="w-full max-w-screen-sm mx-auto flex flex-col min-h-screen">
      <div className="mx-4 mt-6 flex-[4_4_0%]">
        <InputSelect label="Type of service." value={serviceType} onValueChange={onServiceTypeChange}
          placeholder="Select the type of service that you need." options={serviceTypeOptions} />

        <InputDate value={bookingDate} fromDate={tomorrowFns} toDate={dateAfterTwoWeeks} disabled={disabledDates}
          required={true} onValueChange={onBookingDateChange} className="mt-4" label="Date of booking." />

        <div className="mt-4 flex">
          <InputText label="Adults" type="number" min="2" max="100" className="flex-1"
            value={numberOfAdults} onChange={onAdultsChange} />

          <InputText label="Childrens" type="number" min="0" max="100" className="ml-4 flex-1"
            value={numberOfChildrens} onChange={onChildrensChange} />
        </div>
      </div>

      <div className="mx-4 mt-6  flex-[3_3_0%]">
        <h4 className="text-4xl">Summary</h4>

        {serviceType && bookingDate && <p className="mt-4">
          <span className="font-semibold">{`${SERVICES.find(service => (service.id === serviceType)).name}`}</span>
          <span className="text-muted-foreground"> on </span>
          <span className="font-semibold">{`${format(bookingDate, 'PPPP')}.`}</span>
        </p>}

        {getTotal() && <div className="mt-3 flex  justify-between">
          <p>Total</p>
          <p>{`₹${numberWithCommas(getTotal())}`}</p>
        </div>}

        {getPayableNow() && <div className="mt-3 flex justify-between">
          <p>{`Payable Now (20%)`}</p>
          <p>{`₹${numberWithCommas(getPayableNow())}`}</p>
        </div>}
      </div>

      <Button className="mx-4 mt-6 mb-6" size="lg">Book Now</Button>
    </div>
  )
};

export default CustomerDetails;