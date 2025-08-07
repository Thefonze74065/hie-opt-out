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
window.stateData['nj'] = {
    "name": "New Jersey",
    "status": "active",
    "hie": {
        "name": "New Jersey Health Information Network (NJHIN) (2014)",
        "type": "opt-out",
        "isActive": true,
        "contact": {
            "phone": null,
            "email": null,
            "website": "http://www.healthcare-informatics.com/news-item/nj-launches-statewide-hie",
            "optOutFormUrl": "http://www.healthcare-informatics.com/news-item/nj-launches-statewide-hie"
        },
        "optOut": {
            "available": true,
            "process": "Information available separately for each of the 6 regional HIOs that are associated with the NJHIN.",
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
        "details": "Authorization required by individual or personal representative for some TPO disclosures.",
        "statute": "N.J.S.A. &sect; 30:4- 24.3/N.J.A.C. &sect; 10:37&ndash;6.79/ N.J.A.C. 10:37G- 3.5/ N.J.A.C. 10:31&ndash;12.4",
        "statuteUrl": "http://lis.njleg.state.nj.us/cgi-bin/om_isapi.dll?clientID=463992&Depth=4&TD=WRAP&advquery=%2230%3a4-24.3%22&headingswithhits=on&infobase=statutes.nfo&rank=&record=%7bC224%7d&softpage=Doc_Frame_Pg42&wordsaroundhits=2&x=0&y=0&zz=;http://www.state.nj.us/humanservices/providers/rulefees/regs/NJAC%2010_37%20Community%20Mental%20Health%20Svcs%20Act.doc;http://www.state.nj.us/humanservices/providers/rulefees/regs/NJAC%2010_31%20Screening%20and%20Screening%20Outreach%20Program.doc"
    },
    "lastUpdated": "2025-01-01",
    "rawPolicies": {
        "state sponsored HIE organization consent policies": {
            "organization_launch_date": "New Jersey Health Information Network (NJHIN) (2014)",
            "type_of_consent_policy": "Opt-Out",
            "details_of_consent_policy": "Information available separately for each of the 6 regional HIOs that are associated with the NJHIN.",
            "patient_notification_methods": null,
            "additional_information": "Data is exchanged among 6 regional HIOs: Camden HIE; Highlander; Jersey Health Connect; NJSHINE; Trenton HIE; Virtua HIE Information is also exchanged with the Department of Health&apos;s Immunization Information System NJHIN is also the primary vehicle for New Jersey to exchange health information nationally with the eHealth Exchange.",
            "websites_and_publicly_available_resources": [
                "http://www.healthcare-informatics.com/news-item/nj-launches-statewide-hie",
                "http://www.state.nj.us/health/njhit/network/",
                "http://www.njhitec.org/index.php/services/hie/nj/"
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
            "type_of_consent_policy": "No policy",
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
            "citation_of_statute_or_regulation": "N.J.S.A. &sect; 30:4- 24.3/N.J.A.C. &sect; 10:37&ndash;6.79/ N.J.A.C. 10:37G- 3.5/ N.J.A.C. 10:31&ndash;12.4",
            "citation_of_statute_or_regulation_url": "http://www.state.nj.us/humanservices/providers/rulefees/regs/NJAC%2010_37%20Community%20Mental%20Health%20Svcs%20Act.doc",
            "narrative_description_of_state_law": "New Jersey limits disclosures without authorization of information and records related to the community mental health program to those that are &quot;relevant and necessary&quot; to the purpose for disclosure. This limitation applies to disclosures for treatment purposes. The releasing agency may rely upon the requesting party&apos;s assertion of need when releasing information for treatment purposes so long as the individual hasn&apos;t executed an authorization that limits the scope of disclosure (N.J.A.C. &sect; 10:37&ndash;6.79).; New Jersey allows short term care facility staff to disclose patient information to community mental health agencies, screening services, psychiatric facilities, or special psychiatric hospitals for treatment purposes. Such discloses are limited to the minimum necessary (NJAC 10:37G-3.5).",
            "definition_or_scope_of_information_material_covered_by_policy": "Certificates, applications, records, and reports that identify or could identify a current or former recipient of mental health services at a noncorrectional institution (N.J.S.A. &sect; 30:4-24.3) or through a community mental health program (NJAC &sect; 10:37-6.79). Patient records maintained by short term care facilities (N.J.A.C. &sect; 10:37G-3.3). Consumer records maintained by screening services; Screening is the process for assessing whether a person meets the requirements for an involuntary commitment (NJAC 10:31-12.1)."
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
            "citation_of_statute_or_regulation": "N.J.S.A. &sect; 30:4- 24.3/N.J.A.C. &sect; 10:37&ndash;6.79/ N.J.A.C. 10:37G- 3.5/ N.J.A.C. 10:31&ndash;12.4",
            "citation_of_statute_or_regulation_url": "http://lis.njleg.state.nj.us/cgi-bin/om_isapi.dll?clientID=463992&Depth=4&TD=WRAP&advquery=%2230%3a4-24.3%22&headingswithhits=on&infobase=statutes.nfo&rank=&record=%7bC224%7d&softpage=Doc_Frame_Pg42&wordsaroundhits=2&x=0&y=0&zz=;http://www.state.nj.us/humanservices/providers/rulefees/regs/NJAC%2010_37%20Community%20Mental%20Health%20Svcs%20Act.doc;http://www.state.nj.us/humanservices/providers/rulefees/regs/NJAC%2010_31%20Screening%20and%20Screening%20Outreach%20Program.doc",
            "narrative_description_of_state_law": "Authorization required by individual or personal representative for some TPO disclosures.",
            "definition_or_scope_of_information_material_covered_by_policy": "Certificates, applications, records, and reports that identify or could identify a current or former recipient of mental health services at a noncorrectional institution (N.J.S.A. &sect; 30:4-24.3) or through a community mental health program (NJAC &sect; 10:37-6.79). Patient records maintained by short term care facilities (N.J.A.C. &sect; 10:37G-3.3). Consumer records maintained by screening services; Screening is the process for assessing whether a person meets the requirements for an involuntary commitment (NJAC 10:31-12.1)."
        }
    }
};
