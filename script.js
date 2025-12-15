// ===============================
// 1️⃣ Mobile Menu Toggle
// ===============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// ===============================
// 2️⃣ Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// ===============================
// 3️⃣ Hero Button Hover Effect
// ===============================
const heroBtn = document.querySelector('.hero .btn');

if (heroBtn) {
  heroBtn.addEventListener('mouseenter', () => {
    heroBtn.classList.add('btn-glow');
  });

  heroBtn.addEventListener('mouseleave', () => {
    heroBtn.classList.remove('btn-glow');
  });
}

// ===============================
// 4️⃣ Portfolio Card Modal
// ===============================
const cards = document.querySelectorAll('.portfolio .card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.onclick = e => {
      if (e.target === modal) modal.remove();
    };
  });
});

// ===============================
// 5️⃣ Scroll Reveal (Intersection Observer)
// ===============================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ===============================
// 6️⃣ Scroll Progress Bar
// ===============================
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight - window.innerHeight;

  document.querySelector('.scroll-progress').style.width =
    (scrollTop / height) * 100 + '%';
});
