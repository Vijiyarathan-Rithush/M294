import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ModalFormData } from "./ModalFormData";

export interface AGBProperties {
  register: UseFormRegister<ModalFormData>;
  errors: FieldErrors<ModalFormData>;
}
