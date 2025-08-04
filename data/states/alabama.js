window.stateData = window.stateData || {};

window.stateData['al'] = {
	name: "Alabama",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Alabama One Health Record Governance",
		lawUrl: "https://www.onehealthrecord.alabama.gov",
		process: "Provider-based opt-out (no centralized state form)",
		effectiveDate: "August 4, 2023",
		contacts: [
			{
				name: "Alabama Department of Public Health – One Health Record",
				phone: "334-206-9470",
				email: "info@onehealthrecord.alabama.gov",
				website: "https://www.onehealthrecord.alabama.gov",
				type: "State HIE Office",
				notes: "Contact for HIE participation and opt-out procedures"
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)",
			"State specifically that you want to opt out of the One Health Record HIE network",
			"Request HIE opt-out form for your specific provider network (e.g., Epic Care Everywhere, CommonWell, etc.)",
			"Complete form and verify identity (typically requires provider signature or notarization)",
			"Submit form as instructed (usually mail or fax)",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records"
		],
		template: "",
		majorProviders: [
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
