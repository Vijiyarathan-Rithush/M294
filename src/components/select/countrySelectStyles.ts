import type { StylesConfig } from "react-select";

export const countrySelectStyles: StylesConfig<{ value: string; label: string }, false> = {
  control: (base) => ({
    ...base,
    backgroundColor: "black",
    borderColor: "gray",
    color: "white",
    minHeight: "44px",
    boxShadow: "none"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "black",
    color: "white"
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#1f2937" : "black",
    color: "white",
    cursor: "pointer"
  }),
  singleValue: (base) => ({
    ...base,
    color: "white"
  }),
  input: (base) => ({
    ...base,
    color: "white"
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af"
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white"
  }),
  indicatorSeparator: () => ({ display: 'none' })
};
