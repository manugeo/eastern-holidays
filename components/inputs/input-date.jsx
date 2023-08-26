import { DatePicker } from "../ui/date-picker";

const InputDate = ({ label = '', value, required = false, fromDate = null, toDate = null, disabled = null,
  onValueChange = () => { }, ...props }) => {
  return (
    <div {...props}>
      {label && <p className="py-2">{label}</p>}

      <DatePicker selectedDate={value} required={required} fromDate={fromDate} toDate={toDate} disabled={disabled}
        onDateSelect={onValueChange} />
    </div>
  );
};

export default InputDate;