const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value || 'Not decided';
  const people = document.getElementById('people').value;
  const message = `Hi PahadGo!%0AName: ${encodeURIComponent(name)}%0ADestination: ${encodeURIComponent(destination)}%0ATravel date: ${encodeURIComponent(date)}%0ATravellers: ${encodeURIComponent(people)}%0AMujhe tour package ki details chahiye.`;
  window.open(`https://wa.me/916230017900?text=${message}`, '_blank', 'noopener');
});