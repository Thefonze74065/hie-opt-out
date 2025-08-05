window.stateData = window.stateData || {};

window.stateData['ct'] = {
	name: "Connecticut",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Connecticut General Statutes § 19a-25",
		lawUrl: "https://www.cga.ct.gov/current/pub/chap_368v.htm#sec_19a-25",
		process: "Centralized opt-out (Connie - Connecticut HIE)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "Connie (Connecticut Health Information Exchange)",
				phone: "866-987-5514",
				email: "help@conniect.org",
				website: "https://www.conniect.org/optout",
				type: "State HIE Operator",
				notes: "Connecticut's designated HIE - multiple opt-out methods available"
			}
		],
		steps: [
			"Choose your preferred opt-out method: online form (fastest), phone, email, fax, or mail",
			"Complete online form at https://connect.conniect.org/OptoutForm OR call 866-987-5514",
			"Provide your personal information to verify identity",
			"Confirm your opt-out request",
			"Your health information will be deleted from Connie within 5 business days",
			"Providers will no longer be able to search Connie for your information"
		],
		template: "I request to exercise my right under Connecticut law to opt out of the Connie Health Information Exchange. I understand this will prevent my health data from being shared through the HIE network, and I request that my information be removed from the system.",
		majorProviders: [
			"yale-new-haven-health",
			"hartford-healthcare",
			"trinity-health-of-new-england"
		],
		additionalInfo: {
			emergencyAccess: "After opting out, your information will not be available to providers through Connie, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Public health reporting (infectious diseases) and Controlled Dangerous Substances information will still be available through HIE after opt-out as required by law."
		}
	}
};
