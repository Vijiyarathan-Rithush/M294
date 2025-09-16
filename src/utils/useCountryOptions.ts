
import type { Option } from "../models/Option"
import { getAllCountryOptions } from "./countryData"

/**
 * Gibt die Länderoptionen für das Dropdown zurück.
 *
 * @returns {Option[]} Die Liste der Länderoptionen
 */
export function useCountryOptions(): Option[]
{
    return getAllCountryOptions().filter((c): c is Option => !!c);
}
