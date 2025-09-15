import type { ModalFormProperties } from "../../models/ModalFormProperties";
import { UserIcon, CalendarIcon, KeyIcon } from "@heroicons/react/16/solid";

function InputField({ label, id, type, required, placeholder, minLength, maxLength, ...rest }: ModalFormProperties) {
    const inputId = id ?? rest.name;
    let Icon = getIconByType(type);

    return (
        <>
            <div className="w-full text-left">
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">
                    {label}{required && <span className="text-red-600">*</span>}
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
                        aria-invalid="false"
                        aria-describedby={`${inputId}-error`}
                        className={`w-full h-11 rounded-lg border border-gray-700 bg-black pr-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${Icon ? "pl-10" : "pl-3"}`} />
                    {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />}
                </div>
            </div>
        </>
    );
}

function getIconByType(type?: ModalFormProperties["type"]) 
{
    switch (type) 
    {
        case "date":     return CalendarIcon;
        case "password": return KeyIcon;
        case "text":     return UserIcon;
        default:         return null;
    }
}

export default InputField;
