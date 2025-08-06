// States page functionality

class StatesPage {
	constructor() {
		this.stateDropdown = document.getElementById('state-dropdown');
		this.stateInfo = document.getElementById('state-info');
		this.usMapObject = document.getElementById('us-map-object');
		this.svgDoc = null;
		this.selectedState = null;
		this.tooltip = null;

		console.log('StatesPage constructor - elements found:', {
			stateDropdown: !!this.stateDropdown,
			stateInfo: !!this.stateInfo,
			usMapObject: !!this.usMapObject
		});

		this.init();
	}

	async init() {
		try {
			console.log('Init starting, hieDataLoader:', window.hieDataLoader);

			// Load data first
			await window.hieDataLoader.loadAllData();
			console.log('Data loaded, available states:', Object.keys(window.hieDataLoader.getAllStates()));

			this.setupEventListeners();
			// Remove populateStateDropdown call - data loader handles this

			// Wait for SVG to load, then setup map interactivity
			this.usMapObject.addEventListener('load', () => {
				this.setupMapInteractivity();
			});

			// If SVG is already loaded
			if (this.usMapObject.contentDocument) {
				this.setupMapInteractivity();
			}
		} catch (error) {
			console.error('Failed to initialize states page:', error);
			this.showErrorMessage('Failed to load state data. Please refresh the page.');
		}
	}

	setupEventListeners() {
		this.stateDropdown.addEventListener('change', (event) => {
			this.handleStateSelection(event);
		});
	}

	getStateColor(optOutStatus, stateCode) {
		// Development mode: Show reviewed vs unreviewed states
		const reviewedStates = ['il', 'nc', 'ma', 'al', 'ak', 'az', 'wy', 'wi']; // States that have been researched and updated

		if (reviewedStates.includes(stateCode)) {
			return '#10b981'; // Green for reviewed states
		} else {
			return '#ef4444'; // Red for unreviewed states
		}
	}

	getStateHoverColor(optOutStatus, stateCode) {
		// Development mode: Show reviewed vs unreviewed states
		const reviewedStates = ['il', 'nc', 'ma', 'al', 'ak', 'az', 'wy', 'wi']; // States that have been researched and updated

		if (reviewedStates.includes(stateCode)) {
			return '#059669'; // Darker green for reviewed states
		} else {
			return '#dc2626'; // Darker red for unreviewed states
		}
	}

	setupMapInteractivity() {
		try {
			// Get the SVG document
			this.svgDoc = this.usMapObject.contentDocument;
			if (!this.svgDoc) {
				console.log('SVG document not accessible');
				return;
			}

			// Get available states from data
			const stateData = window.hieDataLoader.getAllStates ?
				window.hieDataLoader.getAllStates() : {};

			// Style all state paths
			const statePaths = this.svgDoc.querySelectorAll('path[data-id]');
			statePaths.forEach(path => {
				const stateCode = path.getAttribute('data-id').toLowerCase();
				const stateName = path.getAttribute('data-name');

				// Get state data to determine color
				const state = stateData[stateCode];
				const optOutStatus = state ? state.optOutStatus : 'unknown';

				// Set initial styling based on review status
				const stateColor = this.getStateColor(optOutStatus, stateCode);
				const hoverColor = this.getStateHoverColor(optOutStatus, stateCode);

				path.style.fill = stateColor;
				path.style.cursor = state ? 'pointer' : 'default';

				if (state) {
					path.classList.add('clickable');
				}

				// Set stroke and hover effects
				path.style.stroke = '#ffffff';
				path.style.strokeWidth = '0.5';

				// Add event listeners
				path.addEventListener('click', (e) => {
					if (state) {
						this.handleMapStateClick(stateCode);
					}
				});

				path.addEventListener('mouseenter', (e) => {
					if (state) {
						path.style.fill = hoverColor;
					}
					this.showTooltip(e, stateName);
				});

				path.addEventListener('mouseleave', (e) => {
					if (state) {
						path.style.fill = stateColor; // Back to original color
					}
					this.hideTooltip();
				});
			});

			// Create tooltip
			this.createTooltip();

			console.log('Map interactivity setup complete');
		} catch (error) {
			console.error('Error setting up map interactivity:', error);
		}
	}

	createTooltip() {
		// Create tooltip if it doesn't exist
		if (!this.tooltip) {
			this.tooltip = document.createElement('div');
			this.tooltip.className = 'state-tooltip';
			this.tooltip.style.display = 'none';
			document.body.appendChild(this.tooltip);
		}
	}

	showTooltip(event, stateName) {
		if (this.tooltip) {
			this.tooltip.textContent = stateName;
			this.tooltip.style.display = 'block';
			this.tooltip.style.position = 'fixed';

			// Get the SVG object's position on the page
			const svgRect = this.usMapObject.getBoundingClientRect();

			// Calculate mouse position relative to the main page
			// The event coordinates are relative to the SVG document
			const pageX = svgRect.left + event.offsetX;
			const pageY = svgRect.top + event.offsetY;

			// Position tooltip above the mouse
			this.tooltip.style.left = pageX + 'px';
			this.tooltip.style.top = (pageY - 40) + 'px';
		}
	}

	hideTooltip() {
		if (this.tooltip) {
			this.tooltip.style.display = 'none';
		}
	}

	handleMapStateClick(stateCode) {
		// Update dropdown to match clicked state
		this.stateDropdown.value = stateCode;

		// Trigger the same behavior as dropdown selection
		const event = { target: { value: stateCode } };
		this.handleStateSelection(event);
	}

	handleStateSelection(event) {
		const selectedState = event.target.value;
		console.log('State selection:', selectedState);
		console.log('Data loader loaded:', window.hieDataLoader.isLoaded());

		if (selectedState && window.hieDataLoader.isLoaded()) {
			const stateData = window.hieDataLoader.getStateData(selectedState);
			console.log('State data found:', !!stateData);

			if (stateData) {
				this.displayStateInfo(stateData);
				this.stateInfo.style.display = 'block';

				// Scroll to the populated state information, with some padding to keep header visible
				setTimeout(() => {
					const stateInfoRect = this.stateInfo.getBoundingClientRect();
					const offsetPosition = window.pageYOffset + stateInfoRect.top - 75; // 75px padding from top

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});
				}, 100);
			} else {
				console.log('No state data found for:', selectedState);
			}
		} else {
			this.stateInfo.style.display = 'none';
		}
	}

	// Helper method to get provider name from provider ID
	getProviderName(providerId) {
		// Get provider data from the data loader
		const allProviders = window.hieDataLoader?.getAllProviders ?
			window.hieDataLoader.getAllProviders() : {};

		const provider = allProviders[providerId];
		if (provider && provider.name) {
			return provider.name;
		}

		// Fallback if provider not found - convert ID to readable name
		return providerId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
	}

	displayStateInfo(state) {
		console.log('Displaying state info for:', state);

		const hieInfo = state.hieOptOut;

		const processColorClass = hieInfo.process.startsWith('Centralized') ? 'centralized' : 'provider-based';
		const processBgColor = hieInfo.process.startsWith('Centralized') ? '#eff6ff' : '#fef2f2';
		const processBorderColor = hieInfo.process.startsWith('Centralized') ? '#3b82f6' : '#ef4444';
		const processTextColor = hieInfo.process.startsWith('Centralized') ? '#1d4ed8' : '#dc2626';
		const processHeadingColor = hieInfo.process.startsWith('Centralized') ? '#1e40af' : '#b91c1c';

		this.stateInfo.innerHTML = `
            <h3>HIE Opt-Out Information for ${state.name}</h3>
            
            <div class="process-section" style="background: ${processBgColor}; border: 1px solid ${processBorderColor}; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: ${processHeadingColor};">Process Type</h4>
                <p style="margin: 0; font-weight: 500; color: ${processTextColor};">${hieInfo.process}</p>
            </div>
            
            <div class="contact-section">
                <h4>Contact Information</h4>
                ${hieInfo.contacts.map(contact => `
                    <div class="contact-item" style="margin-bottom: 1rem; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
                        <p><strong>${contact.name}</strong></p>
                        ${contact.address ? `<p><strong>Address:</strong> ${contact.address}</p>` : ''}
                        <p><strong>Phone:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>
                        <p><strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
                        ${contact.website ? `<p><strong>Website:</strong> <a href="${contact.website}" target="_blank">${contact.website}</a></p>` : ''}
                        ${contact.notes ? `<p><em>${contact.notes}</em></p>` : ''}
                    </div>
                `).join('')}
            </div>

            ${hieInfo.template ? `
                <div class="template-section">
                    <h4>What to Say</h4>
                    <div class="template-text" style="background: #f0f9ff; border: 1px solid #0ea5e9; padding: 1.5rem; border-radius: 0.5rem; margin: 1rem 0;">
                        <p>"${hieInfo.template}"</p>
                    </div>
                </div>
            ` : ''}

            <div class="steps-section">
                <h4>Step-by-Step Process</h4>
                <ol style="padding-left: 1.5rem;">
                    ${hieInfo.steps.map(step => `<li style="margin-bottom: 0.5rem;">${step}</li>`).join('')}
                </ol>
            </div>

            <div class="providers-section">
                <h4>Major Providers in ${state.name}</h4>
                <ul class="provider-list" style="columns: 2; column-gap: 2rem;">
                    ${hieInfo.majorProviders.map(providerId => {
			const providerName = this.getProviderName(providerId);
			const providerUrl = `providers.html#${providerId}`;
			return `<li style="margin-bottom: 0.5rem;"><a href="${providerUrl}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${providerName}</a></li>`;
		}).join('')}
                </ul>
            </div>

            ${hieInfo.additionalInfo ? `
                <div class="additional-info">
                    <h4>Additional Information</h4>
                    ${hieInfo.additionalInfo.emergencyAccess ? `<p><strong>Emergency Access:</strong> ${hieInfo.additionalInfo.emergencyAccess}</p>` : ''}
                    ${hieInfo.additionalInfo.coverageArea ? `<p><strong>Coverage:</strong> ${hieInfo.additionalInfo.coverageArea}</p>` : ''}
                    ${hieInfo.additionalInfo.exceptions ? `<p><strong>Exceptions:</strong> ${hieInfo.additionalInfo.exceptions}</p>` : ''}
                </div>
            ` : ''}

            <div class="next-steps" style="background: #fef3c7; border: 1px solid #f59e0b; padding: 1.5rem; border-radius: 0.5rem; margin-top: 2rem;">
                <h4 style="margin: 0 0 1rem 0; color: #92400e;">Next Steps</h4>
                <p style="margin: 0 0 1rem 0; color: #92400e;">Now that you know your state's process, find your specific healthcare provider's contact information:</p>
                <a href="providers.html" class="btn btn-primary">Find Your Provider</a>
            </div>
        `;
	}

	showErrorMessage(message) {
		const errorDiv = document.createElement('div');
		errorDiv.className = 'error-message';
		errorDiv.style.cssText = `
            background: #fee2e2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem;
            text-align: center;
        `;
		errorDiv.textContent = message;

		const container = document.querySelector('.container');
		if (container) {
			container.insertBefore(errorDiv, container.firstChild);
		}
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	new StatesPage();
});
