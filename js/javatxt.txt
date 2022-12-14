let $ = (selector) => document.querySelector(selector);
window.onload = function () {
  $('#go').onclick = validate;
};

function validate() {
  let from = $('#travelfrom');
  let to = $('#travelto');
  let full = $('#fname');
  let namepattern = /^[a-zA-z]{2,30}$/;
  //   console.dir(namepattern);

  if (from.value == '') {
    from.nextElementSibling.innerHTML = 'Please enter from';
  } else if (!namepattern.test(from.value)) {
    from.nextElementSibling.innerHTML =
      'Please enter travel from with letter only';
  } else {
    from.nextElementSibling.innerHTML = 'valid travel from';
  }

    if (to.value == '') {
      to.nextElementSibling.innerHTML = 'Please enter travel to';
    } else if (!namepattern.test(to.value)) {
      to.nextElementSibling.innerHTML =
        'Please enter travel to with letter only';
    } else {
      to.nextElementSibling.innerHTML = 'valid travel to';
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
