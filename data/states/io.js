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
window.stateData['io'] = {
    "name": "Iowa",
    "status": "no-hie",
    "hie": {
        "name": null,
        "type": "unknown",
        "isActive": false,
        "contact": {
            "phone": null,
            "email": null,
            "website": null,
            "optOutFormUrl": null
        },
        "optOut": {
            "available": false,
            "process": null,
            "steps": [],
            "emergencyAccess": null,
            "exceptions": null
        },
        "legal": {
            "source": null,
            "citations": [],
            "statewideCoverage": null
        }
    },
    "mentalHealth": {
        "extraProtections": true,
        "requiresAuthorization": true,
        "minimumNecessary": false,
        "details": "Authorization required by individual or personal representative for some health care operations disclosures.",
        "statute": "I.C.A. &sect; 228.5",
        "statuteUrl": "https://www.legis.iowa.gov/docs/code/2016/228.5.pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
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
            "citation_of_statute_or_regulation": "I.C.A. &sect; 228.5",
            "citation_of_statute_or_regulation_url": "https://www.legis.iowa.gov/docs/code/2016/228.5.pdf",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health information. Iowa defines mental health information as identifiable information in written, oral, or recorded form that pertains to an individual&apos;s receipt of mental health services (I.C.A. &sect; 228.1)."
        }
    }
};
