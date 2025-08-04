//Michigan Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['mi'] = {
  name: "Michigan",
  optOutStatus: "opt-out", // Default inclusion; patients may revoke participation
  hieOptOut: {
    available: true,
    law: "No specific state statute; governed by HIPAA and MiHIN policy",
    lawUrl: "https://mihin.org/consumer-privacy-policy",
    process: "Michigan Health Information Network (MiHIN) opt-out via notarized form; provider-based opting out removes access in Michigan Medicine systems too",
    effectiveDate: "Policy updated June 2025",
    contacts: [
      {
        name: "MiHIN Consumer Privacy / Privacy Officer",
        phone: "844-454-2443",
        email: "privacy@mihin.org",
        website: "https://mihin.org/",
        type: "Statewide HIE operator",
        notes: "Processes opt-out and opt-back-in; notarization required"
      },
      {
        name: "Michigan Medicine HIE Support Unit",
        phone: "734-615-0872",
        email: "[email protected]",
        website: "https://mihen.org/",
        type: "Health System-specific support",
        notes: "Handles opt-out from MiHIN and Care Everywhere at Michigan Medicine"
      }
    ],
    steps: [
      "Download and complete MiHIN Participation Change Request (opt-out) form",
      "Get your signature notarized to verify identity",
      "Submit via mail, fax, or online per form instructions",
      "Patient record will become “hidden” in MiHIN Longitudinal Health Record within a few days",
      "To revoke opt-out (opt back in), submit the revocation section on the same form",
      "For Michigan Medicine (Care Everywhere), submit separate request to their HIE Support Unit"
    ],
    template: "I hereby opt out of MiHIN Longitudinal Health Record exchange under HIPAA/MiHIN privacy policy. Please remove my information from searchable HIE access and confirm. I also request exclusion from Care Everywhere via Michigan Medicine systems.",
    majorProviders: [
      "MiHIN statewide network",
      "Michigan Medicine (University of Michigan, Ann Arbor & affiliates)",
      "Beaumont Health System",
      "Henry Ford Health System",
      "Spectrum Health / Corewell",
      "Sparrow Health System",
      "Trinity Health Michigan",
      "Ascension Michigan",
      "Regional critical-access hospitals & clinics"
    ],
    additionalInfo: {
      emergencyAccess: "Opt-out hides record from HIE searches, even in emergencies; providers must request data directly from you.",
      coverageArea: "Statewide – MiHIN covers the majority of hospitals and providers across Michigan.",
      exceptions: "Opt-out only affects HIE visibility; providers may still share records through fax, phone or patient-provided documents; does not impact public health reporting."
    }
  }
};
