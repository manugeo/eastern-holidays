import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InputSelect = ({ label = '', value, onValueChange = () => {}, placeholder = '', options = [], ...props }) => {
  return (
    <div {...props}>
      {label && <p className="py-2">{label}</p>}
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
    </div>
  );
};

export default InputSelect;