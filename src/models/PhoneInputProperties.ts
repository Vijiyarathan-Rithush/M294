import type { FieldError } from "react-hook-form";

/**
 * Eigenschaften für das Telefon-Eingabefeld
 */
export interface PhoneInputFieldProperties extends React.InputHTMLAttributes<HTMLInputElement>
{
    /** Die ID des Feldes (optional) */
    id?: string;
    /** Der Text des Labels (Feldname) */
    label: string;
    /** Fehlerobjekt für Validierung */
    error?: FieldError;
    /** Ist das Feld gültig? */
    isValid?: boolean;
    /** Zusätzliche CSS-Klasse */
    className?: string;
    /** Name des Feldes */
    name?: string;
}
