// Northwestern Medicine Provider Information
// Last updated: August 2025

window.providerData = window.providerData || [];

window.providerData.push({
	id: "northwestern-medicine",
	name: "Northwestern Medicine",
	states: ["IL"], // Array of two-letter state codes
	system_type: "Large Academic Health System",
	locations: [
		"Chicago, IL",
		"Evanston, IL",
		"Lake Forest, IL",
		"Glenview, IL",
		"Warrenville, IL"
	],
	privacy_contact: {
		department: "Health Information Management",
		phone: "312-472-6550",
		email: "privacy@nm.org",
		fax: "312-926-2999",
		hours: "Monday-Friday, 8:00 AM - 4:30 PM CT"
	},
	medical_records: {
		phone: "877-973-2673",
		email: "medicalrecords@nm.org",
		portal: "MyChart Northwestern Medicine"
	},
	main_contact: {
		phone: "844-662-3883",
		website: "https://www.nm.org/"
	},
	hie_networks: [
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
		},
		{
			name: "Illinois HIE Networks",
			type: "State/Regional Networks",
			opt_out_available: true,
			notes: "Various state and regional networks in Illinois"
		}
	],
	ehr_system: "Epic",
	opt_out_process: {
		form_required: true,
		identity_verification: "Provider signature or notarization",
		submission_methods: ["Mail", "Fax", "In-person"],
		processing_time: "7-14 business days",
		confirmation_provided: true
	},
	service_areas: [
		"Cook County, IL",
		"Lake County, IL",
		"DuPage County, IL",
		"McHenry County, IL"
	],
	notes: "Large network covering Chicagoland area. Academic medical center affiliated with Northwestern University. Uses Epic EHR system extensively. Privacy office is well-versed in HIE opt-out procedures.",
	last_verified: "August 2025",
	special_instructions: [
		"Ask specifically for 'Epic Care Everywhere opt-out form'",
		"May need separate forms for different HIE networks",
		"Privacy office handles all HIE-related requests",
		"Can complete process through MyChart patient portal in some cases"
	]
});
