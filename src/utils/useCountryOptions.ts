import countryList from "react-select-country-list";
import type { Option } from "../models/Option";

export function useCountryOptions(): Option[] 
{
  const allCountries = countryList().getData() as Option[];
  const countriesCopy = [...allCountries];
  countriesCopy.sort((a, b) => a.label.localeCompare(b.label));
  return countriesCopy;
}
