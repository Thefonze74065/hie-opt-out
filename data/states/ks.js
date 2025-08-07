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
window.stateData['ks'] = {
    "name": "Kansas",
    "status": "active",
    "hie": {
        "name": "Kansas Health Information Network (KHIN) (2011)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://khinonline.org",
            "optOutFormUrl": "http://khinonline.org/for-patients2/patients"
        },
        "optOut": {
            "available": true,
            "process": "The KHIN website provides a form for &apos;Patient Consent and Authorization Form for Point-of-Care Disclosures&apos;.  This form states that by signing, patients authorize KHIN to disclose health information to a particular provider through KHIN. An Opt-Out form is available for sharing information on Substance Abuse. Opt-out forms are available for patients to submit electronically and via a paper form through the mail.",
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
        "details": "Authorization required by individual or personal representative for health care operations disclosures and payment disclosures, as well as for treatment disclosures, which may be refused at the discretion of the facility director for certain reasons.",
        "statute": "K.S.A.&sect; 59-2979",
        "statuteUrl": "http://www.ksrevisor.org/statutes/chapters/ch59/059_029_0079.html"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Kansas Health Information Network (KHIN) (2011)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "The KHIN website provides a form for &apos;Patient Consent and Authorization Form for Point-of-Care Disclosures&apos;.  This form states that by signing, patients authorize KHIN to disclose health information to a particular provider through KHIN. An Opt-Out form is available for sharing information on Substance Abuse. Opt-out forms are available for patients to submit electronically and via a paper form through the mail.",
            "patient_notification_methods": null,
            "additional_information": "Website does not offer much information for consent policy.",
            "websites_and_publicly_available_resources": [
                "http://khinonline.org",
                "http://khinonline.org/for-patients2/patients",
                "http://khinonline.org/for-providers/document-downloads",
                "http://www.kanhit.org/participate.htm",
                "http://www.kdheks.gov/news/web_archives/2012/05232012.htm",
                "https://khap.kdhe.state.ks.us/public/hie/",
                "https://ehrintelligence.com/news/muddled-kansas-hie-situation-serves-as-warning/"
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
            "details_of_consent_policy": "Kan. Stat. Ann. &sect; 65-6832 - Kansas law requires the Kansas Department of Health to establish certain requirements for approved HIOs to use in their participation agreements with health care providers. These requirements include details about the written notice that a health care provider has to give to a patient explaining how and what PHI will be shared with the approved HIO. The law requires that the written notice specifically state that the patient has the right to request in writing that his/her PHI not be disclosed by the HIO and the HIO must comply with the request in all cases except in cases when disclosure is permitted for emergencies or as required by law.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "The Department of Health establishes opt-out requirements that all approved HIOs in participation agreements with covered entities have to follow.  HIOs must approved to operate in the state of Kansas.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://www.ksrevisor.org/statutes/chapters/ch65/065_068_0032.html",
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
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": "Yes",
            "citation_of_statute_or_regulation": "K.S.A.&sect; 59-2979",
            "citation_of_statute_or_regulation_url": "http://www.ksrevisor.org/statutes/chapters/ch59/059_029_0079.html",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures and payment disclosures, as well as for treatment disclosures, which may be refused at the discretion of the facility director for certain reasons.",
            "definition_or_scope_of_information_material_covered_by_policy": "Patient treatment records, court records, and medical records maintained by a district court or treatment facility. Kansas defines treatment facility as including mental health centers, clinics, a medical facility&apos;s psychiatric clinic, a state psychiatric hospital, or medical professionals licensed to provide inpatient or outpatient treatment. Patient refers to persons that have or are receiving mental health services either voluntarily or involuntarily. Patient also refers to a person in the process of being committed for involuntary treatment (K.S.A. &sect; 59-2979)."
        }
    }
};
