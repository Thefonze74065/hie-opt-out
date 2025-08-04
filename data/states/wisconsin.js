//Wisconsin Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['wi'] = {
  name: "Wisconsin",
  optOutStatus: "opt‑out", // Patients are automatically included unless they opt‑out
  hieOptOut: {
    available: true,
    law: "No specific statute; governed by state HIE policy under DHS/WISHIN",
    lawUrl: "https://www.dhs.wisconsin.gov/publications/p03596.pdf",
    process: "Complete and submit DHS Patient Choice Form to WISHIN or treating facility",
    effectiveDate: "Guide updated March 2024 (form F‑03276)",
    contacts: [
      {
        name: "WISHIN Support (Wisconsin Statewide Health Information Network)",
        phone: "1‑888‑WISHIN1",
        email: "wishin.support@wishin.org",
        website: "https://wishin.org/",
        type: "Statewide HIE operator",
        notes: "Processes opt‑out and opt‑back‑in via Patient Choice Form"
      }
    ],
    steps: [
      "Download or request the Patient Choice Form (F‑03276)",
      "Indicate opt‑out or opt‑back‑in and provide required initialing/signature (witness signature required)",
      "Submit form to WISHIN or patient’s treating facility",
      "Processing typically within three business days",
      "Confirmation sent by mail; retain proof",
      "To opt back in, submit the same form indicating opt‑in"
    ],
    template: "I wish to opt out of having my essential health information shared electronically via WISHIN Pulse. Please process my request and confirm completion.",
    majorProviders: [
      "WISHIN statewide network",
      "UW Health system",
      "Ascension Wisconsin hospitals & clinics",
      "Aurora Health Care (now part of Advocate Aurora)",
      "Securian (Marshfield Clinic Health System)",
      "Bellin Health & Prevea Health",
      "Other participating hospitals, clinics, pharmacies across Wisconsin"
    ],
    additionalInfo: {
      emergencyAccess: "Opt‑out restricts access except for emergency purposes or public health reporting as allowed by law.",
      coverageArea: "Statewide — WISHIN Pulse connects over 2,200 sites across Wisconsin. Participation is automatic unless opted out.",
      exceptions: "Opt‑out does not delete existing data nor affect other sharing methods like fax, phone, direct patient-provided documents, or public health reporting."
    }
  }
};
