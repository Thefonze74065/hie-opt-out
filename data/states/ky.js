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
window.stateData['ky'] = {
    "name": "Kentucky",
    "status": "inactive",
    "hie": {
        "name": "Kentucky Health Information Exchange (KHIE)",
        "type": "no-policy",
        "isActive": false,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://khie.ky.gov/Pages/index.aspx",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": false,
            "process": "No information could be found on the KHIE website regarding the consent model in place for patients/consumers.",
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
        "extraProtections": false,
        "requiresAuthorization": false,
        "minimumNecessary": false,
        "details": "State does not require additional authorization for TPO disclosures.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Kentucky Health Information Exchange (KHIE)",
            "type_of_consent_policy": "No Information Available",
            "details_of_consent_policy": "No information could be found on the KHIE website regarding the consent model in place for patients/consumers.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://khie.ky.gov/Pages/index.aspx"
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
            "type_of_consent_policy": "No further consent",
            "details_of_consent_policy": "Governor&apos;s Office of Electronic Health Information, First Update: Kentucky Strategic and Operational Plan for Health Information Exchange 24 (2014) - GOEHI states that because health care providers are allowed to share PHI without patient consent for the purpose of treatment under HIPAA, no further consent is required for exchange of PHI through KHIE. GOEHI further states that it requires no prior consent is required for disclosures for the purposes of payment and health care operations.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all participants in KHIE.",
            "source_of_consent_policy": "State HIE Plan",
            "source_of_consent_policy_url": "http://khie.ky.gov/inc/Documents/SOP%20Plan%20Update%20Draft%20June%2014%20FINAL%20Edition.pdf#page=26",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "KY Strategic and Operational Plan for KHIE by the Governor&apos;s Office of Electronic Health Information (GOEHI). KHIE is administered by the Division of Kentucky Electronic Health Information in the Cabinet for Health and Family Services.",
            "statewide_applicability_y_n": "N",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "No",
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "State does not require additional authorization for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
