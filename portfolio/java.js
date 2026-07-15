const roles = ['React', 'Django', 'PHP', 'Python', 'MySQL'];
const roleEl = document.getElementById('role-word');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    roleEl.style.opacity = 0;
    setTimeout(() => { roleEl.textContent = roles[i]; roleEl.style.opacity = 1; }, 250);
  }, 2200);
  roleEl.style.transition = 'opacity .25s ease';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .module').forEach(el => observer.observe(el));

document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

let lastY = window.scrollY;
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 200) navEl.style.transform = 'translateY(-100%)';
  else navEl.style.transform = 'translateY(0)';
  lastY = y;
});
