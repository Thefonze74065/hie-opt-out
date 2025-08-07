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
window.stateData['me'] = {
    "name": "Maine",
    "status": "active",
    "hie": {
        "name": "HealthInfoNet (HIN)/Maine&apos; s Regional Extension Center (MEREC) (2009)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://hinfonet.org",
            "optOutFormUrl": "https://secure.hinfonet.org/PatientOptions/optin"
        },
        "optOut": {
            "available": true,
            "process": "Each time a patient visits a new participating medical provider, they are required to let the patient know they are participating in the HIE and to provide information on HealthInfoNet. Opt-in for mental health/HIV - If patient chooses to also share information related to HIV/mental health care, they will need to fill out a consent form. Patients can also opt back in at their choosing by filling out a form available online on their website.",
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
        "details": "Authorization required by individual or personal representative for some health care operations disclosures. Authorization required by facility representative for payment disclosures.",
        "statute": "14-193 CMR Ch. 1, &sect; IX/  14-472 CMR Ch. 1, &sect; IX/ 34- M.R.S.A. &sect; 1207",
        "statuteUrl": "https://www1.maine.gov/sos/cec/rules/14/193/193c001.docx;http://www.maine.gov/sos/cec/rules/10/chaps10.htm#193;http://legislature.maine.gov/statutes/34-B/title34-Bsec1207.html"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "HealthInfoNet (HIN)/Maine&apos; s Regional Extension Center (MEREC) (2009)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Each time a patient visits a new participating medical provider, they are required to let the patient know they are participating in the HIE and to provide information on HealthInfoNet. Opt-in for mental health/HIV - If patient chooses to also share information related to HIV/mental health care, they will need to fill out a consent form. Patients can also opt back in at their choosing by filling out a form available online on their website.",
            "patient_notification_methods": "Information on HealthInfoNet is also included in the provider&apos;s HIPAA privacy notice.",
            "additional_information": "Maine-based independent nonprofit designated by the State of Maine to operate Maine&apos;s statewide eHealth information network.",
            "websites_and_publicly_available_resources": [
                "http://hinfonet.org",
                "https://secure.hinfonet.org/PatientOptions/optin",
                "https://secure.hinfonet.org/PatientOptions/optout",
                "http://hinfonet.org/patients/your-choices/",
                "http://www.maine.gov/dhhs/oms/HIT/hie.htm"
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
            "details_of_consent_policy": "Me. Rev. Stat. Ann. tit. 22, &sect; 1711- C(18)(C) - Maine law requires that the state-designated statewide HIE provide patients the ability to opt out from participation in the HIE and to prohibit the state-designated statewide HIE from disclosing the patient&apos;s PHI to a health care provider.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to the state-designated statewide HIE.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.mainelegislature.org/legis/statutes/22/title22sec1711-C.html",
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
            "citation_of_statute_or_regulation": "14-193 CMR Ch. 1, &sect; IX/  14-472 CMR Ch. 1, &sect; IX/ 34- M.R.S.A. &sect; 1207",
            "citation_of_statute_or_regulation_url": "https://www1.maine.gov/sos/cec/rules/14/193/193c001.docx;http://www.maine.gov/sos/cec/rules/10/chaps10.htm#193;http://legislature.maine.gov/statutes/34-B/title34-Bsec1207.html",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures. Authorization required by facility representative for payment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical records, administrative records, commitment orders, applications, and reports regarding persons that receive services from the Department of Behavioral and Developmental Services, a Department contractor, or state institution (34-B M.R.S.A. &sect; 1207). Information related to a person or child&apos;s mental health care and treatment (14-193 CMR Ch. 1, &sect; IX and 14-472 CMR Ch. 1, &sect; IX)."
        }
    }
};
