// ============================================================
//  PORTFOLIO — script.js
//  3 simple features:
//    1. Navbar background appears on scroll
//    2. Hamburger mobile menu open/close
//    3. Contact form validation
// ============================================================


// ---- 1. NAVBAR SCROLL EFFECT ----
// When the user scrolls down 50px, add class "scrolled" to the navbar.
// That class turns on the white background in CSS.

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ---- 2. HAMBURGER MENU ----
// Clicking the button toggles the nav open and closed on mobile.

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Also close the menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ---- 3. CONTACT FORM VALIDATION ----
// Checks that name, email, and message are filled in correctly.
// Shows red error messages under each field if not.
// Shows a green success message if everything looks good.

const form        = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');
const successMsg  = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  // Stop the form from actually submitting (no backend yet)
  e.preventDefault();

  // --- Grab the values ---
  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  // --- Clear any old error messages first ---
  clearError('name');
  clearError('email');
  clearError('message');
  successMsg.textContent = '';

  // --- Check each field ---
  var isValid = true;

  if (name === '') {
    showError('name', 'Please enter your name.');
    isValid = false;
  }

  if (email === '') {
    showError('email', 'Please enter your email.');
    isValid = false;
  } else if (!validEmail(email)) {
    showError('email', 'Please enter a valid email address.');
    isValid = false;
  }

  if (message === '') {
    showError('message', 'Please write a message.');
    isValid = false;
  }

  // --- If all good, send via Formspree ---
  if (isValid) {
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        successMsg.textContent = '✓ Message sent! I will get back to you soon.';
        form.reset();
      } else {
        successMsg.textContent = 'Something went wrong. Please email me at KaziAnwar0112@gmail.com';
        successMsg.style.color = '#d94f4f';
      }
      submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      submitBtn.disabled = false;
    });
  }
});


// --- Helper: show an error under a field ---
function showError(fieldId, message) {
  var field = document.getElementById(fieldId);
  var error = document.getElementById(fieldId + '-error');
  field.classList.add('invalid');
  error.textContent = message;
}

// --- Helper: clear the error under a field ---
function clearError(fieldId) {
  var field = document.getElementById(fieldId);
  var error = document.getElementById(fieldId + '-error');
  field.classList.remove('invalid');
  error.textContent = '';
}

// --- Helper: basic email format check ---
function validEmail(email) {
  return email.indexOf('@') > 0 && email.indexOf('.') > 0;
}