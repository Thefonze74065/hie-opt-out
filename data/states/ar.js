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
window.stateData['ar'] = {
    "name": "Arkansas",
    "status": "active",
    "hie": {
        "name": "Arkansas State Health Alliance for Records Exchange (SHARE) (2011)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "501-410-1999",
            "email": "SHAREhealth@arkansas.gov",
            "website": "http://www.sharearkansas.com/resources/faq",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Provider-based opt-out. Contact your provider's Privacy Officer and request to 'opt-out' of SHARE Arkansas. They will update your health record to show you do not want your record shared with other providers.",
            "steps": [
                "Contact your provider's Privacy Officer (not front desk staff)",
                "Tell your doctor's office that you want to 'opt-out' of SHARE Arkansas",
                "They will update your health record at their office to show you do not want your record shared with other providers",
                "Request confirmation that your SHARE opt-out has been processed",
                "OPTIONAL: Also request to opt-out of other HIE networks (Epic Care Everywhere, CareQuality, etc.)",
                "Retain documentation of your opt-out request for your records"
            ],
            "emergencyAccess": "Patients have the opportunity to opt-out at their first appointment after the facility activates SHARE, and periodically thereafter",
            "exceptions": "No forms required, but must speak with Privacy Officer specifically"
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
        "extraProtections": false,
        "requiresAuthorization": false,
        "minimumNecessary": false,
        "details": "State does not require additional authorization for TPO disclosures.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Arkansas State Health Alliance for Records Exchange (SHARE) (2011)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients have the opportunity to opt-out, if they wish, at their first appointment after the facility activates SHARE, and periodically thereafter. Patients do not need to do anything, no boxes to check, or papers to sign.",
            "patient_notification_methods": "Participating providers must provide patients with the opportunity to opt-out. A form is to be completed and returned to the healthcare provider. Patients can also opt-out their minor children using the same process.",
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://www.sharearkansas.com/resources/faq",
                "http://www.ohit.arkansas.gov/share"
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
            "details_of_consent_policy": "Arkansas Office of Health Information Technology, OHIT Privacy Policies 10 (2013) - Arkansas OHIT policy gives all individuals the right to opt out of the SHARE system (the Arkansas state-run HIE). The policy states that the decision to opt out only affects the availability of PHI through SHARE, and that participating providers&apos; policies on sharing govern all other kinds of uses/disclosures. An individual also has the right to revoke his/her decision to opt out of SHARE. The policy allows participating entities to choose how to allow the patient to exercise his/her choice. If an individual&apos;s information is available through the SHARE system, the policy allows participating providers to assume that the individual has not opted out.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all individuals participating in SHARE. Participating entities (healthcare providers) are required to find a way to give individuals the right to opt out.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://www.ohit.arkansas.gov/Websites/ohit/images/OHIT-Privacy-Policies-November-2013.pdf#page=10",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "Policy was created by the Arkansas Office of Health Information Technology (OHIT), which developed and maintains the state-run HIE, SHARE.",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "No",
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "State does not require additional authorization for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
