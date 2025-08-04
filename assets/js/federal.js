// Federal page functionality

document.addEventListener('DOMContentLoaded', function () {
	// Initialize page
	initializeFederalPage();
});

function initializeFederalPage() {
	// Add smooth scrolling for anchor links
	setupSmoothScrolling();

	// Add interactive enhancements
	setupInteractiveElements();

	// Add accessibility improvements
	setupAccessibility();
}

function setupSmoothScrolling() {
	// Add smooth scrolling to any internal anchor links
	const anchorLinks = document.querySelectorAll('a[href^="#"]');

	anchorLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				e.preventDefault();
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}

function setupInteractiveElements() {
	// Add copy-to-clipboard functionality for contact information
	setupCopyToClipboard();

	// Add expand/collapse for long content sections
	setupExpandableContent();

	// Add print-friendly functionality
	setupPrintFunctionality();
}

function setupCopyToClipboard() {
	// Add copy buttons to phone numbers and email addresses
	const contactInfo = document.querySelectorAll('.contact-info');

	contactInfo.forEach(section => {
		const phoneElements = section.querySelectorAll('p:contains("Phone:")');
		const emailElements = section.querySelectorAll('p:contains("Email:")');

		// Add copy functionality to phone numbers
		phoneElements.forEach(phoneEl => {
			addCopyButton(phoneEl, 'phone');
		});

		// Add copy functionality to email addresses
		emailElements.forEach(emailEl => {
			addCopyButton(emailEl, 'email');
		});
	});
}

function addCopyButton(element, type) {
	// Extract the contact information
	const text = element.textContent;
	let contactValue = '';

	if (type === 'phone') {
		const phoneMatch = text.match(/Phone:\s*(.+)/);
		if (phoneMatch) {
			contactValue = phoneMatch[1].trim();
		}
	} else if (type === 'email') {
		const emailMatch = text.match(/Email:\s*(.+)/);
		if (emailMatch) {
			contactValue = emailMatch[1].trim();
		}
	}

	if (contactValue) {
		const copyButton = document.createElement('button');
		copyButton.className = 'copy-button';
		copyButton.textContent = '📋';
		copyButton.title = `Copy ${type}`;
		copyButton.setAttribute('aria-label', `Copy ${type}: ${contactValue}`);

		copyButton.addEventListener('click', function () {
			copyToClipboard(contactValue, copyButton);
		});

		element.style.position = 'relative';
		element.appendChild(copyButton);
	}
}

function copyToClipboard(text, button) {
	navigator.clipboard.writeText(text).then(function () {
		// Show success feedback
		const originalText = button.textContent;
		button.textContent = '✓';
		button.style.background = '#10b981';

		setTimeout(() => {
			button.textContent = originalText;
			button.style.background = '';
		}, 2000);
	}).catch(function (err) {
		console.error('Failed to copy: ', err);
		// Fallback for older browsers
		fallbackCopyTextToClipboard(text, button);
	});
}

function fallbackCopyTextToClipboard(text, button) {
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
			button.textContent = '✓';
			button.style.background = '#10b981';
			setTimeout(() => {
				button.textContent = '📋';
				button.style.background = '';
			}, 2000);
		}
	} catch (err) {
		console.error('Fallback copy failed: ', err);
	}

	document.body.removeChild(textArea);
}

function setupExpandableContent() {
	// Make long content sections expandable on mobile
	const federalCards = document.querySelectorAll('.federal-card');

	federalCards.forEach(card => {
		const content = card.querySelector('.network-details');
		if (content && content.scrollHeight > 400) {
			addExpandButton(card, content);
		}
	});
}

function addExpandButton(card, content) {
	const expandButton = document.createElement('button');
	expandButton.className = 'expand-button';
	expandButton.textContent = 'Show More';
	expandButton.setAttribute('aria-expanded', 'false');

	// Initially collapse on mobile
	if (window.innerWidth <= 768) {
		content.style.maxHeight = '300px';
		content.style.overflow = 'hidden';
		content.style.position = 'relative';

		// Add fade effect
		const fadeOverlay = document.createElement('div');
		fadeOverlay.className = 'fade-overlay';
		content.appendChild(fadeOverlay);
	}

	expandButton.addEventListener('click', function () {
		const isExpanded = this.getAttribute('aria-expanded') === 'true';

		if (isExpanded) {
			content.style.maxHeight = '300px';
			this.textContent = 'Show More';
			this.setAttribute('aria-expanded', 'false');
		} else {
			content.style.maxHeight = 'none';
			this.textContent = 'Show Less';
			this.setAttribute('aria-expanded', 'true');
		}
	});

	card.appendChild(expandButton);
}

function setupPrintFunctionality() {
	// Add print button for easy printing of federal information
	const printButton = document.createElement('button');
	printButton.className = 'print-button';
	printButton.textContent = '🖨️ Print This Page';
	printButton.title = 'Print federal HIE information';

	printButton.addEventListener('click', function () {
		window.print();
	});

	// Add to page header
	const pageHeader = document.querySelector('.page-header');
	if (pageHeader) {
		pageHeader.appendChild(printButton);
	}
}

function setupAccessibility() {
	// Improve keyboard navigation
	const federalCards = document.querySelectorAll('.federal-card');

	federalCards.forEach((card, index) => {
		// Make cards focusable
		card.setAttribute('tabindex', '0');
		card.setAttribute('role', 'article');
		card.setAttribute('aria-labelledby', `federal-card-${index}`);

		// Add ID to card title for labeling
		const title = card.querySelector('h3');
		if (title) {
			title.id = `federal-card-${index}`;
		}

		// Add keyboard navigation
		card.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				// Focus on first interactive element within card
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

	// Improve step navigation accessibility
	const steps = document.querySelectorAll('.step');
	steps.forEach((step, index) => {
		step.setAttribute('role', 'listitem');
		step.setAttribute('aria-labelledby', `step-${index}`);

		const stepTitle = step.querySelector('h3');
		if (stepTitle) {
			stepTitle.id = `step-${index}`;
		}
	});

	// Make steps container a list
	const stepsContainer = document.querySelector('.steps-container');
	if (stepsContainer) {
		stepsContainer.setAttribute('role', 'list');
		stepsContainer.setAttribute('aria-label', 'Federal HIE opt-out steps');
	}
}

// Utility function for checking if text contains a substring
function textContains(element, substring) {
	return element.textContent.toLowerCase().includes(substring.toLowerCase());
}

// Custom querySelector that finds elements containing specific text
function querySelectorContaining(parent, selector, text) {
	const elements = parent.querySelectorAll(selector);
	return Array.from(elements).filter(el => textContains(el, text));
}

// Handle window resize for responsive features
window.addEventListener('resize', function () {
	// Recheck expandable content on resize
	const expandButtons = document.querySelectorAll('.expand-button');
	expandButtons.forEach(button => {
		if (window.innerWidth > 768) {
			// Remove expand functionality on desktop
			const card = button.parentElement;
			const content = card.querySelector('.network-details');
			if (content) {
				content.style.maxHeight = 'none';
				content.style.overflow = 'visible';
			}
			button.style.display = 'none';
		} else {
			button.style.display = 'block';
		}
	});
});

// Add CSS for interactive elements
const style = document.createElement('style');
style.textContent = `
    .copy-button {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        background: #f3f4f6;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .copy-button:hover {
        background: #e5e7eb;
    }
    
    .expand-button {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.2s ease;
    }
    
    .expand-button:hover {
        background: #2563eb;
    }
    
    .fade-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: linear-gradient(transparent, white);
        pointer-events: none;
    }
    
    .print-button {
        background: #059669;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 0.875rem;
        transition: background-color 0.2s ease;
    }
    
    .print-button:hover {
        background: #047857;
    }
    
    .federal-card:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }
    
    @media print {
        .copy-button,
        .expand-button,
        .print-button {
            display: none !important;
        }
        
        .federal-card {
            break-inside: avoid;
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(style);
