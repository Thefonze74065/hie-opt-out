# Data File Structure

## Overview

The HIE Opt-Out Guide now uses a modular data structure where each state and major healthcare provider has its own JavaScript file. This makes it easier to maintain and expand the database.

## Directory Structure

```
data/
├── data-loader.js          # Dynamically loads all data files
├── states/                 # State-specific information
│   ├── illinois.js
│   ├── north-carolina.js
│   └── [more states...]
└── providers/              # Healthcare provider information
    ├── northwestern-medicine.js
    ├── duke-health.js
    └── [more providers...]
```

## Adding New States

1. Create a new file in `data/states/` named `state-name.js`
2. Use this template:

```javascript
window.HIEStateData = window.HIEStateData || {};

window.HIEStateData.statecode = {
    name: "State Name",
    allowsOptOut: true,
    law: "State Law Reference",
    lawUrl: "https://link-to-law.gov",
    process: "Description of process",
    effectiveDate: "Date law became effective",
    contacts: [...],
    steps: [...],
    template: "What to say...",
    majorProviders: [...],
    additionalInfo: {...}
};
```

3. Add the filename to the `stateFiles` array in `data-loader.js`

## Adding New Providers

1. Create a new file in `data/providers/` named `provider-name.js`
2. Use this template:

```javascript
window.HIEProviderData = window.HIEProviderData || [];

window.HIEProviderData.push({
    id: "provider-id",
    name: "Provider Name",
    state: "State Name",
    privacy_contact: {...},
    medical_records: {...},
    main_contact: {...},
    hie_networks: [...],
    opt_out_process: {...},
    // ... more fields
});
```

3. Add the filename to the `providerFiles` array in `data-loader.js`

## Data Loading Process

1. `data-loader.js` is loaded first
2. It dynamically loads all state and provider files
3. Data is stored in global objects (`window.HIEStateData`, `window.HIEProviderData`)
4. Main script accesses data through the data loader
5. Custom event `hieDataLoaded` is fired when all data is ready

## Benefits of This Structure

- **Maintainability**: Each state/provider is in its own file
- **Collaboration**: Multiple people can work on different files simultaneously
- **Scalability**: Easy to add new states and providers
- **Organization**: Clear separation of concerns
- **Version Control**: Changes to specific states/providers are isolated

## File Naming Conventions

- **States**: Use lowercase, hyphenated names (e.g., `north-carolina.js`)
- **Providers**: Use lowercase, hyphenated names (e.g., `northwestern-medicine.js`)
- **IDs**: Use lowercase, hyphenated format for consistency

## Testing New Data

After adding new files:

1. Update the arrays in `data-loader.js`
2. Test locally by running the site
3. Check browser console for loading errors
4. Verify data appears correctly in the interface

## Error Handling

The data loader includes error handling:

- Failed file loads don't break the entire site
- Console warnings for missing files
- Graceful fallbacks for missing data
- Error messages shown to users if critical loading fails
