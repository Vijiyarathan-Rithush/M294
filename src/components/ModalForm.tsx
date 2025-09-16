
import { FormProvider } from "react-hook-form";
import Title from "./modalFormComponents/Title";
import ButtonField from "./modalFormComponents/ButtonField";
import Toast from "./ui/Toast";
import PersonalSection from "./sections/PersonalSection";
import AccountSection from "./sections/AccountSection";
import AddressSection from "./sections/AddressSection";
import IdentitySection from "./sections/IdentitySection";
import { useRegistrationForm } from "./hooks/useRegistrationForm";

import { useNavigate } from "react-router-dom";



import type { ModalFormData } from "../models/ModalFormData";
interface ModalFormProps {
    setOpen: (open: boolean) => void;
}

function ModalForm({ setOpen }: ModalFormProps) {
    const { form, onSubmit, toast } = useRegistrationForm();
    const { handleSubmit, formState: { isSubmitting, isValid } } = form;
    const navigate = useNavigate();
    // Wrapper, damit setOpen und navigate übergeben werden kann
    const handleFormSubmit = async (data: ModalFormData) => {
        const success = await onSubmit(data, setOpen);
        if (success) {
            navigate("/success");
        }
    };
    return (
        <>
            <Toast toast={toast} />
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[80vh] md:max-h-[85vh]">
                    <div className="md:col-span-2">
                        <Title label="Registrierungsformular" />
                    </div>
                    <PersonalSection />
                    <AccountSection />
                    <AddressSection />
                    <IdentitySection />
                    <div className="md:col-span-2 flex flex-col gap-2 sm:flex-row sm:justify-between">
                        <ButtonField label="Abbrechen" onClick={() => setOpen(false)} tabIndex={99} />
                        <ButtonField label={isSubmitting ? "Sende..." : "Absenden"} disabled={isSubmitting || !isValid} tabIndex={1} />
                    </div>
                </form>
            </FormProvider>
        </>
    );
}

export default ModalForm;
