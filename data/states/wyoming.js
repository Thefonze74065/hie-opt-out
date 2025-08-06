window.stateData = window.stateData || {};
window.stateData['wy'] = {
  name: "Wyoming",
  optOutStatus: "opt-out", // Patients are included unless they request exclusion
  hieOptOut: {
    available: true,
    law: "Wyoming Administrative Rule Chapter 1, WYFI under W.S. § 9-2-131",
    lawUrl: "https://health.wyo.gov/healthcarefin/wyoming_frontier_information_wyfi/opt-out-opt-in/",
    process: "centralized opt-out", // Provider submits patient form to WYFI, WYFI handles opt‑out
    effectiveDate: "August 6, 2025",
    contacts: [
      {
        name: "Wyoming Department of Health - WYFI Office",
        phone: "(307)777-7594 or (866)571-0944",
        email: "wdh-wyfi-hie@wyo.gov",
        website: "https://health.wyo.gov/healthcarefin/wyoming_frontier_information_wyfi/",
        type: "State HIE Office",
        notes: "WYFI manages opt-out centrally and processes revocations"
      }
    ],
    steps: [
      "Obtain WYFI Opt-Out form from your provider or WYFI website",
      "Complete and sign the form (patient or legal rep signature required)",
      "Submit form to your provider's Privacy Officer",
      "Provider forwards request to WYFI for processing",
      "Allow 2-5 business days for processing",
      "WYFI sends confirmation; to opt back in, submit a revocation form"
    ],
    template: "I hereby revoke consent for my health information to be shared through WYFI Health Information Exchange under Wyoming Administrative Rule Chapter 1 and W.S. § 9‑2‑131. Please process my opt‑out and confirm completion.",
    majorProviders: [
      "Wyoming Frontier Information (WYFI state network)",
      "Cheyenne Regional Medical Center",
      "Campbell County Memorial Hospital",
      "Cody Regional Health",
      "Ivinson Memorial Hospital (Laramie)",
      "Memorial Hospital of Sweetwater County (Rock Springs)",
      "Health clinics and county hospitals statewide connected to WYFI"
    ],
    additionalInfo: {
      emergencyAccess: "When opted out, providers cannot access your data via WYFI—even in emergencies.",
      exceptions: "Opt-out applies only to WYFI exchange. Providers may still use fax, phone, email, or public health reporting under HIPAA."
    }
  }
};

