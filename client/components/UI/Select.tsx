import React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface SelectProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  rules?: RegisterOptions;
  className?: string;
  icon?: React.ReactNode;
  items: string[];
  defaultItem: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string; // Change value type to string
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  rules,
  className,
  icon,
  items,
  defaultItem,
  onChange,
  value,
}) => {
  return (
    <div className="py-2">
      {label && <label>{label}</label>}
      <select
        {...(register
          ? register(id, { required: required || false, ...rules })
          : {})}
        className="border py-2.5 px-2 w-full outline-none border-gray-300 rounded"
        onChange={onChange}
        value={value} // Bind the value here
        disabled={disabled} // Bind the disabled property if passed
      >
        <option value="" className="text-gray-400">
          {defaultItem}
        </option>
        {items?.map((menu: string) => (
          <option key={menu} value={menu}>
            {menu}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
