// Texas Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['tx'] = {
  name: "Texas",
  optOutStatus: "opt-in", // Patient must explicitly consent at each provider/HIE
  hieOptOut: {
    available: true,
    law: "No statewide statute; governed by local/regional HIE policy and HIPAA",
    lawUrl: "https://thsa.org/",
    process: "Provider- or system-based opt-in authorization; individual HIEs support revocation/opt-out",
    effectiveDate: "Varies by HIE; policies current as of early 2025",
    contacts: [
      {
        name: "HealthConnect Texas (state-tier HIE)",
        phone: "832-564-2599",
        email: "info@healthconnecttx.org",
        website: "https://healthconnecttx.org/",
        type: "Regional/state-level HIE operator",
        notes: "Participating providers ask for consent and process opt-out at local level"
      },
      {
        name: "Texas Children’s Hospital Privacy Office",
        phone: "832-824-2091",
        email: "",
        website: "https://www.texaschildrens.org/",
        type: "Hospital-specific HIE opt-out",
        notes: "Uses its own HIE opt-out request form (revocation)"
      }
    ],
    steps: [
      "At check-in or treatment, providers ask if you consent to HIE sharing",
      "If consenting, sign provider’s HIE authorization (opt-in)",
      "To revoke or opt-out, contact provider’s privacy office",
      "Complete revocation/opt-out form if provided (may require signature)",
      "Allow 3–5 business days for processing",
      "You can opt back in anytime through provider"
    ],
    template: "I do not consent to sharing my health information via any Health Information Exchange operated by Texas healthcare organizations. Please process my revocation and confirm completion.",
    majorProviders: [
      "HealthConnect Texas (state-tier network)",
      "Greater Houston Healthconnect (GHH)",
      "C3HIE (Central, West Texas)",
      "PHIX (Paso del Norte HIE)",
      "Rio Grande Valley HIE (RGVHIE)",
      "Texas Health Resources systems (e.g. Baylor, Texas Health)",
      "Texas Children’s Hospital"
    ],
    additionalInfo: {
      emergencyAccess: "Since information is not shared without consent, HIE data will not be available even in emergencies.",
      coverageArea: "Regional HIEs vary by area; no automatic state-wide default exchange mechanism.",
      exceptions: "Opt-in/opt-out only applies to participation in electronic exchange; fax, patient records, provider-to-provider sharing still permitted."
    }
  }
};
