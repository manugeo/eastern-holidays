import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// See: https://stackoverflow.com/a/2901298
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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
