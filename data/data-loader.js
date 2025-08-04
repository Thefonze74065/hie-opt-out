// Data Loader for HIE Opt-Out Guide
// Dynamically loads all state and provider data files

class HIEDataLoader {
	constructor() {
		this.stateData = {};
		this.providerData = [];
		this.loadingPromises = [];
		this.loaded = false;
	}

	// Load all data files
	async loadAllData() {
		try {
			// Initialize global objects
			window.stateData = {};
			window.providerData = [];

			// Load state data files
			await this.loadStateData();

			// Load provider data files  
			await this.loadProviderData();

			// Process loaded data
			this.processLoadedData();

			this.loaded = true;
			console.log('HIE data loaded successfully');

			// Trigger custom event when data is ready
			window.dispatchEvent(new CustomEvent('hieDataLoaded', {
				detail: {
					states: this.stateData,
					providers: this.providerData
				}
			}));

		} catch (error) {
			console.error('Error loading HIE data:', error);
			throw error;
		}
	}

	async loadStateData() {
		const stateFiles = [
			'illinois.js',
			'north-carolina.js'
			// Add more state files here as they're created
		];

		const promises = stateFiles.map(file => this.loadScript(`./data/states/${file}`));
		await Promise.all(promises);
	}

	async loadProviderData() {
		const providerFiles = [
			'northwestern-medicine.js',
			'duke-health.js'
			// Add more provider files here as they're created
		];

		const promises = providerFiles.map(file => this.loadScript(`./data/providers/${file}`));
		await Promise.all(promises);
	}

	loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.async = true;

			script.onload = () => {
				console.log(`Loaded: ${src}`);
				resolve();
			};

			script.onerror = (error) => {
				console.warn(`Failed to load: ${src}`, error);
				// Don't reject - continue loading other files
				resolve();
			};

			document.head.appendChild(script);
		});
	}

	processLoadedData() {
		// Copy state data from global object
		this.stateData = { ...window.stateData };

		// Copy provider data from global array
		this.providerData = [...window.providerData];

		// Add state abbreviations to dropdown if not already present
		this.populateStateDropdown();
	}

	populateStateDropdown() {
		const stateDropdown = document.getElementById('state-dropdown');
		if (!stateDropdown) return;

		// Get existing options to avoid duplicates
		const existingOptions = Array.from(stateDropdown.options).map(opt => opt.value);

		Object.keys(this.stateData).forEach(stateCode => {
			if (!existingOptions.includes(stateCode)) {
				const option = document.createElement('option');
				option.value = stateCode;
				option.textContent = this.stateData[stateCode].name;
				stateDropdown.appendChild(option);
			}
		});
	}

	// Get state data by code
	getStateData(stateCode) {
		return this.stateData[stateCode] || null;
	}

	// Get all states
	getAllStates() {
		return this.stateData;
	}

	// Get provider data
	getProviderData() {
		return this.providerData;
	}

	// Search providers
	searchProviders(searchTerm) {
		const term = searchTerm.toLowerCase();
		return this.providerData.filter(provider =>
			provider.name.toLowerCase().includes(term) ||
			provider.state.toLowerCase().includes(term) ||
			(provider.locations && provider.locations.some(loc =>
				loc.toLowerCase().includes(term)
			)) ||
			(provider.service_areas && provider.service_areas.some(area =>
				area.toLowerCase().includes(term)
			))
		);
	}

	// Add new state data (for dynamic additions)
	addStateData(stateCode, stateInfo) {
		this.stateData[stateCode] = stateInfo;
		this.populateStateDropdown();
	}

	// Add new provider data (for dynamic additions)
	addProviderData(providerInfo) {
		this.providerData.push(providerInfo);
	}

	// Check if data is loaded
	isLoaded() {
		return this.loaded;
	}
}

// Create global instance
window.hieDataLoader = new HIEDataLoader();
