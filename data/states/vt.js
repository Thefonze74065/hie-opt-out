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
window.stateData['vt'] = {
    "name": "Vermont",
    "status": "active",
    "hie": {
        "name": "Vermont Information Technology Leaders (VITL) Vermont Health Information Exchange",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://www.vitl.net/asking-patients-consent",
            "optOutFormUrl": "https://www.vitl.net/asking-patients-consent"
        },
        "optOut": {
            "available": true,
            "process": "Patients need to sign a consent form to opt-in. If a patient changes their mind they can sign a revocation form. Vermont is recently considering altering policy for patient consent from opt-in to opt-out.  More information at: http://www.healthcare-informatics.com/blogs/rajiv-leventhal/hie/Vermont-opt-versus-opt-out-hie-debate",
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
        "statute": "18 V.S.A. &sect; 7103",
        "statuteUrl": "http://legislature.vermont.gov/statutes/section/18/171/07103"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Vermont Information Technology Leaders (VITL) Vermont Health Information Exchange",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Patients need to sign a consent form to opt-in. If a patient changes their mind they can sign a revocation form. Vermont is recently considering altering policy for patient consent from opt-in to opt-out.  More information at: http://www.healthcare-informatics.com/blogs/rajiv-leventhal/hie/Vermont-opt-versus-opt-out-hie-debate",
            "patient_notification_methods": "When the patient visits his/her health care provider, s/he may be asked to give consent to allow the providers involved in their care access to the Vermont Health Information Exchange. A consent form must be signed.  Patient Consent Policy and Links are listed on the website for patients to review. https://www.vitl.net/learn/what-is-patient-consent  Vermont lists all privacy and security information on their website as listed:  https://www.vitl.net/learn/privacy-and-security",
            "additional_information": "Patients may also request an audit of access of their health information. Information is also listed for providers and how to ask for consent. Scripts are included as well as information on workflow.",
            "websites_and_publicly_available_resources": [
                "https://www.vitl.net/asking-patients-consent",
                "https://www.vitl.net",
                "http://www.healthcare-informatics.com/blogs/rajiv-leventhal/hie/vermont-opt-versus-opt-out-hie-debate"
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
            "details_of_consent_policy": "State of Vermont Green Mountain Care Board, Decision Approving Proposed Revised Policy on Patient Consent for Provider Access to Protected Health Information on the Vermont Health Information Exchange (VHIE) or through the Vermont Blueprint for Health (2014). Vermont&apos;s Green Mountain Care Board adopted a proposed policy giving participating healthcare providers access to PHI on VHIE and Vermont State Blueprint for Health for those individuals who have a current written consent on record. The policy requires participating health care providers who collect such written consents to maintain a record of such a consent and to inform the exchanges that the patient has consented to participating in the exchanges.  The policy allows participating healthcare providers access to the PHI of an individual through the exchanges without the consent in cases of medical emergency when the provider cannot obtain the individual&apos;s consent due to the emergency medical condition. The policy allows individuals who have provided consent the option of revoking the consent.",
            "patient_notification_methods": null,
            "additional_information": "The draft proposal can be found here.; The state agency adoption of the draft proposal can be found here.",
            "websites_and_publicly_available_resources": [
                "http://hcr.vermont.gov/sites/hcr/files/pdfs/Draft-Consent-Policy-020614.pdf",
                "http://hcr.vermont.gov/sites/hcr/files/pdfs/Draft-Consent-Policy-020614.pdf"
            ],
            "scope_of_consent_policy": "Applies to providers participating in VHIE and Vermont State Blueprint for Health HIEs.",
            "source_of_consent_policy": "State agency decision adopting the policy",
            "source_of_consent_policy_url": "http://hcr.vermont.gov/sites/hcr/files/pdfs/Draft-Consent-Policy-020614.pdf",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "State agency decision adopting the policy",
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
            "citation_of_statute_or_regulation": "18 V.S.A. &sect; 7103",
            "citation_of_statute_or_regulation_url": "http://legislature.vermont.gov/statutes/section/18/171/07103",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records, reports, applications, and certificates that directly or indirectly identify a current or former patient and are generated in accordance with Vermont&apos;s mental health law (18 V.S.A. &sect; 7103)."
        }
    }
};
