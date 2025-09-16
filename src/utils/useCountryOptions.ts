
import type { Option } from "../models/Option"
import { getAllCountryOptions } from "./countryData"

export function useCountryOptions(): Option[]
{
    return getAllCountryOptions().filter((c): c is Option => !!c);
}
