import type { FieldError } from "react-hook-form";

export interface PhoneInputFieldProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    error?: FieldError;
    isValid?: boolean;
    className?: string;
    name?: string;
}
