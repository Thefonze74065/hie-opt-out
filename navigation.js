// Shared navigation functionality

class Navigation {
	constructor() {
		this.currentPage = this.getCurrentPage();
		this.init();
	}

	getCurrentPage() {
		const path = window.location.pathname;
		const page = path.split('/').pop() || 'index.html';
		return page.replace('.html', '');
	}

	init() {
		this.createNavigation();
		this.setupMobileMenu();
		this.setActiveLink();
	}

	createNavigation() {
		const nav = document.querySelector('.nav');
		if (!nav) return;

		nav.innerHTML = `
            <div class="nav-container">
                <a href="index.html" class="logo">HIE Opt-Out Guide</a>
                <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
                <ul class="nav-menu">
                    <li><a href="index.html" data-page="index">Home</a></li>
                    <li><a href="about.html" data-page="about">About</a></li>
                    <li><a href="states.html" data-page="states">States</a></li>
                    <li><a href="providers.html" data-page="providers">Providers</a></li>
                    <li><a href="federal.html" data-page="federal">Federal</a></li>
                    <li><a href="faq.html" data-page="faq">FAQ</a></li>
                    <li><a href="resources.html" data-page="resources">Resources</a></li>
                </ul>
            </div>
        `;
	}

	setupMobileMenu() {
		const toggle = document.querySelector('.mobile-menu-toggle');
		const menu = document.querySelector('.nav-menu');

		if (toggle && menu) {
			toggle.addEventListener('click', () => {
				menu.classList.toggle('active');
			});

			// Close menu when clicking outside
			document.addEventListener('click', (e) => {
				if (!toggle.contains(e.target) && !menu.contains(e.target)) {
					menu.classList.remove('active');
				}
			});

			// Close menu when clicking on a link
			menu.addEventListener('click', (e) => {
				if (e.target.tagName === 'A') {
					menu.classList.remove('active');
				}
			});
		}
	}

	setActiveLink() {
		const links = document.querySelectorAll('.nav-menu a');
		links.forEach(link => {
			const page = link.getAttribute('data-page');
			if (page === this.currentPage ||
				(this.currentPage === 'index' && page === 'index')) {
				link.classList.add('active');
			}
		});
	}
}

// Create shared footer
function createFooter() {
	const footer = document.querySelector('.footer');
	if (footer) {
		footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Important Disclaimers</h3>
                        <div class="disclaimer-grid">
                            <div class="disclaimer-item">
                                <h4>⚖️ Legal Disclaimer</h4>
                                <p>This website provides general information about health information exchange opt-out processes and is not intended as legal advice. Consult with healthcare providers and legal professionals for specific guidance.</p>
                            </div>
                            <div class="disclaimer-item">
                                <h4>🤖 AI Development Notice</h4>
                                <p>This website was coded and developed using artificial intelligence tools. All content and information is subject to human review and verification.</p>
                            </div>
                            <div class="disclaimer-item">
                                <h4>📊 Information Currency</h4>
                                <p>Healthcare regulations change frequently. Information may not reflect the most current requirements. Always verify with official sources.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 HIE Opt-Out Guide. This website is not affiliated with any government agency or healthcare organization.</p>
                </div>
            </div>
        `;
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	new Navigation();
	createFooter();
});

// Export for use in other scripts
window.Navigation = Navigation;
