import type { ButtonProperties } from "../../models/ButtonProperties";

/**
 * Zeigt einen Button an. Je nach Label wird ein "Abbrechen"- oder "Absenden"-Button angezeigt.
 * Der Button kann deaktiviert werden.
 *
 * @param {string} label - Der Text auf dem Button
 * @param {() => void} onClick - Funktion, die beim Klick ausgeführt wird
 * @param {boolean} disabled - Ist der Button deaktiviert?
 * @param {number} [tabIndex] - Tabulator-Reihenfolge
 * @returns {JSX.Element|null} Der Button oder null
 */
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
