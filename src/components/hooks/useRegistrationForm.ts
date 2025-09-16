import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import type { ModalFormData } from "../../models/ModalFormData";
import { validationRules } from "../../utils/validation";
import type { ToastData } from "../../models/ToastData";

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

  // setOpen als optionales Argument
  const onSubmit = async (data: ModalFormData, setOpen?: (open: boolean) => void): Promise<boolean> =>
  {
    let success = false;
    try
    {
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
      if (files && files.length > 0)
      {
        let totalSize = 0;
        for (let i = 0; i < files.length; i++)
        {
          totalSize += files[i].size;
        }
        if (totalSize > 5 * 1024 * 1024)
        {
          setToast({ type: "error", message: "Die Gesamtgrösse der Dateien darf 5MB nicht überschreiten!" });
          return false;
        }
        // Maximal 5 Dateien, alle einzeln anhängen
        for (let i = 0; i < Math.min(files.length, 5); i++)
        {
          fd.append("idConfirmation", files[i]);
        }
      }

      let res;
      try
      {
        res = await axios.post("http://localhost:3002/login", fd, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }
      catch (err)
      {
        const error = err as any;
        if (error.response)
        {
          res = error.response;
        }
        else
        {
          setToast({ type: "error", message: "Netzwerkfehler – später erneut versuchen" });
          return false;
        }
      }

      if (res.status === 200)
      {
        setToast({ type: "success", message: "Registrierung erfolgreich!" });
        setTimeout(() =>
        {
          if (setOpen) setOpen(false);
        }, 2000);
        success = true;
      }
      else if (res.status === 405)
      {
        let msg = "Benutzername oder E-Mail bereits vergeben.";
        try
        {
          const data = res.data;
          if (data && data.field === "email") msg = "E-Mail ist bereits vergeben.";
          else if (data && data.field === "username") msg = "Benutzername ist bereits vergeben.";
          else if (data && data.message) msg = data.message;
        }
        catch
        {
          // Fehler beim Parsen ignorieren
        }
        setToast({ type: "error", message: msg });
      }
      else
      {
        setToast({ type: "error", message: `Unbekannter Fehler (${res.status}) – bitte erneut versuchen.` });
      }
    }
    catch
    {
      setToast({ type: "error", message: "Netzwerkfehler – später erneut versuchen" });
    }
    finally
    {
      setTimeout(() => setToast(null), 4000);
    }
    return success;
  };
  return { form, onSubmit, confirmPasswordRule, toast, setToast, validationRules };
}
