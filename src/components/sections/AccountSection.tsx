
import { useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import type { ModalFormData } from "../../models/ModalFormData"
import { validationRules } from "../../utils/validation"
import { useState } from "react"
import { http } from "../../api/http"

export default function AccountSection() {
  const { register, getValues, setError, clearErrors, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()
  const [checking, setChecking] = useState(false);
  const confirmPasswordRule = { ...validationRules.confirmPassword, validate: (v: string) => v === getValues("password") || "Passwörter stimmen nicht überein" };

  // E-Mail-Duplikatprüfung
  async function checkEmail(value: string) {
    setChecking(true);
    try {
      const res = await http.post("/login", { email: value });
      if (res.status === 405) {
        setError("email", { type: "manual", message: "E-Mail bereits vergeben" });
      } else {
        clearErrors("email");
      }
    } catch {
      // Ignorieren, keine Blockade
    } finally {
      setChecking(false);
    }
  }

  return (
    <>
      <InputField
        label="Username"
        type="text"
        {...register("username", validationRules.username)}
        error={errors.username}
        isValid={!!dirtyFields.username && !errors.username}
      />
      <InputField
        label="E-Mail"
        type="email"
        {...register("email", {
          ...validationRules.email,
          onBlur: (e: any) => checkEmail(e.target.value)
        })}
        error={errors.email}
        isValid={!!dirtyFields.email && !errors.email}
        disabled={checking}
      />
      <InputField
        label="Password"
        type="password"
        autoComplete="new-password"
        {...register("password", validationRules.password)}
        error={errors.password}
        isValid={!!dirtyFields.password && !errors.password}
      />
      <InputField
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", confirmPasswordRule)}
        error={errors.confirmPassword}
        isValid={!!dirtyFields.confirmPassword && !errors.confirmPassword}
      />
    </>
  );
}
