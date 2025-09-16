import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ModalFormData } from "../../models/ModalFormData";
import { validationRules } from "../../utils/validation";
import type { ToastData } from "../../models/ToastData";
import { http } from "../../api/http";

export function useRegistrationForm() 
{
  const [toast, setToast] = useState<ToastData | null>(null);

  const form = useForm<ModalFormData>
  (
    {
      mode: "onChange",
      reValidateMode: "onChange",
      criteriaMode: "all",
    }
  );

  const { getValues } = form;

  const confirmPasswordRule = 
  {
    required: "Bitte bestätigen Sie Ihr Passwort",
    validate: (v: string) => v === getValues("password") || "Passwörter stimmen nicht überein",
  };

  const onSubmit = async (data: ModalFormData) => {
    try {
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("username", data.username);
      fd.append("email", data.email);
      fd.append("phoneNumber", `+41${data.phoneNumber}`);
      fd.append("city", data.city);
      fd.append("postcode", data.postcode);
      fd.append("country", data.country as string);
      fd.append("address", data.address);
      fd.append("dateOfBirth", data.dateOfBirth);
      fd.append("password", data.password);

      const files = data.idConfirmation as unknown as FileList;
      if (files?.[0]) {
        fd.append("idConfirmation", files[0]);
      }

      const res = await http.post("/login", fd, { validateStatus: () => true });

      if (res.status === 200) {
        setToast({ type: "success", message: "Registrierung erfolgreich" });
        setTimeout(() => {
          setToast(null);
          window.location.href = "/";
        }, 1200);
      } else if (res.status === 405) {
        setToast({ type: "error", message: "E-Mail bereits vergeben" });
      } else if (
        res.status === 400 &&
        typeof res.data === "object" &&
        res.data !== null &&
        "message" in res.data
      ) {
        setToast({ type: "error", message: (res.data as { message: string }).message });
      } else {
        setToast({ type: "error", message: `Serverfehler (${res.status})` });
      }
    } catch (e: any) {
      setToast({ type: "error", message: "Netzwerkfehler – später erneut versuchen" });
    } finally {
      setTimeout(() => setToast(null), 4000);
    }
  };
  return { form, onSubmit, confirmPasswordRule, toast, setToast, validationRules };
}
