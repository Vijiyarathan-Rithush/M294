import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ModalFormData } from "./ModalFormData";

/**
 * Eigenschaften für die AGB-Checkbox
 */
export interface AGBProperties
{
  /** Funktion zum Registrieren der Felder im Formular */
  register: UseFormRegister<ModalFormData>;
  /** Fehlerobjekt für die Validierung */
  errors: FieldErrors<ModalFormData>;
}
