import React from "react";
import { Input } from "../ui/input";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
}

const TextField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <div>
      <h5 className="text-md">{label}</h5>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${error ? "border-red-700" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? "error-message" : undefined}
      />
      {error && (
        <p id="error-message" className="text-sm text-red-700">
          {error}
        </p>
      )}
      {helperText && <p className="text-sm">{helperText}</p>}
    </div>
  );
};

export default TextField;
