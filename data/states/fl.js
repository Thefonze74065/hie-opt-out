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
window.stateData['fl'] = {
    "name": "Florida",
    "status": "active",
    "hie": {
        "name": "Florida Health Information Exchange (FHIE)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.fhin.net/privacyRegulations/index.shtml",
            "optOutFormUrl": "http://fhin.net/privacyRegulations/docs/ForPatients.pdf"
        },
        "optOut": {
            "available": true,
            "process": "Florida requires patient authorization for the disclosure of health information. A &apos;Full Disclosure Authorization Form&apos; allows a patient to choose which providers may access their health information. This form or its equivalent must be used by providers participating in the Florida HIE.",
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
        "details": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures.",
        "statute": "West&apos;s F.S.A. &sect; 394.4615",
        "statuteUrl": "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0300-0399/0394/Sections/0394.4615.html"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Florida Health Information Exchange (FHIE)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Florida requires patient authorization for the disclosure of health information. A &apos;Full Disclosure Authorization Form&apos; allows a patient to choose which providers may access their health information. This form or its equivalent must be used by providers participating in the Florida HIE.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://www.fhin.net/privacyRegulations/index.shtml",
                "http://fhin.net/privacyRegulations/docs/ForPatients.pdf",
                "https://www.florida-hie.net/patients/index.html",
                "http://medicaleconomics.modernmedicine.com/medical-economics/content/tags/health-information-exchange/health-information-exchanges-introduce-pa?page=full"
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
            "type_of_consent_policy": "Opt-In for each time a new provider wants to access PHI",
            "details_of_consent_policy": "Florida Health Information Network, Patient Authorization - FHIN&apos;s documents discussing patient authorization of exchange of health information in FL states that patients have to authorize both the search for and access to medical records. However, Florida allows exceptions to the rule requiring patient authorization in cases of medical emergency and when disclosure is required for public health reporting purposes.",
            "patient_notification_methods": null,
            "additional_information": "Additional details on how patient authorization works in Florida HIE are available  here.",
            "websites_and_publicly_available_resources": [
                "http://fhin.net/floridaHie/docs/ConsumerInformation.pdf"
            ],
            "scope_of_consent_policy": "Applies to all providers participating in Florida HIE.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://www.fhin.net/privacyRegulations/docs/PatientAuthorizationRule.pdf",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "Florida HIE is run by the Agency of Health Care Administration, which provides guidance through the Florida Health Information Network.",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "Yes",
            "citation_of_statute_or_regulation": "West&apos;s F.S.A. &sect; 394.4615",
            "citation_of_statute_or_regulation_url": "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0300-0399/0394/Sections/0394.4615.html",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for payment disclosures and some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Clinical records. Defined by Florida as medical records, charts, data, and other information regarding a patient&apos;s hospitalization or treatment in a facility that provides mental health services (West&apos;s F.S.A. &sect; 394.455)."
        }
    }
};
