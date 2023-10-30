'use client'

import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { TextH4, TextMuted, TextSmall } from "./ui/texts";
import { useCallback, useReducer } from "react";
import { DEFAULT_GUESTS } from "@/lib/eastern-holidays";

// Reducer function to update the state based on different actions
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ADULTS":
      return { ...state, adults: action.payload };
    case "UPDATE_CHILDREN":
      return { ...state, children: action.payload };
    case "UPDATE_INFANTS":
      return { ...state, infants: action.payload };
    default:
      return state;
  }
};

/**
 * Guests component that displays the number of adults, children, and infants.
 * @param {Object} props - The component props.
 * @param {Object} props.guests - The initial guests object.
 * @param {Function} props.onGuestsChange - The callback function to handle guest changes.
 * @param {string} props.className - The CSS class name for the component.
 */
const Guests = ({ guests = null, onGuestsChange = () => { }, className }) => {
  const [guestState, dispatch] = useReducer(reducer, (guests || DEFAULT_GUESTS));

  const updateGuests = useCallback((guestType, newValue) => {
    const { adults, children, infants } = guestState;

    switch (guestType) {
      case "adults":
        onGuestsChange({ adults: newValue, children: children, infants: infants });
        dispatch({ type: "UPDATE_ADULTS", payload: newValue });
        break;
      case "children":
        onGuestsChange({ adults: adults, children: newValue, infants: infants });
        dispatch({ type: "UPDATE_CHILDREN", payload: newValue });
        break;
      case "infants":
        onGuestsChange({ adults: adults, children: children, infants: newValue });
        dispatch({ type: "UPDATE_INFANTS", payload: newValue });
        break;
    }
  }, [guestState, onGuestsChange]);

  const { adults, children, infants } = guestState;

  return (
    <div className={className}>
      <TextH4>Guests</TextH4>

      <div className="flex justify-between mt-3">
        <div>
          <TextSmall>Adults</TextSmall>
          <TextMuted>Age 13+</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(adults <= 2)} onClick={() => updateGuests('adults', adults - 1)}><Minus /></Button>
          <TextSmall>{adults}</TextSmall>
          <Button variant="outline" size="icon" disabled={(adults >= 8)} onClick={() => updateGuests('adults', adults + 1)}><Plus /></Button>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <TextSmall>Children</TextSmall>
          <TextMuted>Ages 2-12</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(children <= 0)} onClick={() => updateGuests('children', children - 1)}><Minus /></Button>
          <TextSmall>{children}</TextSmall>
          <Button variant="outline" size="icon" disabled={(children >= 6)} onClick={() => updateGuests('children', children + 1)}><Plus /></Button>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <TextSmall>Infants</TextSmall>
          <TextMuted>Under 2</TextMuted>
        </div>
        <div className="basis-[120px] flex justify-between items-center">
          <Button variant="outline" size="icon" disabled={(infants <= 0)} onClick={() => updateGuests('infants', infants - 1)}><Minus /></Button>
          <TextSmall>{infants}</TextSmall>
          <Button variant="outline" size="icon" disabled={(infants >= 6)} onClick={() => updateGuests('infants', infants + 1)}><Plus /></Button>
        </div>
      </div>
    </div>
  );
};

export default Guests;