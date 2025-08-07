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
window.stateData['nc'] = {
    "name": "North Carolina",
    "status": "active",
    "hie": {
        "name": "North Carolina HIE Network (2016)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "919-855-4800",
            "email": "hiea@nc.gov",
            "website": "http://hiea.nc.gov/patients",
            "optOutFormUrl": "https://hiea.nc.gov/patients/your-choices"
        },
        "optOut": {
            "available": true,
            "process": "Patients have the right to opt-out of the NC HIE any time. Patients who have opted out have the right to opt back in any time. A downloadable form is available for patients to complete and mail to the NCHIA. The opt-out form is available in English and in Spanish.",
            "steps": [
                "Visit https://hiea.nc.gov/patients/your-choices to download the NC HIEA Opt-Out form",
                "Print and complete the form with all required information (name, DOB, address, etc.)",
                "Verify identity through notarization OR have your healthcare provider sign the form",
                "Mail the completed form to: North Carolina Health Information Exchange Authority, Mail Service Center 4101, Raleigh, NC 27699-4101",
                "Wait for written confirmation (typically 2-4 weeks)"
            ],
            "emergencyAccess": "Opting out prevents sharing through HIE but emergency providers may still access through other means",
            "exceptions": "Public health reporting and legal requirements may still allow access to your records"
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
        "minimumNecessary": true,
        "details": "Authorization required by individual or personal representative for some TPO disclosures.",
        "statute": "N.C. Gen. Stat. &sect; 122C-51 et seq.",
        "statuteUrl": "http://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_122C.html"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "North Carolina HIE Network (2016)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients have the right to opt-out of the NC HIE any time. Patients who have opted out have the right to opt back in any time. A downloadable form is available for patients to complete and mail to the NCHIA. The opt-out form is available in English and in Spanish.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": [
                "http://hiea.nc.gov/patients"
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
            "details_of_consent_policy": "N.C. Gen. Stat. &sect; 90-414.10 - North Carolina law gives each patient the right to opt out of having their PHI shared through the NC HIE and to revoke his/her decision to opt out.  However, PHI must be disclosed in order to provide emergency medical services even when a patient has opted out , as long as certain criteria are met.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Gives all individuals with PHI in the NC HIE the right to opt out.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.ncga.state.nc.us/enactedlegislation/statutes/pdf/bysection/chapter_90/gs_90-414.10.pdf",
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
            "citation_of_statute_or_regulation": "N.C. Gen. Stat. &sect; 122C-51 et seq.",
            "citation_of_statute_or_regulation_url": "http://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_122C.html",
            "narrative_description_of_state_law": "Authorizes physicians, facilities, or other person responsible for treating, evaluating, managing, or supervising person committed to a state facility for outpatient services to disclose confidential information to the extent necessary to perform their duties.",
            "definition_or_scope_of_information_material_covered_by_policy": "Confidential information. North Carolina defines confidential information as information about an individual that is obtained or generated by a facility in the course of performing a function of the facility. This definition does not include non-identifiable information regarding treatment that is used for training, treatment, and monitoring purposes or statistical information from reports (N.C. Gen. Stat. &sect; 122C-3)."
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
            "citation_of_statute_or_regulation": "N.C. Gen. Stat. &sect; 122C-51 et seq.",
            "citation_of_statute_or_regulation_url": "http://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_122C.html",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Confidential information. North Carolina defines confidential information as information about an individual that is obtained or generated by a facility in the course of performing a function of the facility. This definition does not include non- identifiable information regarding treatment that is used for training, treatment, and monitoring purposes or statistical information from reports (N.C. Gen. Stat. &sect; 122C-3)."
        }
    }
};
