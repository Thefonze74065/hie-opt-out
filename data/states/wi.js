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
window.stateData['wi'] = {
    "name": "Wisconsin",
    "status": "active",
    "hie": {
        "name": "Wisconsin Statewide Health Information Network (WISHIN) (2010)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "1-888-WISHIN1",
            "email": "wishin.support@wishin.org",
            "website": "https://wishin.org/",
            "optOutFormUrl": "https://www.dhs.wisconsin.gov/forms/f03276.pdf"
        },
        "optOut": {
            "available": true,
            "process": "Complete and submit DHS Patient Choice Form (F-03276) to WISHIN or treating facility. Processing typically within three business days. Confirmation sent by mail.",
            "steps": [
                "Download or request the Patient Choice Form (F-03276)",
                "Indicate opt-out and provide required initialing/signature (witness signature required)",
                "Submit form to WISHIN or patient's treating facility",
                "Processing typically within three business days",
                "Confirmation sent by mail; retain proof",
                "To opt back in, submit the same form indicating opt-in"
            ],
            "emergencyAccess": "Emergency access provisions apply - review opt-out stipulations before completing form",
            "exceptions": "Witness signature required on Patient Choice Form"
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
        "details": "Authorization required by individual or personal representative for some TPO disclosures.",
        "statute": "W.S.A. 51.30",
        "statuteUrl": "https://docs.legis.wisconsin.gov/statutes/statutes/51/30"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Wisconsin Statewide Health Information Network (WISHIN) (2010)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients can choose not to participate, but participation is automatic. To opt out, patients must complete and submit a Patient Choice Form. There are also Opt Out Stipulations to read before filling out the form to understand what will happen if a patient chooses to opt out. It will take up to 3 business days after the opt-out request is received to process.",
            "patient_notification_methods": null,
            "additional_information": "Wisconsin&apos;s state-designated entity for HIE. WISHIN is a not-for-profit (Chapter 181) organization appointed as the state-designated entity for governance and implementation of a statewide health information exchange in Wisconsin (2009 Wisconsin Act 274). Founded by four organizations - Wisconsin Hospital Association; Wisconsin Medical Society; Wisconsin Collaborative for Healthcare Quality; Wisconsin Health Information Organization.",
            "websites_and_publicly_available_resources": [
                "http://www.wishin.org/ForPatients/PatientChoice.aspx",
                "http://www.wishin.org/NewSite/ProductsOLD/WISHINPulse.aspx",
                "http://www.wishin.org/Portals/0/Policy/Patient%20Choice%20Form.pdf"
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
            "citation_of_statute_or_regulation": "W.S.A. 51.30",
            "citation_of_statute_or_regulation_url": "https://docs.legis.wisconsin.gov/statutes/statutes/51/30",
            "narrative_description_of_state_law": "All records of treatment for mental health, developmental disabilities, alcoholism, or drug dependence shall remain confidential and are privileged to the subject individual. Wisconsin permits the disclosure of mental health information without consent for certain listed treatment purposes and limited to the extent necessary, including disclosure to the Department of Health Services, the director of the county department, or qualified staff members when the information is necessary to assess the adequacy of treatment or the need to transfer the individual to another facility; within facilities between to the extent that the information is necessary to perform their duties, and within the Department to the extent necessary to coordinate mental health treatment.",
            "definition_or_scope_of_information_material_covered_by_policy": "Registration and treatment records regarding persons receiving mental health services from treatment facilities, department contractors, county departments, psychologists, or mental health professionals that are not affiliated with a county department or treatment facility (W.S.A. 51.30)."
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
            "citation_of_statute_or_regulation": "W.S.A. 51.30",
            "citation_of_statute_or_regulation_url": "https://docs.legis.wisconsin.gov/statutes/statutes/51/30",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Registration and treatment records regarding persons receiving mental health services from treatment facilities, department contractors, county departments, psychologists, or mental health professionals that are not affiliated with a county department or treatment facility (W.S.A. 51.30)."
        }
    }
};
