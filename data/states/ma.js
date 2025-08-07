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
window.stateData['ma'] = {
    "name": "Massachusetts",
    "status": "active",
    "hie": {
        "name": "Massachusetts Health Information HIway (Mass HIway) (2012)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": "855-624-4929",
            "email": "masshiway@state.ma.us",
            "website": "http://www.mass.gov/eohhs/gov/commissions-and-initiatives/masshiway/",
            "optOutFormUrl": "https://www.masshiway.net/"
        },
        "optOut": {
            "available": true,
            "process": "Massachusetts uses an opt-in model for Mass HIway. Patient must opt-in before HIE participant can use the Mass HIway. If you have previously opted in and want to opt out, you can change your consent preferences.",
            "steps": [
                "Mass HIway is Opt-In - you are opted-out by default unless you specifically consented to participate",
                "If you have opted in and want to opt-out, contact your healthcare provider's Privacy Officer",
                "Or reach out to Mass HIway directly at 855-624-4929 for opt-out instructions"
            ],
            "emergencyAccess": "Massachusetts uses an opt-in model, so you are opted-out by default. No action needed unless you want to participate in Mass HIway.",
            "exceptions": "Consent requirements do not apply for mandatory reporting, including public health"
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
        "statute": "104 CMR 27.17/ M.G.L.A. 123 &sect; 36",
        "statuteUrl": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVII/Chapter123/Section36"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Massachusetts Health Information HIway (Mass HIway) (2012)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "Patient must opt-in before HIE participant can use the Mass HIway. Consent requirements apply only to Mass HIway and do not apply for mandatory reporting, including public health. Consent forms and language can be determined by participants of the HIE (providers) in accordance with local processes and patient needs. A Consent Policy Statement (available online) provides information to providers. Participants are required to allow patients to change their consent preferences and the participants are responsible for updating consent preferences with the Mass HIway. Participants are also required to provide an accounting of disclosures to patients as required under HIPAA. Patient is given option to participate when they visit a clinical entity for care - here they may opt-in all clinical data from each entity. Patient chooses which entity&apos;s records to make available to the network - and pre-defined data are then sent to the central server. A signed patient consent form is required for a patient&apos;s clinical data to be uploaded from their physician&apos;s office EHR to the exchange community&apos;s database.",
            "patient_notification_methods": "A Consent Policy Statement is available online for HIE participant review - participant is responsible for obtaining patient permission to share information over the HIE. Patient permission is requested for direct messaging functionality as well as consent for query and retrieve.  Participants are accountable for educating their patients about consent. Education is also available including YouTube videos, slideshare and PDF.",
            "additional_information": "No specific consent forms or language is prescribed by Mass HIway and HIE participants have flexibility in designing the consent processes in accordance with their local processes and patient needs. Templates are available to assist the HIE Participants (providers) with the development of their policies, processes, and materials. First state to receive approval for federal funding from CMS through the Medicaid agency to create a statewide HIE (Mass HIway).",
            "websites_and_publicly_available_resources": [
                "http://www.mass.gov/eohhs/gov/commissions-and-initiatives/masshiway/",
                "http://www.masshiway.net/HPP/Resources/ConsentforMassHIway/index.htm",
                "http://www.masshiway.net/HPP/PatientsandFamilies/AboutYourConsent/index.htm",
                "http://www.masshiway.net/HPP/cs/groups/hpp/documents/document/c3rh/dgvt/~edisp/consent_policy_statement.pdf",
                "http://www.masshiway.net/HPP/cs/groups/hpp/documents/document/zxzj/mdaw/~edisp/orion-mao-devc000439.pdf"
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
            "details_of_consent_policy": "Mass. Gen. Laws ch. 118I &sect;&sect; 11, 13 - Massachusetts law requires that any plan that has received funds from the eHealth Institute Fund or the Massachusetts Health Information Exchange Fund is required to establish a mechanism allowing patients to opt-in to the HIE and to subsequently opt- out at any time.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to any plan that receives funding from the Massachusetts eHealth Institute or the MA HIE Fund.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVII/Chapter118I/Section11",
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
            "citation_of_statute_or_regulation": "104 CMR 27.17/ M.G.L.A. 123 &sect; 36",
            "citation_of_statute_or_regulation_url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXVII/Chapter123/Section36",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records maintained by the Department of Mental Health regarding the admission and treatment of persons admitted to facilities supervised by the Department (M.G.L.A. 123 &sect;&sect; 36, 36B Ch. 123); &quot;Individual records&quot; maintained by mental health facilities (104 CMR 27.17)."
        }
    }
};
