// Illinois Health Information Exchange Opt-Out Information
// Last updated: August 2025

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
		template: "I understand Illinois law grants me the right under 740 ILCS 110/9.6 to opt out of my provider sharing my records via Health Information Exchange networks. This law became effective August 4, 2023, and mandates that HIE participants must allow patients to opt out without coercion or denial of service. Please provide the form and guidance to complete this opt-out for all HIE networks your organization participates in.",
		majorProviders: [
			"Northwestern Medicine",
			"University of Illinois Health",
			"Advocate Health",
			"Rush University Medical Center",
			"Loyola Medicine",
			"NorthShore University HealthSystem",
			"Blessing Health System",
			"Anderson Hospital"
		],
		additionalInfo: {
			emergencyAccess: "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
			coverageArea: "Statewide - all healthcare providers in Illinois must comply with this law",
			exceptions: "Emergency situations may still allow access as required by federal law"
		}
	}
};
