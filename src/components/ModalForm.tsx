import { useForm } from "react-hook-form";
import Title from "./modalFormComponents/Title";
import InputField from "./modalFormComponents/InputField";
import UploadField from "./modalFormComponents/UploadField";
import ButtonField from "./modalFormComponents/ButtonField";
import CountryDropdownField from "./modalFormComponents/CountryDropdownField";
import PhoneInputField from "./modalFormComponents/PhoneInputField";
import type { ModalFormData } from "../models/ModalFromData";

function ModalForm() {
  const { register, handleSubmit, control } = useForm<ModalFormData>();
  const onSubmit = (data: ModalFormData) => console.log("Formular abgesendet:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[80vh] md:max-h-[85vh] min-h-0" style={{ WebkitOverflowScrolling: "touch" }}>
      <div className="md:col-span-2"><Title label="Registrierungsformular" /></div>

      <InputField label="Full Name" id="full_name" required minLength={5} maxLength={255} className="w-full" {...register("name")} />
      <InputField label="Username" id="username" type="text" required minLength={5} maxLength={255} className="w-full" {...register("username")} />

      <InputField label="E-Mail" id="email" type="email" placeholder="Email" required autoComplete="email" className="w-full" {...register("email")} />
     <PhoneInputField label="Phone Number" type="tel" id="phoneNumber" placeholder="12 345 67 89" {...register("phoneNumber")} />

      <InputField label="City" id="city" type="text" required className="w-full" {...register("city")} />
      <InputField label="Postcode" id="postcode" type="text" required minLength={4} maxLength={4} className="w-full" {...register("postcode")} />

      <CountryDropdownField control={control} name="country" label="Country" />
      <InputField label="Address" id="address" type="text" required className="w-full" {...register("address")} />

      <InputField label="Birthday" id="date_of_birth" type="date" required className="w-full" {...register("dateOfBirth")} />
      <div className="w-full"><UploadField label="Upload ID card (PNG/JPG/PDF, max. 5 files)" multiple accept=".png,.jpg,.jpeg,.pdf" {...register("idConfirmation")} /></div>

      <InputField label="Password" id="password" type="password" required autoComplete="new-password" minLength={12} maxLength={255} className="w-full" {...register("password")} />
      <InputField label="Confirm Password" id="confirm_password" type="password" required minLength={12} maxLength={255} className="w-full" />

      <div className="md:col-span-2 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <ButtonField label="Abbrechen"  />
        <ButtonField label="Absenden" />
      </div>
    </form>
  );
}

export default ModalForm;
