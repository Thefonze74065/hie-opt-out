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
window.stateData['hi'] = {
    "name": "Hawaii",
    "status": "active",
    "hie": {
        "name": "Hawaii Health Information Exchange (HHIE) (2006)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://hawaiihie.org",
            "optOutFormUrl": "https://www.hawaiihie.org/sites/default/files/sites/default/files/PDFs/HIE%20FILES/Request%20to%20Resume%20Individual%20Participation%20(Opt-Back%20In)%20Form.pdf"
        },
        "optOut": {
            "available": true,
            "process": "Forms for opting-out and opting back in are available on the website for patients/consumers.",
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
        "details": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization by facility representative required for some TPO disclosures.",
        "statute": "HRS &sect; 334-5/Haw. Admin. Rules (HAR) &sect; 11-175-31",
        "statuteUrl": "http://health.hawaii.gov/opppd/files/2015/06/11-1751.pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Hawaii Health Information Exchange (HHIE) (2006)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Forms for opting-out and opting back in are available on the website for patients/consumers.",
            "patient_notification_methods": null,
            "additional_information": "2009 Designated by HI as the statewide HIE. The Hawaii Health Information Exchange launched its 2015 General Workforce Security Awareness Training available to physicians and their staff members throughout Hawaii.",
            "websites_and_publicly_available_resources": [
                "https://hawaiihie.org",
                "https://hawaiihie.org/sites/default/files/sites/default/files/New%20Opt%20Out%20II.pdf",
                "https://www.hawaiihie.org/sites/default/files/sites/default/files/PDFs/HIE%20FILES/Request%20to%20Resume%20Individual%20Participation%20(Opt-Back%20In)%20Form.pdf"
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
            "citation_of_statute_or_regulation": "HRS &sect; 334-5/Haw. Admin. Rules (HAR) &sect; 11-175-31",
            "citation_of_statute_or_regulation_url": "http://health.hawaii.gov/opppd/files/2015/06/11-1751.pdf",
            "narrative_description_of_state_law": "Hawaii prohibits the mental health division, a contract program, or providers from disclosing information from the clinical record of a person receiving mental health treatment unless the disclosure falls into one of the exempted disclosure categories. These categories include disclosures that the director or administer deems necessary to carry out the provisions of Hawaii&apos;s mental health law, including the provisions that address mental health treatment. All permissible disclosures must be limited to the information relevant to the purpose for disclosure. Therefore, the minimum necessary standard applies to disclosures for treatment purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Certificates, applications, records, and reports that directly or indirectly identify an individual and are generated, maintained, or disclosed by providers, health plans, or health care clearinghouses in accordance with Hawaii&apos;s mental health statute (HRS &sect; 334-4)."
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
            "citation_of_statute_or_regulation": "HRS &sect; 334-5/Haw. Admin. Rules (HAR) &sect; 11-175-31",
            "citation_of_statute_or_regulation_url": "http://health.hawaii.gov/opppd/files/2015/06/11-1751.pdf",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures. Authorization by facility representative required for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Certificates, applications, records, and reports that directly or indirectly identify an individual and are generated, maintained, or disclosed by providers, health plans, or health care clearinghouses in accordance with Hawaii&apos;s mental health statute (HRS &sect; 334-4)."
        }
    }
};
