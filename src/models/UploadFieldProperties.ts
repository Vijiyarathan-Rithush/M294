import type { InputHTMLAttributes } from "react"
import type { FieldError } from "react-hook-form"

export interface UploadFieldProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type">
{
    id?: string
    label: string
    error?: FieldError
    isValid?: boolean
}
