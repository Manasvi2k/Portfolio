// ===================================
// 1. Light/Dark Theme Toggle
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    body.className = theme;
    // Save the user's preference to local storage
    localStorage.setItem('theme', theme); 
}

// Check for saved preference or system preference on load
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark-theme'); // Use system preference as initial theme
} else {
    setTheme('light-theme');
}

// Event listener for button click
themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    // Optional: Update the icon based on the new theme
    themeToggle.querySelector('i').className = newTheme === 'dark-theme' ? 'fas fa-sun' : 'fas fa-moon';
});

// Initialize the button icon
themeToggle.querySelector('i').className = body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';


// ===================================
// 2. Scroll-Based Animations (Transitions)
// ===================================
const sections = document.querySelectorAll('.fade-in');

const options = {
    // Start the animation when the top of the element is 10% from the bottom of the viewport
    threshold: 0.1
};

// Intersection Observer API for efficient scrolling animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger the CSS transition
            entry.target.classList.add('is-visible');
            // Stop observing once it's visible to save performance
            observer.unobserve(entry.target);
        }
    });
}, options);

// Attach the observer to all sections
sections.forEach(section => {
    observer.observe(section);
});

// ===================================
// 3. Translation Placeholder (Innovative Idea)
// ===================================
// Note: Actual translation requires a library or API (like Google Translate). 
// This is a placeholder to demonstrate the concept.
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    console.log(`Language switched to: ${selectedLang}. In a real app, this would trigger a translation function.`);
    // A more advanced implementation would use i18next or a similar library.
    alert(`Please integrate a translation library (like Google Translate or i18next) to translate the page content to ${selectedLang}.`);
});