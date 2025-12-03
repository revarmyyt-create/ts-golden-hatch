/* ========= NAVIGATION MENU TOGGLE (MOBILE) ========= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/* ========= ACTIVE LINK HIGHLIGHT ========= */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const sectionHeight = sec.offsetHeight,
          sectionTop = sec.offsetTop - 80,
          sectionId = sec.getAttribute('id'),
          link = document.querySelector('.nav__list a[href*=' + sectionId + ']');

    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ========= SCROLL UP BUTTON ========= */
const scrollUpBtn = document.getElementById('scroll-up');

function scrollUp() {
  if (window.scrollY >= 300) {
    scrollUpBtn.classList.add('show-scroll');
  } else {
    scrollUpBtn.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/* ========= CONTACT FORM HANDLING ========= */
const contactForm = document.getElementById('contactForm'),
      formMsg = document.getElementById('formMsg'),
      clearBtn = document.getElementById('clearBtn');

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    contactForm.reset();
    formMsg.textContent = '';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim(),
          phone = contactForm.phone.value.trim(),
          email = contactForm.email.value.trim(),
          message = contactForm.message.value.trim();

    if (!name || !phone || !email || !message) {
      formMsg.style.color = 'var(--accent-2)';
      formMsg.textContent = 'Please complete all fields before sending.';
      return;
    }

    // simulate sending message
    formMsg.style.color = 'var(--accent)';
    formMsg.textContent = 'Thanks! Your message has been received. We will contact you within 24 hours.';

    setTimeout(() => contactForm.reset(), 600);
  });
}

/* ========= UTILITIES ========= */
// fill current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ========= SIMPLE REVEAL ANIMATION ========= */
window.addEventListener('load', () => {
  const revealElements = document.querySelectorAll(
    '.home__title, .home__subtitle, .home__description, .home__actions, .home__features, .product__card, .about__img, .about__content, .gallery__img, .contact__form'
  );

  revealElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});
