import { useForm } from "react-hook-form";
import Title from "./modalFormComponents/Title";
import InputField from "./modalFormComponents/InputField";
import UploadField from "./modalFormComponents/UploadField";
import ButtonField from "./modalFormComponents/ButtonField";
import CountryDropdownField from "./modalFormComponents/CountryDropdownField";
import type { ModalFormData } from "../models/ModalFromData";

function ModalForm() {
  const { register, handleSubmit, control } = useForm<ModalFormData>();
  const onSubmit = (data: ModalFormData) => console.log("Formular abgesendet:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2"><Title label="Registrierungsformular" /></div>

      <InputField label="Full Name" id="full_name" required minLength={5} maxLength={255} {...register("name")} />
      <InputField label="Username" id="username" type="text" required minLength={5} maxLength={255} {...register("username")} />

      <InputField label="E-Mail" id="email" type="email" required autoComplete="email" {...register("email")} />
      <InputField label="Phone Number" id="phone_number" type="tel" required autoComplete="tel" placeholder="0123456789" minLength={10} maxLength={10} {...register("phoneNumber")} />

      <InputField label="City" id="city" type="text" required {...register("city")} />
      <InputField label="Postcode" id="postcode" type="text" required placeholder="8000" minLength={4} maxLength={4} {...register("postcode")} />

      <CountryDropdownField control={control} name="country" label="Country" />
      <InputField label="Address" id="address" type="text" required placeholder="Musterstrasse 1" {...register("address")} />

      <InputField label="Birthday" id="date_of_birth" type="date" required {...register("dateOfBirth")} />
      <InputField label="Password" id="password" type="password" required autoComplete="new-password" minLength={12} maxLength={255} {...register("password")} />

      <InputField label="Confirm Password" id="confirm_password" type="password" required minLength={12} maxLength={255} />
      <div><UploadField label="Ausweis hochladen (PNG/JPG/PDF, max. 5 files)" multiple accept=".png,.jpg,.jpeg,.pdf" {...register("idConfirmation")} /></div>

      <div className="md:col-span-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <ButtonField label="Abbrechen" />
        <ButtonField label="Absenden" />
      </div>
    </form>
  );
}

export default ModalForm;
