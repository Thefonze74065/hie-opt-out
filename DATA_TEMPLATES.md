# Data Templates for Adding New States and Providers

## Adding a New State

Copy this template and add it to the `stateData` object in `script.js`:

```javascript
// Replace 'xx' with state abbreviation and fill in the information
xx: {
    name: "State Name",
    allowsOptOut: true, // or false
    law: "State Law Reference (e.g., 'State Code Section')",
    process: "Brief description of the opt-out process",
    contacts: [
        {
            name: "Contact Organization Name",
            phone: "Phone Number (if available)",
            address: "Mailing Address (if applicable)",
            email: "Email Address (if available)",
            website: "Website URL (if available)",
            type: "Type of contact (e.g., 'State HIE Authority', 'Privacy Office')",
            notes: "Additional helpful information"
        }
        // Add more contacts as needed
    ],
    steps: [
        "Step 1: Description of first step",
        "Step 2: Description of second step",
        "Step 3: Description of third step",
        // Add more steps as needed
    ],
    template: "Template text for what to say when contacting providers",
    majorProviders: [
        "Major Provider 1",
        "Major Provider 2",
        "Major Provider 3"
        // Add more major providers in the state
    ]
}
```

## Adding a New Healthcare Provider

Copy this template and add it to the `providerData` array in `script.js`:

```javascript
{
    name: "Provider Name",
    state: "State Name", // Full state name
    privacy_phone: "Privacy Officer Phone Number",
    privacy_department: "Privacy Department Name",
    medical_records_phone: "Medical Records Phone (if different)",
    main_phone: "Main Hospital/Clinic Phone",
    privacy_email: "Privacy Officer Email (if available)",
    privacy_fax: "Privacy Office Fax (if available)",
    mailing_address: "Privacy Office Mailing Address (if needed for forms)",
    hie_networks: [
        "HIE Network 1 (e.g., Epic Care Everywhere)",
        "HIE Network 2 (e.g., CareQuality)",
        "State HIE Network"
    ],
    notes: "Additional helpful information about this provider"
}
```

## Research Tips

### Finding State Information:
1. Search for "[State Name] Health Information Exchange"
2. Look for state health department websites
3. Search for "[State Name] HIE opt-out" or "[State Name] HIE patient rights"
4. Check state legislature websites for health information laws

### Finding Provider Information:
1. Visit the provider's website
2. Look for "Privacy Practices" or "HIPAA Notice"
3. Call the main number and ask for the Privacy Officer
4. Check patient portal help sections
5. Look for "Health Information Exchange" in patient materials

### Verifying HIE Networks:
1. Epic Care Everywhere participants: Epic's website has a directory
2. CareQuality participants: CareQuality website has member lists
3. State HIE participants: State health department websites often list participants

## Data Quality Guidelines

### Required Fields:
- **name**: Full official name of state or provider
- **state**: Use full state name for consistency
- **allowsOptOut**: Must be verified through law or official documentation

### Best Practices:
- Always include phone numbers when available
- Provide specific department names (not just "Privacy Office")
- Include step-by-step instructions that have been tested when possible
- Add notes about common issues or helpful tips
- Keep template language professional and cite specific laws when applicable

### Sources to Document:
- State laws and regulations
- Official health department websites
- Provider privacy notices
- HIE organization websites
- Patient advocacy organizations

## Testing New Data

Before adding new data:
1. Verify phone numbers are current
2. Test that contacts actually handle HIE opt-outs
3. Confirm legal references are accurate
4. Check that steps are complete and actionable

## Contribution Process

1. Research and gather information using templates above
2. Add data to appropriate files
3. Test the website locally
4. Submit a pull request with:
   - Description of what was added
   - Sources used for information
   - Any testing performed
