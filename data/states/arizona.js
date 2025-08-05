window.stateData = window.stateData || {};

window.stateData['az'] = {
	name: "Arizona",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Arizona Health Information Exchange Rules",
		lawUrl: "https://azhin.org/",
		process: "Provider-based opt-out (no centralized state form)",
		effectiveDate: "Ongoing",
		contacts: [
			{
				name: "Arizona Health-e Connection (AzHeC)",
				phone: "602-542-1025",
				email: "info@azhec.org",
				website: "https://azhec.org/",
				type: "State HIE Operator",
				notes: "Contact for HIE participation and opt-out guidance"
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
		template: "I request to exercise my right to opt out of participation in Arizona's Health Information Exchange networks. I understand that this will prevent my health data from being shared across participating networks, and I request that your office provide the necessary form and instructions to complete this request.",
		majorProviders: [
			"banner-health",
			"dignity-health-arizona",
			"mayo-clinic-arizona",
			"phoenix-childrens-hospital"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
