import type { ToastData } from "../../models/ToastData";

export default function Toast({ toast }: { toast: ToastData | null })
{
  if (!toast) return null;
  return (
    <div className="toast toast-top toast-end z-50">
      {toast.type === "success" && (
        <div className="alert alert-success">
          <span>{toast.message}</span>
        </div>
      )}
      {toast.type === "error" && (
        <div className="alert alert-error">
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
