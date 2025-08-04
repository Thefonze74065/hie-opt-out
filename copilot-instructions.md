# HIE Opt-Out Guide - Developer Instructions

## Project Overview

This is a static website providing comprehensive information about Health Information Exchange (HIE) opt-out procedures. The site helps users find state-specific, provider-specific, and federal information about protecting their health data privacy.

**Primary Goals:**
- Provide actionable HIE opt-out information by state and provider
- Maintain an easy-to-navigate, responsive interface
- Ensure information accuracy and regular updates
- Support deployment on GitHub Pages with Jekyll

## Project Structure

```
HIEinfo/
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
│       ├── us-map.svg     # Interactive US map
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

## Data Structure

### State Data Format
State data files follow this structure:
```javascript
window.stateData = window.stateData || {};
window.stateData['state-name'] = {
    name: 'State Name',
    hieOptOut: {
        available: true/false,
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

### Provider Data Format
Provider data files follow this structure:
```javascript
window.providerData = window.providerData || {};
window.providerData['provider-slug'] = {
    name: 'Provider Name',
    states: ['state1', 'state2'],
    hieOptOut: {
        available: true/false,
        process: 'Description of opt-out process',
        links: [/* same format as state links */],
        additionalInfo: 'Any additional notes'
    }
};
```

## Key Components

### 1. Navigation System (`assets/js/navigation.js`)
- Centralized navigation and footer management
- Automatically populates nav and footer elements on all pages
- Mobile-responsive hamburger menu
- Current page highlighting

### 2. Data Loader (`data/data-loader.js`)
- Central utility for loading state and provider data
- Provides consistent interface: `DataLoader.getStateData()`, `DataLoader.getProviderData()`
- Handles data availability checks
- Used by states.html and providers.html

### 3. Interactive Map (`assets/js/states.js`)
- SVG-based interactive US map
- Click handlers for state selection
- Coordinates with dropdown selection
- Shows state-specific HIE information

### 4. Page-Specific Functionality
- Each page has its own JS file for specific features
- Dropdown population (states, providers)
- Content filtering and display
- Form handling where applicable

## Asset Management

### CSS Organization
- `shared.css`: Common styles, typography, navigation, footer
- `main.css`: Homepage-specific styles
- `[page].css`: Page-specific styles and layouts

### JavaScript Organization
- `navigation.js`: Common navigation functionality (loaded on all pages)
- `main.js`: Homepage-specific functionality
- `[page].js`: Page-specific functionality
- `data-loader.js`: Data loading utility (loaded where needed)

### File References
All HTML files use the following asset path conventions:
```html
<!-- CSS -->
<link rel="stylesheet" href="assets/css/shared.css">
<link rel="stylesheet" href="assets/css/[page].css">

<!-- JavaScript -->
<script src="assets/js/navigation.js"></script>
<script src="data/data-loader.js"></script> <!-- where needed -->
<script src="assets/js/[page].js"></script>
```

## Development Guidelines

### Adding New States
1. Create `/data/states/[state-name].js` following the data format
2. Ensure state name matches exactly what's used in the map SVG
3. Test dropdown population and map interaction

### Adding New Providers
1. Create `/data/providers/[provider-slug].js` following the data format
2. Ensure provider appears in dropdown on providers.html
3. Test filtering by state association

### Modifying the Interactive Map
- The map uses `/assets/images/us-map.svg`
- State click handlers are in `/assets/js/states.js`
- Ensure state IDs in SVG match data file names

### CSS Best Practices
- Use `shared.css` for common elements
- Page-specific styles go in individual CSS files
- Maintain responsive design principles
- Use CSS custom properties for consistent theming

### JavaScript Best Practices
- Always check for data availability before displaying
- Use consistent error handling
- Maintain separation between data loading and UI logic
- Test cross-browser compatibility

## Testing and Validation

### Local Development
- Use the included Python server: `python -m http.server 8000`
- VS Code task available: "Start Local Server"
- Test all pages and interactive features
- Verify responsive design on different screen sizes

### Data Validation
- Ensure all state/provider data files load correctly
- Test dropdown population
- Verify link functionality
- Check for typos and formatting consistency

### Before Deployment
- Validate all HTML files
- Test CSS and JavaScript asset loading
- Ensure all internal links work
- Test interactive map functionality
- Verify mobile responsiveness

## Deployment

The site is configured for GitHub Pages deployment with Jekyll. See `/docs/DEPLOYMENT.md` for detailed deployment instructions.

### Key Configuration
- `_config.yml`: Jekyll configuration for GitHub Pages
- All assets use relative paths for GitHub Pages compatibility
- No build process required - static files deploy directly

## Maintenance

### Regular Updates
- Review and update state HIE information quarterly
- Add new states as data becomes available
- Update provider information as needed
- Monitor for broken external links

### Data Sources
- State health department websites
- HIE organization documentation
- Provider privacy policies
- Federal healthcare privacy regulations

## Troubleshooting

### Common Issues
1. **Map not interactive**: Check SVG file path and JavaScript console for errors
2. **Dropdowns not populating**: Verify data file loading and format
3. **Styles not loading**: Check CSS file paths in HTML
4. **JavaScript errors**: Check browser console and file paths

### Debug Tools
- Browser developer tools for JavaScript debugging
- Network tab to verify asset loading
- Mobile device simulation for responsive testing
- HTML/CSS validators for markup validation

## Contact and Support

For technical issues or content updates, refer to the project repository issues or documentation in the `/docs` folder.
