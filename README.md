# HIE Opt-Out Guide

A comprehensive website to help people opt out of Health Information Exchange (HIE) sharing and protect their medical privacy rights.

## About This Project

This website provides state-specific guidance and contact information for opting out of Health Information Exchange networks. Based on research and real-world experience, it helps users understand their privacy rights and take action to protect their medical information.

## Features

- **Interactive State Map**: Click on any state to see HIE opt-out information
- **State-Specific Guidance**: Detailed opt-out procedures for each state
- **Provider Database**: Searchable database of major healthcare networks
- **Federal HIE Information**: Guidance for Veterans Affairs and Joint HIE opt-out processes
- **Insurance & Prescription Privacy**: Information about pharmacy and insurance data sharing
- **Step-by-Step Instructions**: Clear, actionable guidance
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
│       ├── us.svg     # Interactive US map
│       └── us.svg         # Backup US map
├── data/                  # Data files and loader
│   ├── data-loader.js     # Central data loading utility
│   ├── README.md          # Data structure documentation
│   ├── states/            # State-specific data files
│   │   ├── illinois.js
│   │   └── north-carolina.js
│   └── providers/         # Provider-specific data files
│       ├── duke-health.js
│       └── northwestern-medicine.js
└── docs/                  # Documentation
    ├── DATA_TEMPLATES.md  # Data structure templates
    └── DEPLOYMENT.md      # Deployment instructions
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

Create a new file in `data/states/state-name.js`:

```javascript
window.stateData = window.stateData || {};
window.stateData['state-name'] = {
    name: 'State Name',
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

Then add the filename to the `stateFiles` array in `data/data-loader.js`.

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
- [x] Modular data structure
- [x] Federal program guidance
- [x] Insurance and prescription privacy information
- [ ] Add all 50 states
- [ ] Expand provider database
- [ ] Create downloadable templates
- [ ] Add multi-language support
- [ ] Mobile app version

---

*Last updated: August 2025*
