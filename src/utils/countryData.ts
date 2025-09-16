
import { countries } from "countries-list"

export function getAllCountryOptions()
{
        const priority = ["CH", "DE", "AT"];
        const all = Object.entries(countries).map(([code, info]) => ({ value: code, label: info.name }));
        const sorted = [
            ...priority.map(code => all.find(c => c.value === code)).filter(Boolean),
            ...all.filter(c => !priority.includes(c.value))
        ];
        return sorted;
}
