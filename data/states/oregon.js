//Oregon Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};
window.stateData['or'] = {
  name: "Oregon",
  optOutStatus: "opt-out", // Patients must expressly decline HIE participation
  hieOptOut: {
    available: true,
    law: "Oregon Administrative Rules (OAR), patient rights under HIPAA and state rulemaking",
    lawUrl: "https://www.oregon.gov/oha/hpa/ohit",
    process: "Provider-based/community HIE (Reliance eHealth Collaborative) handles opt-out via form/email/phone",
    effectiveDate: "Rules finalized circa 2012; onboarding phased through 2021",
    contacts: [
      {
        name: "Reliance eHealth Collaborative",
        phone: "1-855-290-5443",
        email: "Support@RelianceHIE.org",
        website: "https://reliancehie.org/",
        type: "Regional HIE operator",
        notes: "Processes patient opt-out and opt-in requests"
      }
    ],
    steps: [
      "Request an opt-out form from participating provider or download from Reliance HIE website",
      "Complete form and sign",
      "Submit via fax, mail, email, or in-person per instructions",
      "Allow a few business days for processing",
      "To opt back in, submit the appropriate opt-in form"
    ],
    template: "I wish to opt out of participation in the Reliance eHealth Collaborative HIE. Please remove my data from automatic exchange among participating providers, and confirm that the opt-out has been processed.",
    majorProviders: [
      "reliance-region-provider-network",
      "oregonians-health-systems (e.g. Oregon Health & Science University, Providence, Legacy Health)",
      "major-community-hospitals statewide",
      "behavioral-health-and-rural-clinics participating in Reliance"
    ],
    additionalInfo: {
      emergencyAccess: "Opt-out means HIE data will not be viewable by other providers via Reliance—even in emergencies.",
      coverageArea: "Regional coverage in western and central Oregon (Reliance member area); no formal statewide system.",
      exceptions: "Does not prevent direct EMR data exchange inside systems or traditional release-of-info processes; HIPAA/public-health reporting still applies."
    }
  }
};
