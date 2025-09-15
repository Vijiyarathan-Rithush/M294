export const countrySelectStyles = 
{
  control: (provided: any) => 
  ({
    ...provided,
    backgroundColor: "black",
    borderColor: "gray",
    color: "white",
    minHeight: "44px",
    boxShadow: "none"
  }),
  menu: (provided: any) => 
  ({
    ...provided,
    backgroundColor: "black",
    color: "white"
  }),
  option: (provided: any, state: any) => 
  ({
    ...provided,
    backgroundColor: state.isFocused ? "#1f2937" : "black", // Tailwind gray-800
    color: "white",
    cursor: "pointer"
  }),
  singleValue: (provided: any) => 
  ({
    ...provided,
    color: "white"
  }),
  input: (provided: any) => 
  ({
    ...provided,
    color: "white"
  }),
  placeholder: (provided: any) => 
  ({
    ...provided,
    color: "#9ca3af" // Tailwind gray-400
  }),
  dropdownIndicator: (provided: any) => 
  ({
    ...provided,
    color: "white"
  }),
  indicatorSeparator: () =>  
  ({
    display: "none"
  })
};
