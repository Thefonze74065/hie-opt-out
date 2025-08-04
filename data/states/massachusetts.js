window.stateData = window.stateData || {};

window.stateData['ma'] = {
	name: "Massachusetts",
	optOutStatus: "opt-in", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "M.G.L. Chapter 118I and 101 CMR 20.00",
		lawUrl: "https://www.mass.gov/regulations/101-cmr-2000-health-information-exchange",
		process: "Centralized opt-in (must explicitly consent to participate)",
		effectiveDate: "August 4, 2023",
		contacts: [
			{
				name: "Mass HIway",
				phone: "855-624-4929",
				email: "masshiway@state.ma.us",
				website: "https://www.masshiway.net/",
				type: "State HIE Support Desk",
				notes: "Use this to directly request opt-out instructions"
			}
		],
		steps: [
			"Mass Hiway is Opt-In - but if you have, you can opt-out by following these steps:",
			"Contact your healthcare provider's Privacy Officer, or reach out to Mass HIway directly"
		],
		template: "",
		majorProviders: [
		],
		additionalInfo: {
			emergencyAccess: "Massachusetts uses an opt-in model, so you are opted-out by default. No action needed unless you want to participate in Mass HIway.",
			exceptions: "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
		}
	}
};
