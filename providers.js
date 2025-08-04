// Providers page functionality

class ProvidersPage {
	constructor() {
		this.providerSearch = document.getElementById('provider-search');
		this.providerResults = document.getElementById('provider-results');
		this.noResultsMessage = document.getElementById('no-results');
		this.providerData = [];
		this.init();
	}

	async init() {
		try {
			this.showLoadingMessage();

			// Load data
			await window.hieDataLoader.loadAllData();
			this.providerData = window.hieDataLoader.getProviderData();

			this.setupEventListeners();
			this.displayAllProviders();
		} catch (error) {
			console.error('Failed to initialize providers page:', error);
			this.showErrorMessage('Failed to load provider data. Please refresh the page.');
		}
	}

	setupEventListeners() {
		this.providerSearch.addEventListener('input', (event) => {
			this.handleProviderSearch(event);
		});

		// Handle enter key for search
		this.providerSearch.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
				this.handleProviderSearch(event);
			}
		});
	}

	handleProviderSearch(event) {
		const searchTerm = event.target.value.toLowerCase().trim();

		if (searchTerm.length >= 2) {
			const filteredProviders = this.searchProviders(searchTerm);
			this.displayProviders(filteredProviders);
		} else if (searchTerm.length === 0) {
			this.displayAllProviders();
		} else {
			this.showSearchHint();
		}
	}

	searchProviders(searchTerm) {
		return this.providerData.filter(provider => {
			// Search in multiple fields
			const searchFields = [
				provider.name,
				provider.state,
				provider.system_type || '',
				...(provider.locations || []),
				...(provider.service_areas || []),
				...(provider.hie_networks || []).map(network =>
					typeof network === 'string' ? network : network.name
				)
			];

			return searchFields.some(field =>
				field && field.toLowerCase().includes(searchTerm)
			);
		});
	}

	displayAllProviders() {
		this.displayProviders(this.providerData);
	}

	displayProviders(providers) {
		this.hideNoResults();

		// Always include the "request provider" card
		const requestProviderCard = this.createRequestProviderCard();

		if (providers.length === 0) {
			// Show only the request provider card when no results found
			this.providerResults.innerHTML = requestProviderCard;
			return;
		}

		// Show actual providers plus the request card
		const providersHtml = providers.map(provider => this.createProviderCard(provider)).join('');
		this.providerResults.innerHTML = providersHtml + requestProviderCard;
	}

	createProviderCard(provider) {
		return `
            <div class="provider-card">
                <h3>${provider.name}</h3>
                <div class="state-badge">${provider.state}</div>
                
                ${provider.system_type ? `<p><strong>System Type:</strong> ${provider.system_type}</p>` : ''}
                
                ${provider.privacy_contact ? `
                    <div class="contact-section">
                        <h4>Privacy Office</h4>
                        <div class="contact-info">
                            ${provider.privacy_contact.phone ? `<p><strong>Phone:</strong> ${provider.privacy_contact.phone}</p>` : ''}
                            ${provider.privacy_contact.department ? `<p><strong>Department:</strong> ${provider.privacy_contact.department}</p>` : ''}
                            ${provider.privacy_contact.email ? `<p><strong>Email:</strong> ${provider.privacy_contact.email}</p>` : ''}
                            ${provider.privacy_contact.fax ? `<p><strong>Fax:</strong> ${provider.privacy_contact.fax}</p>` : ''}
                            ${provider.privacy_contact.hours ? `<p><strong>Hours:</strong> ${provider.privacy_contact.hours}</p>` : ''}
                        </div>
                    </div>
                ` : ''}
                
                ${provider.medical_records ? `
                    <div class="contact-section">
                        <h4>Medical Records</h4>
                        <div class="contact-info">
                            ${provider.medical_records.phone ? `<p><strong>Phone:</strong> ${provider.medical_records.phone}</p>` : ''}
                            ${provider.medical_records.email ? `<p><strong>Email:</strong> ${provider.medical_records.email}</p>` : ''}
                            ${provider.medical_records.portal ? `<p><strong>Patient Portal:</strong> ${provider.medical_records.portal}</p>` : ''}
                        </div>
                    </div>
                ` : ''}
                
                ${provider.main_contact ? `
                    <div class="contact-section">
                        <h4>Main Contact</h4>
                        <div class="contact-info">
                            ${provider.main_contact.phone ? `<p><strong>Phone:</strong> ${provider.main_contact.phone}</p>` : ''}
                            ${provider.main_contact.website ? `<p><strong>Website:</strong> <a href="${provider.main_contact.website}" target="_blank" rel="noopener">${provider.main_contact.website}</a></p>` : ''}
                        </div>
                    </div>
                ` : ''}
                
                ${provider.locations && provider.locations.length > 0 ? `
                    <div class="locations">
                        <p><strong>Primary Locations:</strong></p>
                        <ul class="location-list">
                            ${provider.locations.map(location => `<li>${location}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${provider.hie_networks && provider.hie_networks.length > 0 ? `
                    <div class="hie-networks">
                        <p><strong>HIE Networks:</strong></p>
                        <ul>
                            ${provider.hie_networks.map(network => {
			if (typeof network === 'string') {
				return `<li>${network}</li>`;
			} else {
				return `<li title="${network.notes || ''}">${network.name}</li>`;
			}
		}).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${provider.ehr_system ? `<p><strong>EHR System:</strong> ${provider.ehr_system}</p>` : ''}
                
                ${provider.opt_out_process ? `
                    <div class="opt-out-info">
                        <h4>Opt-Out Process</h4>
                        <ul>
                            ${provider.opt_out_process.processing_time ? `<li>Processing time: ${provider.opt_out_process.processing_time}</li>` : ''}
                            ${provider.opt_out_process.submission_methods ? `<li>Submit via: ${provider.opt_out_process.submission_methods.join(', ')}</li>` : ''}
                            ${provider.opt_out_process.identity_verification ? `<li>ID verification: ${provider.opt_out_process.identity_verification}</li>` : ''}
                            ${provider.opt_out_process.confirmation_provided ? `<li>Written confirmation provided</li>` : ''}
                        </ul>
                    </div>
                ` : ''}
                
                ${provider.special_instructions && provider.special_instructions.length > 0 ? `
                    <div class="special-instructions">
                        <h4>Special Instructions</h4>
                        <ul>
                            ${provider.special_instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${provider.notes ? `
                    <div class="provider-notes">
                        <p>${provider.notes}</p>
                    </div>
                ` : ''}
                
                ${provider.last_verified ? `
                    <p class="last-verified">Last verified: ${provider.last_verified}</p>
                ` : ''}
            </div>
        `;
	}

	createRequestProviderCard() {
		return `
			<div class="provider-card request-provider-card">
				<h3>🏥 Don't See Your Provider?</h3>
				<div class="state-badge request-badge">Help Us Expand</div>
				
				<div class="request-content">
					<p><strong>We're continuously adding more healthcare providers to our directory.</strong></p>
					
					<p>If you don't see your healthcare provider or network listed, please help us expand our database by submitting a request.</p>
					
					<div class="request-action">
						<h4>How to Request a Provider</h4>
						<ol>
							<li>Visit our GitHub repository</li>
							<li>Create a new issue with the "Provider Request" template</li>
							<li>Include your provider's name, location, and any HIE information you have</li>
							<li>We'll research and add the provider information</li>
						</ol>
					</div>
					
					<div class="github-links">
						<a href="https://github.com/yourusername/HIEinfo/issues/new?template=provider-request.md" 
						   target="_blank" 
						   rel="noopener" 
						   class="github-button">
							📝 Request Provider Addition
						</a>
						<a href="https://github.com/yourusername/HIEinfo" 
						   target="_blank" 
						   rel="noopener" 
						   class="github-link">
							View GitHub Repository
						</a>
					</div>
					
					<div class="help-note">
						<p><em>Your contributions help make this resource more comprehensive for everyone!</em></p>
					</div>
				</div>
			</div>
		`;
	}

	showSearchHint() {
		this.providerResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
		this.hideNoResults();
	}

	showNoResults() {
		this.providerResults.innerHTML = '';
		this.noResultsMessage.style.display = 'block';
	}

	hideNoResults() {
		this.noResultsMessage.style.display = 'none';
	}

	showLoadingMessage() {
		this.providerResults.innerHTML = '<p class="loading-message">Loading provider information...</p>';
		this.hideNoResults();
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

	// Utility method to highlight search terms (optional enhancement)
	highlightSearchTerm(text, searchTerm) {
		if (!searchTerm || searchTerm.length < 2) return text;

		const regex = new RegExp(`(${searchTerm})`, 'gi');
		return text.replace(regex, '<mark>$1</mark>');
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	new ProvidersPage();
});
