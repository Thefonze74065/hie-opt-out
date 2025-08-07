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
window.stateData['wy'] = {
    "name": "Wyoming",
    "status": "active",
    "hie": {
        "name": "WYFI (Wyoming Frontier Information)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "(307)777-7594",
            "email": "wdh-wyfi-hie@wyo.gov",
            "website": "https://health.wyo.gov/healthcarefin/wyoming_frontier_information_wyfi/",
            "optOutFormUrl": "https://health.wyo.gov/healthcarefin/wyoming_frontier_information_wyfi/opt-out-opt-in/"
        },
        "optOut": {
            "available": true,
            "process": "Centralized opt-out through WYFI (Wyoming Frontier Information). Provider submits patient form to WYFI, WYFI handles opt-out centrally.",
            "steps": [
                "Obtain WYFI Opt-Out form from your provider or WYFI website",
                "Complete and sign the form (patient or legal rep signature required)",
                "Submit form to your provider's Privacy Officer",
                "Provider forwards request to WYFI for processing",
                "WYFI processes opt-out and confirms with provider and patient"
            ],
            "emergencyAccess": "Emergency access policies apply as per state regulations",
            "exceptions": "Legal and public health requirements may still allow access"
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
        "details": "Authorization required by individual or personal representative for some TPO disclosures.",
        "statute": "W.S.1977 &sect; 9-2-125",
        "statuteUrl": "http://legisweb.state.wy.us/statutes/compress/title09.docx"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Wyoming e- Health Partnership (2011)",
            "type_of_consent_policy": "No Information Available",
            "details_of_consent_policy": null,
            "patient_notification_methods": null,
            "additional_information": "Non-profit entity designated by the Governor of Wyoming to carry out the strategic and operational plans of the Wyoming HIE. Could not get to the website via Google search or via the link provided by the Wyoming Department of Enterprise Technology Services site listed below:",
            "websites_and_publicly_available_resources": [
                "http://ets.wyo.gov/office-of-enterprise-architecture/health-it-enterprise-architecture"
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
            "citation_of_statute_or_regulation": "W.S.1977 &sect; 9-2-125",
            "citation_of_statute_or_regulation_url": "http://legisweb.state.wy.us/statutes/compress/title09.docx",
            "narrative_description_of_state_law": "Wyoming permits a treatment facility to disclose an individual&apos;s mental health treatment records in connection with the individual&apos;s transfer to another facility. The transferring facility must limit disclosure to only the records necessary to enable the receiving facility to provide mental health services and any records required by law.",
            "definition_or_scope_of_information_material_covered_by_policy": "Registration and treatment records regarding patients receiving mental health treatment at a treatment facility that is under contract with the Department of Health (W.S.1977 &sect; 9-2-125)."
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
            "citation_of_statute_or_regulation": "W.S.1977 &sect; 9-2-125",
            "citation_of_statute_or_regulation_url": "http://legisweb.state.wy.us/statutes/compress/title09.docx",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Registration and treatment records regarding patients receiving mental health treatment at a treatment facility that is under contract with the department (W.S.1977 &sect; 9-2-125)."
        }
    }
};
