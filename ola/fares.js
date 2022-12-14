let $ = (selector) => document.querySelector(selector);
window.onload = function () {
  $('#SUBMIT').onclick = validate;
};

function validate() {
  let busterminal = $('#bust');
  let fullname = $('#fulln');
  let namepattern = /^[a-zA-z]{2,30}$/;
  //   console.dir(namepattern);

  if (busterminal.value == '') {
    busterminal.nextElementSibling.innerHTML = 'Please enter bus terminal';
  } else if (!namepattern.test(busterminal.value)) {
    busterminal.nextElementSibling.innerHTML =
      'Please enter bus terminal with letter only';
  } else {
    busterminal.nextElementSibling.innerHTML = 'valid bus terminal';
  }

    if (fullname.value == '') {
      fullname.nextElementSibling.innerHTML = 'Please enter fullname';
    } else if (!namepattern.test(fullname.value)) {
      fullname.nextElementSibling.innerHTML =
        'Please enter fullname with letter only';
    } else {
      fullname.nextElementSibling.innerHTML = 'valid fullname';
    }
}