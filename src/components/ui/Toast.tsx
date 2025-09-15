import type { ToastData } from "../../components/hooks/useRegistrationFrom"

export default function Toast({ toast }: { toast: ToastData | null })
{
  if (!toast) return null;
  return (
    <div className="toast toast-top toast-end z-50">
      <div className={`alert alert-${toast.type}`}>
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
