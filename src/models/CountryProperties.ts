import type { SelectHTMLAttributes } from "react"
import type { FieldError } from "react-hook-form"

/**
 * Eigenschaften für das Länder-Auswahlfeld
 */
export interface CountryProperties extends SelectHTMLAttributes<HTMLSelectElement>
{
    /** Die ID des Feldes (optional) */
    id?: string;
    /** Der Text des Labels (Feldname) */
    label: string;
    /** Fehlerobjekt für Validierung */
    error?: FieldError;
    /** Ist das Feld gültig? */
    isValid?: boolean;
}
