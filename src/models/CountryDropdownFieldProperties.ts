import type { Control } from "react-hook-form";
import type { ModalFormData } from "./ModalFormData";

/**
 * Eigenschaften für das Länder-Dropdown
 */
export interface CountryDropdownFieldProperties
{
  /** Das Formular-Control-Objekt */
  control: Control<ModalFormData>;
  /** Der Text des Labels (Feldname) */
  label: string;
  /** Der Name des Feldes im Formular */
  name: keyof ModalFormData;
}
