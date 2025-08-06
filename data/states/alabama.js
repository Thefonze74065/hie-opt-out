window.stateData = window.stateData || {};

window.stateData['al'] = {
	name: "Alabama",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Alabama One Health Record Governance", // The law or regulation that governs HIE opt-out
		lawUrl: "https://www.onehealthrecord.alabama.gov", // URL to the law that ensures users can opt-out. often the same law that created the HIE
		process: "Provider-based opt-out (no state form)", // "provider based opt-out", "centralized opt-out", "centralized opt-in"
		effectiveDate: "August 6, 2025", // The current date where we've verified the info
		contacts: [
			{
				name: "Alabama Department of Public Health – Director of Electronic Health Records. (April Mullins)", // The name of the organization to contact about HIE opt-out
				phone: "334-206-2905", // Phone number for the organization's privacy office. User should be able to call and ask for opt-out info, or be directed to the right person
				email: "info@onehealthrecord.alabama.gov", // Email for the organization - preferably a privacy specific address that users can email to opt-out
				website: "https://www.onehealthrecord.alabama.gov", // URL to the HIE Website where users can download an opt-out form. if the HIE is provider based, this can be to the home page of the HIE.
				type: "State HIE Office", // State HIE Office, Private HIE Office, general health department, etc.
				notes: "Contact for questions about One Health Record --- You have to call your healthcare provider to opt-out." // Additional notes about the contact, e.g. best times to call, specific departments, etc.
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)", // Step-by-step instructions for opting out
			"State specifically that you want to opt out of the One Health Record HIE network",
			"Request HIE opt-out form for your specific provider network (e.g., Epic Care Everywhere, CommonWell, etc.)",
			"Complete form and verify identity (typically requires provider signature or notarization)",
			"Submit form as instructed (usually mail or fax)",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records",
			"One opt-out request applies statewide - you don't need to opt-out with each individual provider. However, you will need to separately opt out of other HIE networks that your providers use (like Epic Care Everywhere, CommonWell, or Surescripts)."
		],
		template: "I'd like to opt-out of Alabama One Health Record. Can you guide me through the process?", // What to say / write inorder to opt-out. usually the bare minimum details to get a privacy officer to understand your request
		majorProviders: [ //leave blank for now - Major healthcare providers in the state that are likely to participate in HIEs
			"None currently. will add soon"
		],
		additionalInfo: { // Would only really change for opt-in states. These are general disclaimers so users understand the implications of opting out.
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law",
		}
	}
};
