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
window.stateData['nm'] = {
    "name": "New Mexico",
    "status": "active",
    "hie": {
        "name": "New Mexico Health Information Collaborative (NMHIC) (2013)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.nmhic.org/sites/default/files/patient-consent-form.pdf",
            "optOutFormUrl": "http://www.nmhic.org/sites/default/files/patient-consent-form.pdf"
        },
        "optOut": {
            "available": true,
            "process": "New Mexico law states that patients must give consent before authorized users may view and share information in the patient&apos;s NMHIC electronic medical record. If a patient chooses not to participate in the NMHIC, then a consent form is required. The patient&apos;s care team will not be able to access their personal health information in the NMHIC HIE. However, in the event of a life threatening situation where the patient is unable to give consent, a provider can &quot;Break the Seal&quot; and locate the patient&apos;s electronic medical record. Break the Seal access has a time- limit and is audited. Patients may request an &quot;Opt Out &ndash; Opt Back In&quot; form by contacting NMHIC.",
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
        "minimumNecessary": true,
        "details": "Authorization required by individual or personal representative for some health care operations disclosures.",
        "statute": "NM ST &sect; 43-1-19/&sect; 32A-6A-24",
        "statuteUrl": "http://public.nmcompcomm.us/nmpublic/gateway.dll/?f=template&fndefault.htm"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "New Mexico Health Information Collaborative (NMHIC) (2013)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "New Mexico law states that patients must give consent before authorized users may view and share information in the patient&apos;s NMHIC electronic medical record. If a patient chooses not to participate in the NMHIC, then a consent form is required. The patient&apos;s care team will not be able to access their personal health information in the NMHIC HIE. However, in the event of a life threatening situation where the patient is unable to give consent, a provider can &quot;Break the Seal&quot; and locate the patient&apos;s electronic medical record. Break the Seal access has a time- limit and is audited. Patients may request an &quot;Opt Out &ndash; Opt Back In&quot; form by contacting NMHIC.",
            "patient_notification_methods": "Patients may choose to Opt Out of participating in the system entirely, meaning no one can view their name or electronic medical record in a NMHIC search, not even in an emergency situation. The Opt Out decision by a patient may possibly cause delays in treatment or require the patient to have repeat lab tests and x-rays if the needed information is not readily accessible through other methods.",
            "additional_information": "Public Health Reporting &ndash; NMHIC has been authorized to provide hospitals&apos; Reportable Lab Results reporting and Syndromic Surveillance reporting to NM Department of Health. In addition, NMHIC is working with other HIEs along the New Mexico state lines.",
            "websites_and_publicly_available_resources": [
                "http://www.nmhic.org/sites/default/files/patient-consent-form.pdf",
                "http://www.nmhic.org/node/3"
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
            "type_of_consent_policy": "Opt-Out for demographic information and information about location of EHR, but consent is required to access the EHRs themselves",
            "details_of_consent_policy": "N.M. Stat. &sect; 24-14B-6 (2009) - New Mexico law requires that record locator services provide patients the option of excluding their demographic information and information about the location of their electronic medical records from the record locator service. The person at a record locator service or HIE who receives a patient&apos;s request to exclude all of his/her information from the record locator service is responsible for removing that information from the service. The law allows for access to a patient&apos;s medical record in case of a medical emergency even if the patient has opted out.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to all record locator services or HIEs.",
            "source_of_consent_policy": "Statute",
            "source_of_consent_policy_url": "http://public.nmcompcomm.us/nmnxtadmin/NMPublic.aspx",
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
            "applies_minimum_necessary_standard_to_treatment_disclosures": "Yes",
            "requires_authorization_for_one_or_more_tpo_disclosures_that_would_be_permitted_under_hipaa_without_authorization": null,
            "citation_of_statute_or_regulation": "NM ST &sect; 43-1-19/&sect; 32A-6A-24",
            "citation_of_statute_or_regulation_url": "http://public.nmcompcomm.us/nmpublic/gateway.dll/?f=templates&fn=default.htm",
            "narrative_description_of_state_law": "New Mexico permits the disclosure of a state mental health or developmental disability services client&apos;s confidential information without authorization to mental health or developmental disability professionals to the extent that these professionals need the information for practice, employment, or training purposes. Disclosure of a child&apos;s confidential information without authorization is permissible when the information is necessary for a clinician to treat the child (32A- 6A-24).",
            "definition_or_scope_of_information_material_covered_by_policy": "Confidential information about a patient who is receiving mental health or developmental disability services which would allow a person familiar with the patient to identify the patient; Codes, numbers, or other items that would enable a person to match a patient to the patient&apos;s confidential information (NM ST 43-1-19). This information is also protected when it pertains to a patient under the age of 18 (NM ST 32A-6A-24)."
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
            "citation_of_statute_or_regulation": "NM ST &sect; 43-1-19/&sect; 32A-6A-24",
            "citation_of_statute_or_regulation_url": "http://public.nmcompcomm.us/nmpublic/gateway.dll/?f=template&fndefault.htm",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Confidential information about a patient who is receiving mental health or developmental disability services which would allow a person familiar with the patient to identify the patient; Codes, numbers, or other items that would enable a person to match a patient to the patient&apos;s confidential information (NM ST 43-1-19). This information is also protected when it pertains to a patient under the age of 18 (NM ST 32A-6A-24)."
        }
    }
};
