export interface ButtonProperties {
  label: string     // <- vorher: "Abbrechen" | "Absenden"
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}
