// Washington Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['wa'] = {
  name: "Washington",
  optOutStatus: "opt-out", // Participation is automatic; patients can request removal
  hieOptOut: {
    available: true,
    law: "Covered by HIPAA and regional/state HIE rules; no separate statute",
    lawUrl: "https://doh.wa.gov/public-public-health-provider-resources/health-information-exchange",
    process: "Complete provider HIE opt-out or Epic Care Everywhere opt-out form",
    effectiveDate: "State/regional HIE models active early 2010s; policies current 2025",
    contacts: [
      {
        name: "OneHealthPort / Washington DOH HIE support",
        phone: "Contact Washington DOH via meaningfuluse@doh.wa.gov",
        email: "meaningfuluse@doh.wa.gov",
        website: "https://doh.wa.gov/health-information-exchange",
        type: "State-facilitated HIE hub",
        notes: "Supports HIE participation and provider onboarding"
      },
      {
        name: "Seattle Children’s Health Information Exchange support",
        phone: "206-987-4444",
        email: "",
        website: "https://www.seattlechildrens.org/clinics/health-info-management/hie/",
        type: "Provider-specific opt-out process",
        notes: "Completes opt-out via mailed form; effective even in emergencies"
      },
      {
        name: "UW Medicine Epic Care Everywhere Opt-Out",
        phone: "206-744-9000",
        email: "uwmedroi@uw.edu",
        website: "",
        type: "System-wide provider opt-out",
        notes: "Form opt-out processed within ~5 business days"
      }
    ],
    steps: [
      "Request the HIE opt-out form from your provider (e.g. Epic opt-out or regional HIE form).",
      "Complete and sign the form (witness or provider verification may be required).",
      "Submit via mail, fax or provider portal as instructed.",
      "Allow approximately 3–5 business days for processing.",
      "Receive written or electronic confirmation of opt-out.",
      "To opt back in, submit the corresponding opt-in or revocation form."
    ],
    template: "I wish to opt out of participation in the regional or provider-based Health Information Exchange (e.g., Epic Care Everywhere or OneHealthPort network). Please process my request and confirm completion.",
    majorProviders: [
      "OneHealthPort / Washington hub network",
      "UW Medicine (University of Washington & affiliates)",
      "Seattle Children’s Hospital HIE participants",
      "Providence WA / Swedish / MultiCare networks",
      "PeaceHealth (WA & OR)",
      "Other Carequality/CommonWell or Epic-connected hospitals, clinics"
    ],
    additionalInfo: {
      emergencyAccess: "Opt-out prevents viewing of HIE data even in emergencies; providers rely on direct methods or patient copies.",
      coverageArea: "Statewide coverage via OneHealthPort hub; participation includes >2,000 facilities across WA.",
      exceptions: "Opt-out affects only centralized electronic exchange—not provider-held EMRs, fax/email, or public health reporting."
    }
  }
};
