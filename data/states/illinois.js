window.stateData = window.stateData || {};

window.stateData['il'] = {
	name: "Illinois",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "740 ILCS 110/9.6",
		lawUrl: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2702&ChapterID=35",
		process: "Provider-based opt-out (no centralized state form)",
		effectiveDate: "August 4, 2023",
		contacts: [
			{
				name: "Illinois Department of Public Health",
				phone: "217-782-4977",
				email: "dph.hipaa@illinois.gov",
				website: "https://dph.illinois.gov/",
				type: "State Health Department",
				notes: "General HIPAA and health information questions"
			}
		],
		steps: [
			"Contact your provider's Privacy Officer (not front desk staff)",
			"State specifically that you want to opt out of Health Information Exchange sharing under 740 ILCS 110/9.6",
			"Request HIE opt-out form for your specific network (Epic Care Everywhere, CareQuality, etc.)",
			"Complete form and verify identity (notarization or provider signature required)",
			"Submit form as instructed (mail/fax/email - varies by provider)",
			"Follow up within 30 days for written confirmation",
			"Keep copies of all correspondence for your records"
		],
		template: "",
		majorProviders: [
			"northwestern-medicine",
			"university-of-illinois-health",
			"advocate-health",
			"rush-university-medical-center",
			"loyola-medicine",
			"northshore-university-healthsystem",
			"blessing-health-system",
			"anderson-hospital"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
