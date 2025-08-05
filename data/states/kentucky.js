window.stateData = window.stateData || {};

window.stateData['ky'] = {
	name: "Kentucky",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Kentucky Health Information Exchange Rules",
		lawUrl: "https://chfs.ky.gov/agencies/dph/",
		process: "Provider-based opt-out (no centralized state form)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "Kentucky Department for Public Health",
				phone: "502-564-3970",
				email: "dph.info@ky.gov",
				website: "https://chfs.ky.gov/agencies/dph/",
				type: "State Health Department",
				notes: "General health information questions and HIE guidance"
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)",
			"State specifically that you want to opt out of Health Information Exchange sharing",
			"Request HIE opt-out form for your specific network (Epic Care Everywhere, CareQuality, etc.)",
			"Complete form and verify identity (typically requires provider signature or notarization)",
			"Submit form as instructed (usually mail or fax)",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records"
		],
		template: "I request to exercise my right to opt out of participation in Kentucky Health Information Exchange networks. I understand that this will prevent my health data from being shared across participating networks, and I request that your office provide the necessary form and instructions to complete this request.",
		majorProviders: [
			"university-of-louisville-health",
			"uk-healthcare",
			"baptist-health-kentucky",
			"st-elizabeth-healthcare"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
