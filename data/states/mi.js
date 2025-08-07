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
window.stateData['mi'] = {
    "name": "Michigan",
    "status": "active",
    "hie": {
        "name": "Michigan Health Information Network (MiHIN)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://mihin.org/exchanges/",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Michigan established and implemented an &apos;Informed Opt-out&apos; policy as the method of consumer control for protected health information in an HIE.",
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
        "details": "Authorization required by individual or personal representative for some health care operations disclosures and some payment disclosures.",
        "statute": "M.C.L.A. &sect; 330.1748",
        "statuteUrl": "http://www.legislature.mi.gov/(S(kb1t1tggl3kyt30iolbnnecg)/mileg.aspx?page=GetObject&objectname=mcl-330-1748"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Michigan Health Information Network (MiHIN)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Michigan established and implemented an &apos;Informed Opt-out&apos; policy as the method of consumer control for protected health information in an HIE.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://mihin.org/exchanges/",
                "http://mihin.org/about-mihin/faqs/",
                "http://mihin.org/exchanges/other-state-exchanges/",
                "http://www.michigan.gov/documents/mdhhs/HIT_Commission_2015_Annual_Report_Final_Version_513877_7.pdf"
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "M.C.L.A. &sect; 330.1748",
            "citation_of_statute_or_regulation_url": "http://www.legislature.mi.gov/(S(kb1t1tggl3kyt30iolbnnecg))/mileg.aspx?page=GetObject&objectname=mcl-330-1748",
            "narrative_description_of_state_law": "Michigan permits the disclosure of information from a state program recipient&apos;s mental health record without authorization when disclosure is necessary to comply with another provision of law. [This could be read to include disclosure for treatment purposes]. When disclosing a recipient&apos;s mental health record without authorization, the disclosing party may only disclose the recipient&apos;s identity if it is germane to the purpose of the disclosure and, if practicable, limit disclosure to only the information germane to the purpose of disclosure.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records maintained by the Department of Health and Human Services, community mental health services, facilities, and contract providers regarding the provision of mental services to individual recipients (M.C.L.A. 330.1700)."
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
            "citation_of_statute_or_regulation": "M.C.L.A. &sect; 330.1748",
            "citation_of_statute_or_regulation_url": "http://www.legislature.mi.gov/(S(kb1t1tggl3kyt30iolbnnecg)/mileg.aspx?page=GetObject&objectname=mcl-330-1748",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures and some payment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records maintained by the Department of Health and Human Services, community mental health services, facilities, and contract providers regarding the provision of mental services to individual recipients (M.C.L.A. 330.1700)."
        }
    }
};
