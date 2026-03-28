// ============================================
//  TechNova — ACSC 226 Group Assignment
//  script.js — Main JavaScript File
// ============================================

// ---- 1. MOBILE NAV TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- 2. COUNTER ANIMATION (Home page stats) ----
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1500;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 16);
}

// Use IntersectionObserver so counters fire when scrolled into view
const counters = document.querySelectorAll('.stat-num');
if (counters.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ---- 3. SCROLL REVEAL ANIMATION ----
// Cards and sections fade in as they scroll into view
const revealElements = document.querySelectorAll(
  '.feature-card, .service-card, .team-card, .tech-item, .mission-item'
);

if (revealElements.length > 0) {
  // Set initial state
  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ---- 4. CONTACT FORM VALIDATION ----
function validateForm() {
  let valid = true;

  // Helper: clear all errors first
  ['name', 'email', 'subject', 'message'].forEach(id => {
    const input = document.getElementById(id);
    const error = document.getElementById(id + 'Error');
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
  });

  // Validate Name
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name && name.value.trim().length < 2) {
    nameError.textContent = 'Please enter your full name (at least 2 characters).';
    name.classList.add('error');
    valid = false;
  }

  // Validate Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    email.classList.add('error');
    valid = false;
  }

  // Validate Subject
  const subject = document.getElementById('subject');
  const subjectError = document.getElementById('subjectError');
  if (subject && subject.value.trim().length < 3) {
    subjectError.textContent = 'Please enter a subject.';
    subject.classList.add('error');
    valid = false;
  }

  // Validate Message
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message && message.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    message.classList.add('error');
    valid = false;
  }

  // If all valid — show success message
  if (valid) {
    const successMsg = document.getElementById('successMsg');
    const submitBtn  = document.getElementById('submitBtn');
    if (successMsg) successMsg.style.display = 'block';
    if (submitBtn)  submitBtn.disabled = true;

    // Clear the form after 3 seconds
    setTimeout(() => {
      ['name', 'email', 'subject', 'message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      if (successMsg) successMsg.style.display = 'none';
      if (submitBtn)  submitBtn.disabled = false;
    }, 3000);
  }
}

// ---- 5. NAVBAR SCROLL EFFECT (Hide on scroll down, show on up) ----
let lastScrollY = window.scrollY;
const navbarElement = document.querySelector('.navbar');
const navLinksContainer = document.getElementById('navLinks');

if (navbarElement) {
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Apply shadow logic
    if (currentScrollY > 50) {
      navbarElement.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
      navbarElement.style.boxShadow = 'none';
    }

    // Apply hide/show logic - only if mobile menu is NOT open
    const isMenuOpen = navLinksContainer && navLinksContainer.classList.contains('open');

    if (!isMenuOpen && currentScrollY > lastScrollY && currentScrollY > 120) {
      // Scrolling down and past threshold (e.g. 120px)
      navbarElement.classList.add('navbar-hidden');
    } else {
      // Scrolling up
      navbarElement.classList.remove('navbar-hidden');
    }

    lastScrollY = currentScrollY;
  });
}
