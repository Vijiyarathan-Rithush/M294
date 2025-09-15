export const validationRules = {
  name: {
    required: "Name ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" }
  },
  username: {
    required: "Benutzername ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" }
  },
  email: {
    required: "E-Mail ist erforderlich",
    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ungültige E-Mail" }
  },
  phoneNumber: {
    required: "Telefonnummer ist erforderlich",
    pattern: { value: /^\d{9}$/, message: "Bitte 9 Ziffern ohne Vorwahl" }
  },
  city: {
    required: "Stadt ist erforderlich",
    pattern: { value: /^[A-Za-zÀ-ÿ\s\-]+$/, message: "Nur Buchstaben" }
  },
  postcode: {
    required: "PLZ ist erforderlich",
    pattern: { value: /^(?:[1-9]\d{3})$/, message: "1000–9999" }
  },
  country: { required: "Land ist erforderlich" },
  address: {
    required: "Adresse ist erforderlich",
    minLength: { value: 5, message: "Mindestens 5 Zeichen" }
  },
  dateOfBirth: {
    required: "Geburtsdatum ist erforderlich",
    validate: (v: string) => {
      const t = new Date(), b = new Date(v)
      const age = t.getFullYear() - b.getFullYear()
      const m = t.getMonth() - b.getMonth()
      const d = t.getDate() - b.getDate()
      return (age > 18 || (age === 18 && (m > 0 || (m === 0 && d >= 0)))) || "Mindestens 18 Jahre"
    }
  },
  fileUpload: {
    required: "Ausweisdokument ist erforderlich",
    validate: (fl: FileList) => {
      if (!fl || fl.length === 0) return "Bitte ein Dokument hochladen"
      const f = fl[0], ok = ["image/jpeg","image/jpg","image/png","application/pdf"]
      if (!ok.includes(f.type)) return "Nur JPG, PNG oder PDF"
      if (f.size > 5 * 1024 * 1024) return "Maximal 5MB"
      return true
    }
  },
  password: {
    required: "Passwort ist erforderlich",
    minLength: { value: 12, message: "Mindestens 12 Zeichen" },
    maxLength: { value: 255, message: "Maximal 255 Zeichen" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,255}$/,
      message: "Zahl, Gross- und Kleinbuchstaben erforderlich"
    }
  },
  confirmPassword: {
    required: "Passwort-Bestätigung ist erforderlich"
    // Vergleich passiert in ModalForm mit getValues (s. unten)
  }
}
