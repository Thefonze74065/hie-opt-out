// HCA Healthcare Provider Information
// Last updated: August 2025

window.providerData = window.providerData || [];

window.providerData.push({
	id: "hca-healthcare",
	name: "HCA Healthcare",
	states: ["TN", "FL", "TX", "GA", "SC", "NC", "VA", "KY", "IN", "KS", "MO", "OK", "LA", "CO", "UT", "NV", "CA", "AK", "NH"], // Multi-state operation
	system_type: "Large For-Profit Health System",
	locations: [
		"Nashville, TN (HQ)",
		"Miami, FL",
		"Houston, TX",
		"Atlanta, GA",
		"Charleston, SC",
		"Charlotte, NC",
		"Richmond, VA",
		"Louisville, KY",
		"Indianapolis, IN",
		"Kansas City, KS",
		"Kansas City, MO",
		"Oklahoma City, OK",
		"New Orleans, LA",
		"Denver, CO",
		"Salt Lake City, UT",
		"Las Vegas, NV",
		"San Jose, CA",
		"Anchorage, AK",
		"Portsmouth, NH"
	],
	privacy_contact: {
		department: "Privacy Office",
		phone: "1-866-562-7511",
		email: "privacy@hcahealthcare.com",
		website: "https://hcahealthcare.com/patients-visitors/privacy-practices/",
		hours: "Monday-Friday, 8:00 AM - 5:00 PM CT",
		notes: "Centralized privacy office for all HCA facilities"
	},
	hie_participation: {
		networks: [
			"Epic Care Everywhere",
			"CareQuality",
			"CommonWell Health Alliance",
			"State-specific HIEs in operating states"
		],
		opt_out_available: true,
		process: "Contact Privacy Office for HIE opt-out forms and procedures"
	},
	hie_opt_out: {
		available: true,
		process: "Provider-based opt-out through Privacy Office",
		steps: [
			"Contact HCA Privacy Office at 1-866-562-7511",
			"Request HIE opt-out forms for your specific facility",
			"Complete and submit required documentation",
			"Receive written confirmation of opt-out status"
		],
		forms_required: "HCA-specific HIE opt-out forms",
		processing_time: "2-3 weeks",
		coverage: "Applies to all HCA facilities where you receive care"
	},
	service_areas: [
		"Acute care hospitals",
		"Surgery centers",
		"Freestanding ERs",
		"Urgent care centers",
		"Physician clinics"
	],
	additional_info: {
		facilities_count: "185+ hospitals across 20 states",
		website: "https://hcahealthcare.com/",
		headquarters: "Nashville, Tennessee",
		founded: "1968"
	}
});
