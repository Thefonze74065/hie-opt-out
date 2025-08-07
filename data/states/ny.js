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
window.stateData['ny'] = {
    "name": "New York",
    "status": "active",
    "hie": {
        "name": "New York eHealth Collaborative (NYeC) (2006)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.nyehealth.org/",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "NY refers to this as an &apos;affirmative consent model&apos;. Consent is considered all or nothing - all data contributed to the exchange can be made available. State level policies are broad and allow for variation by region / HIO. Two approaches for obtaining/gaining consent - provider organizations can obtain consent at the point of service. Also, the RHIO can obtain consent through a RHIO multi-provider consent form, which can be accessed either at the point of service or online via the RHIO website. Patients have the ability to revoke their participation in the exchange at any time. In this case, existing data in the exchange will remain, but will be requested from further circulation unless required by law.",
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
        "details": "Authorization required by individual or personal representative for some TPO disclosures. Authorization by Government representative for payment disclosures.",
        "statute": "McKinney&apos;s Mental Hygiene Law &sect; 33.13",
        "statuteUrl": "http://public.leginfo.state.ny.us/lawssrch.cgi?NVLWO:"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "New York eHealth Collaborative (NYeC) (2006)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "NY refers to this as an &apos;affirmative consent model&apos;. Consent is considered all or nothing - all data contributed to the exchange can be made available. State level policies are broad and allow for variation by region / HIO. Two approaches for obtaining/gaining consent - provider organizations can obtain consent at the point of service. Also, the RHIO can obtain consent through a RHIO multi-provider consent form, which can be accessed either at the point of service or online via the RHIO website. Patients have the ability to revoke their participation in the exchange at any time. In this case, existing data in the exchange will remain, but will be requested from further circulation unless required by law.",
            "patient_notification_methods": "Patient Consent Policies and Procedures are defined within the NY Policies and Procedures document available online.",
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://www.nyehealth.org/"
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
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "N.Y. Comp. Codes R. &amp; Regs. tit.10, &sect; 300.5(a) (2016) - New York requires that qualified entities only allow access to patient information by participating healthcare providers with a written authorization from the patient or someone qualified to consent on behalf of the patient if the patient lacks capacity.  The written authorization must specify who is authorized to access the information. The regulation states that qualified entities may allow access to patient information without written authorization when: (1)Prior consent has already been obtained for the disclosure and no provision of law requires any additional written authorization; (2)Disclosure is required or authorized by law; or (3) The patient is in need of emergency medical care as long as the health care provider documents the situation and states that attempting to secure consent would result in delay of treatment resulting in increased medical risk to the patient.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies only to qualified entities certified by the state of New York to participate in the Statewide Health Information Network for New York (SHIN- NY).",
            "source_of_consent_policy": "Regulation",
            "source_of_consent_policy_url": "http://w3.health.state.ny.us/dbspace/NYCRR10.nsf/11fb5c7998a73bcc852565a1004e9f87/0e7e8eade1f0fbdb85257f7000615371?OpenDocument",
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
            "citation_of_statute_or_regulation": "McKinney&apos;s Mental Hygiene Law &sect; 33.13",
            "citation_of_statute_or_regulation_url": "http://public.leginfo.state.ny.us/lawssrch.cgi?NVLWO:",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures. Authorization by Government representative for payment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Clinical records. New York defines clinical records as including information regarding a patient or client&apos;s care, treatment, admission, or legal status (McKinney&apos;s Mental Hygiene Law &sect; 33.13)."
        }
    }
};
