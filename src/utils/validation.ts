export const validationRules = {
  name: {
    required: "Name ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  username: {
    required: "Benutzername ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  email: {
    required: "E-Mail ist erforderlich",
    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ungültige E-Mail" },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  password: {
    required: "Passwort ist erforderlich",
    minLength: { value: 12, message: "Mindestens 12 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,255}$/,
      message: "Zahl, Gross- und Kleinbuchstaben erforderlich"
    },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  confirmPassword: {
    required: "Passwort-Bestätigung ist erforderlich",
    validate: (v: string, getValues?: (name: string) => string) =>
      v === (getValues ? getValues("password") : "") || "Passwörter stimmen nicht überein"
  },
  phoneNumber: {
    required: "Telefonnummer ist erforderlich",
    validate: (v: string) => {
      const trimmed = v.replace(/\s+/g, "");
      if (/^\d{9}$/.test(trimmed) || /^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(v)) {
        if (/[<>]/.test(v) || /<[^>]*>/.test(v)) return "Keine spitzen Klammern oder HTML-Tags erlaubt";
        return true;
      }
      return "Bitte 9 Ziffern ohne Vorwahl oder Format 78 244 24 44";
    }
  },
  address: {
    required: "Adresse ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  city: {
    required: "Stadt ist erforderlich",
    pattern: { value: /^[A-Za-zÀ-ÿ\s\-.]+$/, message: "Nur Buchstaben, Bindestrich, Punkt" },
    validate: (v: string) => {
      if (/[<>]/.test(v) || /<[^>]*>/.test(v)) return "Keine spitzen Klammern oder HTML-Tags erlaubt";
      return true;
    }
  },
  postcode: {
    required: "PLZ ist erforderlich",
    pattern: { value: /^(?:[1-9]\d{3})$/, message: "1000–9999" },
    validate: (v: string) =>
      !/[<>]/.test(v) && !/<[^>]*>/.test(v) || "Keine spitzen Klammern oder HTML-Tags erlaubt"
  },
  country: {
    required: "Land ist erforderlich"
  },
  dateOfBirth: {
    required: "Geburtsdatum ist erforderlich",
    validate: (v: string) => {
      if (/[<>]/.test(v) || /<[^>]*>/.test(v)) return "Keine spitzen Klammern oder HTML-Tags erlaubt";
      const t = new Date();
      const b = new Date(v);
      const age = t.getFullYear() - b.getFullYear();
      const m = t.getMonth() - b.getMonth();
      const d = t.getDate() - b.getDate();
      return (age > 18 || (age === 18 && (m > 0 || (m === 0 && d >= 0)))) || "Mindestens 18 Jahre";
    }
  },
  fileUpload: {
    required: "Ausweisdokument ist erforderlich",
    validate: (fl: FileList) => {
      if (!fl || fl.length === 0) return "Bitte mindestens ein Dokument hochladen";
      if (fl.length > 5) return "Maximal 5 Dateien erlaubt";
      let totalSize = 0;
      const ok = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
      for (let i = 0; i < fl.length; i++) {
        const f = fl[i];
        if (!ok.includes(f.type)) return "Nur JPG, PNG oder PDF";
        totalSize += f.size;
      }
      if (totalSize > 5 * 1024 * 1024) return "Gesamtgröße max. 5MB";
      return true;
    }
  },
  terms: {
    required: "Bitte akzeptieren Sie die AGB",
    validate: (v: boolean) => v === true || "Bitte akzeptieren Sie die AGB"
  }
};
