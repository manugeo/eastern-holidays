import { DatePicker } from "../ui/date-picker";

const InputDate = ({ label = 'Date of booking.', ...props }) => {
  return (
    <div {...props}>
      {label && <p className="py-2">{label}</p>}

      <DatePicker />
    </div>
  );
};

export default InputDate;