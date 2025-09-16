import type { FieldError } from "react-hook-form";

/**
 * Eigenschaften für ein Eingabefeld
 */
export interface InputFieldProperties extends React.InputHTMLAttributes<HTMLInputElement>
{
    /** Der Text des Labels (Feldname) */
    label: string;
    /** Die ID des Feldes (optional) */
    id?: string;
    /** Der Typ des Feldes (z.B. "text", "email") */
    type?: "password" | "email" | "text" | "tel" | "date";
    /** Ist das Feld erforderlich? */
    required?: boolean;
    /** Platzhaltertext im Feld */
    placeholder?: string;
    /** Minimale Länge */
    minLength?: number;
    /** Maximale Länge */
    maxLength?: number;
    /** Fehlerobjekt für Validierung */
    error?: FieldError;
    /** Ist das Feld gültig? */
    isValid?: boolean;
    /** Zusätzliche CSS-Klasse */
    className?: string;
    /** Name des Feldes */
    name?: string;
}