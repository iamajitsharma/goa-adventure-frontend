import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean | string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors | undefined | FieldValues;
  rules?: RegisterOptions;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
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
}) => {
  return (
    <div className="py-2">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register(id, { required: required || false, ...rules })}
        className="border py-2.5 px-2 w-full outline-none border-gray-300 rounded"
      />
      {errors && errors[id] && (
        <span className="text-red-500 text-sm">{errors[id].message}</span>
      )}
    </div>
  );
};

export default Input;
