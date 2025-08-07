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
window.stateData['nv'] = {
    "name": "Nevada",
    "status": "active",
    "hie": {
        "name": "HealtHIE Nevada HIE",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://healthienevada.org/how-do-i-sign-up/",
            "optOutFormUrl": "http://healthienevada.org/patients/patient-faqs/"
        },
        "optOut": {
            "available": false,
            "process": "Nevada uses an opt-in model. Patients must give their permission for healthcare providers to view their health information in the HIE. Patients have three choices: (1) I consent; (2) I consent only in case of emergency; (3) I do not consent. Consent can be changed at any time.",
            "steps": [
                "Contact your healthcare provider or clinic",
                "Request the HIE consent form",
                "Choose your consent level: full consent, emergency only, or no consent",
                "Submit the form to your provider",
                "You can change your consent choice at any time by contacting your provider"
            ],
            "emergencyAccess": "You can choose 'emergency only' consent which allows access only during medical emergencies",
            "exceptions": "Since this is opt-in, you have full control over participation"
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
        "details": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization required by facility representative for some treatment disclosures.",
        "statute": "N.R.S. 433A.360",
        "statuteUrl": "https://www.leg.state.nv.us/NRS/NRS-433A.html#NRS433ASec360"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "HealtHIE Nevada HIE",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Patients can opt-in and participate by signing up at their provider or clinic. Patients have the right to participate and they have three choices on the consent form including: (1) I consent; (2) I consent only in case of emergency; (3) I do not consent. Patients must give their permission for health care provider to view their health information in the HIE. Consent can be changed at any time.",
            "patient_notification_methods": null,
            "additional_information": "Private, not-for-profit statewide health Information exchange The only HIE open throughout Nevada.",
            "websites_and_publicly_available_resources": [
                "http://healthienevada.org/how-do-i-sign-up/",
                "http://healthienevada.org",
                "http://healthienevada.org/patients/patient-faqs/"
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
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Nev. Rev. Stat. &sect; 439.589 - Nevada law requires that the director of the Department of Health and Human Services put forward regulations establishing standards for obtaining consent from a patient before retrieving the patient&apos;s health records from an HIE.  The law further requires that these standards include requirements for how a patient may revoke his/her consent for a health care provider to retrieve his/her health records from the HIE.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "In Nevada, HIEs can&apos;t operate without state certification.  To receive certification, HIEs have to demonstrate their adherence to patient consent standards described in the language of consent policy.  Therefore, this statute requiring consent applies to all HIEs operating in Nevada.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "https://www.leg.state.nv.us/urs/NRS-439.html#NRS439Sec589",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
            "statewide_applicability_y_n": "Y",
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
            "citation_of_statute_or_regulation": "N.R.S. 433A.360",
            "citation_of_statute_or_regulation_url": "https://www.leg.state.nv.us/NRS/NRS-433A.html#NRS433ASec360",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization required by facility representative for some treatment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Clinical records regarding persons receiving mental health services from a state facility, private institution, or a facility that provides community-based or outpatient services (N.R.S. 433A.360)."
        }
    }
};
