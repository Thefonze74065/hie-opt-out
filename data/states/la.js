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
window.stateData['la'] = {
    "name": "Louisiana",
    "status": "active",
    "hie": {
        "name": "Louisiana Health Information Exchange (LaHIE) (2011)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://www.lhcqf.org/for-providers/lahie",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Louisiana is considered an &quot;opt-in&quot; state. A patient&apos;s consent is required for his/her information to be accessed via LaHIE. If the consent has not been obtained and the patient presents in an emergency situation, his/her information may be accessed in LaHIE for emergency treatment purposes. If a patient explicitly opts out of LaHIE, his/her information cannot be accessed for any reason.",
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
        "details": "Authorization required by individual or personal representative for health care operations disclosures and payment disclosures. Authorization required by facility representative for TPO disclosures.",
        "statute": "La. Admin Code. tit. 48, pt. I, &sect; 507",
        "statuteUrl": "http://www.doa.la.gov/osr/LAC/48v1/48v01.doc"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Louisiana Health Information Exchange (LaHIE) (2011)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Louisiana is considered an &quot;opt-in&quot; state. A patient&apos;s consent is required for his/her information to be accessed via LaHIE. If the consent has not been obtained and the patient presents in an emergency situation, his/her information may be accessed in LaHIE for emergency treatment purposes. If a patient explicitly opts out of LaHIE, his/her information cannot be accessed for any reason.",
            "patient_notification_methods": "LaHIE providers/hospitals should include language in their privacy policies that references the exchange of health information through LaHIE",
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "https://www.lhcqf.org/for-providers/lahie",
                "http://lhcqf.org/lapost-old/faq"
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
            "citation_of_statute_or_regulation": "La. Admin Code. tit. 48, pt. I, &sect; 507",
            "citation_of_statute_or_regulation_url": "http://www.doa.la.gov/osr/LAC/48v1/48v01.doc",
            "narrative_description_of_state_law": "Louisiana allows agency employees to disclose medical information without a patient&apos;s consent to other employees of the agency if the employee has a legitimate need for the information in order to perform their duties. Louisiana grants the superintendent authority to determine the meaning of legitimate need. Agency employees may disclose medical information to another agency without a patient&apos;s consent if the superintendent of the disclosing agency determines that: (1) a Louisiana law or regulation compels disclosure; (2) the information is necessary for a cooperative program in which both agencies participate; (3) the agency has referred the patient to another agency for evaluation or treatment; or (4) the receiving agency needs the information to perform their duties and the disclosing agency cannot reasonably obtain the patient&apos;s consent. Employees must limit disclosure to the information necessary to achieve the purpose of the disclosure.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical information maintained by an agency. Louisiana defines medical information as records, documents, reports, and charts created by physicians, public hospital employees, psychiatrists, surgeons, public mental health facilities, and other public health facilities that pertain to an individual&apos;s physical or mental condition. Agency refers to mental health facilities, hospitals, intuitions, and other entities that are housed with the Department of Health and Human Resource and that use or maintain medical information. (La. Admin Code. tit. 48, pt. I, &sect; 503)."
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
            "citation_of_statute_or_regulation": "La. Admin Code. tit. 48, pt. I, &sect; 507",
            "citation_of_statute_or_regulation_url": "http://www.doa.la.gov/osr/LAC/48v1/48v01.doc",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures and payment disclosures. Authorization required by facility representative for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Medical information maintained by an agency. Louisiana defines medical information as records, documents, reports, and charts created by physicians, public hospital employees, psychiatrists, surgeons, public mental health facilities, and other public health facilities that pertain to an individual&apos;s physical or mental condition. Agency refers to mental health facilities, hospitals, intuitions, and other entities that are housed with the Department of Health and Human Resource and that use or maintain medical information (La. Admin Code. tit. 48, pt. I, &sect; 503)."
        }
    }
};
