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
window.stateData['md'] = {
    "name": "Maryland",
    "status": "active",
    "hie": {
        "name": "Chesapeake Regional Information System for our Patients (CRISP) (2010)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://crisphealth.org",
            "optOutFormUrl": "https://crisphealth.org/for-patients/"
        },
        "optOut": {
            "available": true,
            "process": "See DC for CRISP Consent Policy details.",
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
        "minimumNecessary": true,
        "details": "Authorization required by health care provider for some treatment disclosures.",
        "statute": "Md. Gen. Health. &sect; 4-307",
        "statuteUrl": "http://mgaleg.maryland.gov/webmga/frmStatutesText/aspx?article=ghg&section=4-307&ext=html&session=2015RS&tab=subject5"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Chesapeake Regional Information System for our Patients (CRISP) (2010)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "See DC for CRISP Consent Policy details.",
            "patient_notification_methods": "Patients can choose to opt-out via the secure website, phone, fax and mail.  Patients are also notified on the web of the consequences of opting-out.",
            "additional_information": "CRISP is a Regional HIE that serves Maryland and DC. Formally designated by the Maryland Health Care Commission as Maryland&apos;s statewide health information exchange.",
            "websites_and_publicly_available_resources": [
                "https://crisphealth.org",
                "https://crisphealth.org/for-patients/",
                "https://www.healthit.gov/sites/default/files/privacy-security/appendix-a-state-model-table.pdf"
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
            "details_of_consent_policy": "Md. Code Regs. 10.25.18.03 - Maryland regulations give patients participating in an HIE a number of rights including the right to opt out of the HIE at any time and to refuse access to the patient&apos;s PHI through an HIE, except in certain specific circumstances.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all HIEs, not just the state designated exchange. MD statute defines HIE as &quot;an infrastructure that provides organizational and technical capabilities for the exchange of protected health information electronically among entities not under common ownership.&quot;",
            "source_of_consent_policy": "Regulation",
            "source_of_consent_policy_url": "http://www.dsd.state.md.us/comar/comarhtml/10/10.25.18.03.htm",
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "Md. Gen. Health. &sect; 4-307",
            "citation_of_statute_or_regulation_url": "http://mgaleg.maryland.gov/webmga/frmStatutesText.aspx?article=ghg&section=4-307&ext=html&html&session=2015RS&tab=subject5",
            "narrative_description_of_state_law": "Persons that disclose medical records related to mental health services without authorization may only disclose information relevant to the purpose for which they are disclosing the information. This limitation applies to disclosures for treatment purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical records. Maryland defines medical records as information about a patient or recipient&apos;s health care that is entered into a record and identifies or can lead to the identification of a patient. Recipient refers to a person that has applied for or is receiving mental health services (MD Code, Health - General, &sect; 4-307)."
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
            "citation_of_statute_or_regulation": "Md. Gen. Health. &sect; 4-307",
            "citation_of_statute_or_regulation_url": "http://mgaleg.maryland.gov/webmga/frmStatutesText/aspx?article=ghg&section=4-307&ext=html&session=2015RS&tab=subject5",
            "narrative_description_of_state_law": "Authorization required by health care provider for some treatment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical records. Maryland defines medical records as information about a patient or recipient&apos;s health care that is entered into a record and identifies or can lead to the identification of a patient. Recipient refers to a person that has applied for or is receiving mental health services (MD Code, Health - General, &sect; 4-307)."
        }
    }
};
