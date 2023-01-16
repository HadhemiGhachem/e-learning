var First = document.getElementById('First');
First.onblur = vide3;

function vide3() {
  if (First.value == '') {
    First.style.borderColor = ' red ';
  } else {
    First.style.borderColor = ' green ';
  }
}

var Last = document.getElementById('Last');
Last.onblur = vide4;
function vide4() {
  if (Last.value == '') {
    Last.style.borderColor = ' red ';
  } else {
    Last.style.borderColor = ' green ';
  }
}

var login = document.getElementById('login');
login.onblur = vide1;
function vide1() {
  if (login.value.slice(-10).toString() == '@gmail.com') {
    login.style.borderColor = ' green ';
  } else {
    login.style.borderColor = ' red ';
  }
}

var password = document.getElementById('password');
var passwordC = document.getElementById('passwordC');
var condOne = document.getElementById('condOne');
var condTwo = document.getElementById('condTwo');
var condThree = document.getElementById('condThree');
var cond4 = document.getElementById('condFour');

password.onkeyup = check1;

function check1() {
  if (password.value.length >= 6) {
    condOne.style.color = 'green';
  } else {
    condOne.style.color = 'red';
  }
  for (let i = 0; i < password.value.length; i = i + 1) {
    password.value = password.value.toLowerCase();
    var test = 0;
    if (password.value[i] >= 'a' && password.value[i] <= 'z') {
      test = 1;
      break;
    }
  }
  if (test == 1) {
    condTwo.style.color = 'green';
  } else {
    condTwo.style.color = 'red';
  }
  for (let i = 0; i < password.value.length; i = i + 1) {
    var test = 0;
    if (password.value[i] >= 0 && password.value[i] <= 9) {
      test = 1;
      break;
    }
  }
  if (test == 1) {
    condThree.style.color = 'green';
  } else {
    condThree.style.color = 'red';
  }
}

passwordC.onkeyup = check2;
function check2() {
  if (password.value == passwordC.value) {
    cond4.style.color = 'green';
  } else {
    cond4.style.color = 'red';
  }
}
