//Montana Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['mt'] = {
  name: "Montana",
  optOutStatus: "opt-in", // No automatic inclusion; patients must consent to participate in BSCC
  hieOptOut: {
    available: false,
    law: "No Montana statute mandates patient opt-out rights; participation governed by provider consent",
    lawUrl: "https://www.mtbscc.org/optout",
    process: "Big Sky Care Connect (BSCC) requires individual consent; patients must request sharing be enabled (opt-in)",
    effectiveDate: "BSCC operational statewide since 2018",
    contacts: [
      {
        name: "Big Sky Care Connect (BSCC)",
        phone: "Contact via website",
        email: "Use online form at BSCC website",
        website: "https://www.mtbscc.org/",
        type: "State-designated HIE operator",
        notes: "Accepts patient requests for opting in or disabling sharing"
      }
    ],
    steps: [
      "Discuss HIE participation with your provider",
      "If you agree, submit BSCC Consent form via provider or online",
      "To opt out or revoke consent, submit a request to your provider or via BSCC patient portal",
      "Processing takes approximately 5 business days",
      "No automatic inclusion—only data from providers where consent given is shared"
    ],
    template: "I do not consent to share my health information via Big Sky Care Connect HIE at this time. Please do not include my data in HIE exchanges.",
    majorProviders: [
      "Big Sky Care Connect (BSCC) statewide network",
      "Logan Health (Billings Clinic)",
      "Saint Peter’s Health (Helena)",
      "Community Health Partners",
      "Billings Clinic and other regional hospitals",
      "Rural/county hospitals & clinics statewide"
    ],
    additionalInfo: {
      emergencyAccess: "If you have not consented, your HIE data will not be available even in emergencies.",
      coverageArea: "Statewide – BSCC aggregates data from participating facilities across Montana.",
      exceptions: "Providers may still use provider-to-provider methods (fax/email/direct EMR sharing), and public health data reporting continues per HIPAA."
    }
  }
};
