window.stateData = window.stateData || {};

window.stateData['az'] = {
	name: "Arizona",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "§ 36-3804 Arizona Revised Statutes",
		lawUrl: "https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/36/03804.htm",
		process: "Provider-based opt-out",
		effectiveDate: "August 6, 2025",
		contacts: [
			{
				name: "Contexture",
				phone: "602-542-1025",
				email: "info@azhec.org",
				website: "https://contexture.org/opt-in-opt-out-az/",
				type: "State HIE Operator",
				notes: "Contact for HIE participation and opt-out guidance"
			}
		],
		steps: [
			"Download the opt-out form from contexture's website (linked above",
			"Bring the completed form to your healthcare provider",
			"State specifically that you want to opt out of Health Information Exchange sharing, and provide the form",
			"OPTIONAL: Also request to opt-out of any provider specific HIE networks",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records"
		],
		template: "",
		majorProviders: [ //leave blank for now - Major healthcare providers in the state that are likely to participate in HIEs
			"None currently. will add soon"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
