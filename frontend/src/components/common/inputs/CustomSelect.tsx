import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Select, { GroupBase } from "react-select";

interface CustomSelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  id: string;
  value?: any;
  placeholder: String;
  options: any;
  isSearchable: boolean;
  onChange?: () => void;
  disabled?: Boolean;
  required?: Boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  className?: string;
  icon?: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  value,
  options,
  placeholder,
  isSearchable,
  onChange,
  disabled,
  required,
  register,
  errors,
  className,
  icon,
}) => {
  return (
    <div
      className={`w-full relative flex items-center justify-between border-b-2 border-neutral-600 ${className}`}
    >
      <div className="relative w-full">
        <Select
          placeholder={placeholder}
          isSearchable={isSearchable}
          value={value}
          options={options}
          formatOptionLabel={(option: any) => (
            <div className="flex flex-row items-center gap-2 border-none">
              <div>{option.flag}</div>
              <div>
                {option.label},
                <span className="text-neutral-500 ml-1">{option.region}</span>
              </div>
            </div>
          )}
          classNames={{
            control: () => "p-0 border-none",
            input: () => "text-lg",
            option: () => "text-lg",
          }}
        />
      </div>
      <div className="text-2xl text-neutral-600">{icon}</div>
    </div>
  );
};

export default CustomSelect;
