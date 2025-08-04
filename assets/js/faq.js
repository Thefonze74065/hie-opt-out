// FAQ page functionality

class FAQPage {
	constructor() {
		this.init();
	}

	init() {
		this.setupEventListeners();
		this.setupKeyboardNavigation();
	}

	setupEventListeners() {
		const faqQuestions = document.querySelectorAll('.faq-question');

		faqQuestions.forEach(question => {
			question.addEventListener('click', (e) => {
				this.toggleFAQ(e.target.closest('.faq-item'));
			});
		});
	}

	setupKeyboardNavigation() {
		const faqQuestions = document.querySelectorAll('.faq-question');

		faqQuestions.forEach(question => {
			question.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					this.toggleFAQ(e.target.closest('.faq-item'));
				}
			});
		});
	}

	toggleFAQ(faqItem) {
		const isActive = faqItem.classList.contains('active');

		if (isActive) {
			this.closeFAQ(faqItem);
		} else {
			this.openFAQ(faqItem);
		}
	}

	openFAQ(faqItem) {
		// Close other open FAQs (optional - remove if you want multiple open)
		// this.closeAllFAQs();

		faqItem.classList.add('active');

		// Update aria-expanded for accessibility
		const question = faqItem.querySelector('.faq-question');
		question.setAttribute('aria-expanded', 'true');

		// Scroll the FAQ into view if it's near the bottom of the screen
		setTimeout(() => {
			const rect = faqItem.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			if (rect.bottom > windowHeight - 100) {
				faqItem.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}, 300); // Wait for animation to start
	}

	closeFAQ(faqItem) {
		faqItem.classList.remove('active');

		// Update aria-expanded for accessibility
		const question = faqItem.querySelector('.faq-question');
		question.setAttribute('aria-expanded', 'false');
	}

	closeAllFAQs() {
		const allFAQs = document.querySelectorAll('.faq-item');
		allFAQs.forEach(faq => this.closeFAQ(faq));
	}

	// Utility method to open a specific FAQ by index (useful for deep linking)
	openFAQByIndex(index) {
		const faqItems = document.querySelectorAll('.faq-item');
		if (faqItems[index]) {
			this.openFAQ(faqItems[index]);
			faqItems[index].scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	const faqPage = new FAQPage();

	// Check for URL hash to open specific FAQ
	if (window.location.hash) {
		const hashNumber = parseInt(window.location.hash.replace('#faq', ''));
		if (!isNaN(hashNumber) && hashNumber > 0) {
			setTimeout(() => {
				faqPage.openFAQByIndex(hashNumber - 1);
			}, 100);
		}
	}
});
