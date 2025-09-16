


import { countries } from "countries-list";

// Typ für countries-list ergänzen, falls nicht vorhanden
type CountryInfo = { name: string; [key: string]: any };


export function getAllCountryOptions() {
    // Alle Länder aus der Library holen
    const all = Object.entries(countries).map(([code, info]) => ({
        value: code,
        label: (info as CountryInfo).name
    }));

    // CH, DE, AT nach oben, Rest alphabetisch
    const top = ["CH", "DE", "AT"];
    const topCountries = all.filter(c => top.includes(c.value));
    const rest = all.filter(c => !top.includes(c.value)).sort((a, b) => a.label.localeCompare(b.label, 'de'));
    return [...topCountries, ...rest];
}

