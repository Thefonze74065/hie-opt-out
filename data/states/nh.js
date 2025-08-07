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
window.stateData['nh'] = {
    "name": "New Hampshire",
    "status": "active",
    "hie": {
        "name": "New Hampshire Health Information Organization (NHHIO) (2011)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://nhhio.org/about-us/faqs",
            "optOutFormUrl": "http://www.hieanswers.net/new-hampshire-state-health-information-exchange/"
        },
        "optOut": {
            "available": true,
            "process": "Little information could be found aside from the legislative FAQs with information on patient opt-out.",
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
        "details": "Authorization required by individual or personal representative for TPO disclosures.",
        "statute": "N.H. Rev. Stat. &sect; 135-C:19-a",
        "statuteUrl": "http://www.gencourt.state.nh.us/rsa/html/X/135-C/135-C-19-a.htm"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "New Hampshire Health Information Organization (NHHIO) (2011)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Little information could be found aside from the legislative FAQs with information on patient opt-out.",
            "patient_notification_methods": null,
            "additional_information": "Non-profit organization - NHHIO reports that their membership has grown to over 65 participants, continuing their positive trend towards full financial sustainability. Over 340,000 public health transactions are being sent through the NHHIO monthly, and over 10,000 are occurring directly between providers for better patient care.",
            "websites_and_publicly_available_resources": [
                "http://nhhio.org/about-us/faqs",
                "http://nhhio.org/about-us/overview",
                "http://www.hieanswers.net/new-hampshire-state-health-information-exchange/"
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
            "details_of_consent_policy": "N.H. Rev. Stat. Ann. &sect; 332-I:3 - New Hampshire law gives patients the right to opt out of sharing his/her name and address and his/her PHI through NH-HIO. The law requires that the patient be given this opportunity to opt out in a clear and conspicuous manner.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to state-created NH- HIO only.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.gencourt.state.nh.us/rsa/html/xxx/332-i/332-i-mrg.htm",
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
            "citation_of_statute_or_regulation": "N.H. Rev. Stat. &sect; 135-C:19-a",
            "citation_of_statute_or_regulation_url": "http://www.gencourt.state.nh.us/rsa/html/X/135-C/135-C-19-a.htm",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health treatment, diagnosis, and admission information maintained by state mental health facilities or community health centers (N.H. Rev. Stat. &sect; 135-C:2)."
        }
    }
};
