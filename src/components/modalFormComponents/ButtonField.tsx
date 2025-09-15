import type { ButtonProperties } from "../../models/ButtonProperties";

function ButtonField({ label, onClick }: ButtonProperties)
{
    switch (label)
    {
        case "Abbrechen":
            return (
                <button type="button" className="!bg-red-600 text-white w-full sm:w-auto" onClick={onClick}>{label}</button>
            )
        case "Absenden":
            return (
                <button type="submit" className="!bg-green-500 text-black w-full sm:w-auto">{label}</button>
            )
        default:
            return null
    }
}


export default ButtonField;