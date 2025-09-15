import type { SelectHTMLAttributes } from "react"
import type { FieldError } from "react-hook-form"

export interface CountryProperties extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string
  label: string
  error?: FieldError
  isValid?: boolean
}
