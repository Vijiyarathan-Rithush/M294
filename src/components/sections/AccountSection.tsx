import { useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import type { ModalFormData } from "../../models/ModalFormData"
import { validationRules } from "../../utils/validation"

/**
 * Abschnitt für Accountdaten im Formular.
 *
 * @returns {JSX.Element} Die Felder für Benutzername und Passwort
 */
export default function AccountSection()
{
  const { register, getValues, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()
  const confirmPasswordRule = { ...validationRules.confirmPassword, validate: (v: string) => v === getValues("password") || "Passwörter stimmen nicht überein" }
  return (
    <>
      <InputField label="Username" required type="text" {...register("username", validationRules.username)} error={errors.username} isValid={!!dirtyFields.username && !errors.username} />
      <InputField label="Password" required type="password" autoComplete="new-password" {...register("password", validationRules.password)} error={errors.password} isValid={!!dirtyFields.password && !errors.password} />
      <InputField label="Confirm Password"  required type="password" {...register("confirmPassword", confirmPasswordRule)} error={errors.confirmPassword} isValid={!!dirtyFields.confirmPassword && !errors.confirmPassword} />
    </>
  );
}
