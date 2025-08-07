// Auto-generated user-focused HIE opt-out data from ONC dataset
// Structure optimized for helping users find HIE opt-out information
//
// MANUAL UPDATES NEEDED:
// - contact.phone: Add phone numbers for HIE organizations
// - contact.email: Add email addresses
// - optOut.steps: Add specific step-by-step instructions
// - optOut.emergencyAccess: Clarify emergency access policies
// - lastUpdated: Update when manual changes are made
//
// Data structure:
// - name: State name
// - status: 'active', 'inactive', 'no-hie', 'unknown'
// - hie: Primary HIE information and opt-out process
// - mentalHealth: Additional mental health privacy protections
// - rawPolicies: Complete original ONC policy data for reference

window.stateData = window.stateData || {};
window.stateData['ga'] = {
    "name": "Georgia",
    "status": "active",
    "hie": {
        "name": "Georgia Health Information Network (GaHIN) (2015)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.gahin.org/patient-participate.html",
            "optOutFormUrl": "http://www.gahin.org/patient-participate.html"
        },
        "optOut": {
            "available": true,
            "process": "Providers are required to notify patients of their participation at the time of registration or at their appointment. Patients have the right to opt-out at any time and can do so by filling out a form with their provider. If a patient opts-out, no healthcare provider can share their health records with other providers through the GaHIN network. Patients can also opt back in at any time.",
            "steps": [],
            "emergencyAccess": null,
            "exceptions": null
        },
        "legal": {
            "source": "state-law",
            "citations": [
                {
                    "statute": NaN,
                    "url": NaN
                }
            ],
            "statewideCoverage": null
        }
    },
    "mentalHealth": {
        "extraProtections": true,
        "requiresAuthorization": true,
        "minimumNecessary": true,
        "details": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures.",
        "statute": "Ga. Code. Ann., &sect; 37-3-1661  GaComp. R. & Regs. 290-4-6-.05",
        "statuteUrl": "http://wwwlexisnexis.com/hottopics/gacode/;http://rules.sos.state.ga.us/GAC/290-4-6-.05"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Georgia Health Information Network (GaHIN) (2015)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Providers are required to notify patients of their participation at the time of registration or at their appointment. Patients have the right to opt-out at any time and can do so by filling out a form with their provider. If a patient opts-out, no healthcare provider can share their health records with other providers through the GaHIN network. Patients can also opt back in at any time.",
            "patient_notification_methods": null,
            "additional_information": "The Georgia Health Information Network (GaHIN) serves with the Georgia Department of Community Health (DCH) and the Georgia Health Information Technology Regional Extension Center (GA-HITEC) in a public-private collaborative to establish Georgia&apos;s statewide health information exchange, to connect Service Area HIEs, large integrated health systems, payers, wellness partners and other health care stakeholders. Approved by CMS in September of 2015 to be the designated entity for the State of Georgia Health Information Exchange.",
            "websites_and_publicly_available_resources": [
                "http://www.gahin.org/patient-participate.html",
                "http://www.gahin.org/patient-privacy-security.html",
                "http://healthitinteroperability.com/news/gahin-named-georgia-entity-for-health-information-exchange"
            ],
            "scope_of_consent_policy": null,
            "source_of_consent_policy": null,
            "source_of_consent_policy_url": null,
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
            "statewide_applicability_y_n": null,
            "applies_minimum_necessary_standard_to_treatment_disclosures": null,
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": null,
            "definition_or_scope_of_information_material_covered_by_policy": null
        },
        "state HIE consent policies": {
            "organization_launch_date": null,
            "type_of_consent_policy": "No policy",
            "details_of_consent_policy": null,
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": null,
            "source_of_consent_policy": null,
            "source_of_consent_policy_url": null,
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
            "statewide_applicability_y_n": null,
            "applies_minimum_necessary_standard_to_treatment_disclosures": null,
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": null,
            "definition_or_scope_of_information_material_covered_by_policy": null
        },
        "apply minimum necessary standard to treatment disclosures of mental health info": {
            "organization_launch_date": null,
            "type_of_consent_policy": null,
            "details_of_consent_policy": null,
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": null,
            "source_of_consent_policy": null,
            "source_of_consent_policy_url": null,
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
            "statewide_applicability_y_n": null,
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "Ga. Code. Ann., &sect; 37-3-1661/Ga Comp. R. & Regs. 290-4-6-.05",
            "citation_of_statute_or_regulation_url": "https://www.lexisnexis.com/hottopics/gacode",
            "narrative_description_of_state_law": "Georgia permits facilities to disclose a patient&apos;s record when and as necessary for treatment as determined by the chief medical officer of a facility (Ga Comp. R. &amp; Regs. 290-4-6-.05).",
            "definition_or_scope_of_information_material_covered_by_policy": "Clinical records. Georgia defines clinical records as written records maintained by facilities and other entities that provide treatment in accordance with Georgia&apos;s mental health law that include information about an individual&apos;s hospitalization and treatment (e.g., medical records, charts, admission data, etc.) (Ga. Code Ann., &sect; 37-3-1)."
        },
        "require auth to disclose mental health info for TPO": {
            "organization_launch_date": null,
            "type_of_consent_policy": null,
            "details_of_consent_policy": null,
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": null,
            "source_of_consent_policy": null,
            "source_of_consent_policy_url": null,
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
            "statewide_applicability_y_n": null,
            "applies_minimum_necessary_standard_to_treatment_disclosures": null,
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "Yes",
            "citation_of_statute_or_regulation": "Ga. Code. Ann., &sect; 37-3-1661  GaComp. R. & Regs. 290-4-6-.05",
            "citation_of_statute_or_regulation_url": "http://wwwlexisnexis.com/hottopics/gacode/;http://rules.sos.state.ga.us/GAC/290-4-6-.05",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Clinical records. Georgia defines clinical records as written records maintained by facilities and other entities that provide treatment in accordance with Georgia&apos;s mental health law that include information about an individual&apos;s hospitalization and treatment (e.g., medical records, charts, admission data, etc.) (Ga. Code Ann., &sect; 37-3-1)."
        }
    }
};
