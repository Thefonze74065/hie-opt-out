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
window.stateData['nd'] = {
    "name": "North Dakota",
    "status": "active",
    "hie": {
        "name": "North Dakota Health Information Network (NDHIN)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://www.nd.gov/itd/statewide-alliances/ndhin/consumers/opt-out-participation",
            "optOutFormUrl": "https://www.nd.gov/itd/statewide-alliances/ndhin/consumers/opt-out-participation"
        },
        "optOut": {
            "available": true,
            "process": "Patients have the right to opt out of participation in the NDHIN. Opt-out is when an individual provides a written decision that their protected health information cannot be shared through the HIE, except in the situation where required by law or authorized by the individual in an emergency. By default, an individuals&apos; protected health information can be searched for through the NDHIN, per North Dakota Senate Bill 2250. Opt Out means an individual has made a written decision that their protected health information cannot be searched for through the health information network, except as required by law or as authorized by the individual in an emergency. The NDHIN offers many benefits to patients, but participation is voluntary. A patient can choose to opt out of participation in the NDHIN and will be required to sign the Opt Out/Revoke Opt Out form, either electronically or on paper.",
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
        "details": "Authorization required by individual or personal representative for some TPO disclosures.",
        "statute": "NDCC &sect; 23-01.3-01 et seq.",
        "statuteUrl": "http://www.legis.nd.gov/cencode/t23c01-3.pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "North Dakota Health Information Network (NDHIN)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients have the right to opt out of participation in the NDHIN. Opt-out is when an individual provides a written decision that their protected health information cannot be shared through the HIE, except in the situation where required by law or authorized by the individual in an emergency. By default, an individuals&apos; protected health information can be searched for through the NDHIN, per North Dakota Senate Bill 2250. Opt Out means an individual has made a written decision that their protected health information cannot be searched for through the health information network, except as required by law or as authorized by the individual in an emergency. The NDHIN offers many benefits to patients, but participation is voluntary. A patient can choose to opt out of participation in the NDHIN and will be required to sign the Opt Out/Revoke Opt Out form, either electronically or on paper.",
            "patient_notification_methods": "Notice of Privacy Policies are available online  Forms can either be filled out and sent in or submitted online - both are available to download online. Additional information is also available to patients/consumers regarding FAQs and information to read before electing to opt-out.",
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "https://www.nd.gov/itd/statewide-alliances/ndhin/consumers/opt-out-participation",
                "https://www.nd.gov/itd/statewide-alliances/ndhin/consumers/faqs#16",
                "https://www.nd.gov/itd/statewide-alliances/ndhin/about-us/policies",
                "https://www.nd.gov/itd/statewide-alliances/ndhin/about-us/policies/notice-privacy-practices"
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
            "details_of_consent_policy": "N.D. Cent. Code &sect; 23-12-19 - North Dakota law gives patients the right to opt out of participating in the state-run HIO by providing notice to the HIO. Further, the law gives patients the option of either fully opting out or conditionally opting out (which means that the patient&apos;s PHI will only be accessible to a health care provider in cases of medical emergency).  Patient&apos;s decision to opt out can be revoked at any time and opting out does not prohibit disclosures required by law.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Gives all individuals the right to opt out of participating in the state HIO.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.legis.nd.gov/cencode/t23c12.pdf#nameddest=23-12-19",
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
            "citation_of_statute_or_regulation": "NDCC &sect; 23-01.3-01 et seq.",
            "citation_of_statute_or_regulation_url": "http://www.legis.nd.gov/cencode/t23c01-3.pdf",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Protected health information. North Dakota defines protected health information as including information about an individual&apos;s past, current, or future mental or physical condition (NDCC, 23-01.3-01)."
        }
    }
};
