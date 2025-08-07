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
window.stateData['ct'] = {
    "name": "Connecticut",
    "status": "active",
    "hie": {
        "name": "Health Information Technology Exchange of Connecticut (HITE-CT) (2010 &ndash; 2014)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.fiercehealthcare.com/ehr/after-wasting-4-3-million-connecticut-shutters-state-hie",
            "optOutFormUrl": "http://medcitynews.com/2014/12/Connecticut-health-information-exchange-dissolved-forced-start/?rf=1"
        },
        "optOut": {
            "available": true,
            "process": "Participation was voluntary and patients/consumers could choose whether they wanted their health information included. Opting-out restricted access of health information to emergency room doctors or other health care providers.",
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
        "details": "Authorization required by individual or personal representative for health care operations disclosures.",
        "statute": "Conn. Gen. Stat. &sect;&sect; 52-146d",
        "statuteUrl": "https://www.cga.ct.gov/current/pub/chap_899.htm#sec_52-146d"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Health Information Technology Exchange of Connecticut (HITE-CT) (2010 &ndash; 2014)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Participation was voluntary and patients/consumers could choose whether they wanted their health information included. Opting-out restricted access of health information to emergency room doctors or other health care providers.",
            "patient_notification_methods": "Healthcare providers were required to tell consumers/patients if they were participating in the Health Information Technology Exchange of CT (HITE-CT).  Providers needed to provide a notice, which could accompany the provider&apos;s HIPAA privacy notification.",
            "additional_information": "HITE was a quasi-governmental agency of the State of Connecticut whose purpose was to create, maintain and make available information exchange technology to enrolled healthcare participants located in the State of Connecticut. HITE-CT HIE closed down effective 7/1/14 - after using $4.3 million in federal grants.",
            "websites_and_publicly_available_resources": [
                "http://www.fiercehealthcare.com/ehr/after-wasting-4-3-million-connecticut-shutters-state-hie",
                "http://www.ct.gov/hitect/cwp/view.asp?a=4277&q=502942&hitectNav=|",
                "http://medcitynews.com/2014/12/Connecticut-health-information-exchange-dissolved-forced-start/?rf=1",
                "http://www.healthcare-informatics.com/article/connecticut-legislature-considers-giving-statewide-hie-another-try",
                "http://www.ctnewsjunkie.com/upload/2014/12/Health_Information_Technology_Exchange_of_Connecticut_20141107_FY2012-2013.pdf"
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
            "type_of_consent_policy": "Opt-Out for regular PHI; Opt-In for sensitive PHI",
            "details_of_consent_policy": "Health Information Technology Exchange of Connecticut, Consumer Authorization and Consent Policy 3 (2011) - HITE-CT&apos;s consumer authorization and consent policy gives patients the option to opt out of having their PHI disclosed through HITE-CT.  If a patient has not opted out, HITE-CT will disclose all non-sensitive PHI for the purposes of treatment, payment and health care operations as permitted by HIPAA, unless the patient and provider have agreed upon a specific restriction on disclosure. Sensitive PHI is PHI that is &quot;subject to heightened confidentiality requirements in compliance with all federal and state laws as amended from time-to-time (HIV, substance abuse and mental health records).&quot; Patients must specifically authorize disclosures of sensitive PHI. A patient&apos;s opt-out of HITE-CT is global, which means that no PHI will be disclosed to any party by HITE-CT, except as required by law (such as public health reporting requirements, etc.). However, even if a patient has opted out, HITE-CT may allow for disclosures of PHI in emergency treatment situations, but such disclosures will be audited strictly to make sure that there was a legitimate emergency requiring disclosure.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to HITE-CT and to all persons and organizations who have access to HITE-CT managed health records.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://www.ct.gov/hitect/lib/hitect/hite-ct_consumer_authorization_&_consent_policy_v1.pdf#page=3",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "Health Information Technology Exchange of Connecticut (HITE-CT) is a nonprofit quasi-state agency.",
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
            "citation_of_statute_or_regulation": "Conn. Gen. Stat. &sect;&sect; 52-146d",
            "citation_of_statute_or_regulation_url": "https://www.cga.ct.gov/current/pub/chap_899.htm#sec_52-146d",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Communications and records relating to a psychiatrist&apos;s diagnosis or treatment of a patient (Conn. Gen. Stat. &sect;&sect; 52- 146d)."
        }
    }
};
