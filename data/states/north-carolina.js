// North Carolina Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.HIEStateData = window.HIEStateData || {};

window.HIEStateData.nc = {
	name: "North Carolina",
	allowsOptOut: true,
	law: "NC Health Information Exchange Act",
	lawUrl: "https://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_90.html",
	process: "Centralized opt-out through NC HealthConnex",
	contacts: [
		{
			name: "NC Health Information Exchange Authority",
			address: "4101 Mail Service Center, Raleigh, NC 27699-4101",
			phone: "919-855-4800",
			website: "https://nchealthconnex.gov/",
			type: "State HIE Authority",
			notes: "Handles all NC HealthConnex opt-outs - official state HIE"
		},
		{
			name: "NC Department of Health and Human Services",
			phone: "919-855-4800",
			website: "https://www.ncdhhs.gov/",
			type: "State Health Department",
			notes: "General health information privacy questions"
		}
	],
	steps: [
		"Visit the NC HealthConnex website or call to request the Patient Opt-Out Form",
		"Download and print the official Patient Opt-Out Form",
		"Complete the form with all required information (name, DOB, address, etc.)",
		"Verify identity through notarization OR have your healthcare provider sign the form",
		"Mail the completed form to: NC HIEA, 4101 Mail Service Center, Raleigh, NC 27699-4101",
		"Wait for written confirmation (typically 2-4 weeks)",
		"Follow up if no response within 30 days",
		"Notify your healthcare providers that you have opted out"
	],
	template: "I am requesting to opt out of the North Carolina Health Information Exchange (NC HealthConnex) as allowed under state law. I understand this is my right as a North Carolina resident and that my healthcare providers cannot deny me care for making this choice. Please provide the official Patient Opt-Out Form and instructions for completing the process.",
	majorProviders: [
		"Duke Health",
		"Atrium Health",
		"UNC Health",
		"Novant Health",
		"WakeMed Health & Hospitals",
		"Cone Health",
		"Vidant Health",
		"CaroMont Health"
	],
	additionalInfo: {
		formRequired: "Official NC HealthConnex Patient Opt-Out Form must be used",
		processingTime: "2-4 weeks for processing after receipt",
		statewide: "Covers all participating providers in North Carolina",
		emergencyAccess: "Emergency access may still be permitted under certain circumstances"
	}
};
