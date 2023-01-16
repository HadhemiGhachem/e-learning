'use strict';

const email1 = 'hadhemi.ghachem@gmail.com';
const pass1 = 'azerty';

const modalLogin = document.querySelector('.modalLogin');
const overlay = document.querySelector('.overlaay');
const btnCloseModal = document.querySelector('.close-modal');
const modalForget = document.querySelector('.modalForget');
const passwordbtn = document.querySelector('.passwordbtn');

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const openModal = function () {
  modalLogin.classList.remove('hidden');
  overlay.classList.remove('hidden');
  disableScroll();
};

const closeModal = function () {
  modalLogin.classList.add('hidden');
  overlay.classList.add('hidden');
  enableScroll();
};
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalLogin.classList.contains('hidden')) {
    closeModal();
  }
});

const openModalF = function () {
  modalForget.classList.remove('hidden');
  overlay.classList.remove('hidden');
  disableScroll();
};

const closeModalF = function () {
  modalForget.classList.add('hidden');
  overlay.classList.add('hidden');
  enableScroll();
};
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalForget.classList.contains('hidden')) {
    closeModal();
  }
});

const loogin = document.querySelector('.loginbtn');

loogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (document.querySelector('.email').value != email1 && document.querySelector('.passwoord').value != pass1) {
    document.querySelector('.errorAll').innerHTML = 'your email and password are incorret';
  } else if (document.querySelector('.email').value == email1 && ('passwor', document.querySelector('.passwoord').value != pass1)) {
    document.querySelector('.errorP').innerHTML = 'your password  is incorret';
  } else if (document.querySelector('.email').value != email1 && ('passwor', document.querySelector('.passwoord').value == pass1)) {
    document.querySelector('.errorE').innerHTML = 'your email is incorret';
  } else {
    openModal();

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  }
});
document.querySelector('.email').addEventListener('click', () => {
  document.querySelector('.errorAll').innerHTML = '';
  document.querySelector('.errorP').innerHTML = '';
  document.querySelector('.errorE').innerHTML = '';
});
document.querySelector('.passwoord').addEventListener('click', () => {
  document.querySelector('.errorAll').innerHTML = '';
  document.querySelector('.errorP').innerHTML = '';
  document.querySelector('.errorE').innerHTML = '';
});
passwordbtn.addEventListener('click', (event) => {
  event.preventDefault();

  openModalF();

  btnCloseModal.addEventListener('click', closeModalF);
  overlay.addEventListener('click', closeModalF);
});
