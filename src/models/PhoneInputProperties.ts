import type { ModalFormProperties } from "./ModalFormProperties"
import type { FieldError } from "react-hook-form"

export interface PhoneInputFieldProperties extends Omit<ModalFormProperties, "id">
{
    id?: string
    label: string
    error?: FieldError
    isValid?: boolean
}
