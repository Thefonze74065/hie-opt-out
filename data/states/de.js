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
window.stateData['de'] = {
    "name": "Delaware",
    "status": "active",
    "hie": {
        "name": "Delaware Health Information Network (DHIN) (2007)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://dhin.org/resources",
            "optOutFormUrl": "http://dhin.org/wp-content/uploads/2015/06/3-DHIN-Access-to-Info-Policy-3.17.11-Final-new-logo-added-4-10-12.pdf"
        },
        "optOut": {
            "available": true,
            "process": "No Consent: (Delivery Function) Opt-Out: (Patient Query Function) DHIN maintains a hybrid opt-out policy for patient participation. Patients may opt-out of the query functionality, but cannot opt-out of the results delivery functionality. Non-participation will result in personally identifiable health information not being available to users (including emergency personnel).  Their data remains in the system and is continually collected by results delivery function - but providers are blocked from viewing the data. Break the glass provisions are included for DHIN. Patients/consumers may decide to not participate in DHIN at any point and can choose to join again at any point. No requirements for how often consent is to be discussed/revisited. Theoretically, a provider could discuss consent once (if at all) with a patient, then never again. Currently, no granular consent for DHIN - patients are all in or all out. DHIN currently working with the technology vendor MEDICITY on developing more granular opt-out options rather than the current purely binary (in-out) approach. This option will be critical to expanding DHIN services to include more mental/behavioral health organizations, State administrative oversight organizations, and a patient portal which will foster consumer engagement. (Reference: AHRQ report on DHIN)",
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
        "requiresAuthorization": false,
        "minimumNecessary": true,
        "details": "State does not require additional authorization for TPO disclosures.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Delaware Health Information Network (DHIN) (2007)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "No Consent: (Delivery Function) Opt-Out: (Patient Query Function) DHIN maintains a hybrid opt-out policy for patient participation. Patients may opt-out of the query functionality, but cannot opt-out of the results delivery functionality. Non-participation will result in personally identifiable health information not being available to users (including emergency personnel).  Their data remains in the system and is continually collected by results delivery function - but providers are blocked from viewing the data. Break the glass provisions are included for DHIN. Patients/consumers may decide to not participate in DHIN at any point and can choose to join again at any point. No requirements for how often consent is to be discussed/revisited. Theoretically, a provider could discuss consent once (if at all) with a patient, then never again. Currently, no granular consent for DHIN - patients are all in or all out. DHIN currently working with the technology vendor MEDICITY on developing more granular opt-out options rather than the current purely binary (in-out) approach. This option will be critical to expanding DHIN services to include more mental/behavioral health organizations, State administrative oversight organizations, and a patient portal which will foster consumer engagement. (Reference: AHRQ report on DHIN)",
            "patient_notification_methods": "At the point-of-care, providers must educate the patient on DHIN and on the opt-out procedure. DHIN offers talking points and forms to help providers educate patients.  Providers and data senders include a disclosure in their HIPAA-required privacy policies that the patient&apos;s clinical data is sent to the DHIN - at this time they also offer the patient the choice to opt-out.  Non-Participation Request Cover Letter and Form is available for patients to review and complete (must be notarized by pubic notary or signed by provider to validate the patient&apos;s identity).  A Cancellation Request form is available to patients if they wish to participate in the future.",
            "additional_information": "Conduit of Health Information; facilitates movement and delivery of patient health information. First state-wide HIE and enacted by the Delaware General Assembly.",
            "websites_and_publicly_available_resources": [
                "http://dhin.org/resources",
                "http://dhin.org/wp-content/uploads/2015/06/3-DHIN-Access-to-Info-Policy-3.17.11-Final-new-logo-added-4-10-12.pdf",
                "https://healthit.ahrq.gov/sites/default/files/docs/citation/state-regional-demonstration-hit-de-final-report.pdf",
                "http://www.pillsburylaw.com/siteFiles/Events/NewPatientPrivacyandConsentStandardsforaConnectedWorld.pdf",
                "http://www.hieanswers.net/delaware-state-health-information-exchange/"
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
            "details_of_consent_policy": "1-100-102 Del. Code Regs. &sect; 7.2 (2009) - DHIN regulations on participation gives patients the right to be informed of and the option of choosing to prohibit a search for their PHI in the DHIN Interchange upon consultation with their health care provider.",
            "patient_notification_methods": null,
            "additional_information": "Participation in DHIN by healthcare entities is voluntary.",
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all individuals with health information in DHIN.",
            "source_of_consent_policy": "Regulation",
            "source_of_consent_policy_url": "http://regulations.delaware.gov/AdminCode/title1/100/102.shtml#TopOfPage",
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "16 Del.C. &sect; 5161/16 Del.C. &sect; 1210",
            "citation_of_statute_or_regulation_url": "http://www.delcode.delaware.gov/title16/c051/sc05/index.shtml",
            "narrative_description_of_state_law": "When releasing protected health information without authorization, the Delaware Department of Health and Social Services must limit the disclosure to minimum amount necessary to accomplish the purpose of disclosure. This limitation applies to disclosures of protected health information for treatment purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Protected health information maintained by the Department of Health and Social Services. Delaware defines protected health information as any information that relates to an individual&apos;s mental or physical health status, condition, or treatment history and identifies or could identify the individual (16 Del.C. &sect; 1210)."
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
