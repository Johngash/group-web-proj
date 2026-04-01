# TechNova Website Report

## 1. Project Overview
**TechNova** is a modern, responsive multi-page website designed for a student tech group at Chuka University. The project demonstrates advanced web development techniques using semantic HTML5, CSS3 (Flexbox & Grid), and vanilla JavaScript.

## 2. Website Structure & Navigation
The website follows a multi-page architecture with a clear directory structure for maintainability.

### Navigation Logic:
- **Consistent Navbar:** A shared navigation bar is present on every page, providing links to Home, About, Services, and Contact.
- **Relative Linking:** Pages are organized into subdirectories (`/about`, `/services`, `/contact`), using relative paths for seamless transitions.
- **Active State:** The current page is highlighted in the navigation bar using the `.active` CSS class.
- **Mobile Responsiveness:** A "hamburger" menu appears on smaller screens, toggled by JavaScript to ensure a mobile-first user experience.
- **Scroll Effects:** The navbar dynamically hides when scrolling down and reappears when scrolling up to maximize screen real estate.

### Directory Structure:
```text
/
├── index.html          (Home Page)
├── script.js           (Global Interactivity)
├── style.css           (Base & Shared Styles)
├── about/              (About Page & Team logic)
├── services/           (Services Page)
├── contact/            (Contact Page & Validation)
├── home/               (Home-specific styles)
└── public/             (Images & Assets)
```

## 3. Interfaces (UI Design)
The website features a cohesive visual identity with high-contrast typography and interactive elements.

### Key UI Components:
1.  **Hero Sections:** High-impact landing areas with bold typography and call-to-action buttons.
2.  **Stats Strip (Home):** An animated counter that displays key metrics (Pages, Team Members, Technologies) when scrolled into view.
3.  **Feature/Service Grids:** Responsive layouts using **CSS Grid** to display "What We Do" and "Our Services" cards.
4.  **Dynamic Team Grid (About):** Team member cards are dynamically generated using JavaScript, including avatars, roles, and social media links.
5.  **Interactive Form (Contact):** A custom-styled form with real-time field validation and success feedback.
6.  **Scroll Reveal:** Sections fade and slide into view as the user scrolls, creating a premium "app-like" feel.

## 4. Technical Implementation (Code)

### Frontend Technologies:
- **HTML5:** Semantic tags (`<nav>`, `<section>`, `<footer>`) for accessibility and SEO.
- **CSS3:** Custom properties (variables), Flexbox for alignment, and Grid for complex layouts.
- **Vanilla JavaScript:**
    - `IntersectionObserver` API for scroll animations and counters.
    - DOM Manipulation for dynamic team card generation.
    - Regular Expressions for email validation.
    - Event Listeners for navigation and form handling.

### Core Logic Snippet (Navigation Toggle):
```javascript
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}
```

### Core Logic Snippet (Team Generation):
```javascript
teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.className = 'team-card';
  // ... dynamic HTML injection ...
  teamGrid.appendChild(card);
});
```

---
**Developed by TechNova Group**
*ACSC 226 — Applied Computer Science, Chuka University*
