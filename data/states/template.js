window.stateData = window.stateData || {};

window.stateData[''] = {
	name: "",
	optOutStatus: "", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "",
		lawUrl: "",
		process: "",
		effectiveDate: "August 4, 2023",
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
