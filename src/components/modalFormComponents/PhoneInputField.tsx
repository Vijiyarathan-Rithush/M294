import type { PhoneInputFieldProperties } from "../../models/PhoneInputProperties";
/**
 * Zeigt ein Eingabefeld für die Telefonnummer an.
 * Die Vorwahl +41 ist fest vorgegeben.
 * Zeigt Fehler an, wenn die Eingabe ungültig ist.
 *
 * @param {string} label - Der Text des Labels
 * @param {string} [id] - Die ID des Feldes
 * @param {any} [error] - Fehlerobjekt
 * @param {boolean} [isValid] - Ist das Feld gültig?
 * @param {string} [className] - Zusätzliche CSS-Klasse
 * @returns {JSX.Element} Das Eingabefeld für Telefonnummern
 */
function PhoneInputField({ label, id, error, isValid, className, ...rest }: PhoneInputFieldProperties)
{
  const inputId = id ?? (rest.name as string);
  const base = "w-full h-11 rounded-lg border bg-black pr-4 text-sm text-white placeholder-gray-400 focus:outline-none pl-12";
  const state = error
    ? "border-red-600 focus:ring-2 focus:ring-red-600 focus:border-red-600"
    : isValid
      ? "border-green-600 focus:ring-2 focus:ring-green-600 focus:border-green-600"
      : "border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  return (
    <div className="w-full text-left">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">{label}<span className="text-red-600">*</span></label>
      <div className="relative flex items-center">
        <span className="absolute left-3 text-gray-400 select-none">+41</span>
        <input id={inputId} type="tel" aria-invalid={!!error} aria-describedby={`${inputId}-error`} {...rest} className={`${base} ${state} ${className ?? ""}`} />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
}

export default PhoneInputField;
