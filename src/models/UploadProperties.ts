import type { InputHTMLAttributes } from "react";

export type UploadProperties =
{
    label: string;
    id?: string;
} & InputHTMLAttributes<HTMLInputElement>;