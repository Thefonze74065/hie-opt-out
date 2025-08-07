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
window.stateData['il'] = {
    "name": "Illinois",
    "status": "active",
    "hie": {
        "name": "Illinois Health Information Exchange (ILHIE) (2014)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": "217-782-4977",
            "email": "dph.hipaa@illinois.gov",
            "website": "http://www.illinois.gov/sites/ilhie/Pages/default.aspx",
            "optOutFormUrl": "http://www.illinois.gov/sites/ilhie/Pages/patientconsumer.aspx"
        },
        "optOut": {
            "available": true,
            "process": "Illinois has a state HIE but uses provider-based opt-out. There is no centralized state form - patients must opt out directly with each provider participating in HIE networks like Epic Care Everywhere, CareQuality, etc.",
            "steps": [
                "Contact your provider's Privacy Officer (not front desk staff)",
                "State specifically that you want to opt out of Health Information Exchange sharing under 740 ILCS 110/9.6",
                "Request HIE opt-out form for your specific network (Epic Care Everywhere, CareQuality, etc.)",
                "Complete form and verify identity (notarization or provider signature required)",
                "Submit form as instructed (mail/fax/email - varies by provider)",
                "Follow up within 30 days for written confirmation",
                "Keep copies of all correspondence for your records"
            ],
            "emergencyAccess": "Opting out means your information will not be shared through HIE networks, even in emergencies. Consider keeping a personal health summary card.",
            "exceptions": "Law enforcement, public health authorities, and court orders can still access your health records in certain situations as required by federal law"
        },
        "legal": {
            "source": "state-law",
            "citations": [
                {
                    "statute": NaN,
                    "url": NaN
                },
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
        "requiresAuthorization": false,
        "minimumNecessary": true,
        "details": "State does not require additional authorization for TPO disclosures.",
        "statute": NaN,
        "statuteUrl": NaN
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Illinois Health Information Exchange (ILHIE) (2014)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Patients/consumers can choose to opt-out of the ILHIE Connect, including the sharing of mental health information. Health records will not include HIV/AIDS information, genetic testing information, and/or sexual assault information through ILHIE unless consented. To be included in the HIE, patients do not need to do anything, unless the provider removes them from participation.",
            "patient_notification_methods": "An ILHIE Connect Signage must be displayed by the doctor if he/she is an ILHIE Connect User  ILHIE Connect website contains a Patient Participation Video/PowerPoint",
            "additional_information": "Resources including the Data Sharing Agreement; ILHIE Connect Flyer; ILHIE Connect Demonstration are all included on the website.",
            "websites_and_publicly_available_resources": [
                "http://www.illinois.gov/sites/ilhie/Pages/default.aspx",
                "http://www.illinois.gov/sites/ilhie/Pages/patientconsumer.aspx",
                "https://www.illinois.gov/sites/ilhie/archive/Pages/ILHIEPatientParticipation.aspx"
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
            "type_of_consent_policy": "(2) Opt-Out for all PHI; Opt-In for special PHI",
            "details_of_consent_policy": "Illinois Health Information Exchange Authority, Patient Choice and Meaningful Disclosure 1 (2015). ILHIE&apos;s patient choice policy allows automatic access to PHI maintained by participating healthcare providers unless a patient opts out and prohibits access to his/her PHI through the exchange.  Patients have the option of revoking their decision to opt- out. However, access to &quot;specially protected health information&quot; is not automatic and disclosure of such PHI requires specific consent from the individual. Specially protected health information is defined as: &quot;certain alcohol and substance abuse treatment information; child abuse and neglect reports and records; sexual assault evidence and information; veteran&apos;s homes resident records; and any other health information that requires [individual] consent in order to be disclosed under Federal or State law.&quot;",
            "patient_notification_methods": null,
            "additional_information": "ILHIE&apos;s opt-in policy for specially protected health information can be found here.  The definition of specially protected health information can be found here.",
            "websites_and_publicly_available_resources": [
                "https://www.illinois.gov/sites/ilhie/Documents/%20Info%20Subject%20to%20Special%20Protection%20rev%2011.2014%20-%20final%20effective%201.1.2015.pdf",
                "https://www.illinois.gov/sites/ilhie/Documents/ILHIE%20Connect%20Opt-In%20Form.pdf"
            ],
            "scope_of_consent_policy": "Applies to all patients whose providers participate in ILHIE.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "https://www.illinois.gov/sites/ilhie/Documents/6%20Patient%20Choice%20%20Meaningful%20Disclosure%20rev%2011.2014%20-%20final%20effective%201.1.2015.pdf",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "Policy adopted by the ILHIE Authority - Instrumentality and an administrative agency of the State of Illinois.",
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
            "citation_of_statute_or_regulation": "740 ILCS 110/9",
            "citation_of_statute_or_regulation_url": "http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=074001100K9",
            "narrative_description_of_state_law": "Illinois permits therapists, integrated health systems, or members of an interdisciplinary team (&quot;providers&quot;) to disclose mental health information without an individual&apos;s consent in limited circumstances (e.g., to consulting therapists or staff members while providing services to an individual). Providers must notify individuals before making the disclosure and limit disclosure to only the information that is essential to the purpose of disclosure.",
            "definition_or_scope_of_information_material_covered_by_policy": "Records and communications made while providing mental health or developmental disability services (740 ILCS 110/2)."
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
