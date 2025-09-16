import type { UploadFieldProperties } from "../../models/UploadFieldProperties";
import { useState } from "react";

function UploadField({label, id, ...rest}: UploadFieldProperties)
{
    const inputId = id ?? (rest.name as string | undefined);
    const [fileError, setFileError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files && files.length > 5) {
            setFileError("Maximal 5 Dateien erlaubt!");
            e.target.value = "";
            return;
        }
        if (files && files.length > 0) {
            let totalSize = 0;
            for (let i = 0; i < files.length; i++) {
                totalSize += files[i].size;
            }
            if (totalSize > 5 * 1024 * 1024) {
                setFileError("Die Gesamtgröße der Dateien darf 5MB nicht überschreiten!");
                e.target.value = "";
                return;
            }
        }
        setFileError(null);
        if (rest.onChange) rest.onChange(e);
    }

    return (
        <div className="w-full text-left">
            <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">{label}<span className="text-red-600">*</span></label>
            <input id={inputId} type="file" className="file-input file-input-bordered w-full" multiple {...rest} onChange={handleChange} />
            {fileError && <div className="text-red-600 text-xs mt-1 ml-1.5">{fileError}</div>}
        </div>
    );
}

export default UploadField;