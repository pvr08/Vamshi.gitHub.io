let $ = (selector) => document.querySelector(selector);
window.onload = function () {
  $('#SEARCH').onclick = validate;
};

function validate() {
  let travellingfrom = $('#travelf');
  let travellingto = $('#travelt');
  let namepattern = /^[a-zA-z]{2,30}$/;
  //   console.dir(namepattern);

  if (travellingfrom.value == '') {
    travellingfrom.nextElementSibling.innerHTML = 'Please enter travelling from';
  } else if (!namepattern.test(travellingfrom.value)) {
    travellingfrom.nextElementSibling.innerHTML =
      'Please enter travelling from with letter only';
  } else {
    travellingfrom.nextElementSibling.innerHTML = 'valid travelling from';
  }

    if (travellingto.value == '') {
      travellingto.nextElementSibling.innerHTML = 'Please enter travelling to';
    } else if (!namepattern.test(travellingto.value)) {
      travellingto.nextElementSibling.innerHTML =
        'Please enter travelling to with letter only';
    } else {
      travellingto.nextElementSibling.innerHTML = 'valid travelling to';
    }
}