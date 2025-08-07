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

		// Add DC button event listener
		const dcButton = document.getElementById('dc-button');
		if (dcButton) {
			dcButton.addEventListener('click', () => {
				this.handleDCSelection();
			});
		}
	}

	getStateColor(status, stateCode) {
		// Development mode: Show reviewed vs unreviewed states
		const reviewedStates = ['il', 'nc', 'ma', 'al', 'ak', 'az', 'wy', 'wi', 'ar']; // States that have been researched and updated

		if (reviewedStates.includes(stateCode)) {
			return '#10b981'; // Green for reviewed states
		} else {
			return '#ef4444'; // Red for unreviewed states
		}
	}

	getStateHoverColor(status, stateCode) {
		// Development mode: Show reviewed vs unreviewed states
		const reviewedStates = ['il', 'nc', 'ma', 'al', 'ak', 'az', 'wy', 'wi', 'ar']; // States that have been researched and updated

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
				const status = state ? state.status : 'unknown';

				// Set initial styling based on review status
				const stateColor = this.getStateColor(status, stateCode);
				const hoverColor = this.getStateHoverColor(status, stateCode);

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

	handleDCSelection() {
		console.log('DC button clicked');
		
		if (window.hieDataLoader.isLoaded()) {
			const dcData = window.hieDataLoader.getStateData('dc');
			console.log('DC data found:', !!dcData);

			if (dcData) {
				// Update dropdown to show DC is selected
				this.stateDropdown.value = 'dc';
				
				this.displayStateInfo(dcData);
				this.stateInfo.style.display = 'block';

				// Scroll to the populated state information
				setTimeout(() => {
					const stateInfoRect = this.stateInfo.getBoundingClientRect();
					const offsetPosition = window.pageYOffset + stateInfoRect.top - 75; // 75px padding from top

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});
				}, 100);
			} else {
				console.log('No DC data found');
			}
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

		// Use the new data structure: state.hie instead of state.hieOptOut
		const hieInfo = state.hie;
		
		// Determine if opt-out is available
		const optOutAvailable = hieInfo.optOut && hieInfo.optOut.available;
		
		// Get process type from the new structure
		const processType = hieInfo.type || 'unknown';
		const isOptOut = processType === 'opt-out';
		
		// Color scheme based on opt-in/opt-out (independent of provider-based/centralized)
		const processBgColor = isOptOut ? '#fef2f2' : '#eff6ff';
		const processBorderColor = isOptOut ? '#ef4444' : '#3b82f6';
		const processTextColor = isOptOut ? '#dc2626' : '#1d4ed8';
		const processHeadingColor = isOptOut ? '#b91c1c' : '#1e40af';

		this.stateInfo.innerHTML = `
            <h3>HIE Opt-Out Information for ${state.name}</h3>
            
            <div class="status-section" style="background: ${processBgColor}; border: 1px solid ${processBorderColor}; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: ${processHeadingColor};">HIE Status</h4>
                <p style="margin: 0 0 0.5rem 0; font-weight: 500; color: ${processTextColor};">
                    ${hieInfo.name} - ${processType.toUpperCase()}
                </p>
                <p style="margin: 0; color: ${processTextColor};">
                    ${optOutAvailable ? 'Opt-out available' : 'Opt-out not available'}
                </p>
            </div>
            
            ${optOutAvailable ? `
                <div class="process-section" style="background: #f9fafb; border: 1px solid #d1d5db; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #374151;">Process</h4>
                    <p style="margin: 0; color: #374151;">${hieInfo.optOut.process}</p>
                </div>
                
                <div class="contact-section" style="margin-bottom: 1.5rem;">
                    <h4>Contact Information</h4>
                    <div class="contact-item" style="margin-bottom: 1rem; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
                        <p><strong>${hieInfo.name}</strong></p>
                        ${hieInfo.contact.phone ? `<p><strong>Phone:</strong> <a href="tel:${hieInfo.contact.phone}">${hieInfo.contact.phone}</a></p>` : ''}
                        ${hieInfo.contact.email ? `<p><strong>Email:</strong> <a href="mailto:${hieInfo.contact.email}">${hieInfo.contact.email}</a></p>` : ''}
                        ${hieInfo.contact.website ? `<p><strong>Website:</strong> <a href="${hieInfo.contact.website}" target="_blank">${hieInfo.contact.website}</a></p>` : ''}
                        ${hieInfo.contact.optOutFormUrl ? `<p><strong>Opt-Out Form:</strong> <a href="${hieInfo.contact.optOutFormUrl}" target="_blank">Download Form</a></p>` : ''}
                    </div>
                </div>

                ${hieInfo.optOut.steps && hieInfo.optOut.steps.length > 0 ? `
                    <div class="steps-section" style="margin-bottom: 1.5rem;">
                        <h4>Step-by-Step Process</h4>
                        <ol style="padding-left: 1.5rem;">
                            ${hieInfo.optOut.steps.map(step => `<li style="margin-bottom: 0.5rem;">${step}</li>`).join('')}
                        </ol>
                    </div>
                ` : ''}

                ${hieInfo.optOut.emergencyAccess ? `
                    <div class="emergency-section" style="background: #fef3c7; border: 1px solid #f59e0b; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                        <h4 style="margin: 0 0 0.5rem 0; color: #92400e;">Emergency Access</h4>
                        <p style="margin: 0; color: #92400e;">${hieInfo.optOut.emergencyAccess}</p>
                    </div>
                ` : ''}

                ${hieInfo.optOut.exceptions ? `
                    <div class="exceptions-section" style="background: #fef2f2; border: 1px solid #ef4444; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                        <h4 style="margin: 0 0 0.5rem 0; color: #dc2626;">Important Notes</h4>
                        <p style="margin: 0; color: #dc2626;">${hieInfo.optOut.exceptions}</p>
                    </div>
                ` : ''}
            ` : `
                <div class="no-optout-section" style="background: #fef2f2; border: 1px solid #ef4444; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #dc2626;">Opt-Out Not Available</h4>
                    <p style="margin: 0; color: #dc2626;">${hieInfo.optOut ? hieInfo.optOut.process : 'No opt-out process is available for this state HIE.'}</p>
                </div>
            `}
            
            ${state.mentalHealth && state.mentalHealth.extraProtections ? `
                <div class="mental-health-section" style="background: #f0f9ff; border: 1px solid #0ea5e9; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #0c4a6e;">Mental Health Protections</h4>
                    <p style="margin: 0; color: #0c4a6e;">${state.mentalHealth.details}</p>
                </div>
            ` : ''}
            
            <div class="last-updated" style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
                <p>Last updated: ${state.lastUpdated || 'Unknown'}</p>
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
