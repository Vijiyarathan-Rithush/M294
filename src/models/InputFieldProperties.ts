import type { FieldError } from "react-hook-form";

export interface InputFieldProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id?: string;
    type?: "password" | "email" | "text" | "tel" | "date";
    required?: boolean;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    error?: FieldError;
    isValid?: boolean;
    className?: string;
    name?: string;
}