import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormContext } from "react-hook-form";

/**
 * Zeigt ein Google reCAPTCHA (v2 Checkbox) an und schreibt das Token ins Formular.
 * @returns {JSX.Element} Das Captcha-Feld
 */
export default function Captcha()
{
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const { setValue } = useFormContext();

    function handleChange(token: string | null)
    {
        setValue("captchaToken", token ?? "");
    }

    return (
        <div className="my-4">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={""} // TODO: Ersetze durch echten Key
                onChange={handleChange}
            />
        </div>
    );
}
