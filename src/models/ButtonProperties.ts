export interface ButtonProperties {
    label: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    tabIndex?: number;
}
