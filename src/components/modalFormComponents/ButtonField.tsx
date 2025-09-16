import type { ButtonProperties } from "../../models/ButtonProperties";

function ButtonField({ label, onClick, disabled, tabIndex }: ButtonProperties & { tabIndex?: number })
{
    switch (label)
    {
        case "Abbrechen":
            return (
                <button type="button" className="!bg-red-600 text-white w-full sm:w-auto" onClick={onClick} tabIndex={tabIndex}>{label}</button>
            );

        case "Absenden":
            return (
                <button type="submit" disabled={disabled} className="!bg-green-500 text-black w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed" tabIndex={tabIndex}>{label}</button>
            );

        default:
            return null;
    }
}

export default ButtonField;
