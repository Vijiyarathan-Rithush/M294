import { Controller, useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import CountryDropdownField from "../modalFormComponents/CountryDropdownField"
import type { ModalFormData } from "../../models/ModalFromData"
import { validationRules } from "../../utils/validation"

export default function AddressSection() {
  const { register, control, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()

  return (
    <>
      <InputField
        label="Address"
        id="address"
        type="text"
        {...register("address", validationRules.address)}
        error={errors.address}
        isValid={!!dirtyFields.address && !errors.address}
      />

      <InputField
        label="City"
        id="city"
        type="text"
        {...register("city", validationRules.city)}
        error={errors.city}
        isValid={!!dirtyFields.city && !errors.city}
      />

      <InputField
        label="Postcode"
        id="postcode"
        type="text"
        {...register("postcode", validationRules.postcode)}
        error={errors.postcode}
        isValid={!!dirtyFields.postcode && !errors.postcode}
      />

      <Controller
        name="country"
        control={control}
        rules={validationRules.country}
        render={({ field }) => (
          <CountryDropdownField
            {...field}
            label="Country"
            error={errors.country}
            isValid={!!dirtyFields.country && !errors.country}
          />
        )}
      />
    </>
  )
}
