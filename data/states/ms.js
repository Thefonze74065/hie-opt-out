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
window.stateData['ms'] = {
    "name": "Mississippi",
    "status": "active",
    "hie": {
        "name": "Mississippi Health Information Network (MS-HIN) (2010)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.ms-hin.ms.gov/Pages/default.aspx",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "If a patient decides they do not want their health information shared, the patient can complete a MS-HIN opt-out form and request to be opted-out from each care provider. The patient will follow the instructions on the MS-HIN Non-Participation Request Form and return to the MS-HIN Office. This disables the patient&apos;s information from being accessible in the MS- HIN Community Health Record System. If a patient wants his or her health information to be private, he or she must inform each healthcare provider to make the health information &quot;confidential&quot; and also complete the MS- HIN &quot;Opt-Out&quot; form. A patient may reinstate their participation at any time. To cancel Opt Out, patients are to complete the MS-HIN Reinstatement Form and return to the MS-HIN Office.",
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
        "details": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization required by facility representative for some payment and health care operations purposes.",
        "statute": "Miss. Code Ann. &sect; 41-21-972",
        "statuteUrl": "http://www.lexisnexis.com/hottopics/mscode/"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Mississippi Health Information Network (MS-HIN) (2010)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "If a patient decides they do not want their health information shared, the patient can complete a MS-HIN opt-out form and request to be opted-out from each care provider. The patient will follow the instructions on the MS-HIN Non-Participation Request Form and return to the MS-HIN Office. This disables the patient&apos;s information from being accessible in the MS- HIN Community Health Record System. If a patient wants his or her health information to be private, he or she must inform each healthcare provider to make the health information &quot;confidential&quot; and also complete the MS- HIN &quot;Opt-Out&quot; form. A patient may reinstate their participation at any time. To cancel Opt Out, patients are to complete the MS-HIN Reinstatement Form and return to the MS-HIN Office.",
            "patient_notification_methods": "MS-HIN health care providers are responsible for letting patients know they participate in MS-HIN.",
            "additional_information": "By completing the MS-HIN opt-out form patients are telling MS-HIN not to allow their information to be &quot;searchable&quot; within the Community Health Record. However, there are organizations that utilize MS-HIN for required transmission of medical records such as Mississippi Public Health, insurance providers, accountable care organizations and home health agencies that are exempt from the MS-HIN Opt-Out system. This is due to a patient&apos;s existing agreements and/or state and federal laws requiring the exchange of clinical data.",
            "websites_and_publicly_available_resources": [
                "http://www.ms-hin.ms.gov/Pages/default.aspx",
                "http://www.ms-hin.ms.gov/Sub/Pages/FAQ.aspx",
                "http://www.ms-hin.ms.gov/Sub/MSHINDocuments/non-participation_requests_procedure6-2012.pdf"
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
            "citation_of_statute_or_regulation": "Miss. Code Ann. &sect; 41-21-972",
            "citation_of_statute_or_regulation_url": "http://www.lexisnexis.com/hottopics/mscode/",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization required by facility representative for some payment and health care operations purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records and information regarding the patients of treatment facilities and persons receiving mental health treatment from physicians, psychologists, social workers, or professional counselors (Miss. Code Ann. &sect; 41-21-97)."
        }
    }
};
