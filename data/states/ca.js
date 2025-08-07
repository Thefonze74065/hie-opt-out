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
window.stateData['ca'] = {
    "name": "California",
    "status": "active",
    "hie": {
        "name": "California HIE (CAHIE) (2013)",
        "type": "opt-in",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.ca-hie.org",
            "optOutFormUrl": "https://www.privacyrights.org/consumer-guides/health-information-exchange-your-privacy-protected-california-medical-privacy-series#required-consent"
        },
        "optOut": {
            "available": true,
            "process": "In California, you must technically give specific permission for your medical information to be exchanged electronically. California&apos;s opt-in consent requirement applies only to sharing your medical records electronically. It does not supersede the HIPAA regulations or their presumption of consent for the use of your medical information for purposes of treatment, payment, and routine business operations. For more about consent, see PRC&apos;s California Medical Privacy Fact Sheet C2: Uses and Disclosures of Medical Information - With and Without Consent. There are some exceptions to the opt-in consent to HIE, including emergency situations, referred to as &apos;break the glass&apos; when the patient/representative cannot give consent for electronic access to records. Mandatory public health reporting is also another exception. California regulations also allow you to revoke HIE consent - the revocation becomes effective on the date it is made and does not apply to health information already exchanged prior to the revocation.",
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
        "details": "Authorization required by individual or personal representative for health care operations disclosures and some treatment disclosures.",
        "statute": "West&apos;s Ann.Cal.Welf. &amp; Inst.Code &sect; 5328",
        "statuteUrl": "http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=5328&lawCode=WIC"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "California HIE (CAHIE) (2013)",
            "type_of_consent_policy": "Opt-In",
            "details_of_consent_policy": "In California, you must technically give specific permission for your medical information to be exchanged electronically. California&apos;s opt-in consent requirement applies only to sharing your medical records electronically. It does not supersede the HIPAA regulations or their presumption of consent for the use of your medical information for purposes of treatment, payment, and routine business operations. For more about consent, see PRC&apos;s California Medical Privacy Fact Sheet C2: Uses and Disclosures of Medical Information - With and Without Consent. There are some exceptions to the opt-in consent to HIE, including emergency situations, referred to as &apos;break the glass&apos; when the patient/representative cannot give consent for electronic access to records. Mandatory public health reporting is also another exception. California regulations also allow you to revoke HIE consent - the revocation becomes effective on the date it is made and does not apply to health information already exchanged prior to the revocation.",
            "patient_notification_methods": null,
            "additional_information": "Founded under the direction of the California Health and Human Services Agency, California Office of Health Information Integrity with seed funding from the federal ARRA grant. California policymakers determined that the statewide health information exchange would be developed through private non-profit initiatives rather than establishing a single state run organization. California includes several enterprise and community based health information organizations.",
            "websites_and_publicly_available_resources": [
                "http://www.ca-hie.org",
                "https://www.privacyrights.org/consumer-guides/health-information-exchange-your-privacy-protected-california-medical-privacy-series#required-consent"
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
            "type_of_consent_policy": "Opt-In but HIOs can get demonstration project waivers to test out opt-out models",
            "details_of_consent_policy": "California Office of Health Information Integrity, California&apos;s Statewide Health Information Policy Manual 193 (2016) - California&apos;s statewide health information policy manual requires that an agreement between an HIO and the entities it provides HIE services for must require that participating organizations obtain the appropriate authorization from the patient to allow the exchange of health information.  The policy manual defines &quot;authorization&quot; as &quot;a detailed document signed and dated by the patient that grants permission for the covered entity to use or disclose health information, for specified purposes.&quot;",
            "patient_notification_methods": null,
            "additional_information": null,
            "websites_and_publicly_available_resources": null,
            "scope_of_consent_policy": "All HIOs operating in CA must include consent requirements in their agreements with participating providers.",
            "source_of_consent_policy": "State Policy",
            "source_of_consent_policy_url": "http://www.chhs.ca.gov/OHII/Documents/SHIPM_06-2016.pdf#page=66",
            "state_involvement_in_creating_consent_policy_if_source_is_not_a_statute_regulation": "California State Health Information Policy Manual (SHIPM) developed by the state government entity, California Office of Health Information Integrity.",
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
            "citation_of_statute_or_regulation": "West&apos;s Ann.Cal.Welf. &amp; Inst.Code &sect; 5328",
            "citation_of_statute_or_regulation_url": "http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=5328&lawCode=WIC",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for health care operations disclosures and some treatment disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Information and records obtained while providing mental health services, developmental services, or community mental health services in accordance with California&apos;s Welfare and Institutions Code (West&apos;s Ann.Cal.Welf. &amp; Inst.Code &sect; 5328)."
        }
    }
};
