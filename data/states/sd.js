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
window.stateData['sd'] = {
    "name": "South Dakota",
    "status": "active",
    "hie": {
        "name": "South Dakota Health Link",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.sdhealthlink.org",
            "optOutFormUrl": "http://www.sdhealthlink.org/files/HealthLinkPolicy.pdf"
        },
        "optOut": {
            "available": true,
            "process": "South Dakota Health Link automatically enrolls all patients of participating providers, with no need for further consent. Patients can affirmatively opt out of participating in South Dakota Health Link.",
            "steps": [
                "Contact South Dakota Health Link or your healthcare provider",
                "Request to opt out of the South Dakota Health Link system",
                "Complete any required opt-out documentation",
                "Confirm your opt-out status has been processed",
                "Keep documentation of your opt-out request"
            ],
            "emergencyAccess": "Review the Health Link policy document for emergency access provisions",
            "exceptions": "Check the policy manual for specific exceptions and requirements"
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
        "details": "Authorization by facility representative required for some TPO disclosures. Authorization by Government representative required for some TPO disclosures.",
        "statute": "SDCL &sect; 27A-12-25 et seq.",
        "statuteUrl": "http://www.sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute=27A-12-25"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "South Dakota Health Link",
            "type_of_consent_policy": "No Information Available",
            "details_of_consent_policy": "Information is limited and website is inaccessible.",
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
        "state HIE consent policies": {
            "organization_launch_date": null,
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "South Dakota Health Link, Policy and System Operation Manual 7 (2015) - South Dakota Health Link&apos;s policy states that all patients of a participating health care provider will be automatically enrolled in South Dakota Health Link, with no need for further consent from the patient. The policy states that a patient&apos;s consent will be assumed unless the patient affirmatively opts out of participating in South Dakota Health Link.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all patients whose providers participate in SD Health Link.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://www.sdhealthlink.org/files/HealthLinkPolicy.pdf#page=7",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "South Dakota Health Link is the HIE provided by the South Dakota Department of Health and guided by an active advisory council.",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "Yes",
            "citation_of_statute_or_regulation": "SDCL &sect; 27A-12-25 et seq.",
            "citation_of_statute_or_regulation_url": "http://www.sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute=27A-12-25",
            "narrative_description_of_state_law": "Authorization by facility representative required for some TPO disclosures. Authorization by Government representative required for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical records of persons receiving mental health services in accordance with South Dakota&apos;s mental health law (SDCL &sect; 27A-12-25 et seq.)."
        }
    }
};
