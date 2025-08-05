window.stateData = window.stateData || {};

window.stateData['vt'] = {
	name: "Vermont",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "18 V.S.A. § 9351",
		lawUrl: "https://legislature.vermont.gov/statutes/section/18/221/09351",
		process: "Centralized opt-out (Vermont Health Information Exchange)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "VITL (Vermont Information Technology Leaders)",
				phone: "888-980-1243",
				email: "info@vitl.net",
				website: "https://vitl.net/for-patients/",
				type: "State HIE Operator",
				notes: "Vermont Health Information Exchange hotline - 9am-5pm, Monday-Friday"
			}
		],
		steps: [
			"Call VITL directly at 888-980-1243 (9am-5pm, Monday-Friday)",
			"Request to opt-out of the Vermont Health Information Exchange",
			"Complete online opt-out form or request printed form",
			"Submit completed form to VITL",
			"Receive confirmation of opt-out processing",
			"Can opt back in at any time using the opt-in form"
		],
		template: "I request to exercise my right under 18 V.S.A. § 9351 to opt out of the Vermont Health Information Exchange. I understand this will prevent my health data from being shared through VITL's network, and I request the necessary form to complete this opt-out.",
		majorProviders: [
			"university-of-vermont-medical-center",
			"dartmouth-hitchcock-health"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
