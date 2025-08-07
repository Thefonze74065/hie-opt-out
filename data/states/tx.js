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
window.stateData['tx'] = {
    "name": "Texas",
    "status": "active",
    "hie": {
        "name": "HIETexas (2013)",
        "type": "unknown",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.hietexas.org/frequently-asked-questions/faqs",
            "optOutFormUrl": "http://www.hietexas.org/patients"
        },
        "optOut": {
            "available": false,
            "process": "HIEs in Texas offer different consent models - ranging from opt-in models to opt-out models and hybrid models. Regardless patients have the ability to opt-out of sharing information via HIE.",
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
        "details": "Authorization required by individual or personal representative for some health care operations disclosures.",
        "statute": "V.T.C.A., Health &amp; Safety Code &sect; 611.001 et seq.",
        "statuteUrl": "http://www.statutes.legis.state.tx.us/Docs/HS/htm/HS.611.htm#611.004"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "HIETexas (2013)",
            "type_of_consent_policy": "Opt-In/Opt-Out",
            "details_of_consent_policy": "HIEs in Texas offer different consent models - ranging from opt-in models to opt-out models and hybrid models. Regardless patients have the ability to opt-out of sharing information via HIE.",
            "patient_notification_methods": null,
            "additional_information": "HIETexas enables HIE infrastructure for the state. Statewide Network, coordinated by the Texas Health Services Authority, to enable HIE-to-HIE connectivity between authorized HIEs in Texas and across the country.",
            "websites_and_publicly_available_resources": [
                "http://www.hietexas.org/frequently-asked-questions/faqs",
                "http://www.hietexas.org/patients"
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
            "citation_of_statute_or_regulation": "V.T.C.A., Health &amp; Safety Code &sect; 611.001 et seq.",
            "citation_of_statute_or_regulation_url": "http://www.statutes.legis.state.tx.us/Docs/HS/htm/HS.611.htm#611.004",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records maintained by professionals regarding the identity, treatment, or diagnosis of their patient and communications between professionals and their patients. Texas defines professional as including persons licensed to practice medicine and persons licensed to evaluate, diagnose, and treat mental or emotion conditions or disorders (V.T.C.A., Health &amp; Safety Code &sect;&sect; 611.001-611.002)."
        }
    }
};
