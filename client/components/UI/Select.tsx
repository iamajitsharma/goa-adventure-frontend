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
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  rules?: RegisterOptions;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  items: string[];
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
  placeholder,
  className,
  icon,
  items,
}) => {
  return (
    <div className="py-2">
      {label && <label>{label}</label>}
      <select
        {...register(id, { required: required || false, ...rules })}
        className="border py-2.5 px-2 w-full outline-none border-gray-300 rounded"
      >
        {/* {items?.map((menu)=> (
        <option key={menu._id} value={menu.title}>{menu.title}</option>
     ))}   
         */}
      </select>
    </div>
  );
};

export default Select;
