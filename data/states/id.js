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
window.stateData['id'] = {
    "name": "Idaho",
    "status": "active",
    "hie": {
        "name": "Idaho Health Data Exchange (IHDE) (2008)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.idahohde.org",
            "optOutFormUrl": "http://www.idahohde.org/opt-out-or-opt-back-in/"
        },
        "optOut": {
            "available": true,
            "process": "Patients may opt-out or request to restrict disclosure of health information.",
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
            "organization_launch_date": "Idaho Health Data Exchange (IHDE) (2008)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients may opt-out or request to restrict disclosure of health information.",
            "patient_notification_methods": null,
            "additional_information": "Patients are encouraged to read the &quot;patient&apos;s benefits&quot; page to ensure they understand the benefits of having patient information available through the IHDE. The forms are available to download, print, complete and mail/fax to the IHDE (address/fax is listed on the form). It will take 7-10 business days to process. Patients can use the same process to opt back in or request to rescind. All forms must be notarized to ensure identity.",
            "websites_and_publicly_available_resources": [
                "http://www.idahohde.org",
                "http://www.idahohde.org/opt-out-or-opt-back-in/",
                "http://gov.idaho.gov/pdf/HCC_health_data_exchange.pdf",
                "http://www.healthandwelfare.idaho.gov/Portals/0/Medical/MedicaidCHIP/IHDEAnnualReportHQPC.pdf"
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "No",
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "State does not require additional authorization for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
