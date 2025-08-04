// Data will be loaded dynamically from separate files
let stateData = {};
let providerData = [];

// DOM elements (will be accessed when needed)
let stateDropdown, stateInfo, providerSearch, providerResults;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
	initializeApp();
});

// Initialize app and load data
async function initializeApp() {
	try {
		// Clear any existing error messages
		clearErrorMessages();

		// Check if data loader is available
		if (!window.hieDataLoader) {
			console.warn('Data loader not available, will use fallback behavior');
			setupEventListeners();
			setupSmoothScrolling();
			return;
		}

		// Load all data files
		await window.hieDataLoader.loadAllData();

		// Update local references
		stateData = window.hieDataLoader.getAllStates();
		providerData = window.hieDataLoader.getProviderData();

		// Setup event listeners
		setupEventListeners();

		// Display initial content
		displayAllProviders();
		setupSmoothScrolling();

		console.log('App initialized successfully');
	} catch (error) {
		console.error('Failed to initialize app:', error);
		// Never show error messages on homepage - just continue with basic functionality
		setupEventListeners();
		setupSmoothScrolling();
	}
}

// Listen for data loaded event (alternative initialization method)
window.addEventListener('hieDataLoaded', function (event) {
	console.log('HIE data loaded event received', event.detail);
});

function showErrorMessage(message) {
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
	document.body.insertBefore(errorDiv, document.body.firstChild);
}

function clearErrorMessages() {
	const errorMessages = document.querySelectorAll('.error-message');
	errorMessages.forEach(msg => msg.remove());
}

function setupEventListeners() {
	// Get DOM elements when setting up listeners
	stateDropdown = document.getElementById('state-dropdown');
	stateInfo = document.getElementById('state-info');
	providerSearch = document.getElementById('provider-search');
	providerResults = document.getElementById('provider-results');

	// Only add listeners if elements exist (they won't exist on homepage)
	if (stateDropdown) {
		stateDropdown.addEventListener('change', handleStateSelection);
	}
	if (providerSearch) {
		providerSearch.addEventListener('input', handleProviderSearch);
	}
}

function handleStateSelection(event) {
	const selectedState = event.target.value;

	// Safety check - make sure stateInfo element exists
	if (!stateInfo) {
		return;
	}

	if (selectedState && stateData[selectedState]) {
		displayStateInfo(stateData[selectedState]);
		stateInfo.style.display = 'block';

		// Smooth scroll to the state info
		stateInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
	} else {
		stateInfo.style.display = 'none';
	}
}

function displayStateInfo(state) {
	const stepsHtml = state.steps.map(step => `<li>${step}</li>`).join('');
	const contactsHtml = state.contacts.map(contact => `
        <div class="contact-item">
            <h4>${contact.name}</h4>
            ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ''}
            ${contact.email ? `<p><strong>Email:</strong> ${contact.email}</p>` : ''}
            ${contact.address || contact.mailing_address ? `<p><strong>Address:</strong> ${contact.address || contact.mailing_address}</p>` : ''}
            ${contact.website ? `<p><strong>Website:</strong> <a href="${contact.website}" target="_blank" rel="noopener">${contact.website}</a></p>` : ''}
            <p><strong>Type:</strong> ${contact.type}</p>
            ${contact.hours ? `<p><em>Hours: ${contact.hours}</em></p>` : ''}
            ${contact.notes ? `<p><em>${contact.notes}</em></p>` : ''}
        </div>
    `).join('');

	stateInfo.innerHTML = `
        <h3>${state.name} HIE Opt-Out Information</h3>
        
        <div class="state-overview">
            <p><strong>Opt-out allowed:</strong> ${state.allowsOptOut ? 'Yes' : 'No'}</p>
            <p><strong>Legal basis:</strong> ${state.law} ${state.lawUrl ? `<a href="${state.lawUrl}" target="_blank" rel="noopener">(View Law)</a>` : ''}</p>
            <p><strong>Process:</strong> ${state.process}</p>
            ${state.effectiveDate ? `<p><strong>Effective Date:</strong> ${state.effectiveDate}</p>` : ''}
        </div>

        <div class="contact-info">
            <h4>Key Contacts</h4>
            ${contactsHtml}
        </div>

        <div class="steps-section">
            <h4>Step-by-Step Process</h4>
            <ol class="steps-list">
                ${stepsHtml}
            </ol>
        </div>

        <div class="template-section">
            <h4>What to Say</h4>
            <div class="template-text">
                <p>"${state.template}"</p>
            </div>
        </div>

        <div class="providers-section">
            <h4>Major Providers in ${state.name}</h4>
            <ul class="provider-list">
                ${state.majorProviders.map(provider => `<li>${provider}</li>`).join('')}
            </ul>
        </div>

        ${state.additionalInfo ? `
            <div class="additional-info">
                <h4>Additional Information</h4>
                ${state.additionalInfo.emergencyAccess ? `<p><strong>Emergency Access:</strong> ${state.additionalInfo.emergencyAccess}</p>` : ''}
                ${state.additionalInfo.coverageArea ? `<p><strong>Coverage:</strong> ${state.additionalInfo.coverageArea}</p>` : ''}
                ${state.additionalInfo.processingTime ? `<p><strong>Processing Time:</strong> ${state.additionalInfo.processingTime}</p>` : ''}
                ${state.additionalInfo.formRequired ? `<p><strong>Form Required:</strong> ${state.additionalInfo.formRequired}</p>` : ''}
                ${state.additionalInfo.exceptions ? `<p><strong>Exceptions:</strong> ${state.additionalInfo.exceptions}</p>` : ''}
            </div>
        ` : ''}
    `;
}

function handleProviderSearch(event) {
	const searchTerm = event.target.value.toLowerCase();

	if (searchTerm.length >= 2) {
		// Use the data loader's search function for better results
		const filteredProviders = window.hieDataLoader ?
			window.hieDataLoader.searchProviders(searchTerm) :
			providerData.filter(provider =>
				provider.name.toLowerCase().includes(searchTerm) ||
				provider.state.toLowerCase().includes(searchTerm)
			);
		displayProviders(filteredProviders);
	} else if (searchTerm.length === 0) {
		displayAllProviders();
	} else {
		providerResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
	}
}

function displayAllProviders() {
	// Only display providers if we're on a page that has the provider results element
	if (providerResults) {
		displayProviders(providerData);
	}
}

function displayProviders(providers) {
	// Safety check - only proceed if provider results element exists
	if (!providerResults) {
		return;
	}

	if (providers.length === 0) {
		providerResults.innerHTML = '<p class="no-results">No providers found. Try a different search term.</p>';
		return;
	}

	const providersHtml = providers.map(provider => {
		// Handle both old and new data structures
		const privacyPhone = provider.privacy_contact?.phone || provider.privacy_phone;
		const privacyDept = provider.privacy_contact?.department || provider.privacy_department;
		const medicalRecordsPhone = provider.medical_records?.phone || provider.medical_records_phone;
		const mainPhone = provider.main_contact?.phone || provider.main_phone;
		const website = provider.main_contact?.website;

		return `
			<div class="provider-card">
				<h3>${provider.name}</h3>
				<p><strong>State:</strong> ${provider.state}</p>
				
				${privacyPhone ? `
					<div class="contact-info">
						<p><strong>Privacy Officer:</strong> ${privacyPhone}</p>
						${privacyDept ? `<p><em>${privacyDept}</em></p>` : ''}
						${provider.privacy_contact?.email ? `<p><strong>Email:</strong> ${provider.privacy_contact.email}</p>` : ''}
						${provider.privacy_contact?.hours ? `<p><em>Hours: ${provider.privacy_contact.hours}</em></p>` : ''}
					</div>
				` : ''}
				
				${medicalRecordsPhone ? `
					<p><strong>Medical Records:</strong> ${medicalRecordsPhone}</p>
				` : ''}
				
				${mainPhone ? `
					<p><strong>Main Number:</strong> ${mainPhone}</p>
				` : ''}
				
				${website ? `
					<p><strong>Website:</strong> <a href="${website}" target="_blank" rel="noopener">${website}</a></p>
				` : ''}
				
				${provider.locations && provider.locations.length > 0 ? `
					<div class="locations">
						<p><strong>Locations:</strong></p>
						<ul class="location-list">
							${provider.locations.map(location => `<li>${location}</li>`).join('')}
						</ul>
					</div>
				` : ''}
				
				${provider.hie_networks ? `
					<div class="hie-networks">
						<p><strong>HIE Networks:</strong></p>
						<ul>
							${Array.isArray(provider.hie_networks) ?
					provider.hie_networks.map(network =>
						typeof network === 'string' ?
							`<li>${network}</li>` :
							`<li>${network.name} ${network.notes ? `<em>(${network.notes})</em>` : ''}</li>`
					).join('') :
					`<li>${provider.hie_networks}</li>`
				}
						</ul>
					</div>
				` : ''}
				
				${provider.ehr_system ? `
					<p><strong>EHR System:</strong> ${provider.ehr_system}</p>
				` : ''}
				
				${provider.opt_out_process ? `
					<div class="opt-out-info">
						<p><strong>Opt-Out Process:</strong></p>
						<ul>
							${provider.opt_out_process.processing_time ? `<li>Processing time: ${provider.opt_out_process.processing_time}</li>` : ''}
							${provider.opt_out_process.submission_methods ? `<li>Submit via: ${provider.opt_out_process.submission_methods.join(', ')}</li>` : ''}
							${provider.opt_out_process.identity_verification ? `<li>ID verification: ${provider.opt_out_process.identity_verification}</li>` : ''}
						</ul>
					</div>
				` : ''}
				
				${provider.special_instructions && provider.special_instructions.length > 0 ? `
					<div class="special-instructions">
						<p><strong>Special Instructions:</strong></p>
						<ul>
							${provider.special_instructions.map(instruction => `<li>${instruction}</li>`).join('')}
						</ul>
					</div>
				` : ''}
				
				${provider.notes ? `
					<div class="provider-notes">
						<p><em>${provider.notes}</em></p>
					</div>
				` : ''}
				
				${provider.last_verified ? `
					<p class="last-verified"><small>Last verified: ${provider.last_verified}</small></p>
				` : ''}
			</div>
		`;
	}).join('');

	providerResults.innerHTML = providersHtml;
}

function setupSmoothScrolling() {
	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}

// Utility functions
function addStateData(stateCode, stateInfo) {
	stateData[stateCode] = stateInfo;

	// Add option to dropdown if not already present and dropdown exists
	const stateDropdown = document.getElementById('state-dropdown');
	if (stateDropdown) {
		const option = document.createElement('option');
		option.value = stateCode;
		option.textContent = stateInfo.name;
		stateDropdown.appendChild(option);
	}
}

function addProviderData(providerInfo) {
	providerData.push(providerInfo);

	// Refresh the display if we're showing all providers and element exists
	const providerSearch = document.getElementById('provider-search');
	if (providerSearch && providerSearch.value === '') {
		displayAllProviders();
	}
}

// Export functions for potential future use
window.HIEOptOut = {
	addStateData,
	addProviderData,
	stateData,
	providerData
};

