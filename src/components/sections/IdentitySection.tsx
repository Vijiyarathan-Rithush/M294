import { useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import UploadField from "../modalFormComponents/UploadField"
import type { ModalFormData } from "../../models/ModalFormData"
import { validationRules } from "../../utils/validation"

export default function IdentitySection()
{
  const { register, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()
  return (
    <>
      <InputField label="Birthday" id="dateOfBirth" type="date" {...register("dateOfBirth", validationRules.dateOfBirth)} error={errors.dateOfBirth} isValid={!!dirtyFields.dateOfBirth && !errors.dateOfBirth} />
      <UploadField label="Upload ID card (PNG/JPG/PDF, max. 5MB)" accept=".png,.jpg,.jpeg,.pdf" {...register("idConfirmation", validationRules.fileUpload)} error={errors.idConfirmation} isValid={!!dirtyFields.idConfirmation && !errors.idConfirmation} />
    </>
  );
}
