window.stateData = window.stateData || {};

window.stateData[''] = {
	name: "",
	optOutStatus: "", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "", // The law or regulation that governs HIE opt-out
		lawUrl: "", // URL to the law that ensures users can opt-out. often the same law that created the HIE
		process: "", // "provider based opt-out", "centralized opt-out", "centralized opt-in"
		effectiveDate: "August 6, 2025", // The current date where we've verified the info
		contacts: [
			{
				name: "", // The name of the organization to contact about HIE opt-out
				phone: "", // Phone number for the organization's privacy office. User should be able to call and ask for opt-out info, or be directed to the right person
				email: "", // Email for the organization - preferably a privacy specific address that users can email to opt-out
				website: "", // URL to the HIE Website where users can download an opt-out form. if the HIE is provider based, this can be to the home page of the HIE.
				type: "", // State HIE Office, Private HIE Office, general health department, etc.
				notes: "" // Additional notes about the contact, e.g. best times to call, specific departments, etc.
			}
		],
		steps: [
			"", // Step-by-step instructions for opting out
			""
		],
		template: "", // What to say / write inorder to opt-out. usually the bare minimum details to get a privacy officer to understand your request
		majorProviders: [ //leave blank for now - Major healthcare providers in the state that are likely to participate in HIEs
		],
		additionalInfo: { // Would only really change for opt-in states. These are general disclaimers so users understand the implications of opting out.
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			coverageArea: "Statewide - all healthcare providers in Illinois must comply with this law",
			exceptions: "Emergency situations may still allow access as required by federal law"
		}
	}
};
