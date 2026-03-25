import './style.css'

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Icon toggle
  const icon = mobileBtn.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = mobileBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// Visualizer Logic
const visualizerImg = document.getElementById('visualizer-img');
const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    toggleBtns.forEach(b => b.classList.remove('active'));
    // Add active to clicked
    btn.classList.add('active');

    const mode = btn.getAttribute('data-mode');
    if (mode === 'night') {
      visualizerImg.style.filter = 'brightness(0.4)';
    } else {
      visualizerImg.style.filter = 'brightness(1)';
    }
  });
});
