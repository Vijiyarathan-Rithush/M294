
import { countries } from "countries-list"

export function getAllCountryOptions()
{
    return Object.entries(countries).map(([code, info]) =>
    ({
        value: code,
        label: info.name
    }))
}
