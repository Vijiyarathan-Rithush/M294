import { useFormContext } from "react-hook-form"
import InputField from "../modalFormComponents/InputField"
import CountryDropdownField from "../modalFormComponents/CountryDropdownField"
import type { ModalFormData } from "../../models/ModalFormData"
import { validationRules } from "../../utils/validation"

/**
 * Abschnitt für Adressdaten im Formular.
 *
 * @returns {JSX.Element} Die Felder für Adresse, Stadt, Postleitzahl und Land
 */
export default function AddressSection()
{
  const { register, control, formState: { errors, dirtyFields } } = useFormContext<ModalFormData>()
  return (
    <>
      <InputField label="Address" required id="address" {...register("address", validationRules.address)} error={errors.address} isValid={!!dirtyFields.address && !errors.address} />
      <InputField label="City" required id="city" {...register("city", validationRules.city)} error={errors.city} isValid={!!dirtyFields.city && !errors.city} />
      <InputField label="Postcode" required id="postcode" {...register("postcode", validationRules.postcode)} error={errors.postcode} isValid={!!dirtyFields.postcode && !errors.postcode} />
      <CountryDropdownField control={control} name="country" label="Country" />
    </>
  );
}
