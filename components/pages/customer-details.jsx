'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SERVICES } from "@/lib/eastern-holidays";
import { useState } from "react";

const InputSelect = ({ value, onValueChange, placeholder = '', options = [] }) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map(({ name, value }) => <SelectItem value={value} key={value}>
          {name}
        </SelectItem>)}
      </SelectContent>
    </Select>
  );
};

const CustomerDetails = () => {
  const [serviceType, setServiceType] = useState(SERVICES[1].id);
  const serviceTypeOptions = SERVICES.map(({ name, id }) => ({ name, value: id }));
  const onServiceTypeChange = (newServiceType) => setServiceType(newServiceType);;

  return (
    <div className="w-full max-w-screen-sm mx-auto flex flex-col justify-around min-h-screen">
      <div className="p-4">
        <InputSelect value={serviceType} onValueChange={onServiceTypeChange}
          placeholder="Select the type of service that you need." options={serviceTypeOptions} />
      </div>
    </div>
  )
};

export default CustomerDetails;