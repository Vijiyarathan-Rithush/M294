/**
 * Typ der Toast-Nachricht: Erfolg oder Fehler
 */
type ToastType = "success" | "error";

/**
 * Toast-Nachricht für Hinweise und Fehler
 */
export interface ToastData
{
  /** "success" für Erfolg, "error" für Fehler */
  type: ToastType;
  /** Die Nachricht, die angezeigt wird */
  message: string;
}