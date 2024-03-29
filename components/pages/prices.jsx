'use client'

import { useEffect, useState } from "react";
import Guests from "../guests";
import Navbar from "../navbar";
import PriceCalendar from "../price-calendar";
import PriceSummary from "../price-summary";
import Separator from "../ui/separator";
import VerifyNumber from "../verify-number";
import useDateFns from "@/hooks/useDateFns";
import { DEFAULT_GUESTS } from "@/lib/eastern-holidays";

const Prices = () => {
  const { tomorrow } = useDateFns();
  const [travelDate, setTravelDate] = useState(tomorrow);
  const [guests, setGuests] = useState(DEFAULT_GUESTS);
  // Note: This number should not include country code.
  const [number, setNumber] = useState('');

  useEffect(() => {
    // Note: Sample fetch operation to fetch rates from local backend server as part of developement.
    const fetchRates = async () => {
      const response = await fetch('http://localhost:3001/api/rates', { method: 'GET' });
      const rates = await response.json();
      console.log(rates);
    }
    fetchRates();
  }, []);


  return (
    <div className="px-6 pb-6 flex flex-col">
      <Navbar className={'mt-4'} />
      <PriceCalendar selectedDate={travelDate} onDateSelect={setTravelDate} className={'mt-6'} />
      <Guests guests={guests} onGuestsChange={setGuests} className={'mt-6'} />
      <Separator className="mt-6" />
      <PriceSummary guests={guests} travelDate={travelDate} className={'mt-6'} />
      <Separator className="mt-6" />
      <VerifyNumber className={'mt-6'} number={number} setNumber={setNumber} />
    </div>
  );
};

export default Prices;