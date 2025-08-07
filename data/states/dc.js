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
window.stateData['dc'] = {
    "name": "District of Columbia",
    "status": "active",
    "hie": {
        "name": "Chesapeake Regional Information System for our Patients (CRISP)",
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
            "process": "All patients are notified about the existence of CRISP and will be included in the exchange unless they opt-out of exchange participation. Opt-out option by patient is kept confidential and not shared; all are prevented from accessing patient information. Patients may revoke participation in the exchange at any time and can alter status in either direction. Information can be shared, in accordance with the law, for public health reporting, even if the patient decides to opt-out. Information including name, address and date of birth are kept in the system (separate data repository used for master patient index) to ensure records are blocked. The existing data will remain in the exchange, but sequestered from further circulation unless required by law. No &apos;break the glass&apos; provisions are available for a non- participant. Limited situations exist where for legal reasons CRISP is required to share limited data about patients who have opted-out - medical information communicated by public health officials by Maryland law. CRISP does not recommend granular control for exclusion by data type/provider organization. But, hospitals/providers may allow patients greater control over what is published to the exchange; Health Record Banks and PHRs will be an exception to the all-in or all-out principal.",
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
        "details": "Authorization required by individual or personal representative for health care operations disclosures.",
        "statute": "D.C. Code &sect;&sect; 7- 1201.01 et seq.",
        "statuteUrl": "http://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/MENTAL%20HEALTH%20INFORMATION.pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Chesapeake Regional Information System for our Patients (CRISP)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "All patients are notified about the existence of CRISP and will be included in the exchange unless they opt-out of exchange participation. Opt-out option by patient is kept confidential and not shared; all are prevented from accessing patient information. Patients may revoke participation in the exchange at any time and can alter status in either direction. Information can be shared, in accordance with the law, for public health reporting, even if the patient decides to opt-out. Information including name, address and date of birth are kept in the system (separate data repository used for master patient index) to ensure records are blocked. The existing data will remain in the exchange, but sequestered from further circulation unless required by law. No &apos;break the glass&apos; provisions are available for a non- participant. Limited situations exist where for legal reasons CRISP is required to share limited data about patients who have opted-out - medical information communicated by public health officials by Maryland law. CRISP does not recommend granular control for exclusion by data type/provider organization. But, hospitals/providers may allow patients greater control over what is published to the exchange; Health Record Banks and PHRs will be an exception to the all-in or all-out principal.",
            "patient_notification_methods": "Patients can choose to opt-out via the secure website, phone, fax and mail  Patients are also notified on the web of the consequences of opting-out.",
            "additional_information": "Regional HIE that serves Maryland and DC",
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
            "details_of_consent_policy": "District of Columbia Health Information Exchange Policy Board, Monthly Meeting Minutes 3 (2013) - The DC HIE Policy board adopted a motion to implement an opt out consent model for the DC HIE. Further details about the policy can be found  here.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all patients and participants enrolled in DC HIE.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/publication/attachments/DC-HIE-PBMeetingMinutes-May152013-DRAFT.pdf",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "The District of Columbia Department of Health Care Finance (DHCF) was awarded a grant from the Office of the National Coordinator for Health Information Technology (ONC) to create DC HIE. DC HIE is staffed and managed by DHCF.",
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "D.C. Code &sect;&sect; 7- 1201.01 et seq.",
            "citation_of_statute_or_regulation_url": "http://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/MENTAL%20HEALTH%20INFORMATION.pdf",
            "narrative_description_of_state_law": "Health care providers may disclose mental health information to other providers for treatment purposes to the extent necessary to provide health services to an individual. Providers must give individuals an opportunity to opt out of such disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health information. Washington D.C. defines mental health information as identifiable diagnosis or treatment information obtained by a mental health professional while serving in a professional capacity (D.C. Code &sect; 7-1201.01)."
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
            "citation_of_statute_or_regulation": "D.C. Code &sect;&sect; 7- 1201.01 et seq.",
            "citation_of_statute_or_regulation_url": "http://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/MENTAL%20HEALTH%20INFORMATION.pdf",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health information. The District of Columbia defines mental health information as identifiable diagnosis or treatment information obtained by a mental health professional while serving in a professional capacity (D.C. Code &sect; 7-1201.01)."
        }
    }
};
