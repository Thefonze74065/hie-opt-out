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
window.stateData['al'] = {
    "name": "Alabama",
    "status": "active",
    "hie": {
        "name": "One Health Record &reg; (OHR) Alabama (Alabama Health Information Exchange - AHIE) (2012)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "334-206-2905",
            "email": "info@onehealthrecord.alabama.gov",
            "website": "http://onehealthrecord.alabama.gov/",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Individuals may choose to not participate in the electronic sharing of his/her protected information. By opting-out, no information regarding the patient/consumer will be exchanged or made available from any Participant, unless required by law. Provider-based opt-out - no centralized state form.",
            "steps": [
                "Contact your provider's Privacy Officer (not front desk staff)",
                "State specifically that you want to opt out of the One Health Record HIE network",
                "Request HIE opt-out form for your specific provider network (e.g., Epic Care Everywhere, CommonWell, etc.)",
                "Complete form and verify identity (typically requires provider signature or notarization)",
                "Submit form as instructed (usually mail or fax)",
                "Request confirmation that your opt-out request has been processed",
                "Retain a copy of the form and proof of submission for your records"
            ],
            "emergencyAccess": "Opting out means your information will not be shared through HIE networks, even in emergencies",
            "exceptions": "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
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
        "details": "The provision does not address TPO authorization.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "One Health Record &reg; (OHR) Alabama (Alabama Health Information Exchange - AHIE) (2012)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Individuals may choose to not participate in the electronic sharing of his/her protected information. By opting-out, no information regarding the patient/consumer will be exchanged or made available from any Participant, unless required by law. Patient/consumer must provide notice of opt-out to provider in writing or in a manner/form determined by the provider. The provider will, within 2 business days, take the appropriate steps to ensure the individual&apos;s information is no longer available through AHIE and notify OHR to an individual&apos;s changed status. Each provider/participant must develop and implement the appropriate measures/mechanisms to ensure no information about an individual who has opted-out shall be included in or made available through AHIE. If the patient/consumer wants to opt back into the OHR, they must make a request in writing, or form determined by provider/participant, to make their information available through AHIE. Each provider/participant shall document and maintain documentation of all written Opt-Out requests or revoke Opt- Out decisions from individuals.",
            "patient_notification_methods": null,
            "additional_information": "Alabama&apos;s One Health Record&reg; connected with Georgia Health Information Network in October 2015. One Health Record&reg; created the infrastructure for exchanging health information in Alabama through a grant awarded to Medicaid in 2009 by the Office of the National Coordinator (ONC). Under the guidance of the Alabama HIE Commission, Alabama has stood up an interoperable, two-way data exchange system between physicians, hospitals and others. One Health Record&reg;, Alabama&apos;s statewide Health Information Exchange, is committed to connecting Alabama medical providers so that they can securely share patient information electronically. One Health Record&reg; is a DirectTrust member and allows for both Direct and bi-directional exchange of information through their HIE that is supported by Truven Health Analytics. The state does not charge any provider to connect using the One Health Record&reg; system.",
            "websites_and_publicly_available_resources": [
                "http://onehealthrecord.alabama.gov/",
                "http://onehealthrecord.alabama.gov/wp-content/uploads/AHIE-Policies-and-Procedures-Revised-3-24-15.pdf",
                "http://www.gahin.org/media/press-release/georgia-completes-connection-alabama-support-state-state-exchange-health"
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
            "details_of_consent_policy": "Alabama Health Information Exchange, Policy and Procedures 15 (2012) - Alabama HIE Policy states that disclosures of PHI through One Health Record for purposes of treatment, payment and operations are permitted without patient authorization, but that patients have the right to opt-out from participating in the electronic sharing of his/her PHI through One Health Record. The decision to opt- out applies globally to all of the individual&apos;s PHI, but an individual cannot opt-out of disclosures of information that are required by law. Individuals can also revoke their opt-out decisions.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all &quot;participants&quot; in state government-established HIE and participant providers have the burden of ensuring that patients are given the right to opt-out and maintain relevant documentation.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://onehealthrecord.alabama.gov/",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "Policy was created by Alabama Health Information Advisory Commission, which is a voluntary effort chaired by the Alabama Medicaid Agency (as the state-designated entity). Compliance with and adherence to these policies and procedures will be monitored and enforced by the AHIE staff under the guidance of the Governing Authority.",
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
            "narrative_description_of_state_law": "The provision does not address TPO authorization.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
