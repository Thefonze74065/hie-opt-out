window.stateData = window.stateData || {};

window.stateData['ak'] = {
	name: "Alaska",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "7 AAC § 166.050",
		lawUrl: "https://law.alaska.gov/decisions/2023/7-AAC-166-050.html",
		process: "Centralized opt-out (statewide HIE with single form)",
		effectiveDate: "August 4, 2023",
		contacts: [
			{
				name: "healthEconnect Alaska Support",
				phone: "907-770-2626",
				email: "support@ak-ehealth.org",
				website: "https://www.ak-ehealth.org",
				type: "State HIE Help Desk",
				notes: "Call and select Option 2 for opt-out guidance and forms"
			}
		],
		steps: [
			"Contact your provider or call healthEconnect Alaska directly at 907-770-2626, Option 2",
			"Request the HIE opt-out form",
			"Complete and sign the form - this revokes access across all participating providers",
			"Submit form via mail, fax, or secure submission as instructed"
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
