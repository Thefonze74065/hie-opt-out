# HIE Opt-Out Guide

A comprehensive website to help people opt out of Health Information Exchange (HIE) sharing and protect their medical privacy rights.

## About This Project

This website provides state-specific guidance and contact information for opting out of Health Information Exchange networks. Based on research and real-world experience, it helps users understand their privacy rights and take action to protect their medical information.

## Features

- **State-Specific Guidance**: Interactive state selector with detailed opt-out procedures
- **Provider Database**: Searchable database of major healthcare networks and privacy contact information
- **Federal HIE Information**: Guidance for Veterans Affairs and Joint HIE opt-out processes
- **Step-by-Step Instructions**: Clear, actionable steps for each state and provider
- **Mobile-Responsive Design**: Works on all devices
- **Accessibility-First**: Built with WCAG 2.1 AA compliance in mind

## What You'll Find

### State Information
- Illinois (Northwestern Medicine, UI Health, etc.)
- North Carolina (Duke Health, Atrium Health, etc.)
- More states coming soon

### Provider Networks
- Northwestern Medicine
- University of Illinois Health
- Duke Health
- Atrium Health
- And more...

### Federal Programs
- Joint HIE (VA, DOD, Coast Guard, NOAA)
- Medicare and insurance networks (coming soon)

## How It Works

1. **Select Your State**: Choose from available states to get specific legal information and procedures
2. **Find Your Provider**: Search for your healthcare network to get privacy officer contact details
3. **Follow the Steps**: Use our step-by-step guidance to complete the opt-out process
4. **Use Our Templates**: Copy our tested language for contacting privacy officers

## Technical Details

### Built With
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)
- Modular data structure with dynamic loading

### Project Structure
```
├── index.html              # Main page
├── styles.css              # All styling
├── script.js               # Main application logic
├── data/
│   ├── data-loader.js      # Dynamic data loading
│   ├── states/             # State-specific files
│   │   ├── illinois.js
│   │   └── north-carolina.js
│   └── providers/          # Provider-specific files
│       ├── northwestern-medicine.js
│       └── duke-health.js
├── _config.yml             # GitHub Pages configuration
└── README.md
```

### Data Architecture
The website uses a modular data structure where each state and major healthcare provider has its own JavaScript file. This makes it easy to:

- Add new states and providers without touching core code
- Maintain detailed, accurate information for each entity
- Enable collaborative contributions
- Scale to all 50 states and hundreds of providers

## Getting Started

### For Users
1. Visit the website
2. Select your state from the dropdown
3. Search for your healthcare provider
4. Follow the provided instructions

### For Developers
1. Clone this repository
2. Open `index.html` in your browser
3. No build process required!

## Contributing

We welcome contributions to expand coverage to more states and providers. Please:

1. Fork the repository
2. Add new state or provider data to `script.js`
3. Test your changes
4. Submit a pull request

### Adding a New State

Create a new file in `data/states/state-name.js`:

```javascript
window.HIEStateData = window.HIEStateData || {};

window.HIEStateData.statecode = {
    name: "State Name",
    allowsOptOut: true,
    law: "State Law Reference",
    lawUrl: "https://link-to-law.gov",
    process: "Description of process",
    contacts: [
        {
            name: "Contact Name",
            phone: "Phone Number",
            email: "Email Address",
            type: "Contact Type",
            notes: "Additional info"
        }
    ],
    steps: [
        "Step 1: First action",
        "Step 2: Second action"
    ],
    template: "Template message to use",
    majorProviders: ["Provider 1", "Provider 2"]
};
```

Then add the filename to the `stateFiles` array in `data/data-loader.js`.

### Adding a New Provider

Create a new file in `data/providers/provider-name.js`:

```javascript
window.HIEProviderData = window.HIEProviderData || [];

window.HIEProviderData.push({
    name: "Provider Name",
    state: "State",
    privacy_contact: {
        phone: "Phone Number",
        department: "Department Name",
        email: "Email Address"
    },
    hie_networks: [
        {
            name: "Network Name",
            type: "Network Type",
            opt_out_available: true
        }
    ],
    notes: "Additional information"
});
```

Then add the filename to the `providerFiles` array in `data/data-loader.js`.

## Legal Disclaimer

This website provides educational information only. Always consult with healthcare providers and legal professionals for specific guidance. Information is provided as-is and may not be current or complete.

## Privacy

This website does not collect any personal information. No cookies are used except those required for basic website functionality.

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions about the website, please create an issue on GitHub.

## Roadmap

- [ ] Add all 50 states
- [ ] Expand provider database
- [ ] Add federal program details
- [ ] Create downloadable templates
- [ ] Add multi-language support
- [ ] Mobile app version

---

*Last updated: August 2025*
