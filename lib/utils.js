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

  // Todo: Get 'baseRate', 'adultsVariableRate' and 'childrensVariableRate' from the backend based on the 'travelDate'.
  // A sample responose from the backend with the above data might look like this:
  // [
  //   {
  //     "date": "2022-01-02T00:00:00.000Z",
  //     "baseRate": 12000,
  //     "adultRate": 500,
  //     "childrenRate": 300
  //   },
  //   {
  //     "date": "2022-01-03T00:00:00.000Z",
  //     "baseRate": 12000,
  //     "adultRate": 500,
  //     "childrenRate": 300
  //   },
  //   ...
  // ]

  const baseRate = 4000 * 3;
  // Note: Base rate accounts variable for '6' adults.
  const adultsVariableRate = (guests.adults - 6) * 500;
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
