const hamburgerMenu = document.querySelector('.fa');
const main = document.querySelector('main');
hamburgerMenu.addEventListener('click', toggle);
main.addEventListener('click', close);

function toggle() {
  document.querySelector('.drawer').classList.toggle('open');
}

function close() {
  document.querySelector('.drawer').classList.remove('open');
}
