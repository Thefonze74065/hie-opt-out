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
window.stateData['ak'] = {
    "name": "Alaska",
    "status": "active",
    "hie": {
        "name": "Alaska eHealth Network (AeHN)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "907-770-2626",
            "email": "support@ak-ehealth.org",
            "website": "http://www.ak-ehealth.org",
            "optOutFormUrl": "http://www.ak-ehealth.org/wp-content/uploads/2.100-Consumer-Opt-Out-Election-Policy.pdf"
        },
        "optOut": {
            "available": true,
            "process": "Patients/consumers have the option to completely or partially opt-out. If a patient partially opts-out, their health information can be accessed in an emergency situation. If patient completely opts-out, their information cannot be accessed at any time. At either opt-out level, it is legally required that the HIE contribute to public health reporting. Limited information available for both patients and providers. Consent and disclosure forms are available for patients to access with education on HIE.",
            "steps": [
                "Contact your provider or call healthEconnect Alaska directly at 907-770-2626, Option 2",
                "Request the HIE opt-out form, or download it from their website",
                "Complete and sign the form - this revokes access across all participating providers",
                "Submit form via mail, fax, or secure submission as instructed"
            ],
            "emergencyAccess": "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
            "exceptions": "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
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
        "statute": "AS &sect; 47.30.845",
        "statuteUrl": "http://www.legis.state.ak.us/basis/statutes.asp#47.30.845"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Alaska eHealth Network (AeHN)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients/consumers have the option to completely or partially opt-out. If a patient partially opts-out, their health information can be accessed in an emergency situation. If patient completely opts-out, their information cannot be accessed at any time. At either opt-out level, it is legally required that the HIE contribute to public health reporting. Limited information available for both patients and providers. Consent and disclosure forms are available for patients to access with education on HIE.",
            "patient_notification_methods": null,
            "additional_information": "Selected by the state of Alaska as the state&apos;s official HIE management entity.",
            "websites_and_publicly_available_resources": [
                "http://www.ak-ehealth.org",
                "http://www.ak-ehealth.org/wp-content/uploads/2.100-Consumer-Opt-Out-Election-Policy.pdf",
                "http://www.himss.org/news/alaska-selects-alaska-ehealth-network-aehn-its-hie-network"
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
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Alaska Stat. &sect; 18.23.310 - The statute requires that the Department of Health establish procedures to allow those individuals with health records in the HIE system to opt out of it.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to the HIE established by the Alaska Department of Health and Social Services.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.legis.state.ak.us/basis/statutes.asp#18.23.310",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": null,
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
            "citation_of_statute_or_regulation": "AS &sect; 47.30.845",
            "citation_of_statute_or_regulation_url": "http://www.legis.state.ak.us/basis/statutes.asp#47.30.845",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records and information obtained while screening, evaluating, examining, or treating a person in accordance with Alaska&apos;s procedures for voluntary or involuntary commitment (AS &sect; 47.30.845)."
        }
    }
};
