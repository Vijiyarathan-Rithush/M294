import type { FieldError } from "react-hook-form";

/**
 * Eigenschaften für das Datei-Upload-Feld
 */
export interface UploadFieldProperties extends React.InputHTMLAttributes<HTMLInputElement>
{
    /** Die ID des Feldes (optional) */
    id?: string;
    /** Der Text des Labels (Feldname) */
    label: string;
    /** Fehlerobjekt für Validierung */
    error?: FieldError;
    /** Ist das Feld gültig? */
    isValid?: boolean;
    /** Name des Feldes */
    name?: string;
    /** Mehrere Dateien erlaubt? */
    multiple?: boolean;
    /** Funktion für Dateiänderung */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
