// States page functionality

class StatesPage {
	constructor() {
		this.stateDropdown = document.getElementById('state-dropdown');
		this.stateInfo = document.getElementById('state-info');
		this.init();
	}

	async init() {
		try {
			// Load data
			await window.hieDataLoader.loadAllData();
			this.setupEventListeners();
			this.populateStateDropdown();
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

	populateStateDropdown() {
		const states = window.hieDataLoader.getAllStates();

		// Clear existing options except the first one
		while (this.stateDropdown.children.length > 1) {
			this.stateDropdown.removeChild(this.stateDropdown.lastChild);
		}

		// Add state options
		Object.keys(states).forEach(stateCode => {
			const state = states[stateCode];
			const option = document.createElement('option');
			option.value = stateCode;
			option.textContent = state.name;
			this.stateDropdown.appendChild(option);
		});
	}

	handleStateSelection(event) {
		const selectedState = event.target.value;

		if (selectedState && window.hieDataLoader.isLoaded()) {
			const stateData = window.hieDataLoader.getStateData(selectedState);
			if (stateData) {
				this.displayStateInfo(stateData);
				this.stateInfo.style.display = 'block';

				// Smooth scroll to the state info
				this.stateInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} else {
			this.stateInfo.style.display = 'none';
		}
	}

	displayStateInfo(state) {
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

		this.stateInfo.innerHTML = `
            <h3>${state.name} HIE Opt-Out Information</h3>
            
            <div class="state-overview">
                <p><strong>Opt-out allowed:</strong> ${state.allowsOptOut ? 'Yes ✅' : 'No ❌'}</p>
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
                    ${state.additionalInfo.statewide ? `<p><strong>Statewide Coverage:</strong> ${state.additionalInfo.statewide}</p>` : ''}
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
