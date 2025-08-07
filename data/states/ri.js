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
window.stateData['ri'] = {
    "name": "Rhode Island",
    "status": "active",
    "hie": {
        "name": "Rhode Island Quality Institute (CurrentCare) (2001)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.riqi.org/matriarch/MultiPiecePage-8.html",
            "optOutFormUrl": null
        },
        "optOut": {
            "available": true,
            "process": "Consent for exchange participation is all or nothing. There is no granularity of choice with respect to the type of data that can flow though the exchange. Once enrolled - the options for participation include: 1. All providers permitted access to information 2. Only certain provider organizations (as selected by patient) are authorized to access information 3. Default setting - providers have temporary access to information only in emergency or unanticipated event Patients have the ability to revoke their participation in the exchange at any time. If they do revoke participation, the existing data will remain but will be sequestered from circulation, unless required by law.",
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
        "statute": "R.I. Gen. Laws 1956, &sect; 40.1-5-26",
        "statuteUrl": "http://webserver.rilin.state.ri.us/Statutes/TITLE40.1/40.1-5/40.1-5-26.HTM"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Rhode Island Quality Institute (CurrentCare) (2001)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Consent for exchange participation is all or nothing. There is no granularity of choice with respect to the type of data that can flow though the exchange. Once enrolled - the options for participation include: 1. All providers permitted access to information 2. Only certain provider organizations (as selected by patient) are authorized to access information 3. Default setting - providers have temporary access to information only in emergency or unanticipated event Patients have the ability to revoke their participation in the exchange at any time. If they do revoke participation, the existing data will remain but will be sequestered from circulation, unless required by law.",
            "patient_notification_methods": "Patients must be walked through the consent process. To enroll, a patient is to complete an enrollment and authorization form for the exchange or they can enroll directly on the website. Patients need to call the designated hotline to indicate their provider preferences.  There is an online enrollment option on the website for CurrentCare Rhode Island along with information on benefits for patients, physicians, hospitals, labs, insurers.",
            "additional_information": "Rhode Island passed the Health Information Exchange Act of 2008, a law designed to provide privacy protections. The law also ensures that participation in the HIE is voluntary for consumers and provider and places restrictions on the use of data. Consumers must consent to enroll in the statewide HIE and can stipulate who has access to their health information. Participation is voluntary and free for both patients and healthcare providers. Health information may only be available in CurrentCare with the consent of the patient. Information may only be released from CurrentCare with the consent of the patient: in an emergency - to a provider in order to provide treatment, or for purposes of public health.",
            "websites_and_publicly_available_resources": [
                "http://www.riqi.org/matriarch/MultiPiecePage-8.html",
                "http://www.currentcareri.org",
                "http://www.commonwealthfund.org/~/media/Files/Publications/CaseStudy/2010/Dec/1465_Chase_Rhode_Island_quality_inst_case_study.pdf"
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
            "details_of_consent_policy": "5 R.I. Gen. Laws &sect; 37.7-4 - Rhode Island law gives patients and healthcare providers the choice of participating in the HIE, but providers are required to continue maintaining their own medical record. The law allows disclosure of PHI in cases where the patient has opted out when such disclosure is otherwise allowed by law.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to patients with PHI in the state-established HIE.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://webserver.rilin.state.ri.us/Statutes/TITLE5/5-37.7/5-37.7-4.HTM",
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
            "citation_of_statute_or_regulation": "R.I. Gen. Laws 1956, &sect; 40.1-5-26",
            "citation_of_statute_or_regulation_url": "http://webserver.rilin.state.ri.us/Statutes/TITLE40.1/40.1-5/40.1-5-26.HTM",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Information and records generated while providing services pursuant to Rhode Island&apos;s mental health law, including fact of admission or certification (R.I. Gen. Laws 1956, &sect; 40.1-5-26)."
        }
    }
};
