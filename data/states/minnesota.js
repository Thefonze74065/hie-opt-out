window.stateData = window.stateData || {};

window.stateData['mn'] = {
	name: "Minnesota",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Minnesota Health Information Exchange Rules",
		lawUrl: "https://www.health.state.mn.us/",
		process: "Provider-based opt-out (no centralized state form)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "Minnesota Department of Health",
				phone: "651-201-5000",
				email: "health.info@state.mn.us",
				website: "https://www.health.state.mn.us/",
				type: "State Health Department",
				notes: "General health information questions and HIE guidance"
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)",
			"State specifically that you want to opt out of Health Information Exchange sharing",
			"Request HIE opt-out form for your specific network (Epic Care Everywhere, CareQuality, etc.)",
			"Complete form and verify identity (typically requires provider signature or notarization)",
			"Submit form as instructed (usually mail or fax)",
			"Request confirmation that your opt-out request has been processed",
			"Retain a copy of the form and proof of submission for your records"
		],
		template: "I request to exercise my right to opt out of participation in Minnesota Health Information Exchange networks. I understand that this will prevent my health data from being shared across participating networks, and I request that your office provide the necessary form and instructions to complete this request.",
		majorProviders: [
			"mayo-clinic",
			"allina-health",
			"healthpartners",
			"fairview-health-services"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
