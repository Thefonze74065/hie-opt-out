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
window.stateData['wv'] = {
    "name": "West Virginia",
    "status": "active",
    "hie": {
        "name": "West Virginia Health Information Network (WVHIN) (2012)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.wvhin.org/",
            "optOutFormUrl": "http://www.wvhin.org/patients/faq/default.aspx#_Toc313604276"
        },
        "optOut": {
            "available": true,
            "process": "Participation is automatic and patients become member when they are provided a Patient Notice informing them of their participation. Participation is voluntary and all patients have the right to NOT participate. Patients can opt out by simply stating they do not want their information exchanged through the WVHIN&apos;s HIE. Providers will still be able to exchange paper medical records by fax, mail or secure email.",
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
        "statute": "W. Va. Code, &sect; 27- 3-1",
        "statuteUrl": "http://www.legis.state.wv.us/wvcode/ChapterEntire.cfm?chap=27"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "West Virginia Health Information Network (WVHIN) (2012)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Participation is automatic and patients become member when they are provided a Patient Notice informing them of their participation. Participation is voluntary and all patients have the right to NOT participate. Patients can opt out by simply stating they do not want their information exchanged through the WVHIN&apos;s HIE. Providers will still be able to exchange paper medical records by fax, mail or secure email.",
            "patient_notification_methods": "If a patient opts-out but then want to re-enroll, participating health care providers can enroll patients back into the system.  Patients must ask their health care provider to give them the WVHIN &quot;Request to Reverse Opt-Out Form&quot;. Once they have completed the form and returned it to their health care provider, they will be able to share their health information electronically through the WVHIN&apos;s HIE.",
            "additional_information": "WVHIN connects doctors, hospitals, clinics, labs, pharmacies and other health care providers across the State.",
            "websites_and_publicly_available_resources": [
                "http://www.wvhin.org/",
                "http://www.wvhin.org/patients/faq/default.aspx#_Toc313604276"
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
            "details_of_consent_policy": "W. Va. Code R. &sect; 65-28-5 (2014) - West Virginia regulations require WV HIN to give patients the opportunity to make an informed choice about whether his/her PHI may be disclosed and used in WV HIN, allowing any patient to opt out of participation.  The regulation considers any patient who has not opted out an automatic participant in WV HIN when his/her health care provider enrolls in WV HIN or when a data supplier discloses his/her PHI through WV HIN.  The regulation further states that when a patient has opted out WV HIN will not disclose PHI in any case except for public health reporting purposes as required by law.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all patients whose providers participate in WV HIN.",
            "source_of_consent_policy": "Regulation",
            "source_of_consent_policy_url": "https://apps.sos.wv.gov/adlaw/csr/readfile.aspx?DocId=25709&Format=PDF#page=9",
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
            "citation_of_statute_or_regulation": "W. Va. Code, &sect; 27- 3-1",
            "citation_of_statute_or_regulation_url": "http://www.legis.state.wv.us/wvcode/ChapterEntire.cfm?chap=27",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Communications and information regarding the treatment or evaluation of a patient or client (W. Va. Code, &sect; 27-3-1)."
        }
    }
};
