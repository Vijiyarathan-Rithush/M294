import { useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import PhoneInputField from "../modalFormComponents/PhoneInputField"
import type { ModalFormData } from "../../models/ModalFromData"
import { validationRules } from "../../utils/validation"

export default function PersonalSection() {
  const { register, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()

  return (
    <>
      <InputField
        label="Full Name"
        id="name"
        type="text"
        {...register("name", validationRules.name)}
        error={errors.name}
        isValid={!!dirtyFields.name && !errors.name}
      />
      <PhoneInputField
        label="Phone Number"
        type="tel"
        placeholder="12 345 67 89"
        {...register("phoneNumber", validationRules.phoneNumber)}
        error={errors.phoneNumber}
        isValid={!!dirtyFields.phoneNumber && !errors.phoneNumber}
      />
      <InputField
        label="E-Mail"
        id="email"
        type="email"
        {...register("email", validationRules.email)}
        error={errors.email}
        isValid={!!dirtyFields.email && !errors.email}
      />
    </>
  )
}
