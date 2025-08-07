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
window.stateData['pa'] = {
    "name": "Pennsylvania",
    "status": "active",
    "hie": {
        "name": "Pennsylvania Patient &amp; Provider Network (P3N) (2016)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.paehealth.org/consent",
            "optOutFormUrl": "http://www.paehealth.org/images/P3N_Opt-Out_Form_Fillable_PDF_December_2014.pdf"
        },
        "optOut": {
            "available": true,
            "process": "If a patient&apos;s healthcare provider is connected to the P3N (Pennsylvania Patient &amp; Provider Network) through a certified HIO, that patient&apos;s information is automatically available to other P3N-connected providers. A patient may opt-out of sharing his/her information in the P3N by completing the P3N opt-out form. A P3N Opt-Out Registry is maintained by the Pennsylvania eHealth Partnership Authority",
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
        "details": "Authorization required by individual or personal representative for some health care operations purposes.",
        "statute": "50 P.S. &sect; 7111/ 55 Pa. Code &sect; 5100.32",
        "statuteUrl": "https://govt.westlaw.com/pac/Document/NAEB8FB70344411DA8A989F4EECDB8638?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default);http://pacode.com/secure/data/055/chapter5100/s5100.32.html"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "Pennsylvania Patient &amp; Provider Network (P3N) (2016)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "If a patient&apos;s healthcare provider is connected to the P3N (Pennsylvania Patient &amp; Provider Network) through a certified HIO, that patient&apos;s information is automatically available to other P3N-connected providers. A patient may opt-out of sharing his/her information in the P3N by completing the P3N opt-out form. A P3N Opt-Out Registry is maintained by the Pennsylvania eHealth Partnership Authority",
            "patient_notification_methods": "Forms, brochures are available for patients, healthcare providers and HIOs regarding P3N.",
            "additional_information": "Additional educational information is provided via a consumer media campaign by the Pennsylvania eHealth Partnership Authority about electronic Health Information Exchange (eHIE).",
            "websites_and_publicly_available_resources": [
                "http://www.paehealth.org/consent",
                "http://www.paehealth.org/images/P3N_Opt-Out_Form_Fillable_PDF_December_2014.pdf",
                "http://www.paehealth.org/health-care-professionals?id=246"
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
            "details_of_consent_policy": "62 Pa. Cons. Stat. &sect; 1403&ndash;C - Pennsylvania law requires that the PA Department of Human Services develop and maintain an opt-out registry and procedures to re-enroll into the HIE. The law states that only the patient has the right to decide to opt out of the HIE.",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "Applies to patients with PHI in the state HIE.",
            "source_of_consent_policy": "Passed bill about to be incorporated into the statutory code",
            "source_of_consent_policy_url": "http://www.legis.state.pa.us/CFDOCS/Legis/PN/Public/btCHeck.cfm?txtType=PDF&sessInd=0&billBody=H&billTyp=B&billNbr=1062&pn=3638#page=16",
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
            "citation_of_statute_or_regulation": "50 P.S. &sect; 7111/ 55 Pa. Code &sect; 5100.32",
            "citation_of_statute_or_regulation_url": "http://www.pacode.com/secure/data/055/chapter5100/s5100.32.html",
            "narrative_description_of_state_law": "Persons that permissibly disclose mental health records without patient authorization must limit the disclosure to the information that is &quot;relevant and necessary&quot; to the purpose of the disclosure. This requirement applies to disclosures for treatment purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Documents regarding persons receiving mental health treatment on a voluntary or involuntary basis (50 PS 7111). Records of persons receiving mental health services from a facility (55 PA Code 5100.32). Facilities include mental health establishments, hospitals, clinics, institutions, and community mental health centers."
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
            "citation_of_statute_or_regulation": "50 P.S. &sect; 7111/ 55 Pa. Code &sect; 5100.32",
            "citation_of_statute_or_regulation_url": "https://govt.westlaw.com/pac/Document/NAEB8FB70344411DA8A989F4EECDB8638?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default);http://pacode.com/secure/data/055/chapter5100/s5100.32.html",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some health care operations purposes.",
            "definition_or_scope_of_information_material_covered_by_policy": "Documents regarding persons receiving mental health treatment on a voluntary or involuntary basis (50 PS 7111). Records of persons receiving mental health services from a facility (55 PA Code 5100.32). Facilities include mental health establishments, hospitals, clinics, institutions, and community mental health centers."
        }
    }
};
