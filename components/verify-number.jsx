import { useState } from "react";
import InputText from "./inputs/input-text";
import { Button } from "./ui/button";
import { TextH4 } from "./ui/texts";
import { getNumberWithCountryCode, getNumberWithoutCountryCode } from "@/lib/utils";

const VerifyNumber = ({ className, number = null, setNumber = () => { } }) => {
  const [displayNumber, setDisplayNumber] = useState(number ? getNumberWithCountryCode(number) : '');


  const onChange = (e) => {
    const newNumber = getNumberWithoutCountryCode(e.target.value);
    setNumber(newNumber);
    const newDisplayNumber = getNumberWithCountryCode(newNumber);
    setDisplayNumber(newDisplayNumber);
  };
  const onFocus = (e) => {
    console.log('On focus:', e);
    const currentValue = e.target.value;
    if (currentValue === '') setDisplayNumber('+91 ');
  };
  const onBlur = (e) => {
    console.log('On blur:', e);
    const currentValue = e.target.value;
    if (currentValue === '+91 ') setDisplayNumber('');
  };

  return (
    <div className={className}>
      <TextH4>Verify your number to book</TextH4>
      <InputText className="mt-3" inputClassName="text-sm font-medium leading-none" label="Phone Number" id="phone-number" type="tel"
        placeholder="Enter your 10-digit phone number" helperText="We'll text you to confirm your number. Only Indian mobile numbers are supported for now."
        value={displayNumber} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
      <Button className="mt-4 w-full">Continue</Button>
    </div>
  );
};

export default VerifyNumber;