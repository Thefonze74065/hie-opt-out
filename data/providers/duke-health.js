// Duke Health Provider Information
// Last updated: August 2025

window.HIEProviderData = window.HIEProviderData || [];

window.HIEProviderData.push({
	id: "duke-health",
	name: "Duke Health",
	state: "North Carolina",
	system_type: "Large Academic Health System",
	locations: [
		"Durham, NC",
		"Raleigh, NC",
		"Chapel Hill, NC",
		"Cary, NC",
		"Hillsborough, NC"
	],
	privacy_contact: {
		department: "Privacy Office",
		phone: "919-684-2523",
		email: "privacy@duke.edu",
		mailing_address: "Duke University Health System, Privacy Office, DUMC Box 3677, Durham, NC 27710",
		hours: "Monday-Friday, 8:00 AM - 5:00 PM ET"
	},
	medical_records: {
		phone: "919-684-8111",
		email: "medicalrecords@duke.edu",
		portal: "MyChart Duke Health"
	},
	main_contact: {
		phone: "919-684-8111",
		website: "https://www.dukehealth.org/"
	},
	hie_networks: [
		{
			name: "NC HealthConnex",
			type: "State HIE",
			opt_out_available: true,
			notes: "Official North Carolina state health information exchange"
		},
		{
			name: "Epic Care Everywhere",
			type: "National HIE Network",
			opt_out_available: true,
			notes: "Connects Epic EHR systems nationwide"
		},
		{
			name: "CareQuality",
			type: "National HIE Framework",
			opt_out_available: true,
			notes: "Interoperability framework for health data exchange"
		}
	],
	ehr_system: "Epic",
	opt_out_process: {
		form_required: true,
		identity_verification: "Provider signature or notarization",
		submission_methods: ["Mail", "Fax", "In-person", "Patient Portal"],
		processing_time: "10-15 business days",
		confirmation_provided: true,
		state_hie_note: "For NC HealthConnex, must also complete state opt-out process"
	},
	service_areas: [
		"Durham County, NC",
		"Wake County, NC",
		"Orange County, NC",
		"Chatham County, NC",
		"Person County, NC"
	],
	notes: "Major academic health system affiliated with Duke University. Participates in both state and national HIE networks. Privacy office handles both institutional and state HIE opt-outs.",
	last_verified: "August 2025",
	special_instructions: [
		"For NC HealthConnex opt-out, also complete state process separately",
		"Ask for both Epic Care Everywhere and NC HealthConnex opt-out forms",
		"Privacy office can guide you through state HIE process",
		"MyChart portal may have HIE preference settings"
	]
});
