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
window.stateData['mn'] = {
    "name": "Minnesota",
    "status": "active",
    "hie": {
        "name": "See Additional Information Column",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.health.state.mn.us/divs/hpsc/ohit/certified.html",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Minnesota has a standard consent form available on the MDH website. Patients can opt-out of having their information shared between providers.",
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
        "details": "Authorization required by individual or personal representative for some TPO  disclosures.",
        "statute": "M.S.A. &sect; 144.293",
        "statuteUrl": "https://www.revisor.mn.gov/statutes/?id=144.293"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "See Additional Information Column",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Minnesota has a standard consent form available on the MDH website. Patients can opt-out of having their information shared between providers.",
            "patient_notification_methods": "Minnesota Notice of Privacy Practices (NPP) is provided on the following website:  http://www.health.state.mn.us/e-health/privacy/ps102114npp.pdf",
            "additional_information": "Minnesota includes State-Certified Health Information Exchange Service Providers including Health Information Organizations (HIOs) and Health Data Intermediary (HDI)",
            "websites_and_publicly_available_resources": [
                "http://www.health.state.mn.us/divs/hpsc/ohit/certified.html",
                "http://www.health.state.mn.us/e-health/hitimp/2015mandatefaq.pdf",
                "http://www.health.state.mn.us/e-health/privacy/index.html"
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
            "details_of_consent_policy": "Minn. Stat. &sect; 144.293(8)(d) (2015) - Minnesota law requires that health care providers or entities operating a record locator service or a patient information service must give patients the opportunity to exclude their identifying information and information about the location of their records from such a record locator or patient information service. Providers participating in a HIE with a record locator or patient information service who receive a patient&apos;s opt-out request to exclude all of his/her information from the service or to have a specific provider excluded from the service are responsible for removing that information from the service.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "All providers and entities in MN operating a record locator of patient information service have to give patients the ability to opt out.  Burden is on providers to get patients&apos; info removed from HIE service.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "https://revisor.mn.gov/statutes/?id-144.293",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "Yes",
            "citation_of_statute_or_regulation": "M.S.A. &sect; 144.293",
            "citation_of_statute_or_regulation_url": "https://www.revisor.mn.gov/statutes/?id=144.293",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO  disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Health records. Defined by Minnesota as information regarding and individual&apos;s past, current, or future mental health or physical condition, receipt of health care, or payment for health care (M.S.A. &sect; 144.291)."
        }
    }
};
