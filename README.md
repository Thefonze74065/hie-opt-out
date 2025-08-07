# HIE Opt-Out Guide

A comprehensive website to help people opt out of Health Information Exchange (HIE) sharing and protect their medical privacy rights.

## About This Project

This website provides state-specific guidance and contact information for opting out of Health Information Exchange networks. Based on research and real-world experience, it helps users understand their privacy rights and take action to protect their medical information.

## Features

- **Interactive State Map**: Click on any state to see HIE opt-out information with color-coded status
- **Comprehensive State Coverage**: All 50 states + DC with detailed HIE information
- **Real Contact Information**: Phone numbers, emails, and opt-out forms for actual HIE organizations
- **Provider Database**: Searchable database of major healthcare networks
- **Federal HIE Information**: Guidance for Veterans Affairs and Joint HIE opt-out processes
- **Insurance & Prescription Privacy**: Information about pharmacy and insurance data sharing
- **Step-by-Step Instructions**: Clear, actionable guidance for opt-out processes
- **Color-Coded Privacy Indicators**: Blue for opt-in (privacy-friendly), red for opt-out (concerning)
- **Mobile-Responsive Design**: Works on all devices
- **Accessibility-First**: Built with WCAG 2.1 AA compliance in mind

## What You'll Find

### State Information
- **All 50 States + DC**: Complete coverage with verified contact information
- **Verified HIE Details**: Manually researched and updated HIE organizations
- **Opt-Out vs Opt-In Models**: Clear identification of state consent models
- **Contact Information**: Direct phone numbers, emails, and opt-out forms
- **Step-by-Step Processes**: Detailed instructions for each state's procedure

### Provider Networks
- Northwestern Medicine
- University of Illinois Health
- Duke Health
- HCA Healthcare
- And more...

### Federal Programs
- Joint HIE (VA, DOD, Coast Guard, NOAA)
- Medicare and insurance networks
- Prescription drug monitoring programs

## Live Website

🌐 **[Visit the HIE Opt-Out Guide](https://thefonze74065.github.io/hie-opt-out/)**

## How It Works

1. **Select Your State**: Use the interactive map or dropdown to choose your state
2. **Find Your Provider**: Search for your healthcare network to get privacy contact details
3. **Explore Federal Options**: Learn about VA, insurance, and prescription privacy options
4. **Follow the Steps**: Use our step-by-step guidance to complete the opt-out process
5. **Use Our Templates**: Access tested language for contacting privacy officers

## Technical Details

### Built With
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)
- Interactive SVG map
- Modular data structure with dynamic loading
- GitHub Pages with Jekyll

### Project Structure
```
├── *.html                  # Main pages (index, states, providers, etc.)
├── _config.yml             # Jekyll configuration
├── package.json            # Node.js metadata and dependencies
├── README.md               # Project documentation
├── assets/                 # Static assets (organized by type)
│   ├── css/               # Stylesheets
│   │   ├── main.css       # Homepage styles
│   │   ├── shared.css     # Common styles across all pages
│   │   └── [page].css     # Page-specific styles
│   ├── js/                # JavaScript files
│   │   ├── navigation.js  # Common navigation and footer
│   │   ├── main.js        # Homepage functionality
│   │   └── [page].js      # Page-specific functionality
│   └── images/            # Image assets
│       └── us.svg         # Interactive US map
├── data/                  # Data files and loader
│   ├── data-loader.js     # Central data loading utility
│   ├── README.md          # Data structure documentation
│   ├── states-csv-data/   # ONC dataset and processing scripts
│   │   ├── csv-splitter.py
│   │   ├── user-focused-converter.py
│   │   ├── state-health-it-privacy-consent-law-policies.csv
│   │   └── user_focused_states/  # Now empty (files moved to states/)
│   ├── states/            # All state data files (all 50 + DC)
│   │   ├── alabama.js
│   │   ├── alaska.js
│   │   ├── arizona.js
│   │   ├── ... (all states)
│   │   └── wyoming.js
│   └── providers/         # Provider-specific data files
│       ├── duke-health.js
│       ├── hca-healthcare.js
│       └── northwestern-medicine.js
└── docs/                  # Documentation
    ├── DATA_TEMPLATES.md  # Data structure templates
    └── DEPLOYMENT.md      # Deployment instructions
```

### Data Architecture
The website uses a comprehensive data structure based on the ONC (Office of the National Coordinator) dataset with manual enhancements:

- **ONC Foundation**: All state data starts with official ONC Health IT Privacy/Consent policies
- **User-Focused Structure**: Data transformed into actionable opt-out guidance
- **Manual Verification**: Contact information and processes verified through direct research
- **Color-Coded Status**: Visual indicators for opt-in (blue/privacy-friendly) vs opt-out (red/concerning)
- **Comprehensive Coverage**: All 50 states plus Washington D.C.

## Getting Started

### For Users
1. Visit the website
2. Select your state from the dropdown
3. Search for your healthcare provider
4. Follow the provided instructions

### For Developers
1. Clone this repository
2. Start a local server: `python -m http.server 8000`
3. Open `http://localhost:8000` in your browser
4. No build process required!

## Contributing

We welcome contributions to expand coverage to more states and providers. Please:

1. Fork the repository
2. Add new state or provider data files following our data structure
3. Test your changes locally
4. Submit a pull request

See `docs/DATA_TEMPLATES.md` for detailed data structure documentation.

### Adding a New State

All states are already included! The data comes from the ONC dataset and has been processed into user-focused files. To update a state:

1. Navigate to `data/states-csv-data/user_focused_states/`
2. Edit the appropriate state file (e.g., `california.js`)
3. Update contact information, opt-out steps, or other details
4. Test your changes locally

Current state data structure:
```javascript
window.stateData = window.stateData || {};
window.stateData['state-code'] = {
    name: 'State Name',
    status: 'active|inactive|no-hie|unknown',
    hie: {
        name: 'HIE Organization Name',
        type: 'opt-in|opt-out|no-policy',
        isActive: true/false,
        contact: {
            phone: 'Phone number',
            email: 'Email address',
            website: 'Website URL',
            optOutFormUrl: 'Direct form link'
        },
        optOut: {
            available: true/false,
            process: 'Description of process',
            steps: ['Step 1', 'Step 2', ...],
            emergencyAccess: 'Emergency access info',
            exceptions: 'Important notes'
        }
    },
    mentalHealth: {
        extraProtections: true/false,
        details: 'Mental health protection details'
    },
    lastUpdated: 'YYYY-MM-DD'
};
```

### Adding a New Provider

Create a new file in `data/providers/provider-slug.js`:

```javascript
window.providerData = window.providerData || {};
window.providerData['provider-slug'] = {
    name: 'Provider Name',
    states: ['state1', 'state2'],
    hieOptOut: {
        available: true,
        process: 'Description of opt-out process',
        links: [
            {
                text: 'Link description',
                url: 'https://example.com',
                type: 'form|information|contact'
            }
        ],
        additionalInfo: 'Any additional notes'
    }
};
```

Then add the filename to the `providerFiles` array in `data/data-loader.js`.

For detailed data structure documentation, see `docs/DATA_TEMPLATES.md`.

## Legal Disclaimer

This website provides educational information only. Always consult with healthcare providers and legal professionals for specific guidance. Information is provided as-is and may not be current or complete.

## Privacy

This website does not collect any personal information. No cookies are used except those required for basic website functionality.

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions about the website, please create an issue on GitHub.

## Roadmap

- [x] Interactive state map with SVG
- [x] All 50 states + DC coverage
- [x] ONC dataset integration and processing
- [x] User-focused data structure
- [x] Color-coded privacy indicators (opt-in vs opt-out)
- [x] DC button for Washington D.C.
- [x] Federal program guidance
- [x] Insurance and prescription privacy information
- [x] Manual verification and contact info for key states
- [ ] Complete manual verification for all remaining states
- [ ] Expand provider database to include all major health systems
- [ ] Create downloadable opt-out templates and forms
- [ ] Add multi-language support
- [ ] Mobile app version
- [ ] Automated data freshness checking

---

*Last updated: August 2025*
