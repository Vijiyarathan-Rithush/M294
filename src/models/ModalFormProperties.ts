export type ModalFormProperties =
{
    label: string
    id: string
    type?: "text" | "tel" | "date" | "password" | "email"
    required?: boolean
    placeholder?: string
    minLength?: number
    maxLength?: number
} & React.InputHTMLAttributes<HTMLInputElement>