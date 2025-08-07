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
window.stateData['ut'] = {
    "name": "Utah",
    "status": "active",
    "hie": {
        "name": "Utah Health Information Network (UHIN) Clinical Health Information Exchange (cHIE)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "https://uhin.org/",
            "optOutFormUrl": "http://www.deseretnews.com/article/705374661/Utah-rolls-out-first-statewide-health-information-exchange-seeking-patient-consent.html?pg=all"
        },
        "optOut": {
            "available": true,
            "process": "Patients can choose to opt-out of participation in the cHIE. If patients do not participate, the cHIE will not have their current or past medical information. If they have opted out and later decide to have their information included again, they will need to complete a new participation form, and the medical information in the cHIE will only contain health information created after the date of participation.",
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
        "statute": "U.C.A &sect; 62A-15- 643/U.C.A. &sect; 62A- 15-707/U.A.C. R432-101",
        "statuteUrl": "https://le.utah.gov/xcode/Title62A/Chapter15/62A-15-S643.html?v=C62A-15-S643_1800010118000101;https://le.utah.gov/xcode/Title62A/Chapter15/62A-15-S707.html?v=C62A-15-S707_1800010118000101;http://utrules.elaws.us/uac/r432-101-22"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Utah Health Information Network (UHIN) Clinical Health Information Exchange (cHIE)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients can choose to opt-out of participation in the cHIE. If patients do not participate, the cHIE will not have their current or past medical information. If they have opted out and later decide to have their information included again, they will need to complete a new participation form, and the medical information in the cHIE will only contain health information created after the date of participation.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "https://uhin.org/",
                "http://www.deseretnews.com/article/705374661/Utah-rolls-out-first-statewide-health-information-exchange-seeking-patient-consent.html?pg=all"
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
            "type_of_consent_policy": "Opt-Out for Medicaid, CHIP and State public office health benefits enrollees",
            "details_of_consent_policy": "H.B. 46, 2012 Gen. Sess. (Utah 2012) - Utah passed a law that automatically enrolls Medicaid, CHIP, and public employees in the HIE unless they opt out. The bill amends a number of sections of Utah&apos;s code to include this automatic enrollment provision.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Gives all recipients of Medicaid, CHIP, and state public employee benefits automatically enrolled in the state HIE the right to opt out.",
            "source_of_consent_policy": "Bill amending a number of statutes in Utah Code",
            "source_of_consent_policy_url": "http://le.utah.gov/~2012/bills/hbillenr/hb0046.pdf",
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
            "citation_of_statute_or_regulation": "U.C.A &sect; 62A-15- 643/U.C.A. &sect; 62A- 15-707/U.A.C. R432-101",
            "citation_of_statute_or_regulation_url": "https://le.utah.gov/xcode/Title62A/Chapter15/62A-15-S643.html?v=C62A-15-S643_1800010118000101;https://le.utah.gov/xcode/Title62A/Chapter15/62A-15-S707.html?v=C62A-15-S707_1800010118000101;http://utrules.elaws.us/uac/r432-101-22",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records, reports, applications, and legal documents that directly or indirectly identify a current or form patient and are made in accordance with Utah&apos;s mental health laws (U.C.A &sect; 62A-15-643/U.C.A. &sect; 62A-15-707/U.A.C. R432-101)."
        }
    }
};
