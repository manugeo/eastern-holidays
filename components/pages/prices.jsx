'use client'

import { useState } from "react";
import Guests from "../guests";
import Navbar from "../navbar";
import PriceCalendar from "../price-calendar";
import PriceSummary from "../price-summary";
import Separator from "../ui/separator";
import VerifyNumber from "../verify-number";

const Prices = () => {
  // Note: This number should not include country code.
  const [number, setNumber] = useState('');

  return (
    <div className="px-6 pb-6 flex flex-col">
      <Navbar className={'mt-4'} />
      <PriceCalendar className={'mt-6'} />
      <Guests className={'mt-6'} />
      <Separator className="mt-6" />
      <PriceSummary className={'mt-6'} />
      <Separator className="mt-6" />
      <VerifyNumber className={'mt-6'} number={number} setNumber={setNumber} />
    </div>
  );
};

export default Prices;