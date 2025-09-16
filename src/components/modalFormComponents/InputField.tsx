import type { InputFieldProperties } from "../../models/InputFieldProperties"
import { UserIcon, CalendarIcon, KeyIcon } from "@heroicons/react/16/solid"

function InputField({ label, id, type, required, placeholder, minLength, maxLength, error, isValid, className, ...rest }: InputFieldProperties)
{
  const inputId = (id ?? (rest.name as string)) || "input";
  const Icon = getIconByType(type);
  const base = "w-full h-11 rounded-lg border bg-black pr-4 text-sm text-white placeholder-gray-400 focus:outline-none";
  const state = error ? "border-red-600 focus:ring-2 focus:ring-red-600 focus:border-red-600" : isValid ? "border-green-600 focus:ring-2 focus:ring-green-600 focus:border-green-600" : "border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  return (
    <div className="w-full text-left">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type={type}
          required={required}
          placeholder={placeholder ?? label}
          minLength={minLength}
          maxLength={maxLength}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={`${inputId}-error`}
          className={`${base} ${state} ${Icon ? "pl-10" : "pl-3"} ${className ?? ""}`}
          {...rest}
        />
        {Icon && (
          <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
}

function getIconByType(type?: "date" | "password" | "text" | "email" | "tel")
{
  switch (type)
  {
    case "date": return CalendarIcon;
    case "password": return KeyIcon;
    case "text": return UserIcon;
    default: return null;
  }
}

export default InputField;
