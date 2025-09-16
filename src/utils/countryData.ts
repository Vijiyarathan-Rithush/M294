
import { countries } from "countries-list"

export function getAllCountryOptions()
{
    const priority = ["CH", "DE", "AT"];
    const all = Object.entries(countries).map(([code, info]) => ({ value: code, label: info.name }));
    const priorityCountries = priority.map(code => all.find(c => c.value === code)).filter(Boolean);
    const rest = all.filter(c => !priority.includes(c.value)).sort((a, b) => a.label.localeCompare(b.label));
    return [...priorityCountries, ...rest];
}
