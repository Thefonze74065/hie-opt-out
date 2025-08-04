// Virginia Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['va'] = {
  name: "Virginia",
  optOutStatus: "opt‑out", // Patients are automatically included unless they opt‑out
  hieOptOut: {
    available: true,
    law: "No single Virginia statute mandating HIE opt‑out; guided by Virginia Health Information (ConnectVirginia) policy and provider-level forms",
    lawUrl: "https://www.vhi.org/connectvirginia/",
    process: "Patient must submit written opt‑out (CommonWell/Carequality or local HIE) to each provider or central HIE program",
    effectiveDate: "Policy active circa 2020+, evolving via provider updates",
    contacts: [
      {
        name: "Virginia Health Information (ConnectVirginia)",
        phone: "Richmond VA office (see website)",
        email: "",
        website: "https://www.vhi.org/connectvirginia/",
        type: "State-designated HIE operator",
        notes: "Provides infrastructure; actual opt‑out handled provider by provider"
      },
      {
        name: "Sample provider opt‑out (CommonWell/Carequality)",
        phone: "",
        email: "",
        website: "",
        type: "Form-based via provider HIPAA Privacy Officer",
        notes: "Forms available at providers like Virginia Physicians, Centra, VCU, etc."
      }
    ],
    steps: [
      "Request or download opt‑out form from participating provider (e.g. CommonWell/Carequality HIE opt‑out)",
      "Complete and sign the form (may require witness depending on provider)",
      "Submit via mail, fax, or email to provider’s HIPAA Privacy Officer",
      "Processing typically within 2–5 business days",
      "For multiple providers, separate requests may be needed",
      "To revoke opt‑out, submit revocation form to each provider"
    ],
    template: "I wish to opt out of electronic health information exchange via CommonWell, Carequality, or other HIEs in which your organization participates. Please process my request and confirm completion in writing.",
    majorProviders: [
      "Virginia Health Information / ConnectVirginia (state HQ)",
      "Virginia Physicians, Inc.",
      "CommonWell/Carequality participating practices statewide",
      "Centra Health system",
      "VCU Health system",
      "Virginia Hospital Center Arlington",
      "Other hospitals and clinics using Epic Care Everywhere or eHealth Exchange"
    ],
    additionalInfo: {
      emergencyAccess: "Most providers may not view your HIE data even in emergencies; they may request paper/fax records instead.",
      coverageArea: "Wide coverage via Carequality/eHealth Exchange networks statewide; but provider participation varies.",
      exceptions: "Opt‑out does not delete existing data in provider EMRs; fax, mail, public health, or legacy sharing still permitted."
    }
  }
};
