let $ = (selector) => document.querySelector(selector);
window.onload = function () {
  $('#SUBMIT').onclick = validate;
};

function validate() {
  let firstname = $('#fname');
  let lastname = $('#lname');
  let namepattern = /^[a-zA-z]{2,30}$/;
  //   console.dir(namepattern);

  if (firstname.value == '') {
    firstname.nextElementSibling.innerHTML = 'Please enter first name';
  } else if (!namepattern.test(firstname.value)) {
    firstname.nextElementSibling.innerHTML =
      'Please enter first name with letter only';
  } else {
    firstname.nextElementSibling.innerHTML = 'valid first name';
  }

    if (lastname.value == '') {
      lastname.nextElementSibling.innerHTML = 'Please enter lastname';
    } else if (!namepattern.test(lastname.value)) {
      lastname.nextElementSibling.innerHTML =
        'Please enter lastname with letter only';
    } else {
      lastname.nextElementSibling.innerHTML = 'valid lastname';
    }
}