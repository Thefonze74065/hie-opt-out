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
window.stateData['ne'] = {
    "name": "Nebraska",
    "status": "active",
    "hie": {
        "name": "Nebraska Health Information Initiative (NeHII)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://www.connectnebraska.net/index.php?option=com_content&view=article&id=121&Itemid=165",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Participation in NeHII is completely free. If any of healthcare providers are participating in the NeHII system, patients are automatically enrolled in the system. If patients decide to opt out of NeHII, providers will not have access to patient healthcare records. If patients choose to opt out, they can opt back into the system at any time.",
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
        "details": "Authorization required by individual or personal representative for TPO disclosures.",
        "statute": "Neb. Rev. Stat. &sect; 71-961/ Neb. Rev. Stat. &sect; 38-2136",
        "statuteUrl": "http://nebraskalegislature.gov/laws/statutes.php?statute=71-961;http://nebraskalegislature.gov/laws/statutes.php?statute=38-2136"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Nebraska Health Information Initiative (NeHII)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Participation in NeHII is completely free. If any of healthcare providers are participating in the NeHII system, patients are automatically enrolled in the system. If patients decide to opt out of NeHII, providers will not have access to patient healthcare records. If patients choose to opt out, they can opt back into the system at any time.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "https://www.connectnebraska.net/index.php?option=com_content&view=article&id=121&Itemid=165",
                "http://50.63.36.155"
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
            "citation_of_statute_or_regulation": "Neb. Rev. Stat. &sect; 71-961/ Neb. Rev. Stat. &sect; 38-2136",
            "citation_of_statute_or_regulation_url": "http://nebraskalegislature.gov/laws/statutes.php?statute=71-961;http://nebraskalegislature.gov/laws/statutes.php?statute=38-2136",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records regarding persons committed pursuant to Nebraska&apos;s Mental Health Commitment Act (Neb. Rev. Stat. &sect; 71-961). Information acquired by a mental health practitioner from their client or patient (Neb. Rev. Stat. &sect; 38-2136)."
        }
    }
};
