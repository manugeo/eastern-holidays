'use client'

import { SERVICES } from "@/lib/eastern-holidays";
import { useState } from "react";
import InputSelect from "../inputs/input-select";
import InputDate from "../inputs/input-date";

const CustomerDetails = () => {
  const [serviceType, setServiceType] = useState(SERVICES[1].id);
  const serviceTypeOptions = SERVICES.map(({ name, id }) => ({ name, value: id }));
  const onServiceTypeChange = (newServiceType) => setServiceType(newServiceType);;

  return (
    <div className="w-full max-w-screen-sm mx-auto flex flex-col justify-around min-h-screen">
      <div className="p-4">
        <InputSelect label="Type of service." value={serviceType} onValueChange={onServiceTypeChange}
          placeholder="Select the type of service that you need." options={serviceTypeOptions} />

        <InputDate className="mt-4" />
      </div>
    </div>
  )
};

export default CustomerDetails;