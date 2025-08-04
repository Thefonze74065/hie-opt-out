// New Mexico Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['nm'] = {
  name: "New Mexico",
  optOutStatus: "opt‑out", // default inclusion; patients must actively opt‑out
  hieOptOut: {
    available: true,
    law: "New Mexico Electronic Medical Records Act, amended HB 269 (2021)",
    lawUrl: "https://www.nmhic.org/", // NM law harmonized with HIPAA in 2021
    process: "Statewide HIE (SYNCRONYS/NMHIC) accepts opt‑out via form, phone or email",
    effectiveDate: "July 1, 2021",
    contacts: [
      {
        name: "SYNCRONYS / NMHIC",
        phone: "505‑938‑9909",
        email: "info@syncronys.org",
        website: "https://www.synchronys.org/",
        type: "State HIE operator",
        notes: "Processes opt‑out and opt‑back‑in requests"
      }
    ],
    steps: [
      "Obtain SYNCRONYS opt‑out form (online or provider)",
      "Complete form and sign (notarization not required)",
      "Submit via mail or fax (505‑938‑9900), email or online",
      "Processing takes a few business days",
      "To opt back in, submit the opt‑back‑in form anytime"
    ],
    template: "I wish to opt‑out completely from the SYNCRONYS/NMHIC Health Information Exchange under New Mexico law (Electronic Medical Records Act, amended July 1, 2021). Please remove all my information from view, and confirm completion.",
    majorProviders: [
      "nmhic‑statewide‑network",
      "presbyterian‑healthcare‑services‑nm",
      "unm‑health‑sciences‑center",
      "holy‑cross‑hospital‑taos",
      "tri‑core‑reference‑laboratory‑network",
      "critical‑access‑hospitals‑statewide"
    ],
    additionalInfo: {
      emergencyAccess: "Opt‑out blocks all access to HIE data—even during emergencies (“Patient Not Found”).",
      coverageArea: "Statewide — applies to all providers participating in SYNCRONYS/NMHIC.",
      exceptions: "Does not affect provider-held records, public health reporting, or non‑HIE routes of data exchange under HIPAA."
    }
  }
};
