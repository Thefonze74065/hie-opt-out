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
window.stateData['az'] = {
    "name": "Arizona",
    "status": "active",
    "hie": {
        "name": "Arizona Health e- Connection - The Network (AzHeC) (2007)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "602-542-1025",
            "email": "info@azhec.org",
            "website": "http://azhec.org/the-network/",
            "optOutFormUrl": "https://contexture.org/opt-in-opt-out-az/"
        },
        "optOut": {
            "available": true,
            "process": "Patients can make the choice to withhold consent and AzHeC will not allow access to that individual's clinical information to anybody other than emergency care providers.",
            "steps": [
                "Download the opt-out form from contexture's website",
                "Bring the completed form to your healthcare provider",
                "State specifically that you want to opt out of Health Information Exchange sharing, and provide the form",
                "OPTIONAL: Also request to opt-out of any provider specific HIE networks",
                "Request confirmation that your opt-out request has been processed",
                "Retain a copy of the form and proof of submission for your records"
            ],
            "emergencyAccess": "Emergency care providers may still have access to your information",
            "exceptions": "Emergency care providers and legal requirements may still allow access"
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
            "organization_launch_date": "Arizona Health e- Connection - The Network (AzHeC) (2007)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients can make the choice to withhold consent and AzHeC will not allow access to that individual&apos;s clinical information to anybody other than emergency care providers.",
            "patient_notification_methods": "Arizona law requires that once a provider begins to participate in an HIO, the provider must provide patients a copy of the Notice of Health Information Practices in each patient encounter and provide an Opt-Out Change Form (opt out) or Opt Back in Change Form (opt back in). The Network helps providers comply with Arizona law to have in place a patient notification and opt-out process.",
            "additional_information": "The Network is the only statewide (PUBLIC) HIO in Arizona.",
            "websites_and_publicly_available_resources": [
                "http://azhec.org/the-network/",
                "https://azhec.org/information-center/health-info-exchange/",
                "http://azhec.org/the-network/patient-rights/",
                "http://hie.az.gov/docs/app_plans/AZHIE_082310_StrategyUpdate.pdf",
                "http://hie.az.gov/docs/app_plans/ARIZONA%20Response%20-%20PIN%20003%20-%20Privacy%20Security%20-%202013%20Submission%20-%20Final%20-%2005-29-2013.pdf"
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
            "details_of_consent_policy": "Ariz. Rev. Stat. &sect; 38-3802 requires that HIOs provide participating individuals a number of rights including the right to opt out.  Ariz. Rev. Stat. &sect; 38-3803 provides further detail on what an individual&apos;s right to opt out includes:  The individual has the right to opt out by providing notice to the HIO in the form the HIO requires; an individual also has the right to opt out of a particular provider sharing his/her PHI through the HIO; and an individual has the right to opt back in by providing notice to the HIO.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all HIOs, which are defined under Arizona law as &quot;organization[s] that oversee[] and govern[] the exchange of individually identifiable health information among organizations according to nationally recognized standards.&quot; The definition of HIO under AZ law excludes health plans, providers, and exchange between providers without the use of a separate organization governing the exchange. Ariz. Rev. Stat. &sect; 38-3801.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.azleg.state.az.us/FormatDocument.asp?inDoc=/ars/36/03802.htm&Title=36&DocType=ARS",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "No",
            "citation_of_statute_or_regulation": null,
            "citation_of_statute_or_regulation_url": null,
            "narrative_description_of_state_law": "State does not require additional authorization for TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": null
        }
    }
};
