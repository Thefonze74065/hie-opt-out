// Nebraska Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['ne'] = {
  name: "Nebraska",
  optOutStatus: "opt‑out", // Patients are automatically included unless they revoke
  hieOptOut: {
    available: true,
    law: "Nebraska Population Health Information Act, Neb. Rev. Stat. § 81‑6,125",
    lawUrl: "https://nebraskalegislature.gov/laws/statutes.php?statute=81-6%2C125",
    process: "Statewide private-sector HIE (NeHII / CyncHealth) accepts revocation via form, email, phone",
    effectiveDate: "Sept 30, 2021 (mandatory exchange participation); opt‑out rights codified in 2021 LB 411",
    contacts: [
      {
        name: "CyncHealth (NeHII)",
        phone: "402‑506‑9900 ext 1",
        email: "support@cynchealth.org",
        website: "https://cynchealth.org/",
        type: "State HIE operator",
        notes: "Handles opt‑out requests; remove all data except name/address/status"
      },
      {
        name: "Nebraska Medical Center / UNMC Privacy Office (CareEverywhere)",
        phone: "402‑559‑5136",
        email: "Privacy@nebraskamed.com",
        website: "https://www.nebraskamed.com/",
        type: "Provider‑specific HIE exchange",
        notes: "Handles CareEverywhere / Epic‑based opt‑out within UNMC system"
      }
    ],
    steps: [
      "Download and complete the CyncHealth/NeHII opt‑out (revocation) form",
      "Have signature notarized as required",
      "Submit via mail, fax, email, or online per instructions",
      "Allow up to 30 days for processing confirmation",
      "To revoke opt‑out (opt back in), submit opt‑in form at any time",
      "For CareEverywhere exchange, separately contact UNMC Privacy Office or use form"
    ],
    template: "I hereby revoke all consent to the sharing of my health information through NeHII (CyncHealth) and CareEverywhere exchanges under Nebraska law § 81‑6,125. Please process my opt‑out promptly and confirm completion.",
    majorProviders: [
      "cynchealth‑network (state‑wide)",
      "nebraska‑medicine (UNMC / Lincoln & Omaha)",
      "chi‑health‑nebraska",
      "methodist‑health‑systems",
      "bryan‑health",
      "sandhills‑region‑hospitals (e.g. Mary Lanning)",
      "regional‑and‑critical‑access‑hospitals statewide"
    ],
    additionalInfo: {
      emergencyAccess: "Opt‑out removes most clinical data from HIE view even in emergencies, except minimal identifier info.",
      coverageArea: "Statewide – applies to all providers participating in NeHII and connected networks.",
      exceptions: "Does not prevent providers from holding data previously received, nor impacts public health reporting, Rx monitoring, fax/email exchange, or insurer/provider records under HIPAA."
    }
  }
};
