/**
 * Die Daten des Registrierungsformulars
 */
export type ModalFormData =
{
    /** Dein voller Name */
    name: string;
    /** Dein Benutzername (zum Einloggen) */
    username: string;
    /** Dein Passwort */
    password: string;
    /** Das Token vom Google reCAPTCHA */
    captchaToken: string;
    /** Dein Geburtsdatum (Format: YYYY-MM-DD) */
    dateOfBirth: string;
    /** Deine E-Mail-Adresse */
    email: string;
    /** Dein Land (z.B. CH, DE, AT) */
    country: string;
    /** Deine Postleitzahl */
    postcode: string;
    /** Deine Adresse (Strasse und Hausnummer) */
    address: string;
    /** Deine Telefonnummer (ohne Vorwahl) */
    phoneNumber: string;
    /** Deine Stadt */
    city: string;
    /** Passwort zur Bestätigung nochmal eingeben */
    confirmPassword: string;
    /** Hochgeladene Ausweisdateien */
    idConfirmation: FileList;
    /** Hast du die AGB akzeptiert? */
    terms: boolean;
}