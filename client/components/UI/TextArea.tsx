import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface TextAreaProps {
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
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
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
  rows,
}) => {
  return (
    <div className={`py-2 ${className}`}>
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        {...register(id, { required: required || false, ...rules })}
        rows={rows}
        className={`border py-3 px-2 w-full outline-none border-gray-300 rounded `}
      ></textarea>
    </div>
  );
};

export default TextArea;
