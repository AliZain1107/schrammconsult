import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
const enTranslations = {
  "header.title": "Schramm Consult",
  "mainpage.title":"Your individual comparison of private health insurance",
  "mainpage.description": " Your private health insurance specialist: 1,000 tariffs from 27 providers compared",
  "step1.title": "How are you currently insured?",
  "step1.option.statutory": "Statutory",
  "step1.option.private": "Private",
  "step1.option.notInsured": "Not insured",
  "step2.title": "What is your current professional status?",
  "step2.option.freelancer": "Freelancer, Self-employed",
  "step2.option.employee": "Employee",
  "step2.option.civilServant": "Civil Servant",
  "step2.option.trainee": "Trainee",
  "step2.option.student": "Student",
  "step2.option.homemaker": "Homemaker",
  "step2.option.retiree": "Retiree",
  "step2.option.unemployed": "Unemployed",
  "step2.option.artist": "Artist",
  "step2.option.other": "Pensioner",
  "step3.title": "Now tailor your benefits package",
  "step3.option.basic": "Basic",
  "step3.option.comfort": "Comfort",
  "step3.option.premium": "Premium",
  "step3.optionBasic.accommodation": "Accommodation: Shared Rooms",
  "step3.optionComfort.accommodation": "Accommodation: 2-Bed Room",
  "step3.optionPremium.accommodation": "Accommodation: Single Room",
  "step3.optionBasic.treatment": "Treatment: Ward Doctor",
  "step3.optionComfort.treatment": "Treatment: Chief Physician",
  "step3.optionPremium.treatment": "Treatment: Chief Physician",
  "step3.optionBasic.dental": "Dental Services: Basic",
  "step3.optionComfort.dental": "Dental Services: Komfort",
  "step3.optionPremium.dental": "Dental Services: Premium",
  "step3.next": "Next",
  "step4.title": "Individual Discounts",
  "step4.description": "Secure regional and age-based discounts. Savings of up to 54%.",
  "step4.zipCode": "ZIP Code",
  "step4.day": "Day",
  "step4.month": "Month",
  "step4.year": "Year",
  "step4.dob": "Date of Birth",
  "step4.submit": "Find Suitable Plans",
  "step4.zipError": "Please enter a valid 5-digit ZIP code.",
  "step4.dobError.invalid": "Please enter a valid date.",
  "step4.dobError.age": "You must be at least 18 years old.",
  "step4.dobError.required": "Please enter a valid date of birth.",
  "finalStep.title": "Done! Who can we send the comparison to?",
  "finalStep.firstName": "First name",
  "finalStep.lastName": "Last name",
  "finalStep.street": "Street, house number",
  "finalStep.telephone": "Telephone / mobile number",
  "finalStep.email": "E-mail address",
  "finalStep.submit": "Request a comparison",
  "finalStep.emailError": "A lead with this email already exists.",
  "finalStep.footer": "Absolutely free and non-binding",
  "toast.success.formSubmitted": "Form Submitted Successfully",
  "thankYou.title": "Thank You!",
  "thankYou.description": "Your request has been submitted successfully.",
  "thankYou.interestLabel": "What are you interested in?",
  "thankYou.interestPlaceholder": "Select an option",
  "thankYou.interest.tech": "Tech",
  "thankYou.interest.art": "Art",
  "thankYou.interest.sports": "Sports",
  "thankYou.interestSubmit": "Submit Interest",
  "thankYou.preferenceLabel": "How would you like to be contacted?",
  "thankYou.preferencePlaceholder": "Select an option",
  "thankYou.preference.email": "Email",
  "thankYou.preference.phone": "Phone",
  "thankYou.preference.text": "Text",
  "thankYou.preferenceSubmit": "Submit Preference",
  "toast.success.interestSubmitted": "Interest Submitted Successfully",
  "toast.success.preferenceSubmitted": "Contact Preference Submitted Successfully",
  "dashboard.title": "Leads Dashboard",
  "dashboard.loginTitle": "Dashboard Login",
  "dashboard.passwordLabel": "Enter password",
  "dashboard.passwordPlaceholder": "Enter password",
  "dashboard.loginButton": "Login",
  "dashboard.noLeads": "No leads found.",
  "dashboard.lead.insurance": "Insurance",
  "dashboard.lead.status": "Status",
  "dashboard.lead.package": "Package",
  "dashboard.lead.options": "Options",
  "dashboard.lead.zip": "ZIP",
  "dashboard.lead.dob": "DOB",
  "dashboard.lead.timestamp": "Timestamp",
  "dashboard.lead.interest": "Interest",
  "dashboard.lead.preference": "Preference",
  "dashboard.lead.na": "N/A",
  "contentSections.whyChooseUs.title": "Why Choose Us?",
  "contentSections.whyChooseUs.description": "Our quiz helps you find the best insurance plan tailored to your needs. With personalized recommendations and up to 54% savings.",
  "contentSections.secureTrusted.title": "Secure & Trusted",
  "contentSections.secureTrusted.description": "Your data is protected with SSL encryption and complies with GDPR standards.",
  "contentSections.secureTrusted.ssl": "SSL Encrypted",
  "contentSections.secureTrusted.gdpr": "GDPR Compliant",
  "contentSections.getInTouch.title": "Get in Touch",
  "contentSections.getInTouch.description": "Have questions? Our support team is here to help.",
  "contentSections.getInTouch.button": "Contact Us",
  "footer.text": "© 2025 Insurance Quiz App. All rights reserved.",
  "backButton": "Back",
  "contentSections.title": "Your affordable insurance in 3 steps:",
  "contentSections.step1": "Answer a few questions",
  "contentSections.step2": "Leave contact information",
  "contentSections.step3": "Get an individual comparison",
  "contentSections.healthShock": "Health insurance contributions at record high",
  "contentSections.healthShockText": "Contribution shock 2025: Health insurance companies are increasing their contributions by an average of 0.8 percentage points. For many insured people, this means a higher financial burden without any real added value, as the services provided by statutory health insurance companies continue to decline, inflation, the economic crisis and stagnating salaries are also putting a strain on people's wallets. Switching to private health insurance (PKV) can be the solution. As a PKV patient, you not only benefit from better services, more cost coverage and faster doctor appointments, but also from financial stability and individually tailored rates. Those who act now benefit from comprehensive coverage and avoid the incessant premium increases of statutory health insurance.",
  "contentSections.requestComparison": "Request a comparison",
  "contentSections.selfEmployedSave": "This is how much you save as a self-employed person",
  "contentSections.selfEmployedSaveText": "With the right PKV comparison, you can pay up to 77% less for a cheap private health insurance than if you took out a comparable offer from a statutory health insurance company. * The choice of tariffs is crucial. Simply call our experts for more information - they will be happy to help you.",
  "contentSections.performanceText": "Opt for an attractive health upgrade. This includes, for example, the coverage of costs for glasses and braces. You can also secure a single room in the hospital, treatment with the latest technology or more frequent preventive examinations.",
  "contentSections.noWorries": "And the best thing is: no matter how well our business year is going, you don’t have to worry about additional payments to the health insurance company. With private health insurance, you only pay for the services you have booked. Regardless of your income. That’s your big advantage as a private patient!",
  "contentSections.employeeSave": "This is how much you save as an employee",
  "contentSections.employeeSaveText": "Do you already have a private health insurance policy in mind? Make sure it’s the best choice. Get an offer from our experts with a tariff comparison that is up to 67% cheaper * than your statutory health insurance. You’ll also find out how strict your preferred provider is when selecting its privately insured customers and why this is important. Too much negligence when accepting new customers can cost you dearly personally!",
  "contentSections.performanceEmployeeText": "Decide - no matter whether it makes the perfect health insurance for you. Particularly affordable, particularly powerful or with the best mix of both. We will support you in this.",
  "language.english": "English",
  "language.german": "German",
};

// German translations
const deTranslations = {
  "header.title": "Schramm Consult",
  "mainpage.title":"Ihr individueller Vergleich zur Privaten Kranken­versicherung",
  "mainpage.description": " Ihr PKV-Spezialist: 1.000 Tarife von 27 Anbietern im Vergleich",
  "step1.title": "Wie sind Sie derzeit versichert?",
  "step1.option.statutory": "Gesetzlich",
  "step1.option.private": "Privat",
  "step1.option.notInsured": "Nicht versichert",
  "step2.title": "Wie ist Ihr derzeitiger Berufsstatus?",
  "step2.option.freelancer": "Freiberufler, Selbstständig",
  "step2.option.employee": "Angestellter",
  "step2.option.civilServant": "Beamter",
  "step2.option.trainee": "Auszubildender",
  "step2.option.student": "Student",
  "step2.option.homemaker": "Hausfrau/Hausmann",
  "step2.option.retiree": "Rentner",
  "step2.option.unemployed": "Arbeitslos",
  "step2.option.artist": "Künstler",
  "step2.option.other": "Rentner:in",
  "step3.title": "Jetzt Leistungspaket schnüren",
  "step3.option.basic": "Basis",
  "step3.option.comfort": "Komfort",
  "step3.option.premium": "Premium",

  "step3.optionBasic.accommodation": "Unterkunft: Mehrbett-Zimmer",
"step3.optionComfort.accommodation": "Unterkunft: 2-Bett-Zimmer",
"step3.optionPremium.accommodation": "Unterkunft: Einzelzimmer",
"step3.optionBasic.treatment": "Behandlung: Stationsarzt",
"step3.optionComfort.treatment": "Behandlung: Chefarzt",
"step3.optionPremium.treatment": "Behandlung: Chefarzt",
"step3.optionBasic.dental": "Zahnärztliche Leistungen: Basis",
"step3.optionComfort.dental": "Zahnärztliche Leistungen: Komfort",
"step3.optionPremium.dental": "Zahnärztliche Leistungen: Premium", 
  "step3.option.accommodation": "Unterbringung: 2-Bett-Zimmer",
  "step3.option.treatment": "Behandlung: Chefarzt",
  "step3.option.dental": "Zahnleistungen: Komfort",
  "step3.next": "Weiter",
  "step4.title": "Individuelle Rabatte",
  "step4.description": "Sichern Sie sich regionale und altersbedingte Rabatte. Ersparnis von bis zu 54%.",
  "step4.zipCode": "PLZ",
  "step4.day": "Tag",
  "step4.month": "Monat",
  "step4.year": "Jahr",
  "step4.dob": "Geburtsdatum",
  "step4.submit": "Passende Tarife finden",
  "step4.zipError": "Bitte geben Sie eine gültige 5-stellige PLZ ein.",
  "step4.dobError.invalid": "Bitte geben Sie ein gültiges Datum ein.",
  "step4.dobError.age": "Sie müssen mindestens 18 Jahre alt sein.",
  "step4.dobError.required": "Bitte geben Sie ein gültiges Geburtsdatum ein.",
  "finalStep.title": "Fertig! An wen können wir das Angebot senden?",
  "finalStep.firstName": "Vorname",
  "finalStep.lastName": "Nachname",
  "finalStep.street": "Straße, Hausnummer",
  "finalStep.telephone": "Telefon / Mobilnummer",
  "finalStep.email": "E-Mail-Adresse",
  "finalStep.submit": "Vergleich anfordern",
  "finalStep.emailError": "Ein Lead mit dieser E-Mail existiert bereits.",
  "finalStep.footer": "Absolut kostenlos und unverbindlich",
    "toast.success.formSubmitted": "Formular erfolgreich übermittelt",

  "thankYou.title": "Vielen Dank!",
  "thankYou.description": "Ihre Anfrage wurde erfolgreich übermittelt.",
  "thankYou.interestLabel": "Woran sind Sie interessiert?",
  "thankYou.interestPlaceholder": "Option auswählen",
  "thankYou.interest.tech": "Technik",
  "thankYou.interest.art": "Kunst",
  "thankYou.interest.sports": "Sport",
  "thankYou.interestSubmit": "Interesse absenden",
  "thankYou.preferenceLabel": "Wie möchten Sie kontaktiert werden?",
  "thankYou.preferencePlaceholder": "Option auswählen",
  "thankYou.preference.email": "E-Mail",
  "thankYou.preference.phone": "Telefon",
  "thankYou.preference.text": "SMS",
  "thankYou.preferenceSubmit": "Präferenz absenden",
  "toast.success.interestSubmitted": "Interesse erfolgreich übermittelt",
  "toast.success.preferenceSubmitted": "Kontaktpräferenz erfolgreich übermittelt",
  "dashboard.title": "Leads-Dashboard",
  "dashboard.loginTitle": "Dashboard-Anmeldung",
  "dashboard.passwordLabel": "Passwort eingeben",
  "dashboard.passwordPlaceholder": "Passwort eingeben",
  "dashboard.loginButton": "Anmelden",
  "dashboard.noLeads": "Keine Leads gefunden.",
  "dashboard.lead.insurance": "Versicherung",
  "dashboard.lead.status": "Status",
  "dashboard.lead.package": "Paket",
  "dashboard.lead.options": "Optionen",
  "dashboard.lead.zip": "PLZ",
  "dashboard.lead.dob": "Geburtsdatum",
  "dashboard.lead.timestamp": "Zeitstempel",
  "dashboard.lead.interest": "Interesse",
  "dashboard.lead.preference": "Präferenz",
  "dashboard.lead.na": "N/A",
  "contentSections.whyChooseUs.title": "Warum uns wählen?",
  "contentSections.whyChooseUs.description": "Unser Quiz hilft Ihnen, den besten Versicherungsplan zu finden. Mit personalisierten Empfehlungen und bis zu 54% Ersparnis.",
  "contentSections.secureTrusted.title": "Sicher & Vertrauensvoll",
  "contentSections.secureTrusted.description": "Ihre Daten sind mit SSL-Verschlüsselung und DSGVO-konform geschützt.",
  "contentSections.secureTrusted.ssl": "SSL Verschlüsselt",
  "contentSections.secureTrusted.gdpr": "DSGVO-konform",
  "contentSections.getInTouch.title": "Kontaktieren Sie uns",
  "contentSections.getInTouch.description": "Haben Sie Fragen? Unser Support-Team hilft Ihnen gerne.",
  "contentSections.getInTouch.button": "Kontakt",
  "footer.text": "© 2025 Versicherungs-Quiz-App. Alle Rechte vorbehalten.",
  "backButton": "Zurück",
  "language.english": "Englisch",
  "language.german": "Deutsch",
  "contentSections.title": "Ihre bezahlbare Versicherung in 3 Schritten:",
  "contentSections.step1": "Beantworten Sie ein paar Fragen",
  "contentSections.step2": "Hinterlassen Sie Kontaktinformationen",
  "contentSections.step3": "Erhalten Sie einen individuellen Vergleich",
  "contentSections.healthShock": "Beitragschock bei Krankenversicherungen",
  "contentSections.healthShockText": "Beitragschock 2025: Krankenversicherungen erhöhen ihre Beiträge im Durchschnitt um 0,8 Prozentpunkte. Für viele Versicherte bedeutet dies eine höhere finanzielle Belastung ohne echten Mehrwert, da die Leistungen der gesetzlichen Krankenversicherungen weiter zurückgehen, Inflation, Wirtschaftskrise und stagnierende Gehälter auch die Geldbörsen der Menschen belasten. Ein Wechsel zur privaten Krankenversicherung (PKV) kann die Lösung sein. Als PKV-Patient profitieren Sie nicht nur von besseren Leistungen, mehr Kostenerstattung und schnelleren Arztterminen, sondern auch von finanzieller Stabilität und individuell abgestimmten Tarifen. Wer jetzt handelt, profitiert von umfassender Deckung und vermeidet die ständigen Beitragserhöhungen der gesetzlichen Krankenversicherung.",
  "contentSections.requestComparison": "Vergleich anfordern",
  "contentSections.selfEmployedSave": "So viel sparen Sie als Selbstständiger",
  "contentSections.selfEmployedSaveText": "Mit dem richtigen PKV-Vergleich können Sie bis zu 77 % weniger für eine günstige private Krankenversicherung zahlen als bei einer vergleichbaren Angebote einer gesetzlichen Krankenversicherung. * Die Wahl der Tarife ist entscheidend. Rufen Sie einfach unsere Experten an, um weitere Informationen zu erhalten - sie helfen Ihnen gerne.",
  "contentSections.performanceText": "Optieren Sie für ein attraktives Gesundheits-Upgrade. Dies umfasst beispielsweise die Kostenübernahme für Brillen und Zahnspangen. Sie können auch ein Einzelzimmer im Krankenhaus, Behandlungen mit der neuesten Technologie oder häufigere Vorsorgeuntersuchungen sichern.",
  "contentSections.noWorries": "Und das Beste: Egal, wie gut unser Geschäftsjahr läuft, Sie müssen sich keine Sorgen über zusätzliche Zahlungen an die Krankenkasse machen. Bei einer privaten Krankenversicherung zahlen Sie nur für die Leistungen, die Sie gebucht haben. Unabhängig von Ihrem Einkommen. Das ist Ihr großer Vorteil als Privatpatient!",
  "contentSections.employeeSave": "So viel sparen Sie als Arbeitnehmer",
  "contentSections.employeeSaveText": "Haben Sie schon eine private Krankenversicherung im Auge? Stellen Sie sicher, dass es die beste Wahl ist. Holen Sie sich ein Angebot von unseren Experten mit einem Tarifvergleich, der bis zu 67 % günstiger * ist als Ihre gesetzliche Krankenversicherung. Sie erfahren auch, wie streng Ihr bevorzugter Anbieter bei der Auswahl seiner privat Versicherten ist und warum das wichtig ist. Zu viel Nachlässigkeit beim Annehmen neuer Kunden kann Sie persönlich teuer zu stehen kommen!",
  "contentSections.performanceEmployeeText": "Entscheiden Sie - egal ob es die perfekte Krankenversicherung für Sie macht. Besonders günstig, besonders leistungsstark oder mit der besten Mischung aus beidem. Wir unterstützen Sie dabei.",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;