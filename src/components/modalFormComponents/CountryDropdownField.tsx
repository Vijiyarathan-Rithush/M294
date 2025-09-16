import Select from "react-select";
import { Controller } from "react-hook-form";
import { useCountryOptions } from "../../utils/useCountryOptions";
import { countrySelectStyles } from "../select/countrySelectStyles";
import { OptionComponent, SingleValueComponent } from "../select/countrySelectComponents";
import type { CountryDropdownFieldProperties } from "../../models/CountryDropdownFieldProperties";

function CountryDropdownField({ control, label, name }: CountryDropdownFieldProperties)
{
  const options = useCountryOptions();

  return (
    <div className="w-full text-left">
      <label className="block text-sm font-medium text-gray-900 mb-1 ml-1.5">
        {label}
        <span className="text-red-600">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            classNamePrefix="react-select"
            placeholder="Bitte Land auswählen..."
            options={options}
            value={options.find((country) => country.value === field.value) || null}
            onChange={(selected) => field.onChange(selected?.value || "")}
            styles={countrySelectStyles}
            components={{ Option: OptionComponent, SingleValue: SingleValueComponent }}
            isClearable
          />
        )}
      />
    </div>
  );
}

export default CountryDropdownField;
