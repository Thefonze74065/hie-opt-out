window.stateData = window.stateData || {};

window.stateData['al'] = {
	name: "Alabama",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Alabama One Health Record Governance", // The law or regulation that governs HIE opt-out
		lawUrl: "https://www.onehealthrecord.alabama.gov", // URL to the law that ensures users can opt-out. often the same law that created the HIE
		process: "Provider-based opt-out (no centralized state form)", // "provider based opt-out", "centralized opt-out", "centralized opt-in"
		effectiveDate: "August 6, 2023", // The current date where we've verified the info
		contacts: [
			{
				name: "Alabama Department of Public Health – One Health Record", // The name of the organization to contact about HIE opt-out
				phone: "334-206-9470", // Phone number for the organization's privacy office. User should be able to call and ask for opt-out info, or be directed to the right person
				email: "info@onehealthrecord.alabama.gov", // Email for the organization - preferably a privacy specific address that users can email to opt-out
				website: "https://www.onehealthrecord.alabama.gov", // URL to the HIE Website
				type: "State HIE Office", // State HIE Office, Private HIE Office, general health department, etc.
				notes: "Contact for HIE participation and opt-out procedures" // Additional notes about the contact, e.g. best times to call, specific departments, etc.
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)", // Step-by-step instructions for opting out
			"State specifically that you want to opt out of the One Health Record HIE network",
			"Request HIE opt-out form for your specific provider network (e.g., Epic Care Everywhere, CommonWell, etc.)",
			"Complete form and verify identity (typically requires provider signature or notarization)",
			"Submit form as instructed (usually mail or fax)",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records"
		],
		template: "", // What to say / write inorder to opt-out. usually the bare minimum details to get a privacy officer to understand your request
		majorProviders: [ //leave blank for now - Major healthcare providers in the state that are likely to participate in HIEs
		],
		additionalInfo: { // Would only really change for opt-in states. These are general disclaimers so users understand the implications of opting out.
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
