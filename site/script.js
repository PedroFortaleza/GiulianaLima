const number = '5519999232201';
const generalMessage = 'Olá, Dra. Giuliana! Conheci seus atendimentos pelo site e gostaria de saber mais sobre a agenda.';
const serviceMessages = [
  'Olá, Dra. Giuliana! Gostaria de saber mais sobre psicoterapia e a disponibilidade de horários.',
  'Olá, Dra. Giuliana! Gostaria de saber mais sobre atendimento em psicanálise e a disponibilidade de horários.',
  'Olá, Dra. Giuliana! Gostaria de saber mais sobre supervisão clínica psicanalítica.'
];
document.querySelectorAll('.wa-link').forEach(link => {
  link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(generalMessage);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('.card-action').forEach((link, index) => {
  link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(serviceMessages[index]);
});

const header = document.querySelector('.site-header');
const menu = document.querySelector('.main-nav');
const menuButton = document.querySelector('.menu-button');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 15);
  document.body.classList.toggle('show-floating', window.scrollY > 650);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
const closeMenu = () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
};
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth >= 760) closeMenu(); });

if (document.documentElement.classList.contains('first-visit')) {
  window.setTimeout(() => {
    document.documentElement.classList.add('intro-done');
    try { sessionStorage.setItem('giuliana-intro-v1', '1'); } catch (error) { /* visual only */ }
  }, 1000);
  window.setTimeout(() => document.documentElement.classList.remove('first-visit'), 1600);
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
