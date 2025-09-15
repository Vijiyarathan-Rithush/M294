import { useState } from "react"
import { useForm } from "react-hook-form"
import type { ModalFormData } from "../../models/ModalFormData"
import { validationRules } from "../../utils/validation"

export type ToastType = "success" | "error"
export interface ToastData { type: ToastType; message: string }

export function useRegistrationForm() {
  const [toast, setToast] = useState<ToastData | null>(null)

  const form = useForm<ModalFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  })

  const { getValues } = form

  const confirmPasswordRule = {
    ...validationRules.confirmPassword,
    validate: (v: string) => v === getValues("password") || "Passwörter stimmen nicht überein"
  }

  const onSubmit = async (data: ModalFormData) => {
    try {
      const fd = new FormData()
      fd.append("name", data.name)
      fd.append("username", data.username)
      fd.append("email", data.email)
      fd.append("phoneNumber", `+41${data.phoneNumber}`)
      fd.append("city", data.city)
      fd.append("postcode", data.postcode)
      fd.append("country", data.country as string)
      fd.append("address", data.address)
      fd.append("dateOfBirth", data.dateOfBirth)
      fd.append("password", data.password)
      const files = data.idConfirmation as unknown as FileList
      if (files?.[0]) fd.append("idConfirmation", files[0])

      const res = await fetch("http://localhost:3002/register", { method: "POST", body: fd })
      if (res.status === 200) setToast({ type: "success", message: "Registrierung erfolgreich" })
      else if (res.status === 405) setToast({ type: "error", message: "Benutzername bereits vergeben" })
      else setToast({ type: "error", message: `Serverfehler (${res.status})` })
    } catch {
      setToast({ type: "error", message: "Netzwerkfehler – später erneut versuchen" })
    } finally {
      setTimeout(() => setToast(null), 4000)
    }
  }

  return { form, onSubmit, confirmPasswordRule, toast, setToast, validationRules }
}
