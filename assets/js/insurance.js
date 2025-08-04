// Health Insurance Privacy Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    setupInsuranceSearch();
    setupCopyToClipboard();
    setupContactLinks();
    setupStepTracking();
}

function setupInsuranceSearch() {
    // Add search functionality for insurance cards
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search insurance companies...';
    searchInput.className = 'insurance-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 0.75rem;
        margin-bottom: 2rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
    `;
    
    // Add search input before insurance grid
    const insuranceSection = document.querySelector('.insurance-grid');
    if (insuranceSection && insuranceSection.parentNode) {
        const sectionTitle = insuranceSection.parentNode.querySelector('.section-title');
        if (sectionTitle) {
            const searchContainer = document.createElement('div');
            searchContainer.style.textAlign = 'center';
            searchContainer.appendChild(searchInput);
            sectionTitle.parentNode.insertBefore(searchContainer, insuranceSection);
        }
    }
    
    // Add search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const insuranceCards = document.querySelectorAll('.insurance-card');
        
        insuranceCards.forEach(card => {
            const insuranceName = card.querySelector('h3').textContent.toLowerCase();
            const insuranceInfo = card.querySelector('.insurance-info').textContent.toLowerCase();
            
            if (insuranceName.includes(searchTerm) || insuranceInfo.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Focus and blur effects
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#3b82f6';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#e5e7eb';
    });
}

function setupCopyToClipboard() {
    // Add copy buttons for insurance contact information
    const insuranceCards = document.querySelectorAll('.insurance-card');
    
    insuranceCards.forEach(card => {
        const contactInfo = card.querySelector('.insurance-info');
        if (contactInfo) {
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy Contact Info';
            copyButton.className = 'copy-btn';
            copyButton.style.cssText = `
                background: #f3f4f6;
                border: 1px solid #d1d5db;
                border-radius: 4px;
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
                cursor: pointer;
                margin-top: 1rem;
                transition: background-color 0.2s;
            `;
            
            copyButton.addEventListener('click', function() {
                const text = contactInfo.textContent.trim();
                navigator.clipboard.writeText(text).then(() => {
                    copyButton.textContent = 'Copied!';
                    copyButton.style.backgroundColor = '#10b981';
                    copyButton.style.color = 'white';
                    
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Contact Info';
                        copyButton.style.backgroundColor = '#f3f4f6';
                        copyButton.style.color = 'inherit';
                    }, 2000);
                }).catch(() => {
                    copyButton.textContent = 'Copy failed';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Contact Info';
                    }, 2000);
                });
            });
            
            copyButton.addEventListener('mouseenter', function() {
                if (this.textContent === 'Copy Contact Info') {
                    this.style.backgroundColor = '#e5e7eb';
                }
            });
            
            copyButton.addEventListener('mouseleave', function() {
                if (this.textContent === 'Copy Contact Info') {
                    this.style.backgroundColor = '#f3f4f6';
                }
            });
            
            contactInfo.appendChild(copyButton);
        }
    });
}

function setupContactLinks() {
    // Make phone numbers and email addresses clickable
    const contactInfos = document.querySelectorAll('.insurance-info');
    
    contactInfos.forEach(contact => {
        const phoneRegex = /(\d{1}-\d{3}-\d{3}-\d{4})/g;
        const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
        
        let html = contact.innerHTML;
        
        // Make phone numbers clickable
        html = html.replace(phoneRegex, '<a href="tel:$1" class="contact-link">$1</a>');
        
        // Make email addresses clickable
        html = html.replace(emailRegex, '<a href="mailto:$1" class="contact-link">$1</a>');
        
        contact.innerHTML = html;
    });
    
    // Style contact links
    const style = document.createElement('style');
    style.textContent = `
        .contact-link {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 600;
        }
        
        .contact-link:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
}

function setupStepTracking() {
    // Add step completion tracking
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            this.classList.toggle('completed');
            trackAction('insurance_step_clicked', { step: index + 1 });
        });
    });
    
    // Add CSS for completed steps
    const style = document.createElement('style');
    style.textContent = `
        .step-card.completed {
            background-color: #f0f9ff;
            border-color: #3b82f6;
        }
        
        .step-card.completed .step-number {
            background-color: #10b981;
        }
        
        .step-card {
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .step-card:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// Utility function to track user interactions
function trackAction(action, details = {}) {
    // This could be connected to analytics if desired
    console.log('User action:', action, details);
}
