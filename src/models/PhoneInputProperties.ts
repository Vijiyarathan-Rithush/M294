import type { FieldError } from "react-hook-form";

export interface PhoneInputFieldProperties {
    id?: string;
    label: string;
    error?: FieldError;
    isValid?: boolean;
    className?: string;
    name?: string;
    [key: string]: any;
}
