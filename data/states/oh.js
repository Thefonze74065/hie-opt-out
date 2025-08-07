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
window.stateData['oh'] = {
    "name": "Ohio",
    "status": "active",
    "hie": {
        "name": "CliniSync (2009)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.clinisync.org",
            "optOutFormUrl": "http://www.healthcare-informatics.com/article/ohio-s-statewide-hie-success-strategy-and-services"
        },
        "optOut": {
            "available": true,
            "process": "As of December 2015, it is not required to affirmatively obtain a patient&apos;s consent prior to accessing the patient&apos;s information. Patients may opt-out at any time by notifying the Health Information Management Services/Medical Records Department or office administrator. CliniSync policy requires that an organization have a mechanism for a patient to opt-out. If they opt-out, then this decision must be communicated to the Partnership as soon as possible and no later than 3 days after receipt of request.",
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
        "extraProtections": false,
        "requiresAuthorization": false,
        "minimumNecessary": false,
        "details": "State does not require additional authorization for TPO disclosures.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "CliniSync (2009)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "As of December 2015, it is not required to affirmatively obtain a patient&apos;s consent prior to accessing the patient&apos;s information. Patients may opt-out at any time by notifying the Health Information Management Services/Medical Records Department or office administrator. CliniSync policy requires that an organization have a mechanism for a patient to opt-out. If they opt-out, then this decision must be communicated to the Partnership as soon as possible and no later than 3 days after receipt of request.",
            "patient_notification_methods": "The policy does not dictate language that needs to be used for the Notice of Privacy Practices (NPP).",
            "additional_information": "Patients can opt out by 4 methods: 1. Organization sends CliniSync a flag in its ADT message 2. Organization&apos;s staff is trained on CliniSync Consent tool in the CliniSync web portal and uses it to change consent status 3. Organization sends CliniSync a support ticket requesting the patient to be opted-out 4. Patient contacts CliniSync directly and mails a completed and notarized opt-out form that is available on the CliniSync website under Member Resources, Policies and Documents",
            "websites_and_publicly_available_resources": [
                "http://www.clinisync.org",
                "http://www.clinisync.org/fact-sheets-faqs",
                "http://www.clinisync.org/member-resources/policies-documents",
                "http://www.healthcare-informatics.com/article/ohio-s-statewide-hie-success-strategy-and-services"
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
            "details_of_consent_policy": "Ohio Rev. Code &sect; 3798.06 - Ohio law allows disclosure of PHI to approved HIEs by a participating health care provider as long as the provider gives the individual/personal representative of the individual written notice informing the patient, among other things, that s/he has the ability to submit a written request to place restrictions on disclosures of PHI to the approved HIO. Ohio Rev. Code &sect; 3798-07 - Ohio law requires that providers restrict disclosures as per the patient&apos;s request. Ohio Rev. Code &sect; 3798.16(B) - Ohio law further requires that a provider&apos;s notice of privacy practices inform patients that their PHI will be disclosed to authorized HIE and that they have the right to request that the covered entity not disclose any PHI (this must always be honored by the covered entity) or specific categories of PHI to the HIE (this must be honored by covered entity if consistent with future regulations adopted by state).",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all disclosures of PHI to approved HIEs by participating healthcare providers.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://codes.ohio.gov/orc/3798",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "No",
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "State does not require additional authorization for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
