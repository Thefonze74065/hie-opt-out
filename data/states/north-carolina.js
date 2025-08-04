// North Carolina Health Information Exchange Opt-Out Information
// Last updated: August 2025

window.stateData = window.stateData || {};

window.stateData['nc'] = {
	name: "North Carolina",
	optOutStatus: "opt-out", // "opt-out", "opt-in", "no-option", "unknown"
	hieOptOut: {
		available: true,
		law: "NC Health Information Exchange Act",
		lawUrl: "https://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_90.html",
		process: "Centralized opt-out through NC HealthConnex",
		contacts: [
			{
				name: "NC Health Information Exchange Authority",
				address: "Mail Service Center 4101, Raleigh, NC 27699-4101",
				phone: "919-855-4800",
				email: "hiea@nc.gov",
				website: "https://hiea.nc.gov/patients/your-choices",
				type: "State HIE Authority",
				notes: "Download the official Opt-Out form from their website and mail to the address above"
			}
		],
		steps: [
			"Visit https://hiea.nc.gov/patients/your-choices to download the NC HIEA Opt-Out form",
			"Print and complete the form with all required information (name, DOB, address, etc.)",
			"Verify identity through notarization OR have your healthcare provider sign the form",
			"Mail the completed form to: North Carolina Health Information Exchange Authority, Mail Service Center 4101, Raleigh, NC 27699-4101",
			"Wait for written confirmation (typically 2-4 weeks)",
			"Follow up if no response within 30 days"
		],
		majorProviders: [
			"duke-health",
			"atrium-health",
			"unc-health",
			"novant-health",
			"wakemed-health",
			"cone-health",
			"vidant-health",
			"caromont-health",
			"hca-healthcare"
		],
		additionalInfo: {
			formRequired: "Official NC HealthConnex Patient Opt-Out Form must be used",
			processingTime: "2-4 weeks for processing after receipt",
			statewide: "Covers all participating providers in North Carolina",
			emergencyAccess: "Emergency access may still be permitted under certain circumstances"
		}
	}
};
