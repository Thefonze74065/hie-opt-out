// Florida Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};

window.stateData['fl'] = {
  name: "Florida",
  optOutStatus: "opt-in", // Based on patient must explicitly authorize; default is not shared
  hieOptOut: {
    available: true,
    law: "Florida statutes and DOH regulations (no central statute requiring opt-out)",
    lawUrl: "https://www.florida-hie.net/",
    process: "Provider-based or local Health Exchange–network opt-out; written consent required; notarized signature often required",
    effectiveDate: "Ongoing as of 2025",
    contacts: [
      {
        name: "Florida Health Information Exchange (state)",
        phone: "1-888-810-1078",
        email: "flhie_info@ainq.com",
        website: "https://www.florida-hie.net/",
        type: "State HIE office",
        notes: "General patient questions; HIE does not administer opt-out centrally"
      }
    ],
    steps: [
      "Contact your participating provider or health plan directly",
      "Request the HIE opt-out (or revoke consent) form",
      "Complete form in writing with notarized signature (per local/provider requirements)",
      "Submit the form to provider privacy office (mail/fax/etc.)",
      "Allow 5–7 business days for processing confirmation",
      "If needed, opt back in by submitting revocation form"
    ],
    template: "I do not consent to sharing my health information via Health Information Exchange or associated networks. Please provide any required form and instructions to complete this opt-out under Florida HIE policies.",
    majorProviders: [
      "adventhealth-florida",
      "baptist-health-florida",
      "morton-plant-mease-health",
      "jackson-health-system",
      "mayo-clinic-florida",
      "tenet-healthcare-florida",
      "ascension-florida",
      "lee-health",
      "nemours-children-florida"
    ],
    additionalInfo: {
      emergencyAccess: "In life-threatening emergencies, providers may access records even if opted out, per federal/state legal exceptions",
      coverageArea: "Statewide – all participating providers part of Florida HIE or regional/local exchanges",
      exceptions: "Opt-out affects only HIE sharing; other sharing methods (fax, phone, direct download) remain in provider’s control"
    }
  }
};

