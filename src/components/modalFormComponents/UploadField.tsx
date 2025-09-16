import type { UploadFieldProperties } from "../../models/UploadFieldProperties";

function UploadField({label, id, accept = ".pdf,.png,.jpg,.jpeg", isValid, error, ...rest}: UploadFieldProperties)
{
    const inputId = id ?? (rest.name as string | undefined);
    // Style je nach Fehler/isValid
    const base = "file-input file-input-bordered w-full";
    const state = error ? "border-red-600 focus:ring-2 focus:ring-red-600 focus:border-red-600" : isValid ? "border-green-600 focus:ring-2 focus:ring-green-600 focus:border-green-600" : "border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    return (
        <div className="w-full text-left">
            <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">{label}</label>
            <input id={inputId} type="file" accept={accept} className={`${base} ${state}`} {...rest} />
        </div>
    );
}

export default UploadField;