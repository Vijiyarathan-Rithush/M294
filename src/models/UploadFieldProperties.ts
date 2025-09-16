import type { FieldError } from "react-hook-form";

export interface UploadFieldProperties extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    error?: FieldError;
    isValid?: boolean;
    name?: string;
    multiple?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
