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
window.stateData['tn'] = {
    "name": "Tennessee",
    "status": "active",
    "hie": {
        "name": "MidSouth eHealth Alliance (MSeHA) (2004)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://midsoutheha.org",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Patients can opt out at the institutional level. According to a 2012 Healthcare IT News article citing an AMIA evaluation study, &apos;patients were allowed to opt out of participation in the HIE when they presented at participating hospitals and clinics. The opt-out percentage ranged from 1 percent to 3 percent across all sites over the study period.&apos; Patients have the right to not share their health information in the Alliance, also known as &quot;Opting Out.&quot; However, if they choose to opt out, health care providers may not have access to health information that may be important and useful in making choices about their medical care.",
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
        "statute": "T.C.A. &sect;&sect; 33-3-103 et seq.3",
        "statuteUrl": "http://www.lexisnexis.com/hottopics/tncode"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "MidSouth eHealth Alliance (MSeHA) (2004)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients can opt out at the institutional level. According to a 2012 Healthcare IT News article citing an AMIA evaluation study, &apos;patients were allowed to opt out of participation in the HIE when they presented at participating hospitals and clinics. The opt-out percentage ranged from 1 percent to 3 percent across all sites over the study period.&apos; Patients have the right to not share their health information in the Alliance, also known as &quot;Opting Out.&quot; However, if they choose to opt out, health care providers may not have access to health information that may be important and useful in making choices about their medical care.",
            "patient_notification_methods": "A Notice of Privacy Practices is provided to patients by their health care provider. A Fact Sheet is also provided to patients for educational purposes only. Operations of the Alliance and the content of the Fact Sheet may be changed by the Alliance from time to time without notice.",
            "additional_information": "Non-profit initiative focused on the Mid-South region Receives funding from AHRQ and the State of Tennessee with grants totaling $12.5 million. Community-wide information system",
            "websites_and_publicly_available_resources": [
                "http://midsoutheha.org",
                "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2656027/",
                "http://www.mfrisse.com/research/midsouth-ehealth-alliance",
                "http://www.midsoutheha.org/faq.php",
                "http://www.healthcareitnews.com/news/vanderbilt-u-2-million-just-beginning-hie-savings"
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
            "citation_of_statute_or_regulation": "T.C.A. &sect;&sect; 33-3-103 et seq.3",
            "citation_of_statute_or_regulation_url": "http://www.lexisnexis.com/hottopics/tncode",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records, applications, reports, and legal documents that directly or indirectly identify a person who received or is receiving services regulated by Tennessee&apos;s mental health law (T. C. A. &sect; 33-3-103)."
        }
    }
};
