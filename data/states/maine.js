// Maine Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};

window.stateData['me'] = {
	name: "Maine",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "Maine Revised Statutes Title 22, § 1711-C",
		lawUrl: "https://legislature.maine.gov/legis/statutes/22/title22sec1711-C.html",
		process: "Provider-based opt-out form plus online request option via HealthInfoNet",
		effectiveDate: "Statutory framework enacted 2011; ongoing current implementation; providers must at first visit offer separate opt-out form",
		contacts: [
			{
				name: "HealthInfo",
				phone: "1-866-592-4352 or 207-541-9250",
				email: " info@hinfonet.org",
				website: "https://hinfonet.org/wp-content/uploads/2016/01/HIN-Opt-Out-Form-2016-4.pdf",
				type: "State Health Department",
				notes: "Specific State Healthcare opt-out form"
			}
		],
		steps: [
			"At first visit, provider must present separate opt-out form / poster",
			"Complete paper or online opt-out form",
			"Submit via mail, fax or online portal",
			"Processing within 2 business days",
			"Opt-back-in available via separate form online/mail provider)"
			
		],
		template: "I understand Maine law (22 MRSA § 1711-C) gives me the right to decline participation in HealthInfoNet. Please provide me with the opt-out form or link so that my general medical information will not be included in the statewide HIE",
		majorProviders: [
			"Maine Health",
			"Northern Light Health",
			"Maine General Health",
			"Central Maine Healthcare",
			"Saint Mary's Health System (Coventry)"
			
		],
		additionalInfo: {
			emergencyAccess: "Opt-out means your general medical data will not be available via HIE, even in emergencies—consider maintaining personal summary.",
			coverageArea: "Applies statewide — all participating providers must comply (HealthInfoNet covers most hospitals and clinics across Maine)",
			exceptions: "Mental health/HIV info is excluded by default unless you explicitly opt in; separate opt-in/out forms exist"
		}
	}
};
