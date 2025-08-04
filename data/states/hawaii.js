//Hawaii Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['hi'] = {
  name: "Hawaii",
  optOutStatus: "opt-out", // Default is enrollment; patients may request removal
  hieOptOut: {
    available: true,
    law: "No specific statewide statute; guided by Hawaii Health eNet policy and privacy rules",
    lawUrl: "https://www.hawaiihie.org/policies",
    process: "Submit ‘Request to Stop Individual Participation’ via provider–initiated submission to Hawai‘i HIE",
    effectiveDate: "Health eNet operational since mid-2010s; opt-out form policy longstanding",
    contacts: [
      {
        name: "Hawai‘i Health Information Exchange (Health eNet)",
        phone: "(808) 441-1374",
        email: "info@hawaiihie.org",
        website: "https://www.hawaiihie.org/",
        type: "State-designated HIE operator",
        notes: "Process opt-out and opt-back-in via provider submission only"
      }
    ],
    steps: [
      "Obtain the Health eNet ‘Request to Stop Individual Participation’ opt-out form (via provider).",
      "Complete and sign the form (patient or representative signature required).",
      "Have provider sign/authorize the form.",
      "Provider mails or faxes the form to Hawai‘i HIE (Community Relations).",
      "HIE processes opt-out within 10 business days and sends confirmation letter.",
      "To opt back in, submit the ‘Request to Resume Participation’ form."
    ],
    template: "I request that my health information NOT be viewable through the Hawai‘i HIE (Health eNet) Community Health Record. Please process my opt-out as required and confirm completion.",
    majorProviders: [
      "Hawai‘i HIE (state network)",
      "Kaiser Permanente Hawaii Region",
      "Hawaii Health Systems Corp (public hospitals statewide)",
      "Hawaii Pacific Health (e.g. Straub, Kapi‘olani, Pali Mʻomi)",
      "Queen’s Medical Center",
      "Tripler Army Medical Center",
      "Other participating clinics & behavioral-health facilities"
    ],
    additionalInfo: {
      emergencyAccess: "Opt-out means your record will not be searchable via Health eNet—even in emergencies.",
      coverageArea: "Statewide — Health eNet includes public and private institutions across Hawai‘i.",
      exceptions: "Public health reporting and provider-held records continue to operate per HIPAA; opt-out only affects HIE visibility."
    }
  }
};
