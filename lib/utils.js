import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// See: https://stackoverflow.com/a/2901298
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const getTotalPrice = (guests, travelDate) => {

  // Todo: Get 'baseRate', 'adultRate' and 'childRate' from the backend based on the 'travelDate'.
  // A sample responose from the backend with the above data might look like this:
  // [
  //   {
  //     "date": "2022-01-02T00:00:00.000Z",
  //     "baseRate": 9000,
  //     "adultRate": 500,
  //     "childRate": 300,
  //     "infantRate": 0
  //   },
  //   {
  //     "date": "2022-01-03T00:00:00.000Z",
  //     "baseRate": 12000,
  //     "adultRate": 700,
  //     "childRate": 450,
  //     "infantRate": 0
  //   },
  //   ...
  // ]

  const baseRate = 9000;
  const adultsVariableRate = guests.adults * 500;
  const childrensVariableRate = guests.children * 300;
  const totalRate = (baseRate + adultsVariableRate + childrensVariableRate);
  return totalRate;
}

export const INDIAN_COUNTRY_CODE = '+91';
// Note: Removes indian country code from the phone number if present and returns rest of the number.
export const getNumberWithoutCountryCode = (number = '') => {
  for (const char of INDIAN_COUNTRY_CODE) {
    if (number[0] === char) {
      // Note: Removing the first character.
      number = number.substring(1);
    }
    else {
      break;
    }
  }
  return number.trim();
}
export const getNumberWithCountryCode = (number = '') => {
  return `${INDIAN_COUNTRY_CODE} ${number}`;
};
