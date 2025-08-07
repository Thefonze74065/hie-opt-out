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
window.stateData['ia'] = {
    "name": "Iowa",
    "status": "active",
    "hie": {
        "name": "Iowa Health Information Network (IHIN)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.iowaehealth.org/provider/",
            "optOutFormUrl": "http://www.iowaehealth.org/provider/privacy-security/opt-out/"
        },
        "optOut": {
            "available": true,
            "process": "Health information will be available to providers without having to take action. Patients can opt-out of having their information available and if this option is elected, providers will not be able to search the IHIN for health records - even in the case of an emergency. Patients can opt back-in with an opt-in form.",
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
        "requiresAuthorization": false,
        "minimumNecessary": true,
        "details": "Iowa allows the disclosure of an individual&apos;s mental health information to other providers so long as the disclosure is limited to the &quot;extent necessary&quot; to provide the individual with professional or administrative services.",
        "statute": "I.C.A. &sect; 228.5",
        "statuteUrl": "https://www.legis.iowa.gov/docs/code/2016/228.5.pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Iowa Health Information Network (IHIN)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Health information will be available to providers without having to take action. Patients can opt-out of having their information available and if this option is elected, providers will not be able to search the IHIN for health records - even in the case of an emergency. Patients can opt back-in with an opt-in form.",
            "patient_notification_methods": null,
            "additional_information": "Iowa e-Health will first connect Iowa providers and then will continue to be made to other states and Regional Health Information Networks (RHINs). Connected to networks in Missouri, Illinois and Kansas. Connections are being developed for Minnesota, South Dakota, and Wisconsin. Will eventually interconnect into the Nationwide Health Information Network (NHIN).",
            "websites_and_publicly_available_resources": [
                "http://www.iowaehealth.org/provider/",
                "http://www.iowaehealth.org/provider/privacy-security/opt-out/",
                "http://www.iowaehealth.org/provider/what-is-ihin/"
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
            "details_of_consent_policy": "Iowa Code &sect; 135.156E (2016) - Iowa law gives patients the ability to opt out of the exchange of PHI through IHIN&apos;s record locator service.  This opt-out decision is global and none of the patient&apos;s PHI will be accessible through the record locator service unless otherwise authorized by the law.  A patient who has opted out has the ability to opt back into IHIN.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "The Iowa Department of Health is responsible for making sure that all patients participating in IHIN have the opportunity to opt out, and these requirements are not intended for other regional, population-specific or local health information networks.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.legis.iowa.gov/docs/code/135.156E.pdf",
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "I.C.A. &sect; 228.5",
            "citation_of_statute_or_regulation_url": "https://www.legis.iowa.gov/docs/code/2016/228.5.pdf",
            "narrative_description_of_state_law": "Iowa allows the disclosure of an individual&apos;s mental health information to other providers so long as the disclosure is limited to the &quot;extent necessary&quot; to provide the individual with professional or administrative services.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health information. Iowa defines mental health information as identifiable information in written, oral, or recorded form that pertains to an individual&apos;s receipt of mental health services (I.C.A. &sect; 228.1)."
        }
    }
};
