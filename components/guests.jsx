'use client'

import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { TextH4, TextMuted, TextSmall } from "./ui/texts";
import { useState } from "react";

const Guests = ({ className }) => {
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <div className={className}>
      <TextH4>Guests</TextH4>

      <div className="flex justify-between mt-3">
        <div>
          <TextSmall>Adults</TextSmall>
          <TextMuted>Age 13+</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(adults <= 2)} onClick={() => setAdults(adults - 1)}><Minus /></Button>
          <TextSmall>{adults}</TextSmall>
          <Button variant="outline" size="icon" disabled={(adults >= 8)} onClick={() => setAdults(adults + 1)}><Plus /></Button>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <TextSmall>Children</TextSmall>
          <TextMuted>Ages 2-12</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(children <= 0)} onClick={() => setChildren(children - 1)}><Minus /></Button>
          <TextSmall>{children}</TextSmall>
          <Button variant="outline" size="icon" disabled={(children >= 6)} onClick={() => setChildren(children + 1)}><Plus /></Button>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <TextSmall>Infants</TextSmall>
          <TextMuted>Under 2</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(infants <= 0)} onClick={() => setChildren(infants - 1)}><Minus /></Button>
          <TextSmall>{infants}</TextSmall>
          <Button variant="outline" size="icon" disabled={(infants >= 6)} onClick={() => setChildren(infants + 1)}><Plus /></Button>
        </div>
      </div>
    </div>
  );
};

export default Guests;