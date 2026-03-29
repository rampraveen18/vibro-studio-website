/* ===== Navbar Scroll Effect ===== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== Mobile Menu Toggle ===== */
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close menu when a link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ===== Scroll Fade-In Animations ===== */
const fadeEls = document.querySelectorAll(
  '.service-card, .portfolio-card, .testimonial-card, .about-float-card, .value-item, .contact-item'
);

const STAGGER_GROUP_SIZE = 3;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up', 'visible');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.add('fade-up');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % STAGGER_GROUP_SIZE) * 0.1}s`;
  observer.observe(el);
});

/* ===== Portfolio Filter ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    portfolioCards.forEach(card => {
      if (filter === 'all' || card.dataset.genre === filter) {
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (card.style.opacity === '0') {
            card.style.display = 'none';
          }
        }, 300);
      }
    });
  });
});

/* ===== Contact Form ===== */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('.btn-primary');
  const originalHTML = btn.innerHTML;

  btn.innerHTML = `
    <svg class="btn-icon spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
    <span>Sending...</span>
  `;
  btn.disabled = true;

  const style = document.createElement('style');
  style.textContent = `.spin { animation: spin 1s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(style);

  setTimeout(() => {
    btn.innerHTML = `
      <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Message Sent!</span>
    `;
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  }, 1500);
});

/* ===== Smooth Active Nav Links ===== */
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        allNavLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--text-primary)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => navObserver.observe(section));
