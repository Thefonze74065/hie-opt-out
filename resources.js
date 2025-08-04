// Resources page functionality

document.addEventListener('DOMContentLoaded', function () {
	initializeResourcesPage();
});

function initializeResourcesPage() {
	setupTemplateInteractions();
	setupChecklistFunctionality();
	setupProgressTracking();
	setupAccessibilityFeatures();
}

// Template copying functionality
function copyTemplate(templateType) {
	let templateText = '';

	if (templateType === 'letter') {
		templateText = getLetterTemplate();
	} else if (templateType === 'form') {
		templateText = getFormTemplate();
	}

	copyToClipboard(templateText, templateType);
}

function getLetterTemplate() {
	return `[Your Name]
[Your Address]
[City, State, ZIP Code]
[Your Phone Number]
[Your Email Address]

[Date]

[Healthcare Provider/Privacy Officer Name]
[Provider Address]
[City, State, ZIP Code]

Re: Request to Opt Out of Health Information Exchange
Patient Name: [Your Full Name]
Date of Birth: [Your DOB]
Patient ID/MRN: [If known]

Dear Privacy Officer,

I am writing to formally request that my health information be excluded from any health information exchange (HIE) networks or data sharing arrangements that your organization participates in.

Specifically, I am requesting to opt out of:
• All state and regional HIE networks
• Inter-provider electronic health information sharing
• Third-party health information exchanges
• Any other electronic sharing of my protected health information for purposes other than direct treatment by your organization

I understand that this opt-out may not apply to:
• Information sharing required by law
• Information shared for treatment, payment, and healthcare operations within your organization
• Public health reporting requirements
• Emergency situations where my health or safety may be at risk

Please confirm in writing that you have processed this request and provide details about:
• What information sharing has been restricted
• Any limitations to this opt-out
• How to modify or reverse this decision if needed

Thank you for your attention to this matter. I look forward to your written confirmation.

Sincerely,
[Your Signature]
[Your Printed Name]`;
}

function getFormTemplate() {
	return `Patient Information Request

Patient Name: ________________________
Date of Birth: ________________________
Patient ID/MRN: ________________________
Contact Phone: ________________________
Email: ________________________

I am requesting information about:
☐ Current HIE participation status for my health records
☐ List of HIE networks my information is currently shared with
☐ Process for opting out of HIE sharing
☐ My current opt-out status
☐ How to modify my current privacy preferences
☐ Other: ________________________

Preferred response method:
☐ Mail to address on file
☐ Email (secure portal if available)
☐ Phone call
☐ In-person pickup

Patient Signature: ________________________
Date: ________________________`;
}

function copyToClipboard(text, templateType) {
	navigator.clipboard.writeText(text).then(function () {
		showCopySuccess(templateType);
	}).catch(function (err) {
		console.error('Failed to copy: ', err);
		fallbackCopyTextToClipboard(text, templateType);
	});
}

function fallbackCopyTextToClipboard(text, templateType) {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	textArea.style.position = "fixed";
	textArea.style.left = "-999999px";
	textArea.style.top = "-999999px";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand('copy');
		if (successful) {
			showCopySuccess(templateType);
		} else {
			showCopyError(templateType);
		}
	} catch (err) {
		console.error('Fallback copy failed: ', err);
		showCopyError(templateType);
	}

	document.body.removeChild(textArea);
}

function showCopySuccess(templateType) {
	const button = document.querySelector(`button[onclick="copyTemplate('${templateType}')"]`);
	if (button) {
		const originalText = button.textContent;
		button.textContent = '✓ Copied!';
		button.style.background = '#10b981';

		setTimeout(() => {
			button.textContent = originalText;
			button.style.background = '';
		}, 3000);
	}

	// Show toast notification
	showToast('Template copied to clipboard!', 'success');
}

function showCopyError(templateType) {
	showToast('Failed to copy template. Please try again.', 'error');
}

function showToast(message, type) {
	const toast = document.createElement('div');
	toast.className = `toast toast-${type}`;
	toast.textContent = message;

	// Style the toast
	toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;

	document.body.appendChild(toast);

	setTimeout(() => {
		toast.style.animation = 'slideOut 0.3s ease';
		setTimeout(() => {
			document.body.removeChild(toast);
		}, 300);
	}, 3000);
}

function setupTemplateInteractions() {
	// Add download functionality for templates
	const templateCards = document.querySelectorAll('.template-card');

	templateCards.forEach(card => {
		const downloadButton = document.createElement('button');
		downloadButton.className = 'download-template-btn';
		downloadButton.textContent = '💾 Download as Text';
		downloadButton.style.cssText = `
            background: #6366f1;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            cursor: pointer;
            margin-left: 1rem;
            transition: background-color 0.2s ease;
        `;

		downloadButton.addEventListener('mouseover', () => {
			downloadButton.style.background = '#4f46e5';
		});

		downloadButton.addEventListener('mouseout', () => {
			downloadButton.style.background = '#6366f1';
		});

		downloadButton.addEventListener('click', function () {
			const templateType = card.querySelector('.copy-template-btn').getAttribute('onclick').includes('letter') ? 'letter' : 'form';
			downloadTemplate(templateType);
		});

		const copyButton = card.querySelector('.copy-template-btn');
		if (copyButton) {
			copyButton.parentElement.appendChild(downloadButton);
		}
	});
}

function downloadTemplate(templateType) {
	let templateText = '';
	let filename = '';

	if (templateType === 'letter') {
		templateText = getLetterTemplate();
		filename = 'HIE_Opt_Out_Letter_Template.txt';
	} else if (templateType === 'form') {
		templateText = getFormTemplate();
		filename = 'Patient_Rights_Request_Form.txt';
	}

	const blob = new Blob([templateText], { type: 'text/plain' });
	const url = window.URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();
	window.URL.revokeObjectURL(url);

	showToast(`${filename} downloaded!`, 'success');
}

function setupChecklistFunctionality() {
	// Add local storage for checklist progress
	const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');

	// Load saved checkbox states
	checkboxes.forEach((checkbox, index) => {
		const checkboxId = `checklist-${index}`;
		checkbox.id = checkboxId;

		const savedState = localStorage.getItem(checkboxId);
		if (savedState === 'true') {
			checkbox.checked = true;
		}

		checkbox.addEventListener('change', function () {
			localStorage.setItem(checkboxId, checkbox.checked);
			updateChecklistProgress();
		});
	});

	// Add progress indicator
	addChecklistProgress();
	updateChecklistProgress();
}

function addChecklistProgress() {
	const checklistCard = document.querySelector('.tool-card:has(.checklist)');
	if (checklistCard) {
		const progressContainer = document.createElement('div');
		progressContainer.className = 'checklist-progress';
		progressContainer.innerHTML = `
            <div class="progress-label">Progress: <span class="progress-text">0 of 0 completed</span></div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        `;

		progressContainer.style.cssText = `
            margin: 1rem 0;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 0.5rem;
            border: 1px solid #e2e8f0;
        `;

		const checklist = checklistCard.querySelector('.checklist');
		checklistCard.insertBefore(progressContainer, checklist);
	}
}

function updateChecklistProgress() {
	const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
	const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
	const totalCount = checkboxes.length;
	const percentage = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

	const progressText = document.querySelector('.progress-text');
	const progressFill = document.querySelector('.progress-fill');

	if (progressText) {
		progressText.textContent = `${checkedCount} of ${totalCount} completed`;
	}

	if (progressFill) {
		progressFill.style.cssText = `
            width: ${percentage}%;
            height: 100%;
            background: linear-gradient(90deg, #10b981, #059669);
            border-radius: 0.25rem;
            transition: width 0.3s ease;
        `;
	}

	// Show completion message
	if (checkedCount === totalCount && totalCount > 0) {
		showToast('Checklist completed! 🎉', 'success');
	}
}

function setupProgressTracking() {
	// Add a "Clear Progress" button
	const progressContainer = document.querySelector('.checklist-progress');
	if (progressContainer) {
		const clearButton = document.createElement('button');
		clearButton.textContent = 'Clear Progress';
		clearButton.className = 'clear-progress-btn';
		clearButton.style.cssText = `
            background: #ef4444;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            cursor: pointer;
            margin-top: 0.5rem;
            transition: background-color 0.2s ease;
        `;

		clearButton.addEventListener('click', function () {
			if (confirm('Are you sure you want to clear all checklist progress?')) {
				clearChecklistProgress();
			}
		});

		clearButton.addEventListener('mouseover', () => {
			clearButton.style.background = '#dc2626';
		});

		clearButton.addEventListener('mouseout', () => {
			clearButton.style.background = '#ef4444';
		});

		progressContainer.appendChild(clearButton);
	}
}

function clearChecklistProgress() {
	const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');

	checkboxes.forEach((checkbox, index) => {
		checkbox.checked = false;
		localStorage.removeItem(`checklist-${index}`);
	});

	updateChecklistProgress();
	showToast('Checklist progress cleared', 'success');
}

function setupAccessibilityFeatures() {
	// Improve keyboard navigation for resource cards
	const resourceCards = document.querySelectorAll('.reference-card, .legal-card, .tech-card, .tool-card, .external-category');

	resourceCards.forEach((card, index) => {
		card.setAttribute('tabindex', '0');
		card.setAttribute('role', 'region');

		const heading = card.querySelector('h3');
		if (heading) {
			const headingId = `resource-card-${index}`;
			heading.id = headingId;
			card.setAttribute('aria-labelledby', headingId);
		}

		card.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				const firstLink = card.querySelector('a');
				const firstButton = card.querySelector('button');
				const focusTarget = firstLink || firstButton;

				if (focusTarget) {
					e.preventDefault();
					focusTarget.focus();
				}
			}
		});
	});

	// Add skip links for long content
	addSkipLinks();
}

function addSkipLinks() {
	const sections = document.querySelectorAll('section[class*="-section"], section[class$="-resources"]');
	const skipNav = document.createElement('nav');
	skipNav.className = 'skip-navigation';
	skipNav.setAttribute('aria-label', 'Skip to section');

	const skipList = document.createElement('ul');
	skipList.style.cssText = `
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        background: #f3f4f6;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
    `;

	sections.forEach((section, index) => {
		const heading = section.querySelector('h2');
		if (heading) {
			const sectionId = `section-${index}`;
			section.id = sectionId;

			const skipItem = document.createElement('li');
			const skipLink = document.createElement('a');
			skipLink.href = `#${sectionId}`;
			skipLink.textContent = heading.textContent;
			skipLink.style.cssText = `
                color: #3b82f6;
                text-decoration: none;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.875rem;
                transition: background-color 0.2s ease;
            `;

			skipLink.addEventListener('mouseover', () => {
				skipLink.style.background = '#dbeafe';
			});

			skipLink.addEventListener('mouseout', () => {
				skipLink.style.background = '';
			});

			skipItem.appendChild(skipLink);
			skipList.appendChild(skipItem);
		}
	});

	skipNav.appendChild(skipList);

	const container = document.querySelector('.container');
	const pageHeader = container.querySelector('.page-header');
	if (pageHeader && skipList.children.length > 0) {
		container.insertBefore(skipNav, pageHeader.nextSibling);
	}
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .progress-bar {
        width: 100%;
        height: 0.5rem;
        background: #e5e7eb;
        border-radius: 0.25rem;
        overflow: hidden;
        margin-top: 0.5rem;
    }
    
    .progress-label {
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
    }
    
    .skip-navigation {
        font-size: 0.875rem;
    }
    
    .skip-navigation a:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }
    
    @media (max-width: 768px) {
        .skip-navigation ul {
            flex-direction: column;
        }
        
        .download-template-btn {
            margin-left: 0 !important;
            margin-top: 0.5rem;
            display: block;
            width: 100%;
        }
    }
`;
document.head.appendChild(style);
