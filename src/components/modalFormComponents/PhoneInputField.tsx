import type { ModalFormProperties } from "../../models/ModalFormProperties"

function PhoneInputField({ label, id, required, placeholder, ...rest }: ModalFormProperties) {
  const inputId = id ?? rest.name

  return (
    <>
      <div className="w-full text-left">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-900 mb-1 ml-1.5"
        >
          {label}{required && <span className="text-red-600">*</span>}
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 select-none">+41</span>
          <input
            id={inputId}
            type="tel"
            required={required}
            placeholder={placeholder ?? "Telefonnummer"}
            {...rest}
            className="w-full h-11 pl-12 pr-4 rounded-lg border border-gray-700 bg-black text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </>
  )
}


export default PhoneInputField