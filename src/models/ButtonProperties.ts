/**
 * Eigenschaften für einen Button
 */
export interface ButtonProperties
{
    /** Der Text auf dem Button */
    label: string;
    /** Typ des Buttons (z.B. "submit") */
    type?: "button" | "submit" | "reset";
    /** Ist der Button deaktiviert? */
    disabled?: boolean;
    /** Funktion beim Klick */
    onClick?: () => void;
    /** Tabulator-Reihenfolge */
    tabIndex?: number;
}
