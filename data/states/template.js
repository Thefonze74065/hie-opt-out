// Illinois Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};

window.stateData[''] = {
	name: "",
	optOutStatus: "", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "",
		lawUrl: "",
		process: "",
		effectiveDate: "",
		contacts: [
			{
				name: "",
				phone: "",
				email: "",
				website: "",
				type: "",
				notes: ""
			}
		],
		steps: [
			"",
			""
		],
		template: "",
		majorProviders: [
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			coverageArea: "Statewide - all healthcare providers in Illinois must comply with this law",
			exceptions: "Emergency situations may still allow access as required by federal law"
		}
	}
};
