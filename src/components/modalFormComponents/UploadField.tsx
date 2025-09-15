import type { UploadFieldProperties } from "../../models/UploadFieldProperties";

function UploadField({label, id, ...rest}: UploadFieldProperties )
{
    const inputId = id ?? (rest.name as string | undefined);
    return (<div className="w-full text-left"><label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">{label}</label><input id={inputId} type="file" className="file-input file-input-bordered w-full" {...rest} /></div>);
}

export default UploadField;