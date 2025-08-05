window.stateData = window.stateData || {};

window.stateData['ca'] = {
	name: "California",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "California Health and Safety Code § 130290 and HIPAA",
		lawUrl: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=130290&lawCode=HSC",
		process: "Provider-based opt-out (no centralized state HIE)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "California Department of Public Health",
				phone: "916-558-1784",
				email: "CDPH.OHII@cdph.ca.gov",
				website: "https://www.cdph.ca.gov/Programs/OHII/Pages/HIE.aspx",
				type: "State Health Department",
				notes: "Office of Health Information Integrity - provides HIE guidance and policy"
			}
		],
		steps: [
			"Contact your healthcare provider's Privacy Officer or Health Information Management",
			"Request to opt out of health information exchange sharing",
			"Ask specifically about Epic Care Everywhere, CommonWell, Carequality, and regional HIE networks",
			"Complete your provider's opt-out form (each provider may have different forms)",
			"Submit completed form according to provider instructions",
			"Request written confirmation of your opt-out status",
			"Repeat process with each healthcare provider you visit"
		],
		template: "I request to exercise my right under California Health and Safety Code § 130290 and HIPAA to opt out of health information exchange networks. Please provide the necessary forms to opt out of Epic Care Everywhere, CommonWell, Carequality, and any regional HIE networks you participate in.",
		majorProviders: [
			"kaiser-permanente",
			"sutter-health",
			"dignity-health",
			"cedars-sinai"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "California has multiple regional HIEs rather than one statewide system. You may need to opt out separately with each healthcare provider and their associated HIE networks."
		}
	}
};
