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
window.stateData['co'] = {
    "name": "Colorado",
    "status": "active",
    "hie": {
        "name": "Colorado Regional Health Information Organization (CORHIO) (2007)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.corhio.org",
            "optOutFormUrl": "http://www.corhio.org/for-patients/faqs-for-patients"
        },
        "optOut": {
            "available": true,
            "process": "Patients have the opportunity to opt-out and will ensure that their information is not searchable in the HIE. Patient participation is voluntary. When a patient opts out, their information will not be searchable, but their provider can still use the CORHIO network to issue electronic orders for lab tests, prescriptions and other directed healthcare services. They may also receive lab results, x-rays, and other information sent directly to them electronically. The service is no different from provider using mail/fax to receive information. If provider is not participating in HIE, then their patient&apos;s information is not available in the HIE.",
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
        "minimumNecessary": false,
        "details": "Authorization required by individual or personal representative for health care operations disclosures.",
        "statute": "C.R.S.A. &sect; 27-65- 121",
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Colorado Regional Health Information Organization (CORHIO) (2007)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients have the opportunity to opt-out and will ensure that their information is not searchable in the HIE. Patient participation is voluntary. When a patient opts out, their information will not be searchable, but their provider can still use the CORHIO network to issue electronic orders for lab tests, prescriptions and other directed healthcare services. They may also receive lab results, x-rays, and other information sent directly to them electronically. The service is no different from provider using mail/fax to receive information. If provider is not participating in HIE, then their patient&apos;s information is not available in the HIE.",
            "patient_notification_methods": "If healthcare provider is participating in the HIE, they are required to notify patient of their participation during the patient&apos;s visit or at the time of registration. Patients have the right to opt-out at this time or anytime thereafter.",
            "additional_information": "CORHIO has built-in support for HIPAA and other privacy and security laws. Health information including mental health notes, substance abuse and genetic testing information are subject to additional legal protections. Protection includes a requirement that written consent be obtained for each release of protected information. Patients can request revisions and corrections to their health records by talking to the healthcare provider who is the owner/creator of the records.",
            "websites_and_publicly_available_resources": [
                "http://www.corhio.org",
                "http://www.corhio.org/for-patients/faqs-for-patients",
                "https://www.healthit.gov/policy-researchers-implementers/state-health-information-exchange",
                "http://www.hieanswers.net/colorado-state-health-information-exchange/"
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "No",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": null,
            "definition_or_scope_of_information_material_covered_by_policy": null
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
            "citation_of_statute_or_regulation": "C.R.S.A. &sect; 27-65- 121",
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Information and records obtained and prepared while providing services governed by Colorado&apos;s mental health code (C.R.S.A. &sect; 27-65-121)."
        }
    }
};
