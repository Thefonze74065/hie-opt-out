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
window.stateData['in'] = {
    "name": "Indiana",
    "status": "active",
    "hie": {
        "name": "Indiana Health Information Exchange (IHIE) (2004)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.pillsburylaw.com/siteFiles/Events/NewPatientPrivacyandConsentStandardsforaConnectedWorld.pdf",
            "optOutFormUrl": "http://www.pillsburylaw.com/siteFiles/Events/NewPatientPrivacyandConsentStandardsforaConnectedWorld.pdf"
        },
        "optOut": {
            "available": true,
            "process": "Information on Consent Model is limited One site lists Indiana as an opt-out state as of 2014. http://medicaleconomics.modernmedicine.com/medical- economics/content/tags/health-information-exchange/health- information-exchanges-introduce-pa?page=full Another resource states that in Indiana health care providers manage the consent (opt-out) processes. Indiana follows HIPAA regarding consent. (Information from the State Consent Policy listing document). The HIMSS11 presentation lists IHIE as a No Consent State (Consent from patients is not required for participation in the HIE). No Consent - also federally funded substance abuse treatment programs do not provide data to HIO. Data is only used for purposes allowed under HIPAA. Patient&apos;s data is maintained in separate &apos;vaults&apos; or clinical data repositories by the institution until one of the allowed uses is triggered. Then patient&apos;s data are merged virtually. Triggers are highly specific and tightly controlled.",
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
        "details": "Authorization required by individual or personal representative for some health care operations disclosures.",
        "statute": "IC 16-39-2-6",
        "statuteUrl": "http://iga.in.gov/legislative/laws/2013/ic/titles/016/articles/039/chapters/002/pdf"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Indiana Health Information Exchange (IHIE) (2004)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Information on Consent Model is limited One site lists Indiana as an opt-out state as of 2014. http://medicaleconomics.modernmedicine.com/medical- economics/content/tags/health-information-exchange/health- information-exchanges-introduce-pa?page=full Another resource states that in Indiana health care providers manage the consent (opt-out) processes. Indiana follows HIPAA regarding consent. (Information from the State Consent Policy listing document). The HIMSS11 presentation lists IHIE as a No Consent State (Consent from patients is not required for participation in the HIE). No Consent - also federally funded substance abuse treatment programs do not provide data to HIO. Data is only used for purposes allowed under HIPAA. Patient&apos;s data is maintained in separate &apos;vaults&apos; or clinical data repositories by the institution until one of the allowed uses is triggered. Then patient&apos;s data are merged virtually. Triggers are highly specific and tightly controlled.",
            "patient_notification_methods": null,
            "additional_information": "Non-profit organization that was designated by the state to receive the State HIE Cooperative Agreement to support and oversee implementation of the State Plan. Grantee pursuing market-based or capacity-building approach (NORC report). Based on the HIE Strategic and Operational Plan Profile - Indiana has five (5) major health information organizations (HIOs) that operate in the state including (Healthbridge, HealthLINC, Indiana HIE, Med-web, and Michiana Health Info Network) Website is limited with information for patients/consumers. Directed to providers primarily.",
            "websites_and_publicly_available_resources": [
                "http://www.pillsburylaw.com/siteFiles/Events/NewPatientPrivacyandConsentStandardsforaConnectedWorld.pdf",
                "http://www.ihie.org",
                "http://medicaleconomics.modernmedicine.com/medical-economics/content/tags/health-information-exchange/health-information-exchanges-introduce-pa?page=full",
                "https://www.healthit.gov/sites/default/files/in_state_hie_profile.pdf"
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
            "citation_of_statute_or_regulation": "IC 16-39-2-6",
            "citation_of_statute_or_regulation_url": "http://iga.in.gov/legislative/laws/2013/ic/titles/016/articles/039/chapters/002/pdf",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Mental health records maintained by providers of mental health services. The Division of Mental Health and Addiction, the Division of Disability and Rehabilitative Services, or the Indiana State Department of Health will define the content of these records by regulation. Mental health records maintained by private mental health institutions, hospitals, ambulatory outpatient surgical centers, abortion clinics, birthing centers, substance abuse services programs, and certain state institutions are not protected by this law (IC 16-39-2-2)."
        }
    }
};
