import type { Control } from "react-hook-form";
import type { ModalFormData } from "./ModalFormData";

export interface CountryDropdownFieldProperties {
  control: Control<ModalFormData>;
  label: string;
  name: keyof ModalFormData;
}
